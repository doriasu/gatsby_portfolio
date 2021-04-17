import React from "react"

const Works: React.FC = () => {
  return (
    <div className="pb-8">
      <div className="text-4xl border-b-2 border-black inline-block">Works</div>
      <div className="text-center pb-4">時系列順に書いていきます</div>
      <div className="grid grid-cols-2 gap-4 pb-4">
        <div>
          <div className="text-3xl pb-2">このサイト</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2021/4/17
              <br />
              ポートフォリオが昔作ったまま放置していたのでシンプルなものに作り直しました。せっかくなのではじめてGatsby.jsを用いて制作しています。
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">CA TECH CHALLENGE</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2021/3/27~2021/3/28
              <br />
              用意されたAPIを用いてECサイトを作るハッカソンにて制作しています。個人的にウィンドウショッピングをコンセプトとして制作しました。現在は使えませんがNext.js(TypeScript)を用いたSSRほかlocalstorageを用いたお気に入り機能に対応しています。
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">Cookpad Spring Intern</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2021/3/22~2021/3/26
              <br />
              用意されたAPIを用いてスマホ向けレシピサイトを作るハッカソンにて制作しています。Next.js(TypeScript)を用いたSSRほか無限スクロールなどを取り入れスマホを意識したUI設計を行いました。
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">SpeechManager</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2021/3/1~2021/3/12
              <br />
              Open Hack U Online
              Vol.4にて友人と3人チームで制作しました。オンライン環境下での発表支援ツールです。母音を特徴量とした話す速度の可視化機能や原稿を読む速度のレコメンド機能などを
              そなえています。Python(PyQt5)にて制作しました。発表会にて最優秀賞をいただきました。
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">JointSound</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2020/10/31~2020/11/7
              <br />
              2020/11/13~2020/11/27
              <br />
              JPHACKS2020にて上記のメンバーと制作しました。誰でも簡単に音楽を共同作成して遊ぶことができるwebアプリケーションです。音楽初心者でも扱えることを意識して制作しました。
              要素技術はVue.js,flaskでフロント部分を担当しました。
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">MIKUAR</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2019年秋4ヶ月ほど
              <br />
              学祭向けアプリケーションとして制作しました。初音ミクが机の上のARマーカー上でライブをしてくれます。２つの端末を使用した同時視聴にも対応しています。
              Unity(ARkit)を用いて制作しました。
            </div>
          </div>
        </div>
        <div>
          <div className="text-3xl pb-2">QNX向けカメラドライバ</div>
          <div className="grid grid-cols-3 gap-4 pb-4">
            <div>pic</div>
            <div className="col-span-2">
              2019年夏
              <br />
              FixstarsSummerInternShipにて制作しました。QNXと呼ばれる組み込みOS向けのカメラドライバです。beagleboneにて動作します。C言語を用いて制作しました。
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Works
