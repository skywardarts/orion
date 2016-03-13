function AI() {
        
}

AI.prototype.init = function(mapData) {
        var mazeWidth = 32;
        var mazeHeight = 32;

        var convertedLevel = [];
        var originalLevel = mapData;

        for (var i = 0, l = Math.floor(originalLevel.length / 32); i < l; ++i) {
            var row = originalLevel.slice(i * 32, i * 32 + 32);

            convertedLevel.push(row);
        }

        this.easystar = new EasyStar.js();
        this.easystar.setGrid(convertedLevel);
        this.easystar.setAcceptableTiles([0]);
        // easystar.enableDiagonals();
        //easystar.disableCornerCutting();
        // easystar.enableCornerCutting();


        // self.currentPlayerXtile = Math.floor(self.player.sprite.x / 16);
        // self.currentPlayerYtile = Math.floor(self.player.sprite.y / 16);
        // self.currentGhostXtile = Math.floor(self.enemy.sprite.x / 16);
        // self.currentGhostYtile = Math.floor(self.enemy.sprite.y / 16);
        // if (this.playerId === this.hostId) {
        //     var timeStep = 400;
        //
        //     setInterval(function() { 
        //            if (!currentPath) {
        //                 this.easystar.findPath(this.currentGhostXtile, this.currentGhostYtile, this.currentPlayerXtile, this.currentPlayerYtile, function( path ) {
        //
        //                     if (!path || path.length < 2) {
        //                         console.log("The path to the destination point was not found.");
        //                         return;
        //                     }
        //
        //                     currentPath = path;  
        //
        //                     // Periodically reset
        //                     setTimeout(function() {
        //                         currentPathIndex = 0;
        //                         currentPath = null;
        //                     }, 3000);           
        //                 }.bind(this));
        //
        //            }
        //          this.easystar.calculate();
        //
        //     if (currentPath && currentPathIndex < currentPath.length) {
        //         enemy.sprite.x = Math.floor(currentPath[currentPathIndex].x) * 16;
        //         enemy.sprite.y = Math.floor(currentPath[currentPathIndex].y) * 16;
        //
        //             if (currentPathIndex < currentPath.length-1) {
        //                 ++currentPathIndex;
        //             } else {
        //                 currentPathIndex = 0;
        //                 currentPath = null;
        //             }
        //     }
        //
        //     }.bind(this), 100);
        // }
};