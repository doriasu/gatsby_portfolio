import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import Github from "../atoms/github"
import Hatena from "../atoms/hatena"

const Works: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.WorkimgQuery>(query)
  return (
    <div className="pb-8">
      <div className="text-4xl border-b-2 border-black inline-block">Works</div>
      <div className="text-center pb-4">時系列順に書いていきます</div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 pb-4">
        <div>
          <div className="flex text-3xl pb-2">あにみる</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid place-items-center">No Image</div>
            <div className="col-span-2">
              2021年夏
              <br />
              Treasure(Voyage
              Groupの夏インターン)にてチーム開発で製作しました。アニメを一緒に見る人を募集し、サイト上で通話ができます。
              主にフロントエンド部分を担当し、ReactとSkyWayを用いて開発を行いました。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            このサイト
            <Github url="https://github.com/doriasu/gatsby_portfolio" />
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2021/04/25/220728" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid place-items-center">This Page</div>
            <div className="col-span-2">
              2021/4/17
              <br />
              ポートフォリオが昔作ったまま放置していたのでシンプルなものに作り直しました。せっかくなのではじめてGatsby.jsを用いて制作しています。graphqlの型定義を自動生成してくれるの気持ちいいですね。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            CA TECH CHALLENGE
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2021/04/13/005239" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid justify-center">
              {data.catech?.childImageSharp?.fluid ? (
                <Img
                  fluid={data.catech?.childImageSharp?.fluid}
                  style={{ width: "20vw" }}
                />
              ) : (
                <div>no image</div>
              )}
            </div>
            <div className="col-span-2">
              2021/3/27~2021/3/28
              <br />
              用意されたAPIを用いてECサイトを作るハッカソンにて制作しています。個人的にウィンドウショッピングをコンセプトとして制作しました。現在は使えませんがNext.js(TypeScript)を用いたSSRほかlocalstorageを用いたお気に入り機能に対応しています。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            Cookpad Spring Intern
            <Github url="https://github.com/doriasu/spring-internship-2021-recipe-site" />
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2021/04/12/231042" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid justify-center">
              {data.cookpad?.childImageSharp?.fluid ? (
                <Img
                  fluid={data.cookpad?.childImageSharp?.fluid}
                  style={{ width: "20vw" }}
                />
              ) : (
                <div>no image</div>
              )}
            </div>
            <div className="col-span-2">
              2021/3/22~2021/3/26
              <br />
              用意されたAPIを用いてスマホ向けレシピサイトを作るハッカソンにて制作しています。Next.js(TypeScript)を用いたSSRほか無限スクロールなどを取り入れスマホを意識したUI設計を行いました。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            SpeechManager
            <Github url="https://github.com/monptt/speechmanager" />
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2021/03/31/001350" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid justify-center">
              {data.speech?.childImageSharp?.fluid ? (
                <Img
                  fluid={data.speech?.childImageSharp?.fluid}
                  style={{ width: "20vw" }}
                />
              ) : (
                <div>no image</div>
              )}
            </div>
            <div className="col-span-2">
              2021/3/1~2021/3/12
              <br />
              Open Hack U Online
              Vol.4にて友人と3人チームで制作しました。オンライン環境下での発表支援ツールです。母音を特徴量とした話す速度の可視化機能や原稿を読む速度のレコメンド機能などを
              そなえています。Python(PyQt5)にて制作しました。原稿を読む速度の可視化や全体のgui構成周りなどを担当しました。発表会にて最優秀賞をいただきました。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            JointSound
            <Github url="https://github.com/jphacks/B_2021" />
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2020/11/08/000502" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid justify-center">
              {data.jointsound?.childImageSharp?.fluid ? (
                <Img
                  fluid={data.jointsound?.childImageSharp?.fluid}
                  style={{ width: "20vw" }}
                />
              ) : (
                <div>no image</div>
              )}
            </div>
            <div className="col-span-2">
              2020/10/31~2020/11/7
              <br />
              2020/11/13~2020/11/27
              <br />
              JPHACKS2020にてspeechmanagerと同じメンバーと制作しました。誰でも簡単に音楽を共同作成して遊ぶことができるwebアプリケーションです。音楽初心者でも扱えることを意識して制作しました。
              要素技術はVue.js,flaskでメンバー1人と共同でフロント部分を担当しました。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            MIKUAR
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2019/12/16/000132" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid justify-center">
              {data.miku?.childImageSharp?.fluid ? (
                <Img
                  fluid={data.miku?.childImageSharp?.fluid}
                  style={{ width: "20vw" }}
                />
              ) : (
                <div>No image</div>
              )}
            </div>
            <div className="col-span-2">
              2019年秋4ヶ月ほど
              <br />
              学祭向けアプリケーションとして制作しました。初音ミクが机の上のARマーカー上でライブをしてくれます。２つの端末を使用した同時視聴にも対応しています。
              Unity(ARkit)を用いて制作しました。
            </div>
          </div>
        </div>
        <div>
          <div className="flex text-3xl pb-2">
            QNX向けカメラドライバ
            <Github url="https://github.com/doriasu/FixstarsInternship" />
            <Hatena url="https://doradorasuki.hatenablog.com/entry/2019/09/11/210642" />
          </div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div className="grid place-items-center">No Image</div>
            <div className="col-span-2">
              2019年夏
              <br />
              FixstarsSummerInternShipにて制作しました。QNXと呼ばれる組み込みOS向けのカメラドライバです。beagleboneにて動作します。C言語を用いて制作しました。
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default Works

export const query = graphql`
  query Workimg {
    catech: file(relativePath: { eq: "catech.png" }) {
      childImageSharp {
        fluid(maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    cookpad: file(relativePath: { eq: "cookpad.png" }) {
      childImageSharp {
        fluid(maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    jointsound: file(relativePath: { eq: "jointsound.png" }) {
      childImageSharp {
        fluid(maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    speech: file(relativePath: { eq: "speechmanager.png" }) {
      childImageSharp {
        fluid(maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    noimage: file(relativePath: { eq: "noimage.png" }) {
      childImageSharp {
        fluid(maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
    miku: file(relativePath: { eq: "miku.png" }) {
      childImageSharp {
        fluid(maxWidth: 140, maxHeight: 140) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`
