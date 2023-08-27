# API 문서

> 별도의 API Docs 도입 이전에 임시로 사용하는 문서입니다

## 목차

- [ping](#ping)
- [contents](#contents)
- [curations](#curations)
- [users](#users)

## ping

**GET** `/api/ping`

- response
  ```JSON
  {
    message: "pong"
  }
  ```

## Contents

**GET** `/api/contents`

- response
  ```JSON
  {
    items: Content[]
  }
  ```
- type

  ```typescript
  type Content = {
    id: number;
    type: "writing" | "youtube";
    title: string;
    comments?: Comment[]; // type === "youtube"일 때
  };

  type Comment = {
    id: number;
    text: string;
  };
  ```

**GET** `/api/content/:content_id`

- response
  ```JSON
  Content
  ```
- custom error: `20`

## Curations

**GET** `/api/curations`

- response
  ```JSON
  {
    items: Curation[]
  }
  ```
- type
  ```typescript
  type Curation = {
    id: number;
    title: string;
    query: Partial<Content>;
    contents: Content[];
  };
  ```

## Users

**POST** `/api/users/register`

- request
  ```JSON
  {
    name: string; // 이름
    username: string; // 아이디. 중복 시 에러가 발생합니다
    password: string; // 비밀번호
  }
  ```
- response
  ```JSON
  {
    isRegisterSuccess: true,
    name: string;
  }
  ```
- custom error: `0`, `10`, `11`

**POST** `/api/users/login`

- request
  ```JSON
  {
    username: string;
    password: string;
  }
  ```
- response
  ```JSON
  {
    isLoginSuccess: true,
    name: string;
  }
  ```
- custom error: `0`, `12`
