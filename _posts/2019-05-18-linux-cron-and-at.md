### 4.4.6 CRON 과 AT

#### cron
주기적으로 반복되는 일을 자동으로 실행할 수 있도록 시스템 작업을 예약해 놓는 것을 cron이라 부른다.
cron과 관련된 데몬(서비스)은 crond이고, 관련 파일은 /etc/crontab 이다.
/etc/crontab의 형식
> 분 시 일 월 요일 사용자 실행명령

