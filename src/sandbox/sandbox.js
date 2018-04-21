import React, { Component } from 'react'


let data = {
    menu: [
        {
            name: 'Croatia',
            link: '0',
            sub: null
        }, {
            name: 'England',
            link: '1',
            sub: [{
                name: 'Arsenal',
                link: '0-0',
                sub: null
            }, {
                name: 'Liverpool',
                link: '0-1',
                sub: null
            }, {
                name: 'Manchester United',
                link: '0-2',
                sub: null
            }]
        }, {
            name: 'Spain',
            link: '2',
            sub: [{
                name: 'Barcelona',
                link: '2-0',
                sub: null
            }, {
                name: 'Real Madrid',
                link: '2-1',
                sub: null
            }]
        }, {
            name: 'Germany',
            link: '3',
            sub: [{
                name: 'Bayern Munich',
                link: '3-1',
                sub: null
            }, {
                name: 'Borrusia Dortmund',
                link: '3-2',
                sub: null
            }]
        }]
};

export default class componentName extends Component {

    getMenuItem = (itemData) => {
        let item = "<li>".append(
            $("<a>", {
                href: '#' + itemData.link,
                html: itemData.name
            }));
        if (itemData.sub) {
            let subList = $("<ul>");
            $.each(itemData.sub, () => {
                subList.append(getMenuItem(this));
            });
            item.append(subList);
        }
        return item;
    };
    menu = (data) => { 


        
    }

    render() {
        let menu = (items)=>{
            let m = [...items.menu];
            let mmm = "";
            m.forEach((element)=>{
                
                mmm.a
                    element.name+
                    element.link+
                    element.sub
                )


            });

            $.each(data.menu, () => {
                $menu.append(
                    this.getMenuItem(this)
                );
            });
        };
        
     //   menu.menu();

        return (
            <div>
                {menu(data)}
            </div>
        )
    }
}
