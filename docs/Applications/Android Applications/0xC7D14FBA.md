---
sidebar_position: 2
title: "Error 0xC7D14FBA - APK File Deletion"
description: "Troubleshooting guide for Intune Android app installation error 0xC7D14FBA"
---

# Error 0xC7D14FBA: APK File Deletion

:::danger Error Message
The app installation was canceled because the installation (APK) file was deleted after download, but before installation.
:::

## Error Details

<div class="error-details">

| Property | Value |
|----------|-------|
| Error Code (Hex) | `0xC7D14FBA` |
| Error Code (Dec) | `-942583878` |

</div>

## Description

:::info
This error occurs when the APK file is successfully downloaded but gets deleted from the device before the installation process can complete. This typically happens when there's a significant time gap between the download and installation attempts.
:::

## Common Causes

<div class="card-container">
<div class="cause-card">

### ⏱️ Timing Issues
- User postponed installation after download
- Large time gap between download and install
- Canceled initial install and retried later

</div>
<div class="cause-card">

### 💾 Storage Management
- Automatic cleanup of temporary files
- Low storage cleanup processes
- Third-party cleanup apps intervention

</div>
</div>

## Impact

:::note
- Different behavior between DA and KNOX scenarios
- Requires complete redownload of APK file
:::

### Device Scenarios
- 📱 **Device Administrator (DA):**
  - Requires user interaction
  - More likely to encounter this error
- 🔒 **Samsung KNOX:**
  - Silent installation possible
  - Less prone to this error

### Notification Behavior
- ✅ **Available apps:** Notification can be dismissed
- ❌ **Required apps:** Notification cannot be dismissed

## Resolution Steps

<div class="steps-container">

### 1️⃣ Immediate Action
- Click retry notification when it appears
- Complete installation promptly after download
- Ensure stable internet connection

### 2️⃣ Storage Management
- Check available device storage
- Disable automatic cleanup apps
- Clear space if device is low on storage

### 3️⃣ Deployment Settings
- Consider using KNOX for Samsung devices
- Review app deployment configuration
- Verify installation deadline settings

</div>

## Best Practices

<div class="card-container">
<div class="practice-card">

### 👨‍💻 For IT Administrators
- Configure appropriate installation deadlines
- Monitor deployment success rates
- Use KNOX deployment when possible
- Set realistic installation windows

</div>
<div class="practice-card">

### 👤 For End Users
- Install apps promptly after download
- Avoid canceling installations
- Maintain adequate device storage
- Complete installations when prompted

</div>
</div>

## Troubleshooting Tips

:::tip When Installation Fails
1. Check device storage space
2. Verify internet connectivity
3. Clear device cache
4. Attempt installation through Company Portal
:::

:::warning For Persistent Issues
- Log a new download attempt
- Check for device restrictions
- Verify app compatibility
- Contact IT support if issues persist
:::

## Additional Notes

<div class="notes-container">

💡 Installation requires complete redownload

🔄 Retry notifications available for new attempt

⚠️ Required apps persist until installed

📱 KNOX devices handle installation silently

</div>

## Related Links

<div class="links-container">

[![Intune Docs](https://img.shields.io/badge/Intune-App_Installation_Process-0078D4?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/apps/apps-deployment)

[![Android Enterprise](https://img.shields.io/badge/Android-Enterprise_Management-green?style=for-the-badge&logo=android)](https://docs.microsoft.com/en-us/mem/intune/enrollment/android-deployment-scenarios)

[![Troubleshooting](https://img.shields.io/badge/Intune-Installation_Failures-red?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/apps/troubleshoot-app-install)

</div> 