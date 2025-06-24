
interface Props {
  total: number;
}

function TotalBudget({ total }: Props) {
  return (

    <div className="mt-8 text-right text-2xl font-semibold">
      Total: {total} €
    </div>
  );
}

export default TotalBudget