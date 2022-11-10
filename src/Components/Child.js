import { useEffect, useState } from "react"

export const Child = ({ data }) => {
    const [dataFromParent, setDataFromParent] = useState()
    const [dataType, setDataType] = useState();
    const [keysOfData, setKeysOfData] = useState()
    useEffect(() => {
        if (data !== undefined && data !== "" && data !== null) {
            if (data.length > 0) {
                setDataFromParent(data)
                setKeysOfData(Object.keys(data[0]))
                setDataType("array")
            }
            else {
                setDataFromParent(data)
                setDataType("object")
            }
        }
    }, [])
    return (
        <>
            {console.log("keys-- " + JSON.stringify(keysOfData))}
            {dataType === 'object' &&
                <table>
                    <thead>
                        {Object.keys(dataFromParent).map(key => {
                            return (
                                <th>{key}</th>
                            )
                        })
                        }
                    </thead>
                    <tbody>
                        <tr>
                            {Object.entries(dataFromParent).map(([key, value]) => {
                                return (
                                    <td>{value}</td>
                                )
                            })
                            }
                        </tr>
                    </tbody>
                </table>
            }
            {dataType === 'array' &&
                <table>
                    <thead>
                        {keysOfData.map(key => {
                            return (
                                <th>{key}</th>
                            )
                        })
                        }
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            let keys = Object.keys(item)
                            return (
                                <tr>
                                    {keys.map(key => {
                                        return (
                                            <td>{item[key]}</td>
                                        )
                                    })
                                    }
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}