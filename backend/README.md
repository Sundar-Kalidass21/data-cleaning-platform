# Data Cleaning Platform

Single repository with two independently deployable services:

- Control Plane: decision-making, orchestration, security
- Data Plane: execution, heavy data processing

No shared code. Services communicate only via SQS.
