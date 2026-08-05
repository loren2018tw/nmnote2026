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
- DHCP Server: 防火牆使用 Opnsense 則內建的 dhcp server 最好用，靜態綁定 dhcp 外，還可以順便開啟 **ip鎖mac（靜態 ARP）** 功能，不用設定兩次。如果想要單獨的 dhcp 功能，推薦 [Adguardhome](https://github.com/AdguardTeam/Adguardhome) ，不是 Adguardhome APP，APP 是要錢的， server 版本是 opensource 且除了 DHCP 功能外還有 DNS 快取跟惡意網站封鎖功能。
  :::

::: details Q:如何得知網管交換器 ip
如果已經上線的網管交換器不知道 ip，通常網管型交換器（或很多網路裝置）都會使用 dhcp，所以我們可以掃描可能的網段，以及指定 80port，就可以知道哪些 ip 有提供 web 界面，可以連進去看看大概就可以得知那是什麼裝置（順便可以看看有沒有奇怪的裝置提供 web 界面）。

交換器預設帳密，可以去搜尋該型號的說明手冊，裡面應該就會有預設帳密的資訊。

![nm-連掃描](portscan.png)
:::

::: details Q:區域網路中有多個 dhcp server 在派發 ip，如何找到這些派送 ip的裝置？

- 安裝 nmap 工具 https://nmap.org/ ，在命令列視窗執行

  ```Shell
  nmap --script broadcast-dhcp-discover
  ```

  可以找到區網中的所有 dhcp server ip (假設為 192.168.122.1)，知道 ip 後，

  Linux 環境執行：

```Shell
arp -n | grep "192.168.122.1"
```

Windwos 環境執行：

```PowerShell
arp -a | findstr "192.168.122.1"
```

就可以查到那個 ip 網孔的 mac address ，知道 mac address 之後，再去 librenms 的 FDB table 就可能有機會找到這臺亂發 ip 的裝置插在哪個交換器的哪個 port。
:::
