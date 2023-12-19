SELECT  SUM("payments"."amount") as "totalSpent",
        "customers"."firstName",
        "customers"."lastName"
FROM "customers"
JOIN "payments" USING ("customerId")
GROUP BY "customers"."customerId"
ORDER BY "totalSpent" DESC;
