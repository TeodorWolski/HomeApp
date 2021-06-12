import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UserTemplate from 'templates/UserTemplate';
import BudgetCard from 'components/molecules/BudgetCard/BudgetCard';
import Heading from 'components/atoms/Heading/Heading';
import MoneyBar from 'components/atoms/MoneyBar/MoneyBar';
import { Line } from 'react-chartjs-2';
import { api, endpoints } from 'api';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  top: 0;
`;

const StyledHeading = styled(Heading)`
  margin-top: 0;
  padding-top: 40px;
  display: block;
`;

const StyledBudgetCard = styled(BudgetCard)`
  width: 700px;
`;

const BudgetPage = () => {
  const [budget, setBudget] = useState(['']);
  const [money, setMoney] = useState(['']);

  useEffect(() => {
    api
      .get(endpoints.budget)
      .then(({ data }) => {
        setBudget(data.spendings);
        console.log(budget);
      })
      .then((data) => {
        setMoney(Object.values(data.amount));
      })
      .catch((err) => console.log(err));
  }, []);

  const BarData = {
    labels: [
      'Styczeń',
      'Luty',
      'Marzec',
      'Kwiecień',
      'Maj',
      'Czerwiec',
      'Lipiec',
      'Sierpień',
      'Październik',
      'Listopad',
      'Grudzień',
    ],
    datasets: [
      {
        label: 'Wpływy do domu',
        data: [3000, 2000, 5000, 9000, 3000, 12000, 1200, 3000, 8000, 3000, 5000, 6000],
        fill: false,
        backgroundColor: '#25C998',
        borderColor: '#25C998',
      },
    ],
  };
  return (
    <UserTemplate>
      <StyledHeading big>Przeanalizuj swoje wydatki!</StyledHeading>
      <StyledWrapper>
        <BudgetCard>
          {budget.map(({ name, amount, id }) => (
            <MoneyBar name={name} amount={amount} key={id} />
          ))}
        </BudgetCard>
        <StyledBudgetCard>
          <Line data={BarData} />
        </StyledBudgetCard>
      </StyledWrapper>
    </UserTemplate>
  );
};

export default BudgetPage;
