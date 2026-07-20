# 軟體推薦&常見問題

::: details Q: 網路管理常用工具推薦
各種網路工具，例如 ping、tracerouter、whois、arp scan... 工具的 gui 界面管理工具

- Linux環境： [NMLinux](https://github.com/thongor77/nmlinux)
- Windows環境：[NETworkManager](https://github.com/BornToBeRoot/NETworkManager)
  :::

::: details Q:網管系統推薦

- 防火牆: [Opnsense](https://opnsense.org/)
- 日誌收集伺服器： [Graylog](https://graylog.org/)
- 網路裝置管理: [Librenms](https://www.librenms.org/)
- DHCP Server: 防火牆使用 Opnsense 則內建的 dhcp server 最好用，靜態綁定 dhcp 外，還可以順便開啟 **ip鎖mac（靜態 ARP）** 功能，不用設定兩次。如果想要單獨的 dhcp 功能，推薦 [Adguardhome](https://github.com/AdguardTeam/Adguardhome) ，不是 Adguardhome APP，APP 是要錢的， server 版本是 opensource，用途不同。
  :::
