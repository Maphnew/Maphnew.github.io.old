## 4.5 네트워크 관련 설정과 명령어

### 네트워크 관련 필수 개념

#### TCP/IP
- 컴퓨터끼리 네트워크상으로 의사소통을 하는 약속을 '프로토콜'이라고 부르는데, 프로토콜 중 가장 널리 사용되는 종류 중 하나이다.
- 통신의 전송/수신을 다루는 TCP(Transmission[전송] Control Protocol)와 데이터 통신을 다루는 IP(Internet Protocol)로 구성된다.

#### 호스트 이름과 도메인 이름
- 호스트 이름(host name)은 각각의 컴퓨터에 지정된 이름을 말한다.
- 도메인 이름(또는 도메인 주소)domain name은 hanb.co.kr과 같은 형식으로 표기하여 kr은 한국, co는 회사, hanb는 단체/회사의 이름을 의미한다. 예를 들어 호스트 이름이 this이고, 도메인 이름이 hanbit.co.kr이라면 전체 이름은 this.hanbit.co.kr로 붙여서 부른다. 이를 FQDN(Fully Qualified Domain Name)이라고 부른다. 즉, 같은 회사(도메인)에서 this.hanbit.co.kr이라는 호스트(=컴퓨터)는 유일하다.

#### IP 주소
- 각 컴퓨터의 랜 카드(Lan Card)는 네트워크 카드 또는 NIC(Network Interface Card)라고도 한다.
- 즉, 네트워크에 연결된 모든 컴퓨터는 고유한 IP주소가 있으며, 이는 서로 다르기 때문에 특정 컴퓨터의 IP주소를 알면, 그 컴퓨터가 전 세계 어디에 있든지 접속할 수 있다는 개념이다(사설 IP 주소는 예외).
- 4바이트로 이루어지며, 각 자리는 0~255까지의 숫자가 올 수 있다. 예를 들어 Server의 IP 주소는 192.168.111.100이고, 모든 컴퓨터에서 자기 자신을 의미하는 IP 주소는 127.0.0.1이다.

#### 네트워크 주소
- 같은 네트워크에 속해 있는 공통 주소다.
- 예를 들어 Server의 IP주소는 192.168.111.100, Server(B)는 192.168.111.200, Client는 192.168.111.131, 호스트 컴퓨터는 192.168.111.1이다. 이 네대의 컴퓨터는 같은 네트워크에 있으며, 서브넷 마스크는 C클래스(255.255.255.0)를 사용하므로, 공통된 네트워크 주소는 앞 3자리인 192.168.111.0이 된다.

> 192.168.xxx.ooo 의 주소 영역은 사설 네트워크(Private Network)의 주소다. 사설 네트워크는 외부와 분리된 내부의 별도 네트워크를 의미하며, 주로 공인된 IP주소가 부족할 때 많이 사용된다.

#### 브로드캐스트 주소
- 내부 네트워크의 모든 컴퓨터가 수신하는 주소를 말한다.
- 현재 주소의 제일 끝자리를 255로 바꾼 주소다(C 클래스의 경우).
- 예로 192.168.111.255가 된다.

#### 게이트웨이
- 게이트웨이(Gateway)는 내부 네트워크가 외부로 연결되는 컴퓨터 또는 장비이다.
- Server, Server(B), Client 등 내부 네트워크에 있는 컴퓨터끼리 통신할 경우에는 외부로 나갈 필요가 없으므로 게이트웨이가 없어도 되지만, 인터넷을 사용하기 위해 외부에 접속하려면 반드시 게이트웨이의 IP주소를 알아야만 한다. 게이트웨이는 쉽게 말해 '외부 네트워크로 나가는 통로'쯤으로 생각하면된다. 그러므로 게이트웨이에는 내부로 향하는 문(네트워크 카드)과 외부로 향하는 문(네트워크 카드)이 있어야 한다. 즉, 네트워크 카드가 두 개 장착되어 있어야 한다.
- 게이트웨이를 별도로 추가해주는 명령어의 형식은 다음과 같다.
```bash
# route add default gw 게이트웨이주소 dev 장치이름
```
예를 들어, 게이트웨이가 192.168.111.254로 변경되었을 때는 다음과 같이 사용한다.
```bash
# route add default gw 192.168.111.254 dev ens32
```
#### 넷마스크와 클래스
- 넷마스크(Netmask): 네트워크의 규모를 결정한다.
- 사설 네트워크에서 C 클래스를 사용하면 넷마스크를 255.255.255.0으로 사용한다.
- 예를 들어 192.168.111.0~192.168.111.255까지 256개의 IP 주소를 사용할 수 있지만, 그 중에서 192.168.111.0은 네트워크 주소, 192.168.111.255는 브로드캐스트 주소, 게이트웨이로 사용할 IP주소(192.168.111.2)를 제외하면 총 253대의 컴퓨터를 네트워크 내부에서 연결할 수 있다.

> 만약 사설 네트워크에 253대가 넘는 컴퓨터를 설치하고자 한다면 넷마스크를 255.255.0.0으로 변경해 B클래스로 사용하면 된다. 그러면 총 65536(2^16)개의 IP주소를 사용할 수 있으며, 네트워크 주소는 192.168.0.0이 된다. 또 A클래스로 변경하려면 255.0.0.0을 사용한다.

#### DNS 서버 주소
- 인터넷을 사용할 때 www.daum.net 과 같은 URL을 해당 컴퓨터의 IP주소로 변환해주는 서버 컴퓨터를 말한다.
- DNS(Domain Name System)서버(=네임 서버)의 주소를 사용하지 않거나, 잘못 입력되어 있으면 정상적으로 웹 사이트에 접속되지 않으므로 올바른 정보를 설정해야 한다.
- 설정 파일은 /etc/resolv.conf이며, 내용 중에 'nameserver DNS서버IP'의 형식으로 설정되어 있다.
- VMware를 사용하면 VMware가 게이트웨이, DHCP 서버, DNS 서버의 역할을 모두 가상으로 제공한다. 예에서 DNS 서버는 192.168.111.2, DHCP 서버는 192.168.111.254로 설정되어 역할을 한다.

### 리눅스에서 네트워크 장치 이름

랜 카드(NIC)가 리눅스에 장착되었을 때 CentOS 7 은 자동으로 이 장치의 이름을 ens32 또는 ens33으로 인식한다.
이 랜카드의 이름은 앞으로 네트워크 정보를 파악하거나, 네트워크를 정지 또는 가동할 때 자주 사용한다. 예를 들어 다음과 같은 명령을 종종 사용하게 될 것이다.
```bash
# ifconfig ens32 또는 ens33 -> 네트워크 설정 정보를 출력
# ifup ens32 또는 ens33 -> 네트워크 장치를 정지
# ifdown ens32 또는 ens33 -> 네트워크 장치를 가동
```

> 이전 버전의 CentOS와 리눅스 대부분은 랜카드를 eth0, eth1 등으로 인식했다.

### 중요한 네트워크 관련 명령어

##### nmtui

Network Manager Text User Interface의 약자로, 네트워크와 관련된 작업 대부분은 이 명령어를 기반으로 삼아 실행할 수 있다.
- 자동 IP 주소 또는 고정 IP 주소 사용 결정
- IP 주소, 서브넷 마스크, 게이트웨이 정보 입력
- DNS 정보 입력
- 네트워크 카드 드라이버 설정
- 네트워크 장치(ens32 또는 ens33)의 설정

> 'nmtui' 명령어는 그놈(GNOME) 그래픽 모드를 제공하지 않는다. X 윈도우 그래픽 모드를 완전하게 사용해서 네트워크를 설정하려면 'gnome-control-center network' 또는 'nm-connection-editor'명령어를 사용하면 된다.

##### systemctl start/stop/restart/status network

네트워크 설정을 변경한 후에 변경된 내용을 시스템에 적용시키는 명령어다. 그러므로 'nmtui'명령어를 실행한 후 또는 직접 ifcfg-ens32 파일을 편집한 후에는, 꼭 이 명령어를 실행한다고 기억하면 된다.

##### ifup 장치이름

해당 장치를 작동시켜 주는 명령어이다. 장착되었으나 작동하지 않으면 이 명령어로 네트워크 장치를 작동시킬 수 있다. 장치 이름에는 주로 ens32나 ens33이 사용된다.

##### ifdown 장치이름

ifup과 반대로 네트워크 장치를 끄는 명령어다.

##### ifconfig 장치이름

해당 장치의 IP 주소와 관련된 정보를 출력해주는 명령어다.

##### nslookup

DNS 서버의 작동을 테스트하는 명령어다.

##### ping IP주소 또는 URL

해당 컴퓨터가 네트워크상에서 응답하는지를 테스트하는 간편한 명령어다.

### 네트워크 설정과 관련된 주요 파일

'nmtui'명령어를 실행하고 나서 변경되는 관련 파일들이다. 중요한 파일들이므로 꼭 알아두자.

**/etc/sysconfig/network**
네트워크의 기본 정보가 설정되어 있는 파일로 네트워크 사용 여부가 써 있다.

**/etc/systemcofig/network-scripts/ifcfg-ens32(또는 33)**
ens32 장치에 설정된 네트워크 정보가 모두 들어 있는 파일이다.

**/etc/resolv.conf**
DNS 서버의 정보와 호스트 이름이 들어 있는 파일이다.

**/etc/hosts**
현 컴퓨터의 호스트 이름과 FQDN이 들어 있는 파일이다.


