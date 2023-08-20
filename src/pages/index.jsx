import Image from "next/image";
import { CustomHead } from "@/components/Head";
import { WorkItem } from "@/components/WorksList/WorkItem";
import { LinkButton } from "@/components/LinkButton";
import { getWorksData } from "@/utils/getWorksData";
import { Layout } from "@/components/Layout/Layout";
import styles from "@/styles/Home.module.scss";
import Profile from "@/styles/Profile.module.scss";
import worksList from "@/components/WorksList/WorksList.module.scss";

export default function home({ latestWorks }) {
  return (
    <Layout showSidebar={false}>
      <CustomHead title="TOPページ" />
      {/* MV */}
      <div className={styles.mv}>
        <div className={styles.mvbox}>
          <p className={styles.mvTitle}>NAOTO SAKUMA</p>
          <p className={styles.mvSubtitle}>Portfolio</p>
          <p className={styles.mvText}>
            ユーザーとお客様が心から
            <br className="util-sp-indention" />
            満足できるサイトを構築します。
            <br />
            クリエイティブなビジョンを実現する
            <br className="util-sp-indention" />
            フロントエンジニア。
          </p>
        </div>
      </div>
      {/* /MV */}

      {/* works */}
      <section className="section">
        <div className="box">
          <h2 className="title">WORKS</h2>
          {/* 最新3件を表示 */}
          <ul className={worksList.worksList}>
            {latestWorks.map((work) => (
              <WorkItem key={work.id} work={work} />
            ))}
          </ul>
          <LinkButton href="/works/" text="WORKS一覧へ" />
        </div>
      </section>
      {/* /works */}

      {/* profile */}
      <section className="section">
        <div className="box">
          <h2 className="title">PROFILE</h2>
          <div className={Profile.profile}>
            <p className={Profile.profileImg}>
              <Image
                src="/images/profile.png"
                alt=""
                width={400}
                height={400}
              />
            </p>
            <div className={Profile.profileBody}>
              <p>
                テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります。
              </p>
            </div>
          </div>
          <LinkButton href="/profile/" text="PROFILE詳細へ" />
        </div>
      </section>
      {/* /profile */}

      {/* contact */}
      <section className={`${styles.contact} section`}>
        <div className="box">
          <h2 className="title">CONTACT</h2>
          <p className={styles.lead}>
            お問い合わせは、
            <br className="util-sp-indention" />
            下記フォームからお願いいたします。
          </p>
          <LinkButton href="/contact/" text="お問い合わせはこちら" />
        </div>
      </section>
      {/* /contact */}
    </Layout>
  );
}

export async function getStaticProps() {
  const { works } = await getWorksData(1, "", "", 3);
  return {
    props: {
      latestWorks: works,
    },
  };
}
