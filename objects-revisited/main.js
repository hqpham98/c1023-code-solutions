const business = {
  opens: '9:00AM',
  closes: '5:00PM',
  totalEmployees: 4,
  daysOpen: ['M', 'Tu', 'W', 'Th', 'F'],
  employees: {
    chris: {
      position: 'Chef',
      daysOfWeekWorking: ['M', 'Tu', 'W', 'Th', 'F'],
    },
    tai: {
      position: 'Valet',
      daysOfWeekWorking: ['M', 'W', 'F'],
    },
    khanh: {
      position: 'Security',
      daysOfWeekWorking: ['Tu', 'Th'],
    },
    dan: {
      position: 'Janitor',
      daysOfWeekWorking: ['M', 'Tu', 'W', 'Th', 'F'],
    },
  },
};

function addWeekends() {
  for (const employ in business.employees) {
    if (!business.employees[employ].daysOfWeekWorking.includes('S')) {
      business.employees[employ].daysOfWeekWorking.push('S');
    }
    if (!business.employees[employ].daysOfWeekWorking.includes('Su')) {
      business.employees[employ].daysOfWeekWorking.push('Su');
    }
  }
  business.daysOpen.push('S', 'Su');
}

async function addEmployees() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  for (let i = 0; i < 4; i++) {
    const numWeekdays = Math.ceil(Math.random() * 5);
    const days = [];
    for (let n = 0; n < numWeekdays; n++) {
      let day = business.daysOpen.slice(0, 5)[
        Math.floor(Math.random() * numWeekdays)
      ];
      while (days.includes(day)) {
        day = business.daysOpen.slice(0, 5)[
          Math.floor(Math.random() * numWeekdays)
        ];
      }
      days.push(day);
    }
    days.push('S', 'Su');
    business.employees[users[i].name] = {
      position: `Clown ${users[i].id}`,
      daysOfWeekWorking: days,
      fullTime: days.length >= 5,
    };
  }
  business.totalEmployees += 4;
}

function deleteEmployee(employeeName) {
  delete business.employees[employeeName];
  business.totalEmployees++;
}

document.addEventListener('DOMContentLoaded', () => {
  addWeekends();
  for (const employ in business.employees) {
    business.employees[employ].fullTime =
      business.employees[employ].daysOfWeekWorking.length;
  }
  addEmployees();
  deleteEmployee('chris');
  console.log('business', business);
});
