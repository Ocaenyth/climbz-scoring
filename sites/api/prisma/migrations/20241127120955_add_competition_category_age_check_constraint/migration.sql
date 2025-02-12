ALTER TABLE "CompetitionCategory"
    ADD CONSTRAINT "min_age_lower_than_max_age" CHECK ("minAge" < "maxAge")