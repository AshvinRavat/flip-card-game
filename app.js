const app = Vue.createApp({
    data() {
        return {
            cardIndexes : [],
            matchingCount : 0,
            cards : [
                {
                    id:1,
                    color:'primary',
                    showColor: false
                    
                },
                {
                    id:2,
                    color:'success',
                    showColor: false
                    
                },
                {
                    id:3,
                    color:'primary',
                    showColor: false
                    
                },
                {
                    id:4,
                    color:'success',
                    showColor: false
                    
                },
                {
                    id:5,
                    color:'secondary',
                    showColor: false
                    
                },
                {
                    id:6,
                    color:'secondary',
                    showColor: false
                },
            ]
        }
    },
    methods : {
        flipCard(index)
        {
            this.shuffledCards[index].showColor = true;
            this.cardIndexes.push(index);
            
            if (this.cardIndexes.length > 1)
            {
                var firstItem = this.shuffledCards[this.cardIndexes[0]];
                var secondItem = this.shuffledCards[this.cardIndexes[1]];
                if (firstItem.color == secondItem.color)
                {
                    setTimeout(() => {  
                        const idsToRemove = []
                        idsToRemove.push(firstItem.id);
                        idsToRemove.push(secondItem.id);
                        this.cards = this.cards.filter(card => !idsToRemove.includes(card.id));

                        alert('matched');
                        this.matchingCount++;
                        
                        if (this.cards.length == 0)
                        {
                            alert('Congo! you have won');
                        }
                        }, 2000);
                        
                }
                else {
                    setTimeout(() => {
                        firstItem.showColor = false;
                        secondItem.showColor = false;
                        alert('opp! try again');
                        }, 1000);
                }

                this.cardIndexes = [];
            }
        },

    },

    computed : {
    shuffledCards() {
        return this.cards
            .map((card) => ({ card, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ card }) => card)
        }

    }

})
 