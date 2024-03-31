const CryptoTable = () => {
    const data = [
      {
        "Validator": "Coinbase Custody",
        "Validating": "Cosmos, Netron",
        "VP": "6.98%",
        "Score": "8122",
        "Comm": "$146,251"
      },
    ];
  
    const shouldAddEmptyRows = data.length < 7;
    const numberOfColumns = 5; 
  
    return (
      <div className = "">
        <table className="w-full text-white/[0.80] text-[14px] bg-inherit">
          <thead className="">
            <tr className='border-b-2 border-white/[.20] text-left'>
              <th className="">
                  <span className='mr-[20px]'>|</span>Validator
              </th>
              <th className="">
                  <span className='mr-[20px]'>|</span>Validating
              </th>
              <th className="">
                  <span className='mr-[20px]'>|</span>VP
              </th>
              <th className="">
                  <span className='mr-[20px]'>|</span>Score
              </th>
              <th className="">
                  <span className='mr-[20px]'>|</span>Comm
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-[2px] divide-white/[.20]">
            {data.map((item, index) => (
              <tr key={index} className=''>
                <td className="h-[50px]"><div className='flex relative'><span className='mr-[40px]'>|</span>
                <div className='w-[17px] h-[17px] bg-gray-400 rounded-full mr-[5px] absolute top-[2px] left-[22px]'/>
                {item.Validator}</div></td>
                <td className="h-[50px]"><span className='mr-[20px]'>|</span>{item.Validating}</td>
                <td className="h-[50px]"><span className='mr-[20px]'>|</span>{item.VP}</td>
                <td className="h-[50px]"><span className='mr-[20px]'>|</span>{item.Score}</td>
                <td className="h-[50px]"><span className='mr-[20px]'>|</span>{item.Comm}</td>
              </tr>
            ))}
  
              {shouldAddEmptyRows &&
                  Array.from({ length: 7 - data.length }).map((_, index) => (
                  <tr key={`empty-${index}`} className='border-b-2 border-white/[.20]'>
                      <td colSpan={numberOfColumns} className="h-[50px]"></td>
                  </tr>
                  ))}
          </tbody>
        </table>
      </div>
    );
  };
  


export default CryptoTable
