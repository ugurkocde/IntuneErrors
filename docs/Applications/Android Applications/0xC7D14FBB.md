---
sidebar_position: 3
title: "Error 0xC7D14FBB - Installation Process Restart"
description: "Troubleshooting guide for Intune Android app installation error 0xC7D14FBB"
---

# Error 0xC7D14FBB: Installation Process Restart

:::danger Error Message
The app installation was canceled because the process was restarted during installation.
:::

## Error Details

<div class="error-details">

| Property | Value |
|----------|-------|
| Error Code (Hex) | `0xC7D14FBB` |
| Error Code (Dec) | `-942583877` |

</div>

## Description

:::info
This error occurs when the device undergoes a restart or reboot while an APK installation is in progress. The interruption causes the installation process to be canceled, requiring a new installation attempt.
:::

## Common Causes

<div class="card-container">
<div class="cause-card">

### 🔄 Device Restart
- Manual device reboot during installation
- Automatic system updates triggering restart
- Device battery depletion causing shutdown

</div>
<div class="cause-card">

### ⚠️ System Interruptions
- Force restart by system
- Critical system updates
- Device memory management processes

</div>
</div>

## Impact

:::note
- Affects both Device Administrator (DA) and Samsung KNOX devices
- Installation process needs to be restarted completely
:::

### Notification Behavior
- ✅ **Available apps:** Notification can be dismissed
- ❌ **Required apps:** Notification cannot be dismissed

## Resolution Steps

<div class="steps-container">

### 1️⃣ Immediate Actions
- Click the retry notification to restart installation
- Ensure device has sufficient battery charge
- Verify no pending system updates

### 2️⃣ Prevention Measures
- Postpone any planned device restarts
- Connect device to power source during installation
- Disable automatic updates temporarily

### 3️⃣ For Required Apps
- Prioritize installation before other system activities
- Complete installation during maintenance windows
- Monitor installation status in Intune portal

</div>

## Best Practices

<div class="card-container">
<div class="practice-card">

### 👨‍💻 For IT Administrators
- Schedule deployments outside of update windows
- Monitor deployment success rates
- Configure appropriate retry policies
- Consider maintenance windows for required apps

</div>
<div class="practice-card">

### 👤 For End Users
- Avoid device restarts during app installations
- Ensure device is charged or connected to power
- Complete installations promptly when prompted

</div>
</div>

## Troubleshooting Tips

:::tip When Installation Fails
1. Check device event logs for restart cause
2. Verify system stability
3. Clear device cache
4. Attempt manual installation through Company Portal
:::

:::warning For Recurring Issues
- Review system update settings
- Check for conflicting maintenance policies
- Verify device health status
- Document restart patterns
:::

## Additional Notes

<div class="notes-container">

💡 Installation must be restarted from the beginning

🔔 Retry notifications are provided automatically

⚠️ Required apps will persist until successful installation

📱 Both DA and KNOX devices handle this error similarly

</div>

## Related Links

<div class="links-container">

[![Intune Docs](https://img.shields.io/badge/Intune-App_Installation_Process-0078D4?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/apps/apps-deployment)

[![Troubleshooting](https://img.shields.io/badge/Intune-Installation_Failures-red?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/apps/troubleshoot-app-install)

[![Restart Policies](https://img.shields.io/badge/Intune-Restart_Policies-green?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/configuration/device-restart-overview)

</div> 