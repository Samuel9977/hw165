
AFRAME.registerComponent("enemy-fireballs", {
    init: function () {        
  // add on the function to call shootEnemyMonster
    },
    shootEnemyMonster: function () {
        var scene = document.querySelector("#scene");

        //enemyMonster entity
        var enemyMonster = document.querySelectorAll(".enemy");   
            
        for (var i = 0; i < enemyMonster.length; i++) {

       //create fireballs
        var fireball = document.createElement("a-entity");

        fireball.setAttribute("class","fireball")
        fireball.setAttribute("gltf-model", "./models/fireball/scene.gltf");
        fireball.setAttribute("dynamic-body", { mass: 0 });
     
        var pos=enemyMonster[i].getAttribute("position")

        fireball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
        });
        fireball.setAttribute("scale", {
            x: 0.05,
            y: 0.05,
            z: 0.05,
        });

        scene.appendChild(fireball);      

       
        //set the velocity and it's direction
        var direction= new THREE.Vector3()
        direction.subVectors(position1, position2).normalize()
        fireball.setAttribute('velocity',direction.muliplyScalar(20))
      
        /******************************************************************************************* */

        //check player life
        
       
        //collide event on enemy bullets
        fireball.addEventListener("collide", function (e) {
           
            if (e.detail.body.el.id === "weapon") {               
         

                

            }
        });

    }
    },
    

});
