# 1. 험난한 설치과정

1. 자바는 11.0.9 버전으로 설치하였다

2. 안드로이드 스튜디오 설치할땐 기본 설치 말고 커스텀 설치로

3. 혹시 몰라서 폴더 경로들 영어로만 되게 하였다

4. cmd에서 set ANDROID_SDK_ROOT=C:\폴더명\폴더명\AppData\Local\Android\Sdk

5. https://github.com/bjpublic/Reactnative/issues/1

    npm install --save-dev jetifier

    설치와 package.json 설정

6. 터미널에선 adb 명령어가 안먹히고 cmd에선 된다

---

# 2. 화면 출력 맛보기

---

# State 01

1. <Text>{this.state.sampleText}</Text>

    강의에선 이렇게 하여 state의 문자열을 출력하는데 나는 안된다

2. <Text>{`${this.state.sampleText}`}</Text>

    나는 이렇게 하니 출력되었다

---

# TouchEvent 02