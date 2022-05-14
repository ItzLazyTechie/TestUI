import BeneficiaryTable from './BeneficiaryTable';
import BeneficiaryContextProvider from './BeneficiaryContext';

function App() {
  return (
    <div className="container-xl">
      <div className="table-responsive">
        <div className="table-wrapper">
          <BeneficiaryContextProvider>
            <BeneficiaryTable />
          </BeneficiaryContextProvider>
        </div>
      </div>
    </div>

  );
}

export default App;
