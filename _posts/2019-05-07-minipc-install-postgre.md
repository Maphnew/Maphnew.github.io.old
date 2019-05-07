### postgre 설치

#### 출처: https://orashelter.tistory.com/56 [둥지]

1. 설치 가능한 postgresql의 버전을 확인합니다.
```
# yum list | grep ^postgresql
```
```
postgresql.i686                             9.2.24-1.el7_5             base
postgresql.x86_64                           9.2.24-1.el7_5             base
postgresql-contrib.x86_64                   9.2.24-1.el7_5             base
postgresql-devel.i686                       9.2.24-1.el7_5             base
postgresql-devel.x86_64                     9.2.24-1.el7_5             base
postgresql-docs.x86_64                      9.2.24-1.el7_5             base
postgresql-jdbc.noarch                      9.2.1002-6.el7_5           base
postgresql-jdbc-javadoc.noarch              9.2.1002-6.el7_5           base
postgresql-libs.i686                        9.2.24-1.el7_5             base
postgresql-libs.x86_64                      9.2.24-1.el7_5             base
postgresql-odbc.x86_64                      09.03.0100-2.el7           base
postgresql-plperl.x86_64                    9.2.24-1.el7_5             base
postgresql-plpython.x86_64                  9.2.24-1.el7_5             base
postgresql-pltcl.x86_64                     9.2.24-1.el7_5             base
postgresql-server.x86_64                    9.2.24-1.el7_5             base
postgresql-static.i686                      9.2.24-1.el7_5             base
postgresql-static.x86_64                    9.2.24-1.el7_5             base
postgresql-test.x86_64                      9.2.24-1.el7_5             base
postgresql-upgrade.x86_64                   9.2.24-1.el7_5             base
```
2. 저장소를 업데이트 합니다. ( postgresql 11 버전 설치 할것 )
```
# yum install -y https://download.postgresql.org/pub/repos/yum/11/redhat/rhel-7-x86_64/pgdg-centos11-11-2.noarch.rpm

```
```
Loaded plugins: fastestmirror
pgdg-centos11-11-2.noarch.rpm                                                                    | 5.6 kB  00:00:00
Examining /var/tmp/yum-root-PXjl9y/pgdg-centos11-11-2.noarch.rpm: pgdg-redhat-repo-42.0-4.noarch
Marking /var/tmp/yum-root-PXjl9y/pgdg-centos11-11-2.noarch.rpm to be installed
Resolving Dependencies
--> Running transaction check
---> Package pgdg-redhat-repo.noarch 0:42.0-4 will be installed
--> Finished Dependency Resolution

Dependencies Resolved

======================================================================================================================== Package                       Arch                Version                Repository                               Size
========================================================================================================================Installing:
 pgdg-redhat-repo              noarch              42.0-4                 /pgdg-centos11-11-2.noarch              6.8 k

Transaction Summary
========================================================================================================================Install  1 Package

Total size: 6.8 k
Installed size: 6.8 k
Downloading packages:
Running transaction check
Running transaction test
Transaction test succeeded
Running transaction
  Installing : pgdg-redhat-repo-42.0-4.noarch                                                                       1/1
  Verifying  : pgdg-redhat-repo-42.0-4.noarch                                                                       1/1

Installed:
  pgdg-redhat-repo.noarch 0:42.0-4

Complete!
```

3. postgresql 설치 합니다.
```
# yum install -y postgresql11-server postgresql11
```
```
Loaded plugins: fastestmirror
Loading mirror speeds from cached hostfile
 * base: ftp.kaist.ac.kr
 * extras: ftp.jaist.ac.jp
 * updates: ftp.iij.ad.jp
base                                                                                             | 3.6 kB  00:00:00
http://ftp.jaist.ac.jp/pub/Linux/CentOS/7.6.1810/extras/x86_64/repodata/repomd.xml: [Errno 14] curl#6 - "Could not resolve host: ftp.jaist.ac.jp; 알 수 없는 오류"
Trying other mirror.
extras                                                                                           | 3.4 kB  00:00:00
https://download.postgresql.org/pub/repos/yum/10/redhat/rhel-7-x86_64/repodata/repomd.xml: [Errno 14] curl#6 - "Could not resolve host: download.postgresql.org; 알 수 없는 오류"
Trying other mirror.


 One of the configured repositories failed (PostgreSQL 10 7 - x86_64),
 and yum doesn't have enough cached data to continue. At this point the only
 safe thing yum can do is fail. There are a few ways to work "fix" this:

     1. Contact the upstream for the repository and get them to fix the problem.

     2. Reconfigure the baseurl/etc. for the repository, to point to a working
        upstream. This is most often useful if you are using a newer
        distribution release than is supported by the repository (and the
        packages for the previous distribution release still work).

     3. Run the command with the repository temporarily disabled
            yum --disablerepo=pgdg10 ...

     4. Disable the repository permanently, so yum won't use it by default. Yum
        will then just ignore the repository until you permanently enable it
        again or use --enablerepo for temporary usage:

            yum-config-manager --disable pgdg10
        or
            subscription-manager repos --disable=pgdg10

     5. Configure the failing repository to be skipped, if it is unavailable.
        Note that yum will try to contact the repo. when it runs most commands,
        so will have to try and fail each time (and thus. yum will be be much
        slower). If it is a very temporary problem though, this is often a nice
        compromise:

            yum-config-manager --save --setopt=pgdg10.skip_if_unavailable=true

failure: repodata/repomd.xml from pgdg10: [Errno 256] No more mirrors to try.
https://download.postgresql.org/pub/repos/yum/10/redhat/rhel-7-x86_64/repodata/repomd.xml: [Errno 14] curl#6 - "Could not resolve host: download.postgresql.org; 알 수 없는 오류"
```
- /etc/sysconfig/network-scripts/ifcfg-enp3s0 의 network 정보 수정(staic ip, DNS, NETMASK ..) 
```
# yum update

# yum install -y postgresql11-server postgresql11
```


4. 패키지가 제대로 설치되었는지 확인합니다.
```
# rpm -qa|grep postgresql
```
```
postgresql11-libs-11.2-2PGDG.rhel7.x86_64
postgresql11-server-11.2-2PGDG.rhel7.x86_64
postgresql11-11.2-2PGDG.rhel7.x86_64
```

5. postgres 계정이 있는지 확인합니다.
```
cat /etc/passwd | grep postgres
```
```
postgres:x:26:26:PostgreSQL Server:/var/lib/pgsql:/bin/bash
```

6. postgresql 초기화 합니다.
```
/usr/pgsql-11/bin/postgresql-11-setup initdb
```
```
Initializing database ...
OK
```

7. 서비스 활성화 및 재시작 합니다.
```
# systemctl enable postgresql-11

# systemctl start postgresql-11
```


8. postgresql 패스워드를 변경합니다.
```
# sudo passwd postgres
```
```
postgres 사용자의 비밀 번호 변경 중
새  암호:
잘못된 암호: 암호는 8 개의 문자 보다 짧습니다
새  암호 재입력:
passwd: 모든 인증 토큰이 성공적으로 업데이트 되었습니다.
```

9. postgresql 접속 및 설치된 버전 확인 합니다.
```
# su - postgres
```
```
-bash-4.2$
```
```
# psql
```
```
psql (11.2)
도움말을 보려면 "help"를 입력하십시오.

postgres=#
```
```
# select version();
```
```
                                                 version
---------------------------------------------------------------------------------------------------------
 PostgreSQL 11.2 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 4.8.5 20150623 (Red Hat 4.8.5-36), 64-bit
(1개 행)
```


