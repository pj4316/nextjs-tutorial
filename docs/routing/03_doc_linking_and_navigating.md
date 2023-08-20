# Linking And Navigating

Next.js에서는 루트들 사이를 탐색하기 위한 두 가지 방법이 있습니다.
- `<Link>` 컴포넌트를 사용
- `useRouter` hook을 사용

이 페이지를 통해 이 두가지 사용 방법에 대해서 알아보겠습니다. 네비게이션이 어떻게 동작하는지 딥 다이브를 해볼게요.

---

## <Link> Component

`<Link>` 컴포넌트는 `<a>` 태그를 확장한 빌트인 컴포넌트로 prefetching과 클라이언트 사이드의 루트들 사이의 네비게이션을 제공합니다. 
이 것은 Next.js에서 루트 탐색을 위한 첫번째 방법입니다.


우리는 `next/link`를 임포트하고 `href` 파라미터를 넘겨주어 사용할 수 있습니다. 

```typescript jsx
import Link from 'next/link'
 
export default function Page() {
  return <Link href="/dashboard">Dashboard</Link>
}
```

더 다양한 props를 추가적으로 보내 줄 수 있습니다. (href는 필수, replace, scroll, prefetch...etc)
[Link Api reference](https://nextjs.org/docs/app/api-reference/components/link)

### Linking to Dynamic Segments

동적 세그먼트로 연결할 때에 아래와 같은 방식으로 연결 할 수 있습니다. `template literals and interpolation`를 사용하여 href를 구성할 수 있습니다.

```typescript jsx
import Link from 'next/link'
 
export default function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  )
}
```



