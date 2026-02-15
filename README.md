Inventory Sync & Out-Of-Stock Alert Automation System
Project Overview

This project automates inventory monitoring across multiple warehouse platforms and sends daily Out-Of-Stock (OOS) alerts to managers.

The system consolidates inventory from different sources into a single master sheet and removes the need for manual checking.

Business Problem

The operations team had to manually check inventory across multiple platforms daily:

Vinculum

Uniware

Internal stock records

This process was time-consuming and error-prone and often caused delayed stock replenishment.

Solution Implemented

I built an automated monitoring system using Google Sheets and Apps Script.

The system:

Syncs inventory from multiple sources using IMPORTRANGE

Matches SKU using lookup logic

Calculates good inventory using conditional formulas

Identifies low stock items

Automatically generates OOS report

Sends daily email alerts to managers

Workflow

Inventory Platforms → Master Sheet → Logic Check → OOS Report → Email Alert

Tools & Technologies

Google Sheets

Excel

Apps Script (JavaScript)

Data Cleaning

Automation Logic

Inventory Reconciliation

Automation Logic

OOS Condition:
If Internal Stock < 50 AND External Stock < 50 → Trigger Alert

Impact

Reduced manual monitoring effort

Faster replenishment decisions

Improved reporting accuracy

Automated daily notifications to stakeholders

Files Included

data/ → Sample inventory datasets
scripts/ → Automation scripts
oos_report.csv → Output generated report
