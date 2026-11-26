class Solution {
    shortestBridge(grid) {
        const queue = []
        let currQueueEl = 0
        const directions = [[0,1], [0,-1], [1,0], [-1,0]]

        for (let row = 0; row < grid.length; row++) {
            for (let col = 0; col < grid[0].length; col++) {
                if (grid[row][col] === 1) {
                    queue.push([row, col])
                    grid[row][col] = 2
                    break
                }
            }
            if (queue.length > 0) break
        }

        while (currQueueEl < queue.length) {
            const [currRow, currCol] = queue[currQueueEl]
            currQueueEl++

            const neighborCandidates = directions.map(
                ([row, col]) => [currRow + row, currCol + col]
            )

            neighborCandidates.forEach(([row, col]) => {
                if (
                    row < 0 || col < 0 ||
                    row >= grid.length ||
                    col >= grid[0].length ||
                    grid[row][col] !== 1
                ) {
                    return
                }

                queue.push([row, col])
                grid[row][col] = 2
            })
        }

        currQueueEl = 0
        let currDistance = 0
        let currLayerEls = queue.length

        while (currQueueEl < queue.length) {

            if (currQueueEl === currLayerEls) {
                currLayerEls = queue.length
                currDistance++
            }

            const [currRow, currCol] = queue[currQueueEl]
            currQueueEl++

            const neighborCandidates = directions.map(
                ([row, col]) => [currRow + row, currCol + col]
            )

            for (const [row, col] of neighborCandidates) {
                if (
                    row < 0 || col < 0 ||
                    row >= grid.length ||
                    col >= grid[0].length
                ) {
                    continue
                }

                if (grid[row][col] === 1) {
                    return currDistance
                }

                if (grid[row][col] !== 0) {
                    continue
                }

                queue.push([row, col])
                grid[row][col] = 2
            }
        }
    }
}

// esse exercício quer que eu encontre o shortest path entre uma ilha e outra
// seria o shortest path pela água, então no caminho ignoramos 1s
// o problema que eu ainda não sei resolver: pra achar o shortest path eu começo por onde?
// alternativas:
// 1. não escolher um tile especifico, fazer de todos pra todos
// downside: infinitas comparações ahahahahaha
// 2. ver entre os tiles das ilhas qual a menor diferença de coordenadas 
// (tb requer um trabalhinho chato)
// isso nos leva a outro problema: como vamos fazer pra identificar as ilhas? precisamos disso? Eu acredito fortemente que sim. Se não, como diferenciamos entre um 1 qualquer e os 1 que vamos usar pra fazer o shortest path?

// acho que já sei! a ideia é: o BFS se desdobra como camadas (tipo de uma cebola)
// a cada camada que ele frequenta, eu posso guardar a qual camada pertence aquele node (isso a partir do top left), aí enquanto isso eu tb descubro quais 1s estão numa ilha, aí depois eu pego as camadas da outra ilha, comparo com essa primeira ilha até obter a menor diferença

// opa, refinando: eu posso primeiro identificar quais nodes são pertencentes a ilha e depois fazer uma outra iteração saindo de um ponto qualquer da primeira ilha, se eu encontrar um outro node dessa mesma ilha eu não atualizo o counter de distancia. Faço isso até chegar no primeiro elemento da outra ilha que eu conseguir achar (tudo isso com BFS)


