import { CustomHead } from "@/components/Head";
import { ArchiveSelect } from "@/components/WorksList/ArchiveSelect";
import { WorkItem } from "@/components/WorksList/WorkItem";
import { Layout } from "@/components/Layout/Layout";
import { Pagination } from "@/components/Pagination/Pagination";
import { getWorksData, getUniqueDates } from "@/utils/getWorksData";
import styles from "@/components/WorksList/WorksList.module.scss";

export default function WorksPage({
  works,
  category,
  tag,
  totalCount,
  currentPage,
  uniqueDates,
}) {
  const postsPerPage = 5;
  const totalPages = Math.ceil(totalCount / postsPerPage);

  return (
    <Layout showSidebar={true} category={category} tag={tag} works={works}>
      <CustomHead title="WORKS TOP" />
      <section className={`${styles.works} section`}>
        <div className="box">
          <h2 className="title">WORKS</h2>
          {/* <ArchiveSelect uniqueDates={uniqueDates} /> */}
          <ul className={styles.worksList}>
            {works.map((work) => (
              <WorkItem key={work.id} work={work} />
            ))}
          </ul>
        </div>
        {totalPages > 1 && (
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        )}
      </section>
    </Layout>
  );
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page || 1, 10);
  const { works, category, tag, totalCount } = await getWorksData(page);
  const uniqueDates = await getUniqueDates();

  return {
    props: {
      works,
      category,
      tag,
      totalCount,
      currentPage: page,
      uniqueDates,
    },
  };
}

export async function getStaticPaths() {
  const { totalCount } = await getWorksData();

  const paths = [];
  const postsPerPage = 5; // ページ表示件数
  const totalPages = Math.ceil(totalCount / postsPerPage);

  for (let page = 1; page <= totalPages; page++) {
    paths.push({
      params: {
        page: page.toString(),
      },
    });
  }

  return {
    paths,
    fallback: false,
  };
}
