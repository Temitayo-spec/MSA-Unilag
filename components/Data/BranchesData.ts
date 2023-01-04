interface IFBranchesData {
  id: number;
  name: string;
  description: string;
  src: string;
  link: string;
}

export const branchesData: IFBranchesData[] = [
  {
    id: 1,
    name: 'Accounting - NUASA',
    description:
      'Accounting, also known as accountancy, is the measurement, processing, and communication of financial and non financial information about economic entities such as businesses and corporations.',
    src: '/images/branches-logos/Accounting-logo.jpeg',
    link: '/associations/department-associations/NUASA/',
  },
  {
    id: 2,
    name: 'Acturial Science and Insurance - ASISA',
    description:
      'Actuarial science is the discipline that applies mathematical and statistical methods to assess risk in insurance, finance, and other industries and professions. Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.',
    src: '/images/branches-logos/Asisa-logo.jpg',
    link: '/associations/department-associations/ASISA/',
  },
  {
    id: 3,
    name: 'Business Administration - BSA',
    description:
      'Business administration is the administration of a commercial enterprise. It includes all aspects of overseeing and supervising business operations.',
    src: '/images/branches-logos/Bsa-logo.jpg',
    link: '/associations/department-associations/BSA/',
  },
  {
    id: 4,
    name: 'Employee Relations and Human Resource Management - ER&HRMSA',
    description:
      'The study that refers to an organization’s efforts to create and maintain a positive relationship with its employees.By maintaining positive, constructive employee relations, organizations hope to keep employees loyal and more engaged in their work.',
    src: '/images/branches-logos/EHRMSA-logo.jpg',
    link: '/associations/department-associations/ERHRMSA/',
  },
  {
    id: 5,
    name: 'Finance - FINSA',
    description:
      'Understanding the acquisition and handling of monies on behalf of the organization, and how the finance department controls the income and expenditure in addition to ensuring effective business running with minimum disruptions. Besides the traditional roles of handling the payroll, income and expenses, finance department responsibilities also include economic analysis to improve key business strategies.',
    src: '/images/branches-logos/Finsa-logo.jpeg',
    link: '/associations/department-associations/FINSA/',
  },
];
