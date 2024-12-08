---
sidebar_position: 4
title: "Error - MDM Terms of Use Misconfigured"
description: "Troubleshooting guide for Intune Windows enrollment error when MDM Terms of Use endpoint is misconfigured"
---

# Error: MDM Terms of Use Misconfigured

:::danger Error Message
Something went wrong. Looks like we can't connect to the URL for your organization's MDM terms of use. Try again, or contact your system administrator with the problem information from this page.
:::

## Description

:::info
This error occurs when there are issues with the MDM Terms of Use endpoint configuration or licensing. The problem typically arises in environments using both MDM for Microsoft 365 and Intune, or when the MDM terms and conditions URL in Microsoft Entra ID is missing or incorrect.
:::

## Common Causes

<div class="card-container">
<div class="cause-card">

### 📄 Terms of Use Configuration
Configuration issues often stem from incorrect or missing MDM terms settings. Terms of Use URL might be blank or incorrect. Default MDM URLs might be misconfigured. Multiple MDM solutions could cause configuration conflicts. Understanding proper Terms of Use configuration is crucial for enrollment success.

</div>
<div class="cause-card">

### 🔑 Licensing Requirements
License-related complications can trigger Terms of Use errors. User might lack required Intune or Office 365 license. License conflicts might exist between multiple MDM solutions. License assignment might be incomplete or invalid. These licensing factors require verification and correction.

</div>
</div>

## Resolution Steps

<div class="steps-container">

### 1️⃣ License Verification
Begin by checking user licensing status:
1. Access Microsoft 365 Admin Center
2. Navigate to Users > Active Users
3. Select affected user
4. Verify Intune or Microsoft 365 license assignment
5. Assign missing licenses if needed

### 2️⃣ Terms of Use URL Configuration
Correct the MDM Terms of Use URL:
1. Sign in to Azure portal
2. Navigate to Microsoft Entra ID
3. Select Mobility (MDM and MAM)
4. Click Microsoft Intune
5. Select "Restore default MDM URLs"
6. Verify Terms of Use URL is set to:
   `https://portal.manage.microsoft.com/TermsofUse.aspx`
7. Save changes

### 3️⃣ Configuration Validation
After making changes:
1. Allow time for changes to propagate
2. Verify URL configuration is saved
3. Test device enrollment
4. Monitor for successful completion

</div>

## Best Practices

<div class="card-container">
<div class="practice-card">

### 👨‍💻 For IT Administrators
Effective MDM configuration requires attention to both licensing and URL settings. Implement comprehensive configuration monitoring. Maintain documentation of required settings. Develop clear procedures for configuration verification. Create systematic approaches to troubleshooting. Consider implementing automated configuration monitoring.

</div>
<div class="practice-card">

### 🔄 For Configuration Management
Successful enrollment requires proper MDM configuration maintenance. Develop clear processes for configuration verification. Maintain accurate documentation of URL requirements. Implement thorough testing procedures for enrollment. Create comprehensive documentation of configuration steps.

</div>
</div>

## Troubleshooting Tips

:::tip Configuration Management
When addressing Terms of Use issues, focus on both licensing and URL configuration. Verify license assignments first. Check URL configuration carefully. Test enrollment after changes. Monitor for configuration consistency.
:::

:::warning Important Considerations
Configuration management involves multiple factors. Changes may need propagation time. Multiple MDM solutions require careful configuration. Consider license requirements. Monitor enrollment success rates.
:::

## Additional Notes

<div class="notes-container">

💡 Check both license and URL

🔄 Allow propagation time

⚠️ Verify configuration saves

📄 Document URL settings

</div>

## Related Links

<div class="links-container">

[![Intune Docs](https://img.shields.io/badge/Intune-MDM_Configuration-0078D4?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-methods)

[![Azure Guide](https://img.shields.io/badge/Azure-MDM_Settings-black?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/azure/active-directory/devices/device-management-azure-portal)

[![License Guide](https://img.shields.io/badge/Microsoft-License_Management-blue?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/microsoft-365/admin/manage/assign-licenses-to-users)

</div>

## Configuration Guide

1. **License Assessment**
   - Check current licenses
   - Review requirements
   - Assign if needed
   - Verify activation

2. **URL Configuration**
   - Access Azure portal
   - Navigate to MDM settings
   - Restore default URLs
   - Verify and save

3. **Validation Process**
   - Allow propagation
   - Test configuration
   - Monitor enrollment
   - Document results

:::tip Best Practice
Always verify both licensing and URL configuration when troubleshooting MDM Terms of Use issues, ensuring proper documentation of any changes made.
::: 