import PropTypes from "prop-types";

import css from "./Statistics.module.css"

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statList}>
      <p className={css.statItem}>Good: {good}</p>
      <p className={css.statItem}>Neutral: {neutral}</p>
      <p className={css.statItem}>Bad: {bad}</p>
      <p className={css.statItem}>Total: {total}</p>
      <p className={css.statItem}>
        Positive feedbacks: {`${positivePercentage}%`}
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
}


