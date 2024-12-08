---
sidebar_position: 17
title: "Error - Enrollment Status Page Timeout"
description: "Troubleshooting guide for Intune Windows Autopilot Enrollment Status Page (ESP) timeout before sign-in"
---

# Error: Enrollment Status Page Timeout

:::danger Error Message
The Enrollment Status Page times out before the sign-in screen can load.
:::

## Description

:::info
This error occurs when the Enrollment Status Page (ESP) cannot complete within the allocated time, preventing access to the sign-in screen. The issue typically appears when tracking Microsoft Store for Business apps in combination with specific Conditional Access policies requiring device compliance.
:::

## Common Causes

<div class="card-container">
<div class="cause-card">

### 🔄 Policy Configuration Conflict
Timeout issues often stem from policy interactions. Conditional Access requires device compliance. Policy applies to all cloud apps and Windows. Compliance state cannot be determined pre-login. Understanding policy dependencies is crucial for successful enrollment.

</div>
<div class="cause-card">

### 📱 Store App Licensing
Licensing-related complications can cause delays. Online license verification required. Store connectivity needed for compliance. License checks extend enrollment time. These licensing factors require systematic resolution approach.

</div>
</div>

## Resolution Steps

<div class="steps-container">

### 1️⃣ Option A: Adjust Compliance Targeting
Modify compliance policy targeting:
1. Access Intune admin center
2. Navigate to Devices > Compliance policies
3. Select relevant policies
4. Modify targeting to devices
5. Ensure compliance evaluation pre-login
6. Save changes

### 2️⃣ Option B: Configure Offline Licensing
Implement offline app licensing:
1. Review Store app deployment
2. Configure offline licensing
3. Remove online license dependencies
4. Update app deployment settings
5. Test enrollment process

### 3️⃣ Verification
After implementing changes:
1. Monitor ESP progress
2. Check completion times
3. Verify sign-in access
4. Document successful configurations

</div>

## Best Practices

<div class="card-container">
<div class="practice-card">

### 👨‍💻 For IT Administrators
Effective enrollment requires attention to policy interactions. Implement comprehensive timing monitoring. Maintain documentation of dependencies. Develop clear procedures for troubleshooting. Create systematic approaches to enrollment verification. Consider implementing automated progress monitoring.

</div>
<div class="practice-card">

### 🔄 For Configuration Management
Successful enrollment requires proper timing management. Develop clear processes for policy configuration. Maintain accurate documentation of dependencies. Implement thorough testing procedures for enrollment. Create comprehensive documentation of configuration steps.

</div>
</div>

## Troubleshooting Tips

:::tip Configuration Management
When addressing ESP timeouts, focus on policy dependencies. Check compliance requirements carefully. Verify license configurations. Test enrollment timing. Monitor for successful completion.
:::

:::warning Important Considerations
Policy configuration involves several factors. Compliance timing affects enrollment. License verification impacts completion. Consider dependency requirements. Monitor enrollment progress carefully.
:::

## Additional Notes

<div class="notes-container">

💡 Check policy dependencies

🔄 Consider offline licensing

⚠️ Monitor enrollment timing

📱 Verify compliance settings

</div>

## Related Links

<div class="links-container">

[![Intune Docs](https://img.shields.io/badge/Intune-ESP_Configuration-0078D4?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/enrollment/windows-enrollment-status)

[![Store Guide](https://img.shields.io/badge/Windows-Store_Apps-black?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/microsoft-store/distribute-offline-apps)

[![Policy Guide](https://img.shields.io/badge/Intune-Conditional_Access-blue?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/protect/conditional-access)

</div>

## Configuration Guide

1. **Policy Assessment**
   - Review current policies
   - Check dependencies
   - Verify timing
   - Document configuration

2. **License Configuration**
   - Evaluate app licensing
   - Configure offline access
   - Update deployments
   - Test changes

3. **Enrollment Testing**
   - Monitor ESP progress
   - Track completion time
   - Verify access
   - Document results

:::tip Best Practice
Always consider policy interactions and licensing requirements when configuring ESP to prevent timeout issues during enrollment.
:::
