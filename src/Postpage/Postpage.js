import { Editor } from "@toast-ui/react-editor";
import Header from "../Header/Header";
import ContentsViewer from "../UI/ContentsViewer";
import abc from "../Assets/KakaoTalk_Photo_2022-09-27-12-53-39 003.png";
import "./Postpage.css";
import EditorBox from "../UI/EditorBox";

const Postpage = () => {
  return (
    <div>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <div className="image-container">
        <input type="button" className="postbutton" value="<" />
        <img className="image" alt="my" src={abc} />
        <input type="button" className="postbutton" value=">" />
      </div>
      <p>tag buttons</p>
      <div className="post-title">
        <p className="post-title__item">PROJECT #1-1 DEVELOPING TECH BLOG !</p>
      </div>
      <div className="post-body">
        <ContentsViewer
          contents={`2023/05/27
# Project #1 - 2

## **Contents**
        1. Git / Github
        2. HTML Template
        3. Infra Config
        5. Basic features
        4. Technologies Used
---
## 1.Git / Github

이번 프로젝트를 통해서 깃허브를 처음 써보게 되었습니다.

> 협업을 위해 깃허브를 쓸 줄 알아야한다.
>
라는 말을 어디선가 주워듣고 Github 계정만 만들어둔 상태였죠.

이번 블로그 개발 프로젝트를 진행하게 되면서 깃과 깃허브에 대한 기본적인 개념들을 공부해서 정리해두었습니다. 예전의 저처럼 Git/Github에 대한 아무런 사전 지식이 없으시다면 제가 Study에 공유한 글을 찾아보셔도 좋을 것 같습니다.

블로그 프로젝트의 버전관리를 위해 새로운 깃허브 레포지토리를 하나 생성하고 소스파일이 있는 프로젝트 폴더와 연동했습니다. 

새롭게 판 깃허브 레포지토리에서 주소를 복사해서

(이미지)

터미널에서

(이미지)

코드를 실행시켜줍니다.

그럼 연동 끝!

그래도 혹시 모르니 확인을 위해서

(이미지)

코드를 입력해줍니다. 이 커맨드는 현재 디렉토리와 연결된 레포지토리가 있는지, 있다면 어떤 레포지토리와 연결되어있는지 알려주는 커맨드입니다.

만약 프로젝트 폴더가 

<br>

* ## **2.HTML Template**
> 네가 알던 내가 아냐 (feat.template)

<br>

'템플릿'이라는 단어를 딱 들으면 어떤 이미지가 가장 먼저 떠오르시나요?

저는 PPT의 템플릿이 가장 먼저 떠오릅니다. 모든 디자인과 구성이 완성되어져있고, 사용자는 그냥 텍스트를 입력하기만 하면 되죠. 아주 쉽게 다른 사람들이 구현해놓은 디자인을 이용해서 고품질의 PPT를 제작할 수 있게 해줍니다.

<br>

HTML Template도 이와 거의 동일합니다. 다만 PPT의 그것과 차이점이 존재한다면, PPT는 텍스트만 수정하면 온전한 PPT 결과물이 완성되지만, HTML 템플릿은 내용만 수정한다고 해서 모든 웹사이트가 뚝-딱 만들어지는 건 아니라는 거죠.

<br>

> 웹사이트는 크게 정적/동적 웹으로 나뉩니다.

### **정적 웹사이트**

<br>

정적 웹사이트는 클라이언트와의 상호작용이 필요없는 웹을 의미합니다. 기업 홍보를 위한 사이트를 예시 중 하나로 들 수 있습니다. 이런 사이트는 기업의 경영철학, 경영자, 조직도, 연락처 등의 정보를 일방적으로 클라이언트한테 제공하기 위한 사이트이기 때문에, 클라이언트와의 상호작용이 크게 필요하지 않습니다.

<br>

### **동적 웹사이트**

<br>

동적 웹사이트는 정적 웹사이트와는 반대로 사용자와의 상호작용이 가능한 웹사이트를 의미합니다. 댓글 작성 기능이 있는 블로그, 방문자 수를 카운팅하는 사이트 등이 예시가 될 수 있겠죠. 

<br>
<br>

다시 본론으로 돌아가서, 동적인 웹사이트를 개발하기 위해서는 HTML Template 이외에도 많은 부분들을 구현해주어야합니다. 

사실 HTML 템플릿도 이용하지 않고 처음부터 제가 원하는 디자인을 구성해서 개발하면 더할 나위 없이 좋을 겁니다.

그러나 아직 저는 HTML이나 CSS, JS에 대한 기본적인 지식이 없는 상태에서 계란을 바위에 던지고있는 상태이기 때문에, 프론트엔드의 영역은 템플릿의 도움을 받기로 했습니다.

HTML 무료 템플릿 사이트에서 적당히 보기좋은 3페이지 짜리 HTML파일을 프로젝트 폴더에 다운로드했습니다.

<br>

* ## **3. Infra Config**

<br>

기능들을 구현하기 이전에 기본적인 인프라를 설정합니다.

<br>

### **로컬 서버 접속**

<br>

로컬 서버에는 Gin의 eg.RUN(":8080")으로 연결해줍니다. GO의 template 패키지의 ListenAndServe()와 같은 역할을 합니다.

<br>


    func main(){
        eg := gin.Default()
        eg.Run('':8080'')
    }

<br>

gin.Default()로 리턴된 **eg**는 engine pointer type으로, Gin의 기능들을 사용할 수 있게 해주는 컴포넌트입니다.
 

    gin.Default()

혹은


    gin.New()


로 엔진을 만들 수 있습니다. Default 는 literally 하게, 여러 미들웨어가 디폴트로 들어가있는 것입니다. **미들웨어**란 핸들러와 클라이언트 사이에서 여러가지 기능 (인증, 보안 등) 을 제공하는 일종의 코드 묶음 같은 것인데, 추후에 더 공부해볼 예정입니다.
<br>

* MySQL DB 연동
<br>

      db, err := sql.Open(''mysql'', ''root:/*PASSWORD*/@/blog'')
      if err != nil {
        log.Fatalln(''DB IS NOT CONNECTED'')
      }
      defer db.Close()


<br>

미리 MySQL DB에 새로운 Blog DB를 create 해뒀고, 스키마는 아직 정의되지 않은 상태입니다. 코드 상 MySQL PW는 보안을 위해 주석처리 했습니다.

<br>

### **개발 시작**

<br>

        template 파싱, 사이드바 이름 변경, 기본 핸들러 구현, 리다이렉트 일부 구현, static resource 설정
<br>        

템플릿 파싱해주고

    eg.LoadHTMLGlob(''./templates/**/*.html'')

<br>

HTML파일에서 사이드바 이름 변경해주었다.
<br>


    // redirect to homepage
    eg.GET(''/index.html'', func(c *gin.Context) {
        c.Redirect(http.StatusSeeOther, ''/'')
    })

<br>

등의 기본적인 핸들러와 메인페이지로의 리다이렉트까지 구현했는데, 
<br><br>


## **문제 발생**
<br>

### **Static resource 설정에서 문제가 생겼다.**
<br>


    eg.Static(''/assets'', ''yunsuk/choigonyok-blog/assets'')


정적 파일 리소스를 브라우저로 전송하기 위해 경로를 설정했는데, ''이런 경로를 찾을 수 없다''는 오류가 발생했다.
<br>

한참을 고민하고 구글링하다가 답을 찾았다.
<br>

## **경로에는 절대경로 / 상대경로가 있다**
<br>

코드를 작성하고 있는 main.go 의 경로를 살펴보자
<br>
절대경로는 
> /Users/yunsuk/choigonyok-blog/src/main.go
<br>

처럼 경로상의 Root(''/'')를 기반으로 찾는 절대적인 경로이고,
<br>

상대경로는
> ./src/main.go
<br>

처럼 내 위치 (여기서는 프로젝트 폴더 경로)를 기반으로 상대적인 경로를 찾는 방식이다. 여기서 **.** 은 현재 파일의 위치를 의미한다.

이 이후에 코드를

    eg.Static(''/assets'', ''./assets'')

수정해줬고, 메인페이지에 사용되기 위한 내 프로필 사진이 정적 리소스 파일로 브라우저에 잘 전달되게 되었다.
<br>

## 느낀점

### 1. FE 디자인은 생각보다 더 품이 많이 드는 작업이다. 
<br>
-> CSS와 HTML, JavaScrpit 의 공부 필요성을 느꼈다.
<br><br>

### 2. 깃허브에 커밋하고 푸시할 때마다 개발자 된 기분(?)이다
<br>
-> 즐거워서 좋다. 그러나 중요한 것은 열정보다는 끈기! 열정도 좋지만 기분에 방해받지 않는 꾸준함이 필요하다.    
<br><br>

## 다음에 구현할 것

* DB schema 정의하기
* 게시물 작성 시 DB에 저장(CREATE) 시키기
* DB를 통해, 저장된 게시글 리스트를 게시판 별로 볼 수 있는 기능 구현하기

목차
[1.11](#다음에-구현할-것)
[2.22](#느낀점)`}
        />
      </div>
      <p>index</p>
      <p>이전/다음 포스트버튼</p>
      <p>related posts : 태그가 같은 post 배치</p>
      <p>load more : 6개만 표시하고 나머지는 load more 클릭하면 표시</p>
    </div>
  );
};
export default Postpage;