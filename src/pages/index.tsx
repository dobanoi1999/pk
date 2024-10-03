import { useEffect, useState } from "react";


export default function Index() {
  const [chessBoard, setChessBoard] = useState<Array<Array<number>>>([]);

  const randomChessBoard = () => {
    const valueList = [1,2,3,4,5,6,7,8,9,10]
    const numberAppear: Map< typeof valueList[number] , number> = new Map()
    const data = Array(10).fill(null).map(()=>Array(10).fill(null).map(()=>{
      const value = valueList[Math.floor(Math.random() * valueList.length)]
      const numberValueAppear = numberAppear.get(value) || 0
      while (numberValueAppear !== 10) {
        numberAppear.set(value, numberValueAppear + 1)
      }
      return value
    }))
    setChessBoard(data)
  }

  useEffect(()=>{
    randomChessBoard()
  },[])

  return (
    <div className="m-10 w-[700px]">
      {chessBoard.map((row, rowIndex) => {
        return (
          <div className="flex flex-row">
            {row.map((column, columnIndex) => {
              return (
                <div className="w-[70px] h-[70px] p-px">
                  <div className="h-full w-full bg-red-800 flex justify-center align-items-center items-center">
                    <span className="text-center text-white">
                      {rowIndex}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
