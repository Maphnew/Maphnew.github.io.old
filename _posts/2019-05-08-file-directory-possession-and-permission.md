### 파일과 디렉터리의 소유와 허가권 - centos7

- 각각의 파일과 디렉터리마다 소유권과 허가권이라는 속성이 있다.
root사용자가 자신의 홈 디렉터리에서 'touch sample.txt'를 실행해 빈 파일을 만들고, 'ls -l'을 실행하면 다음과 같이 나타난다.
```bash
[root@localhost ~]# touch sample.txt
[root@localhost ~]# ls -l
합계 8
-rw-------. 1 root root 1877  5월  1 20:54 anaconda-ks.cfg
drwxr-xr-x  2 root root   21  5월  4 19:01 cba
-rw-r--r--  1 root root    0  5월  4 18:58 cba.txt
-rw-r--r--. 1 root root 1925  5월  1 21:20 initial-setup-ks.cfg
-rw-r--r--  1 root root    0  5월  8 20:59 sample.txt
drwxr-xr-x. 2 root root    6  5월  1 21:21 공개
drwxr-xr-x. 2 root root   62  5월  1 22:16 다운로드
drwxr-xr-x. 2 root root    6  5월  1 21:21 문서
drwxr-xr-x. 2 root root    6  5월  1 21:21 바탕화면
drwxr-xr-x. 2 root root    6  5월  1 21:21 비디오
drwxr-xr-x. 2 root root    6  5월  1 21:21 사진
drwxr-xr-x. 2 root root    6  5월  1 21:21 서식
drwxr-xr-x. 2 root root    6  5월  1 21:21 음악
```
- 표시된 정보의 의미

파일 유형 - 파일 허가권 - 링크 수 - 파일 소유자 이름 - 파일 소유 그룹이름 - 파일 크기(Byte) - 마지막 변경 날짜/시간 - 파일 이름

- 파일 유형

디렉터리 - d
일반파일 - -
블록 디바이스 - b (하드디스크, 플로피 디스크, cd/dvd 등의 저장장치)
문자 디바이스 - c (마우스, 키보드, 프린터 등의 입출력 장치)
링크 - l (Windows의 바로가기 아이콘 개념으로 연결된 파일, 실제 파일은 다른곳에 존재)

- 파일 허가권 permission

소유자user의 파일 접근권한, 그룹group의 파일 접근 권한, 그 외 사용자other의 파일 접근 권한으로 3개씩 끊어서 인식하면 된다.

r - read

w - write

x - execute

sample.txt 파일(-rw-r--r--)의 소유자는 rw-, 그룹은 r--, 그 외 사용자는 r-- 이다.(첫 -는 파일 유형, 일반파일)


다음과 같이 숫자로 표현할 수 있다.
rwx : 7 (4+2+1 = 7, 2진수 111)
rw- : 6 (4+2+0 = 6, 2진수 110)
r-- : 4 (4+0+0 = 4, 2진수 100)

예를 들어 파일 허가권이 754라는 것은 'rwxr-xr--'이 되므로 
소유자는 읽고/쓰고/실행할 수 있고, 
그룹은 읽고/실행만 할 수 있으며, 
그 외 사용자는 읽을 수만 있다는 것을 의미한다.
디렉터리는 해당 디렉터리로 이동하려면 실행('x') 권한이 반드시 있어야 한다.

파일의 허가권을 변경하는 명령어로는 'chmod'가 있다. root 사용자 또는 해당 파일의 소유자만 실행할 수 있다.
예로 'chmod 777 sample.txt'를 실행하면 sample.txt 파일은 모든 사용자가 읽고, 쓰고, 실행할 수 있는 파일이 되는 것이다.
파일 허가권이 설정되어 있어도, 파일이 실제로 실행 가능한 코드가 아니라면 실행 시 오류가 발생한다.

'chmod'명령어를 상대 모드Symbolic method로도 사용할 수 있다. 'chmod u+x 파일이름'은
"소유자User에게 실행eXecute 권한을 허가하라(+)"sms dmlalek.
'u-wx'는 쓰기와 실행 권한을 제거하라는 의미,
'g+rx'는 그룹에게 읽기와 실행 권한을 허가하라는 의미,
'o+rwx'는 그외 사용자에게 모든 권한을 허가하라는 의미가 된다.

- 파일 


