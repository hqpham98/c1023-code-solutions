SELECT  COUNT("cities"),
        "countries"."name" AS "Country"
FROM "countries"
JOIN "cities" USING ("countryId")
GROUP BY "Country";
