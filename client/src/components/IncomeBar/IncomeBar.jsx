import css from "../IncomeBar/IncomeBar.module.css";

import { useState } from "react";

const IncomeBar = ({ onClickIncome, onClickExpense, expenseState }) => {
  return (
    <div className={css.incomeBox}>
      <div className={css.incomeText}>
        {!expenseState && <span className={css.income}>Income</span>}
        {expenseState && (
          <span className={css.incomeNotActive} onClick={onClickIncome}>
            Income
          </span>
        )}
        <span className={css.rectangle}></span>
        {!expenseState && (
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.greenCircle}
          >
            <g filter="url(#filter0_d_7_318)">
              <circle cx="37" cy="31" r="22" fill="#24CCA7" />
            </g>
            <path d="M37 21V41" stroke="white" strokeWidth="2" />
            <path d="M27 31L47 31" stroke="white" strokeWidth="2" />
            <defs>
              <filter
                id="filter0_d_7_318"
                x="0"
                y="0"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.141176 0 0 0 0 0.8 0 0 0 0 0.654902 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_7_318"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_7_318"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
        {expenseState && (
          <svg
            width="74"
            height="74"
            viewBox="0 0 74 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={css.redCircle}
          >
            <g filter="url(#filter0_d_7_375)">
              <circle cx="37" cy="31" r="22" fill="#FF6596" />
            </g>
            <path d="M27 31L47 31" stroke="white" strokeWidth="2" />
            <defs>
              <filter
                id="filter0_d_7_375"
                x="0"
                y="0"
                width="74"
                height="74"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="6" />
                <feGaussianBlur stdDeviation="7.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 0.395833 0 0 0 0 0.589401 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_7_375"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_7_375"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        )}
        {expenseState && <span className={css.expense}>Expense</span>}
        {!expenseState && (
          <span className={css.expenseNotActive} onClick={onClickExpense}>
            Expense
          </span>
        )}
      </div>
    </div>
  );
};

export default IncomeBar;
