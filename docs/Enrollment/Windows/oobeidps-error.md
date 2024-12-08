---
sidebar_position: 12
title: "Error - OOBEIDPS Network Access Blocked"
description: "Troubleshooting guide for Intune Windows Autopilot OOBEIDPS error during identity provider access"
---

# Error: OOBEIDPS Network Access Blocked

:::danger Error Message
Something went wrong. OOBEIDPS.
:::

## Description

:::info
This error occurs during Windows Autopilot deployment when network infrastructure blocks access to the Identity Provider (IdP). The error indicates that proxy settings, firewall rules, or other network configurations are preventing the necessary communication with authentication services.
:::

## Common Causes

<div class="card-container">
<div class="cause-card">

### 🌐 Network Access Issues
Connection failures often stem from network restrictions. Proxy servers might block authentication traffic. Firewall rules could prevent IdP access. Network security devices might interfere with connections. Understanding network requirements is crucial for successful authentication.

</div>
<div class="cause-card">

### 🔒 Security Configuration
Security-related complications can prevent IdP access. Network filtering policies might be too restrictive. SSL inspection could interfere with authentication. Security appliances might block required endpoints. These security factors require systematic verification and adjustment.

</div>
</div>

## Resolution Steps

<div class="steps-container">

### 1️⃣ Network Requirements Review
Verify access to required services:
1. Check network documentation
2. Review proxy configurations
3. Examine firewall rules
4. Identify blocked endpoints

### 2️⃣ Configure Network Access
Ensure proper access to Autopilot services:
1. Allow required endpoints
2. Configure proxy exceptions
3. Update firewall rules
4. Enable necessary protocols

### 3️⃣ Validation
After configuration changes:
1. Test network connectivity
2. Verify IdP access
3. Attempt Autopilot deployment
4. Monitor for successful completion

</div>

## Best Practices

<div class="card-container">
<div class="practice-card">

### 👨‍💻 For IT Administrators
Effective network management requires attention to authentication requirements. Implement comprehensive endpoint monitoring. Maintain documentation of required access. Develop clear procedures for network configuration. Create systematic approaches to connectivity verification. Consider implementing automated access testing.

</div>
<div class="practice-card">

### 🔄 For Network Management
Successful authentication requires proper network configuration. Develop clear processes for access management. Maintain accurate documentation of required endpoints. Implement thorough testing procedures for connectivity. Create comprehensive documentation of network settings.

</div>
</div>

## Troubleshooting Tips

:::tip Network Configuration
When addressing authentication issues, focus on network access verification. Check all security layers. Verify endpoint accessibility. Test authentication flows. Monitor for connection blocks.
:::

:::warning Important Considerations
Network configuration involves several critical factors. Multiple endpoints need access. Security policies affect connectivity. Consider authentication requirements. Monitor access patterns.
:::

## Additional Notes

<div class="notes-container">

💡 Check proxy settings

🌐 Verify firewall rules

⚠️ Test IdP access

🔒 Review security policies

</div>

## Related Links

<div class="links-container">

[![Intune Docs](https://img.shields.io/badge/Intune-Autopilot_Network-0078D4?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/autopilot/networking-requirements)

[![Network Guide](https://img.shields.io/badge/Windows-Network_Access-black?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/windows/security/threat-protection/windows-firewall/windows-firewall-with-advanced-security)

[![Security Guide](https://img.shields.io/badge/Intune-Security_Configuration-blue?style=for-the-badge&logo=microsoft)](https://docs.microsoft.com/en-us/mem/intune/protect/endpoint-security)

</div>

## Network Configuration Guide

1. **Access Assessment**
   - Check current rules
   - Review endpoints
   - Verify protocols
   - Document requirements

2. **Security Configuration**
   - Update proxy settings
   - Configure firewalls
   - Enable protocols
   - Test connectivity

3. **Validation Process**
   - Test authentication
   - Monitor access
   - Verify deployment
   - Document results

:::tip Best Practice
Maintain comprehensive documentation of required network access and regularly verify connectivity to authentication endpoints.
::: 