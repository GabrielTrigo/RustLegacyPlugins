       // @@@ ---  Creator SPooCK --- @@@   //
      //   @@@ --- Wiper Addons --- @@@    //
     //   @@@ --- Version 1.0.2 --- @@@   //
    //  								 //
   // 		░░░░░███████ ]▄▄▄▄▄▄▄▄  	//
  //		▂▄▅█████████▅▄▃▂      	   //
 //		Il███████████████████].	  	  //
// 		 ◥⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙▲⊙◤..  	 //

function On_Command(e,t){e.Admin&&"wipehit"==t&&(Data.AddTableValue("Wiper",e.SteamID,!Wiper(e)),e.Notice("Wipe hit is now "+(Wiper(e)?"ENABLED.":"DISABLED.")),WiperS&&Data.AddTableValue("WiperS",e.SteamID,!WiperS(e))),e.Admin&&"wshow"==t&&(Data.AddTableValue("WiperS",e.SteamID,!WiperS(e)),e.Notice("Health on hit is "+(WiperS(e)?"ENABLED.":"DISABLED.")))}function On_EntityHurt(e){if(null!=e.Attacker&&null!=e.Entity&&null!=e.WeaponName&&Wiper(e.Attacker)&&(e.Entity.IsStructure()||e.Entity.IsDeployableObject())){var t=e.Entity.CreatorID.ToString();e.Attacker.MessageFrom("Wiper","You wiped all objects for ID: [color#FF0000]"+t);for(var a in World.Entities)if(0!=a.Health){var r=a.CreatorID.ToString();r==t?Util.DestroyObject(a.Object.gameObject):e.Attacker.Notice("Can't find the owner of "+e)}}if(null!=e.Attacker&&null!=e.Entity&&null!=e.WeaponName&&WiperS(e.Attacker)&&(e.Entity.IsStructure()||e.Entity.IsDeployableObject())){var t=e.Entity.CreatorID.ToString(),i=e.Entity.Name,n=e.Entity.Health;0!=n&&(e.Entity.Health=n+e.DamageAmount,e.Attacker.MessageFrom("Wiper","Object [color#1F45FC]"+i+"[/color] health is [color#FF0000] "+n),e.Attacker.MessageFrom("Wiper","Object ID: [color#FF0000]"+t))}}function Wiper(e){var t=Data.GetTableValue("Wiper",e.SteamID);return null==t?!1:t}function WiperS(e){var t=Data.GetTableValue("WiperS",e.SteamID);return null==t?!1:t}function On_PlayerDisconnected(e){Wiper(e)&&Data.AddTableValue("Wiper",e.SteamID,!Wiper(e)),WiperS(e)&&Data.AddTableValue("WiperS",e.SteamID,!WiperS(e))}