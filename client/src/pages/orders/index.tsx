import { Layout } from "@/app/Components/Layout/Layout";
import { OrdersPage } from "@/app/Components/MainComp/OrdersPage";
import "./../style/globals.css";

export const index = () => {
  return (
    <>
      <Layout>
        <OrdersPage />
      </Layout>
    </>
  );
};
