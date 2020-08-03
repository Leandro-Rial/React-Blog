const initState = {
    projects: [
        {id: '1', title: 'titulo ejemplo', content: 'qwertyasdfg Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae dolorum eum ducimus voluptatum ea natus, accusantium, earum nulla amet consequatur facilis quibusdam! Est modi facilis hic voluptatibus voluptatem iste excepturi possimus eaque dolor odio?'},
        {id: '2', title: 'titulo ejemplo #2', content: 'qwertyasdfg Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae dolorum eum ducimus voluptatum ea natus, accusantium, earum nulla amet consequatur facilis quibusdam! Est modi facilis hic voluptatibus voluptatem iste excepturi possimus eaque dolor odio?'},
        {id: '3', title: 'titulo ejemplo #3', content: 'qwertyasdfg Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae dolorum eum ducimus voluptatum ea natus, accusantium, earum nulla amet consequatur facilis quibusdam! Est modi facilis hic voluptatibus voluptatem iste excepturi possimus eaque dolor odio?'},
        {id: '4', title: 'titulo ejemplo #4', content: 'qwertyasdfg Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae dolorum eum ducimus voluptatum ea natus, accusantium, earum nulla amet consequatur facilis quibusdam! Est modi facilis hic voluptatibus voluptatem iste excepturi possimus eaque dolor odio?'},
        {id: '5', title: 'titulo ejemplo #5', content: 'qwertyasdfg Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati repudiandae dolorum eum ducimus voluptatum ea natus, accusantium, earum nulla amet consequatur facilis quibusdam! Est modi facilis hic voluptatibus voluptatem iste excepturi possimus eaque dolor odio?'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project)
    }
    return state
}

export default projectReducer