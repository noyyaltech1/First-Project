
const list1 = [1,2,3]
const list2 = ['a', 'b','c']
const list3 = [true, false]

const lists = {
    list1,
    list2,
    list3
}

/*lists = {
list1 : [1,2,3],
list2 : ['a','b','c'],
list3: [true, false],
}
*/


function TestDropdown (){
    const [isOpen, setIsOpen] = useState(null)
    const [search, setSearch] = useState('')

    const onClickOutside = () => {
        setIsOpen(null)
        setSearch('')
    }


    const openList = ({target : {name}}) => {
        const getVal = (prevState) => ((prevState === name) ? null : name)
        setIsOpen(getVal)
        // setIsOpen(prevState => ((prevState === name) ? null : name))
        setSearch('')
    }

    const filterData = useMemo(() => {
        if(!isOpen) return []
        return lists[isOpen].map(li => li.contains(search))
        const filter = (li = []) =>  li.map(l => l.contains(search))
        switch(isOpen){
            case 'list1': return filter(list1)
            case 'list2': return filter(list1)
            case 'list3': return filter(list1)
        }
    }, [isOpen, search])

    return (
        <>
        <button name='list1' onClick={(e) => openList(e)}>List 1</button>
        {
        isOpen === 'list1' && <>
        <input />
        <list />
        </>
        }
        <button name='list2' onClick={openList}>List 2</button>
        <button name='list3' onClick={openList}>List 3</button>
        </>
    )
}