import { Layout } from "@/app/Components/Layout/Layout";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
import "./../style/globals.css";
import EmployersPage from "@/app/Components/MainComp/EmployersPage";
import { useADDNavbar } from "@/context/AddNavbarContext";
import FormInput from "@/app/Components/TextArea/FormInput";
import baseClient from "@/api/BaseClient";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { data } = await baseClient(context).get("/api/emp/all");

    return {
      props: {
        repo: data,
      },
    };
  } catch {
    return {
      props: {
        repo: [],
      },
    };
  }
};

const Employers = ({
  repo,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { showAddI, showAdd } = useADDNavbar();

  return (
    <>
      {showAdd && (
        <FormInput
          fields="Employers"
          textOne="Name"
          textTwo="Surname"
          textThree="Role"
          textFour="Phone Number"
          textFive="Salary"
          textSix="Email"
          close={showAddI}
        />
      )}
      <Layout>
        <EmployersPage data={repo} />
      </Layout>
    </>
  );
};

export default Employers;
