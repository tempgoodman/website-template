const columns = [
  { name: "狀態", uid: "status" },
  { name: "貸款類別", uid: "loanType" },
  { name: "申請編號", uid: "applicationId" },
  { name: "貸款編號", uid: "loanId" },
  { name: "申請日期", uid: "applyDate" },
  { name: "證件編號", uid: "customerId" },
  { name: "名稱", uid: "customerName" },
  { name: "手提號碼", uid: "mobileNumber" },
  { name: "類別", uid: "status2" },
  { name: "黑名單", uid: "blackList", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Paused", uid: "paused" },
  { name: "Vacation", uid: "vacation" },
];

const users = [
  {
    id: 1,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000120",
    loanId: "NEW-00100-01",
    applyDate: "2024-01-26",
    customerId: "M320143(6)",
    customerName: "姚靜",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 2,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000119",
    loanId: "NEW-00099-01",
    applyDate: "2024-01-26",
    customerId: "K824468(5)",
    customerName: "劉思衡",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 3,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000118",
    loanId: "NEW-00098-01",
    applyDate: "2024-01-22",
    customerId: "Y915403(3)",
    customerName: "何䮓㞩",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 4,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000117",
    loanId: "NEW-00097-01",
    applyDate: "2024-01-22",
    customerId: "Y368534(7)",
    customerName: "曾子倩",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 5,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000116",
    loanId: "NEW-00096-01",
    applyDate: "2024-01-18",
    customerId: "Z912058(1)",
    customerName: "梁煦怡",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 6,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000115",
    loanId: "NEW-00050-02",
    applyDate: "2024-01-18",
    customerId: "R675726(9)",
    customerName: "梁春燕",
    mobileNumber: "5",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 7,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000114",
    loanId: "NEW-00037-02",
    applyDate: "2024-01-17",
    customerId: "D135829(5)",
    customerName: "陸衍行",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 8,
    status: "客戶取消",
    loanType: "NEW NA",
    applicationId: "AF000113",
    loanId: null,
    applyDate: "2024-01-16",
    customerId: "K432529(A)",
    customerName: "郭子佳",
    mobileNumber: "5",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 9,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000112",
    loanId: "NEW-00094-01",
    applyDate: "2024-01-15",
    customerId: "C589694(9)",
    customerName: "張敬強",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 10,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000111",
    loanId: "NEW-00028-02",
    applyDate: "2024-01-15",
    customerId: "K497241(4)",
    customerName: "葉家強",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 11,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000110",
    loanId: "NEW-00093-01",
    applyDate: "2024-01-12",
    customerId: "R848960(1)",
    customerName: "張靈",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 12,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000109",
    loanId: "NEW-00092-01",
    applyDate: "2024-01-12",
    customerId: "K747617(5)",
    customerName: "郭錦輝",
    mobileNumber: "5",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 13,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000108",
    loanId: "NEW-00091-01",
    applyDate: "2024-01-11",
    customerId: "D365142(9)",
    customerName: "王秋慧",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 14,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000107",
    loanId: "NEW-00090-01",
    applyDate: "2024-01-11",
    customerId: "P975842(2)",
    customerName: "黃炳智",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 15,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000106",
    loanId: "NEW-00089-01",
    applyDate: "2024-01-11",
    customerId: "G351171(4)",
    customerName: "唐國賢",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 16,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000105",
    loanId: "NEW-00088-01",
    applyDate: "2024-01-10",
    customerId: "H481242(7)",
    customerName: "伍紫蔚",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 17,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000104",
    loanId: "NEW-00012-03",
    applyDate: "2024-01-10",
    customerId: "P315289(1)",
    customerName: "古西聰",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 18,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000103",
    loanId: "NEW-00061-02",
    applyDate: "2024-01-10",
    customerId: "K735155(0)",
    customerName: "周德雄",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 19,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000102",
    loanId: "NEW-00040-02",
    applyDate: "2024-01-08",
    customerId: "P150087(6)",
    customerName: "曾淑貞",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 20,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000101",
    loanId: "NEW-00020-02",
    applyDate: "2024-01-08",
    customerId: "K334035(A)",
    customerName: "陳毅章",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 21,
    status: "待批核",
    loanType: "私人貸款",
    applicationId: "AF000100",
    loanId: null,
    applyDate: "2024-01-05",
    customerId: "R964987(4)",
    customerName: "潘淦成",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 22,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000099",
    loanId: "NEW-00087-01",
    applyDate: "2024-01-05",
    customerId: "Z086632(7)",
    customerName: "鄺梓健",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 23,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000098",
    loanId: "NEW-00086-01",
    applyDate: "2024-01-04",
    customerId: "G190031(4)",
    customerName: "張國良",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 24,
    status: "還款中",
    loanType: "NEW NA",
    applicationId: "AF000097",
    loanId: "NEW-00085-01",
    applyDate: "2024-01-03",
    customerId: "K234689(3)",
    customerName: "康偉信",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 25,
    status: "已完成",
    loanType: "NEW NA",
    applicationId: "AF000096",
    loanId: "NEW-00084-01",
    applyDate: "2024-01-03",
    customerId: "Y518315(2)",
    customerName: "李慧芳",
    mobileNumber: "5",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 26,
    status: "已完成",
    loanType: "私人貸款",
    applicationId: "AF000095",
    loanId: "PL-00083-01",
    applyDate: "2023-12-21",
    customerId: "Y633564(9)",
    customerName: "謝瑋羲",
    mobileNumber: "6",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 27,
    status: "還款中",
    loanType: "私人貸款",
    applicationId: "AF000094",
    loanId: "PL-00082-01",
    applyDate: "2023-12-21",
    customerId: "E948093(9)",
    customerName: "林炳耀",
    mobileNumber: "9",
    status2: "申請人",
    blackList: null,
  },
  {
    id: 28,
    status: "還款中",
    loanType: "私人貸款",
    applicationId: "AF000093",
    loanId: "PL-00081-01",
    applyDate: "2023-12-19",
    customerId: "K935561(8)",
    customerName: "陳文輝",
    mobileNumber: "5",
    status2: "申請人",
    blackList: null,
  },
];

export { columns, users, statusOptions };
