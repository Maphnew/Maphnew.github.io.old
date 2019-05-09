### 프로그램 설치를 위한 RPM

4.4.1. 프로그램 설치를 위한 Redhat Package Manager
> yum이 나오기전 rpm을 주로 사용했음.
> yum은 rpm의 개념과 기능을 포함하기 때문에 최신 버전 CentOS에서는 yum을 사용하면된다.
> yum은 rpm을 확장한 개념에 가까우므로 rpm의 개념을 익혀야 한다.
- RPM
> Windows에 설치 파일이 있듯이 *.rpm 확장명의 설치 파일, package라고 부른다.
- 파일의 의미
> rpm 파일의 형식을 일반적으로 아래와 같다.
> 패키지이름-버전-릴리스번호.CentOS버전.아키텍처.rpm
```
[root@localhost ~]# find -name *.rpm
./다운로드/flash-player-npapi-32.0.0.171-release.x86_64.rpm
```
> 패키지이름: flash-player-npapi
> 버전: 32.0.0
> 릴리스번호: 171-release
> CentOS버전: ? - CentOS에서 배포할 경우 붙여진다.
> 아키텍처: x86_64

- 자주 사용하는 rpm 명령어 옵션
