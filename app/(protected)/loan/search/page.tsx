import { Divider } from "@nextui-org/react";

import LoanSearchResult from "../_components/search-result";
import SearchPanel from "../_components/search-panel";

import CBreadcrumbs from "@/components/cBreadcrumbs";

export default function LoanPage() {
  var searchField = [
    {
      fieldName: "loadId",
      displayName: "編號",
      objectType: "text",
      placeholder: "Please enter the loan ID",
    },
    {
      fieldName: "customerId",
      displayName: "證件編號",
      objectType: "text",
      placeholder: "Please enter the customer ID",
    },
    {
      fieldName: "phoneNumber",
      displayName: "電話號碼",
      objectType: "text",
      placeholder: "Please enter the phone no.",
    },
    {
      fieldName: "customerName",
      displayName: "名稱",
      objectType: "text",
      placeholder: "Please enter the customer name",
    },
    {
      fieldName: "date",
      displayName: "Date",
      objectType: "date",
      placeholder: "",
    },
    {
      fieldName: "branch",
      displayName: "店舖",
      objectType: "select",
      placeholder: "please select the branch",
    },
    {
      fieldName: "status",
      displayName: "狀態",
      objectType: "select",
      placeholder: "Select the status",
    },
  ];

  return (
    <>
      <CBreadcrumbs />
      <div className="inline-block">
        <Divider className="my-4" />
        <SearchPanel fields={searchField} />
      </div>
      <div className="pt-4">
        <LoanSearchResult />
      </div>
    </>
  );
}
