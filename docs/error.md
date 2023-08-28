# Error 문서

> 커스텀 에러 코드와 메시지를 표로 정리해 두었습니다.

- 아래의 에러 밖에도 다양한 **자동 발생 에러**(db , 잘못된 method 등)가 발생할 수 있습니다. `{code: string, message:string }`의 형식으로 오지 않는 에러의 경우는 자동 발생 에러이니 에러 내용에 따라 디버깅하거나 처리해주시면 됩니다.

- 커스텀 에러나 자동 발생 에러의 status_code가 500번대일 경우(서버 에러)에는 `@designDefined`에게 문의 주시기 바랍니다.

| topic    | code | message                         | 설명                        |
| -------- | ---- | ------------------------------- | --------------------------- |
| default  | 0    | `Missing keys: ${key1}, ~~~`    | 요청에 필수 key가 누락됨    |
| users    | 10   | `Username already exists`       | 회원가입 아이디 중복        |
| users    | 11   | `Failed to insert user`         | 회원가입 실패 (서버에 문의) |
| users    | 12   | `Username or password is wrong` | 아이디나 비밀번호 오류      |
| contents | 20   | `Content not found`             | id에 해당하는 Content 없음  |
