# API 문서
> 별도의 API Docs 도입 이전에 임시로 사용하는 문서입니다

## 목차
- [ping](#ping)
- [contents](#contents)
- [curations](#curations)



## ping
__GET__ `/api/ping`
- response
  ```JSON
  {
    message: "pong"
  }
  ```

## Contents
__GET__ `/api/contents`
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
    type: "writing" | "youtube"
    title: string;
    comments?: Comment[] // type === "youtube"일 때
  };

  type Comment = {
    id: number;
    text: string;
  };
  ```


__GET__ `/api/content/:content_id`
- response
  ```JSON
  Content
  ```



## Curations
__GET__ `/api/curations`
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
    query: Partial<Content>
    comments?: Comment[] // type === "youtube"일 때
  };