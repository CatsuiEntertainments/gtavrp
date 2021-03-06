/**
 * Aborts the current message in the text chat.
 */
declare function AbortTextChat(): void;

declare function Absf(value: number): number;

declare function Absi(value: number): number;

declare function Acos(p0: number): number;

declare function ActivateDamageTrackerOnNetworkId(netID: number, p1: boolean): void;

/**
 * Does stuff like this:
 * gyazo.com/7fcb78ea3520e3dbc5b2c0c0f3712617
 * Example:
 * int GetHash = GET_HASH_KEY("fe_menu_version_corona_lobby");
 * ACTIVATE_FRONTEND_MENU(GetHash, 0, -1);
 * BOOL p1 is a toggle to define the game in pause.
 * int p2 is unknown but -1 always works, not sure why though.
 * [30/03/2017] ins1de :
 * the int p2 is actually a component variable. When the pause menu is visible, it opens the tab related to it.
 * Example : Function.Call(Hash.ACTIVATE_FRONTEND_MENU,-1171018317, 0, 42);
 * Result : Opens the "Online" tab without pausing the menu, with -1 it opens the map.
 */
declare function ActivateFrontendMenu(menuhash: string | number, Toggle_Pause: boolean, component: number): void;

/**
 * seems to be frequently used with the NETWORK::NET_TO_x natives, particularly with vehicles. It is often the only ROPE:: native in a script.
 */
declare function ActivatePhysics(entity: number): void;

/**
 * Show Rockstar Editor Menu
 * by I'm Not MentaL
 * ----------
 * "new_editor" menu
 */
declare function ActivateRockstarEditor(): void;
/**
 * Show Rockstar Editor Menu
 * by I'm Not MentaL
 * ----------
 * "new_editor" menu
 */
declare function N_0x49da8145672b2725(): void;

declare function AddAmmoToPed(ped: number, weaponHash: string | number, ammo: number): void;

/**
 * Same as SET_PED_ARMOUR, but ADDS 'amount' to the armor the Ped already has.
 */
declare function AddArmourToPed(ped: number, amount: number): void;

/**
 * Creates an orange ( default ) Blip-object. Returns a Blip-object which can then be modified.
 */
declare function AddBlipForCoord(x: number, y: number, z: number): number;

/**
 * Returns red ( default ) blip attached to entity.
 * Example:
 * Blip blip; //Put this outside your case or option
 * blip = UI::ADD_BLIP_FOR_ENTITY(YourPedOrBodyguardName);
 * UI::SET_BLIP_AS_FRIENDLY(blip, true);
 */
declare function AddBlipForEntity(entity: number): number;

declare function AddBlipForPickup(pickup: number): number;

declare function AddBlipForRadius(posX: number, posY: number, posZ: number, radius: number): number;

/**
 * I filled p1-p6 (the floats) as they are as other natives with 6 floats in a row are similar and I see no other method. So if a test from anyone proves them wrong please correct.
 * p7 (length) determines the length of the spline, affects camera path and duration of transition between previous node and this one
 * p8 big values ~100 will slow down the camera movement before reaching this node
 * p9 != 0 seems to override the rotation/pitch (bool?)
 */
declare function AddCamSplineNode(camera: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, length: number, p8: number, p9: number): void;

/**
 * Now has 15 parameters, previous declaration:
 * BOOL _0x428BDCB9DA58DA53(Any p0, Any p1, Any p2, float p3, float p4, float p5, float p6, float p7, float p8, float p9, float p10, float p11, float p12, Any p13)
 * boneIndex is always chassis_dummy in the scripts. The x/y/z params are location relative to the chassis bone. They are usually rotations and measurements. Haven't reversed which are what yet.
 * Scale is how big the decal will be.
 * p13 is always 0.
 * For alpha, 200 seems to match what the game is doing, I think. I don't have access to the new scripts to see what this parameter is, but based on guessing this seems (kind of) accurate.
 */
declare function AddClanDecalToVehicle(vehicle: number, ped: number, boneIndex: number, x1: number, x2: number, x3: number, y1: number, y2: number, y3: number, z1: number, z2: number, z3: number, scale: number, p13: number, alpha: number): number;

declare function AddCoverBlockingArea(playerX: number, playerY: number, playerZ: number, radiusX: number, radiusY: number, radiusZ: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): void;

declare function AddCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): number;

/**
 * decal types:
 * public enum DecalTypes
 * {
 * splatters_blood = 1010,
 * splatters_blood_dir = 1015,
 * splatters_blood_mist = 1017,
 * splatters_mud = 1020,
 * splatters_paint = 1030,
 * splatters_water = 1040,
 * splatters_water_hydrant = 1050,
 * splatters_blood2 = 1110,
 * weapImpact_metal = 4010,
 * weapImpact_concrete = 4020,
 * weapImpact_mattress = 4030,
 * weapImpact_mud = 4032,
 * weapImpact_wood = 4050,
 * weapImpact_sand = 4053,
 * weapImpact_cardboard = 4040,
 * weapImpact_melee_glass = 4100,
 * weapImpact_glass_blood = 4102,
 * weapImpact_glass_blood2 = 4104,
 * weapImpact_shotgun_paper = 4200,
 * weapImpact_shotgun_mattress,
 * weapImpact_shotgun_metal,
 * weapImpact_shotgun_wood,
 * weapImpact_shotgun_dirt,
 * weapImpact_shotgun_tvscreen,
 * weapImpact_shotgun_tvscreen2,
 * weapImpact_shotgun_tvscreen3,
 * weapImpact_melee_concrete = 4310,
 * weapImpact_melee_wood = 4312,
 * weapImpact_melee_metal = 4314,
 * burn1 = 4421,
 * burn2,
 * burn3,
 * burn4,
 * burn5,
 * bang_concrete_bang = 5000,
 * bang_concrete_bang2,
 * bang_bullet_bang,
 * bang_bullet_bang2 = 5004,
 * bang_glass = 5031,
 * bang_glass2,
 * solidPool_water = 9000,
 * solidPool_blood,
 * solidPool_oil,
 * solidPool_petrol,
 * solidPool_mud,
 * porousPool_water,
 * porousPool_blood,
 * porousPool_oil,
 * porousPool_petrol,
 * porousPool_mud,
 * porousPool_water_ped_drip,
 * liquidTrail_water = 9050
 * }
 */
declare function AddDecal(decalType: number, posX: number, posY: number, posZ: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, width: number, height: number, rCoef: number, gCoef: number, bCoef: number, opacity: number, timeout: number, p17: boolean, p18: boolean, p19: boolean): number;

declare function AddDoorToSystem(doorHash: string | number, modelHash: string | number, x: number, y: number, z: number, p5: boolean, p6: boolean, p7: boolean): void;

/**
 * Example:
 * GRAPHICS::ADD_ENTITY_ICON(a_0, "MP_Arrow");
 * I tried this and nothing happened...
 */
declare function AddEntityIcon(entity: number, icon: string): number;

/**
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 * this native is missing a new argument: noDamage
 * nodamage = false: damage || nodamage = true: no damage
 * enum ExplosionTypes
 * {
 * EXPLOSION_GRENADE,
 * EXPLOSION_GRENADELAUNCHER,
 * EXPLOSION_STICKYBOMB,
 * EXPLOSION_MOLOTOV,
 * EXPLOSION_ROCKET,
 * EXPLOSION_TANKSHELL,
 * EXPLOSION_HI_OCTANE,
 * EXPLOSION_CAR,
 * EXPLOSION_PLANE,
 * EXPLOSION_PETROL_PUMP,
 * EXPLOSION_BIKE,
 * EXPLOSION_DIR_STEAM,
 * EXPLOSION_DIR_FLAME,
 * EXPLOSION_DIR_WATER_HYDRANT,
 * EXPLOSION_DIR_GAS_CANISTER,
 * EXPLOSION_BOAT,
 * EXPLOSION_SHIP_DESTROY,
 * EXPLOSION_TRUCK,
 * EXPLOSION_BULLET,
 * EXPLOSION_SMOKEGRENADELAUNCHER,
 * EXPLOSION_SMOKEGRENADE,
 * EXPLOSION_BZGAS,
 * EXPLOSION_FLARE,
 * EXPLOSION_GAS_CANISTER,
 * EXPLOSION_EXTINGUISHER,
 * EXPLOSION_PROGRAMMABLEAR,
 * EXPLOSION_TRAIN,
 * EXPLOSION_BARREL,
 * EXPLOSION_PROPANE,
 * EXPLOSION_BLIMP,
 * EXPLOSION_DIR_FLAME_EXPLODE,
 * EXPLOSION_TANKER,
 * EXPLOSION_PLANE_ROCKET,
 * EXPLOSION_VEHICLE_BULLET,
 * EXPLOSION_GAS_TANK,
 * EXPLOSION_BIRD_CRAP
 * };
 */
declare function AddExplosion(x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

declare function AddExplosionWithUserVfx(x: number, y: number, z: number, explosionType: number, explosionFx: string | number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;
declare function AddSpecfxExplosion(x: number, y: number, z: number, explosionType: number, explosionFx: string | number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

/**
 * Seems to add/set the current menu context (to show/hide buttons?)
 * Pausemenu.xml:
 * &lt;Contexts&gt;*ALL*, DISPLAY_CORONA_BUTTONS, *NONE*, BET_LOCKED, BET_AVAILABLE, SCROLL_OPTION&lt;/Contexts&gt;
 * Code:
 * if (...) {
 * sub_bbd34(a_0, 0, "FM_BET_HELP");
 * UI::_DD564BDD0472C936(${bet_available}); // This native
 * UI::OBJECT_DECAL_TOGGLE(${bet_locked});
 * } else {
 * sub_bbd34(a_0, 0, "");
 * UI::OBJECT_DECAL_TOGGLE(${bet_available});
 * UI::_DD564BDD0472C936(${bet_locked}); // This native
 * }
 * OBJECT_DECAL_TOGGLE seems to remove a context, It also has a hash collision
 * // Old
 * Scripts do not make this native's purpose clear. However, this native most likely has something to do with decals since in nearly every instance, "OBJECT_DECAL_TOGGLE" is called prior.
 */
declare function AddFrontendMenuContext(hash: string | number): void;
/**
 * Seems to add/set the current menu context (to show/hide buttons?)
 * Pausemenu.xml:
 * &lt;Contexts&gt;*ALL*, DISPLAY_CORONA_BUTTONS, *NONE*, BET_LOCKED, BET_AVAILABLE, SCROLL_OPTION&lt;/Contexts&gt;
 * Code:
 * if (...) {
 * sub_bbd34(a_0, 0, "FM_BET_HELP");
 * UI::_DD564BDD0472C936(${bet_available}); // This native
 * UI::OBJECT_DECAL_TOGGLE(${bet_locked});
 * } else {
 * sub_bbd34(a_0, 0, "");
 * UI::OBJECT_DECAL_TOGGLE(${bet_available});
 * UI::_DD564BDD0472C936(${bet_locked}); // This native
 * }
 * OBJECT_DECAL_TOGGLE seems to remove a context, It also has a hash collision
 * // Old
 * Scripts do not make this native's purpose clear. However, this native most likely has something to do with decals since in nearly every instance, "OBJECT_DECAL_TOGGLE" is called prior.
 */
declare function N_0xdd564bdd0472c936(hash: string | number): void;

/**
 * Returns the index of the newly created hospital spawn point.
 * p3 might be radius?
 */
declare function AddHospitalRestart(x: number, y: number, z: number, p3: number, p4: number): number;

/**
 * NOTE: ones that are -1, 0 - 35 are determined by a function where it gets a TextLabel from a global then runs,
 * _GET_TEXT_SUBSTRING and depending on what the result is it goes in check order of 0 - 9 then A - Z then z (lowercase). So it will then return 0 - 35 or -1 if it's 'z'. The func to handle that ^^ is func_67 in dialog_handler.c atleast in TU27 Xbox360 scripts.
 * p0 is -1, 0
 * p1 is a char or string (whatever you wanna call it)
 * p2 is Global 10597 + i * 6. 'i' is a while(i &lt; 70) loop
 * p3 is again -1, 0 - 35
 * p4 is again -1, 0 - 35
 * p5 is either 0 or 1 (bool ?)
 * p6 is either 0 or 1 (The func to determine this is bool)
 * p7 is either 0 or 1 (The func to determine this is bool)
 * p8 is either 0 or 1 (The func to determine this is bool)
 * p9 is 0 - 3 (Determined by func_60 in dialogue_handler.c)
 * p10 is either 0 or 1 (The func to determine this is bool)
 * p11 is either 0 or 1 (The func to determine this is bool)
 * p12 is unknown as in TU27 X360 scripts it only goes to p11.
 */
declare function AddLineToConversation(p0: number, p1: string, p2: string, p3: number, p4: number, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: number, p10: boolean, p11: boolean, p12: boolean): void;

/**
 * Loads a minimap overlay from a GFx file in the current resource.
 * @param name The path to a `.gfx` file in the current resource. It has to be specified as a `file`.
 * @return A minimap overlay ID.
 */
declare function AddMinimapOverlay(name: string): number;

declare function AddNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: number): number;

declare function AddNavmeshRequiredRegion(x: number, y: number, radius: number): void;

/**
 * hash collision?
 */
declare function AddNextMessageToPreviousBriefs(p0: boolean): void;

/**
 * enum ExplosionTypes
 * {
 * EXPLOSION_GRENADE,
 * EXPLOSION_GRENADELAUNCHER,
 * EXPLOSION_STICKYBOMB,
 * EXPLOSION_MOLOTOV,
 * EXPLOSION_ROCKET,
 * EXPLOSION_TANKSHELL,
 * EXPLOSION_HI_OCTANE,
 * EXPLOSION_CAR,
 * EXPLOSION_PLANE,
 * EXPLOSION_PETROL_PUMP,
 * EXPLOSION_BIKE,
 * EXPLOSION_DIR_STEAM,
 * EXPLOSION_DIR_FLAME,
 * EXPLOSION_DIR_WATER_HYDRANT,
 * EXPLOSION_DIR_GAS_CANISTER,
 * EXPLOSION_BOAT,
 * EXPLOSION_SHIP_DESTROY,
 * EXPLOSION_TRUCK,
 * EXPLOSION_BULLET,
 * EXPLOSION_SMOKEGRENADELAUNCHER,
 * EXPLOSION_SMOKEGRENADE,
 * EXPLOSION_BZGAS,
 * EXPLOSION_FLARE,
 * EXPLOSION_GAS_CANISTER,
 * EXPLOSION_EXTINGUISHER,
 * EXPLOSION_PROGRAMMABLEAR,
 * EXPLOSION_TRAIN,
 * EXPLOSION_BARREL,
 * EXPLOSION_PROPANE,
 * EXPLOSION_BLIMP,
 * EXPLOSION_DIR_FLAME_EXPLODE,
 * EXPLOSION_TANKER,
 * EXPLOSION_PLANE_ROCKET,
 * EXPLOSION_VEHICLE_BULLET,
 * EXPLOSION_GAS_TANK,
 * EXPLOSION_BIRD_CRAP
 * };
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 */
declare function AddOwnedExplosion(ped: number, x: number, y: number, z: number, explosionType: number, damageScale: number, isAudible: boolean, isInvisible: boolean, cameraShake: number): void;

declare function AddPatrolRouteLink(p0: number, p1: number): void;

/**
 * Example:
 * AI::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", -193.4915, -2378.864990234375, 10.9719, -193.4915, -2378.864990234375, 10.9719, 3000);
 * p0 is between 0 and 4 in the scripts.
 * p1 is "WORLD_HUMAN_GUARD_STAND" or "StandGuard".
 * p2, p3 and p4 is only one parameter sometimes in the scripts. Most likely a Vector3 hence p2, p3 and p4 are coordinates.
 * Examples:
 * AI::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_739[7 -- [[3]] ], 0.0, 0.0, 0.0, 0);
 * AI::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_B0[17 -- [[44]] ]._f3, l_B0[17 -- [[44]] ]._f3, 2000);
 * p5, p6 and p7 are for example set to: 1599.0406494140625, 2713.392578125, 44.4309.
 * p8 is an int, often random set to for example: GAMEPLAY::GET_RANDOM_INT_IN_RANGE(5000, 10000).
 */
declare function AddPatrolRouteNode(p0: number, p1: string, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p8: number): void;

/**
 * 4 calls in the b617d scripts. The only one with p0 and p2 in clear text:
 * AUDIO::ADD_PED_TO_CONVERSATION(5, l_AF, "DINAPOLI");
 * =================================================
 * One of the 2 calls in dialogue_handler.c p0 is in a while-loop, and so is determined to also possibly be 0 - 15.
 * Based on it asking if does_entity_exist for the global I have determined that p1 is, in fact, the ped, but could be wrong.
 */
declare function AddPedToConversation(p0: number, ped: number, p2: string): void;

declare function AddPetrolDecal(x: number, y: number, z: number, groundLvl: number, width: number, transparency: number): number;

declare function AddPickupToInteriorRoomByName(pickup: number, roomName: string): void;

declare function AddPoliceRestart(p0: number, p1: number, p2: number, p3: number, p4: number): number;

/**
 * Can't select void. This function returns nothing. The hash of the created relationship group is output in the second parameter.
 */
declare function AddRelationshipGroup(name: string, groupHash: number): number;

/**
 * Creates a rope at the specific position, that extends in the specified direction when not attached to any entities.
 * __
 * Add_Rope(pos.x,pos.y,pos.z,0.0,0.0,0.0,20.0,4,20.0,1.0,0.0,false,false,false,5.0,false,NULL)
 * When attached, Position&lt;vector&gt; does not matter
 * When attached, Angle&lt;vector&gt; does not matter
 * Rope Type:
 * 4 and bellow is a thick rope
 * 5 and up are small metal wires
 * 0 crashes the game
 * Max_length - Rope is forced to this length, generally best to keep this the same as your rope length.
 * Rigid - If max length is zero, and this is set to false the rope will become rigid (it will force a specific distance, what ever length is, between the objects).
 * breakable - Whether or not shooting the rope will break it.
 * unkPtr - unknown ptr, always 0 in orig scripts
 * __
 * Lengths can be calculated like so:
 * float distance = abs(x1 - x2) + abs(y1 - y2) + abs(z1 - z2); // Rope length
 * NOTES:
 * Rope does NOT interact with anything you attach it to, in some cases it make interact with the world AFTER it breaks (seems to occur if you set the type to -1).
 * Rope will sometimes contract and fall to the ground like you'd expect it to, but since it doesn't interact with the world the effect is just jaring.
 */
declare function AddRope(x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number, length: number, ropeType: number, maxLength: number, minLength: number, p10: number, p11: boolean, p12: boolean, rigid: boolean, p14: number, breakWhenShot: boolean, unkPtr: number): number;

declare function AddScenarioBlockingArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean): number;

/**
 * BRAIN::ADD_SCRIPT_TO_RANDOM_PED("pb_prostitute", ${s_f_y_hooker_01}, 100, 0);
 * -----
 * Hardcoded to not work in Multiplayer.
 */
declare function AddScriptToRandomPed(name: string, model: string | number, p2: number, p3: number): void;

/**
 * duration is float here
 * Event types- camx.me/gtav/tasks/shockingevents.txt
 */
declare function AddShockingEventAtPosition(_type: number, x: number, y: number, z: number, duration: number): number;

/**
 * duration is float here
 * Event types - camx.me/gtav/tasks/shockingevents.txt
 */
declare function AddShockingEventForEntity(_type: number, entity: number, duration: number): number;

declare function AddStuntJump(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number): number;

declare function AddStuntJumpAngled(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number, p14: number, p15: number, p16: number, p17: number, p18: number): number;

/**
 * p1 was always -1.
 * used for phone applications; scaleform
 */
declare function AddTextComponentAppTitle(p0: string, p1: number): void;
/**
 * p1 was always -1.
 * used for phone applications; scaleform
 */
declare function N_0x761b77454205a61d(p0: string, p1: number): void;

declare function AddTextComponentFloat(value: number, decimalPlaces: number): void;

declare function AddTextComponentFormattedInteger(value: number, commaSeparated: boolean): void;
declare function N_0x0e4c749ff9de9cc4(value: number, commaSeparated: boolean): void;

declare function AddTextComponentInteger(value: number): void;

/**
 * This native (along with 0x6C188BE134E074AA and 0x94CF4AC034C9C986) do not actually filter anything. They simply add the provided text (as of 944)
 * did you even check the disassembly?
 */
declare function AddTextComponentScaleform(p0: string): void;
/**
 * This native (along with 0x6C188BE134E074AA and 0x94CF4AC034C9C986) do not actually filter anything. They simply add the provided text (as of 944)
 * did you even check the disassembly?
 */
declare function AddTextComponentString3(p0: string): void;

declare function AddTextComponentSubstringBlipName(blip: number): void;
declare function N_0x80ead8e2e1d5d52e(blip: number): void;

/**
 * ??? Description :
 * Processes a string and removes the player name(max len 99)
 * You can use this function to create notifications/subtitles
 * --------------------------------------------------------------------
 * ??? Usage(Colors) :
 * ~r~ = red
 * ~y~ = yellow
 * ~g~ = green
 * ~b~ = light blue
 * ~w~ = white
 * ~p~ = purple
 * ~n~ = new line
 * --------------------------------------------------------------------
 * ??? Usage(Input) :
 * ~INPUT_CONTEXT~ will show button symbol (regarding last input device -&gt; keyboard/gamepad)
 * example:
 * string info = "Context action is assigned to ~INPUT_CONTEXT~!";
 * --------------------------------------------------------------------
 * ??? Example (C++):
 * void ShowNotification(char *text)
 * {
 * UI::_SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * UI::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * UI::_DRAW_NOTIFICATION(FALSE, FALSE); // if first param = 1, the message flashes 1 or 2 times
 * }
 * ??? Colors example :
 * string red = "~r~Red test";
 * string white_and_yellow = "~w~White and ~y~yellow";
 * string text_with_double_line = "First line.~n~Second line";
 * This native (along with 0x5F68520888E69014 and 0x94CF4AC034C9C986) do not actually filter anything. They simply add the provided text (as of 944)
 * Used to be known as _ADD_TEXT_COMPONENT_STRING
 */
declare function AddTextComponentSubstringPlayerName(text: string): void;
/**
 * ??? Description :
 * Processes a string and removes the player name(max len 99)
 * You can use this function to create notifications/subtitles
 * --------------------------------------------------------------------
 * ??? Usage(Colors) :
 * ~r~ = red
 * ~y~ = yellow
 * ~g~ = green
 * ~b~ = light blue
 * ~w~ = white
 * ~p~ = purple
 * ~n~ = new line
 * --------------------------------------------------------------------
 * ??? Usage(Input) :
 * ~INPUT_CONTEXT~ will show button symbol (regarding last input device -&gt; keyboard/gamepad)
 * example:
 * string info = "Context action is assigned to ~INPUT_CONTEXT~!";
 * --------------------------------------------------------------------
 * ??? Example (C++):
 * void ShowNotification(char *text)
 * {
 * UI::_SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * UI::ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * UI::_DRAW_NOTIFICATION(FALSE, FALSE); // if first param = 1, the message flashes 1 or 2 times
 * }
 * ??? Colors example :
 * string red = "~r~Red test";
 * string white_and_yellow = "~w~White and ~y~yellow";
 * string text_with_double_line = "First line.~n~Second line";
 * This native (along with 0x5F68520888E69014 and 0x94CF4AC034C9C986) do not actually filter anything. They simply add the provided text (as of 944)
 * Used to be known as _ADD_TEXT_COMPONENT_STRING
 */
declare function AddTextComponentString(text: string): void;

declare function AddTextComponentSubstringTextLabel(labelName: string): void;
declare function AddTextComponentItemString(labelName: string): void;

/**
 * It adds the localized text of the specified GXT entry name. Eg. if the argument is GET_HASH_KEY("ES_HELP"), adds "Continue". Just uses a text labels hash key
 */
declare function AddTextComponentSubstringTextLabelHashKey(gxtEntryHash: string | number): void;
/**
 * It adds the localized text of the specified GXT entry name. Eg. if the argument is GET_HASH_KEY("ES_HELP"), adds "Continue". Just uses a text labels hash key
 */
declare function N_0x17299b63c7683a2b(gxtEntryHash: string | number): void;

/**
 * Adds a timer (e.g. "00:00:00:000"). The appearance of the timer depends on the flags, which needs more research.
 */
declare function AddTextComponentSubstringTime(timestamp: number, flags: number): void;

/**
 * This native (along with 0x5F68520888E69014 and 0x6C188BE134E074AA) do not actually filter anything. They simply add the provided text (as of 944)
 */
declare function AddTextComponentSubstringWebsite(website: string): void;
/**
 * This native (along with 0x5F68520888E69014 and 0x6C188BE134E074AA) do not actually filter anything. They simply add the provided text (as of 944)
 */
declare function AddTextComponentString2(website: string): void;

declare function AddTextEntry(entryKey: string, entryText: string): void;

declare function AddTextEntryByHash(entryKey: string | number, entryText: string): void;

declare function AddToClockTime(hours: number, minutes: number, seconds: number): void;

declare function AddToItemset(p0: number, p1: number): number;

/**
 * Hash collision!
 * _IS_MP_GAMER_TAG_ACTIVE_2
 */
declare function AddTrevorRandomModifier(gamerTagId: number): number;

declare function AddVehicleStuckCheckWithWarp(p0: number, p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean, p6: number): void;

/**
 * x, y, z: offset in world coords from some entity.
 */
declare function AddVehicleSubtaskAttackCoord(ped: number, x: number, y: number, z: number): void;

declare function AddVehicleSubtaskAttackPed(ped: number, ped2: number): void;

declare function AddVehicleUpsidedownCheck(vehicle: number): void;

declare function AdvanceClockTimeTo(hour: number, minute: number, second: number): void;

/**
 * Seems to animate the gameplay camera zoom.
 * Eg. _ANIMATE_GAMEPLAY_CAM_ZOOM(1f, 1000f);
 * will animate the camera zooming in from 1000 meters away.
 * Game scripts use it like this:
 * // Setting this to 1 prevents V key from changing zoom
 * PLAYER::SET_PLAYER_FORCED_ZOOM(PLAYER::PLAYER_ID(), 1);
 * // These restrict how far you can move cam up/down left/right
 * CAM::_CLAMP_GAMEPLAY_CAM_YAW(-20f, 50f);
 * CAM::_CLAMP_GAMEPLAY_CAM_PITCH(-60f, 0f);
 * CAM::_ANIMATE_GAMEPLAY_CAM_ZOOM(1f, 1f);
 */
declare function AnimateGameplayCamZoom(p0: number, distance: number): void;

/**
 * Example from michael2 script.
 * CAM::ANIMATED_SHAKE_CAM(l_5069, "shake_cam_all@", "light", "", 1f);
 */
declare function AnimatedShakeCam(cam: number, p1: string, p2: string, p3: string, amplitude: number): void;

declare function AnyPassengersRappeling(vehicle: number): number;
declare function N_0x291e373d483e7ee7(vehicle: number): number;

declare function AppClearBlock(): void;

declare function AppCloseApp(): void;

declare function AppCloseBlock(): void;

declare function AppDataValid(): number;

declare function AppDeleteAppData(appName: string): number;

declare function AppGetDeletedFileStatus(): number;

declare function AppGetFloat(property: string): number;

declare function AppGetInt(property: string): number;

declare function AppGetString(property: string): string;

declare function AppHasLinkedSocialClubAccount(): number;

declare function AppHasSyncedData(appName: string): number;

declare function AppSaveData(): void;

/**
 * Called in the gamescripts like:
 * APP::APP_SET_APP("car");
 * APP::APP_SET_APP("dog");
 */
declare function AppSetApp(appName: string): void;

declare function AppSetBlock(blockName: string): void;

declare function AppSetFloat(property: string, value: number): void;

declare function AppSetInt(property: string, value: number): void;

declare function AppSetString(property: string, value: string): void;

declare function ApplyDamageToPed(ped: number, damageAmount: number, p2: boolean): void;

/**
 * forceType - 0 to 5 (any number greater then 5 force does nothing)
 * p8 - no effect (a quick disassembly will tell us what it does)
 * isRel - specifies if the force direction is relative to direction entity is facing (true), or static world direction (false).
 * p11/highForce - setting false will make the force really low
 * enum ForceTypes
 * {
 * MIN_FORCE = 0,
 * MAX_FORCE_ROT = 1,
 * MIN_FORCE_2 = 2,
 * MAX_FORCE_ROT_2 = 3, //stable, good for custom handling
 * FORCE_NO_ROT = 4,
 * FORCE_ROT_PLUS_FORCE = 5
 * };
 * gtaforums.com/topic/885669-precisely-define-object-physics/
 * gtaforums.com/topic/887362-apply-forces-and-momentums-to-entityobject/
 */
declare function ApplyForceToEntity(entity: number, forceType: number, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, isRel: boolean, p10: boolean, highForce: boolean, p12: boolean, p13: boolean): void;

/**
 * p6/relative - makes the xyz force not relative to world coords, but to something else
 * p7/highForce - setting false will make the force really low
 */
declare function ApplyForceToEntityCenterOfMass(entity: number, forceType: number, x: number, y: number, z: number, p5: boolean, isRel: boolean, highForce: boolean, p8: boolean): void;

declare function ApplyImpulseToCloth(posX: number, posY: number, posZ: number, vecX: number, vecY: number, vecZ: number, impulse: number): void;

/**
 * Found one occurence in re_crashrescue.c4
 * PED::APPLY_PED_BLOOD(l_4B, 3, 0.0, 0.0, 0.0, "wound_sheet");
 */
declare function ApplyPedBlood(ped: number, boneIndex: number, xRot: number, yRot: number, zRot: number, woundType: string): void;

declare function ApplyPedBloodByZone(ped: number, p1: number, p2: number, p3: number, p4: number): void;
declare function N_0x3311e47b91edcbbc(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function ApplyPedBloodDamageByZone(ped: number, p1: number, p2: number, p3: number, p4: number): void;
declare function N_0x816f6981c60bf53b(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function ApplyPedBloodSpecific(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
declare function N_0xef0d582cbf2d9b0f(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

/**
 * APPLY_PED_DAMAGE_DECAL(ped, 1, 0.5f, 0.513f, 0f, 1f, unk, 0, 0, "blushing");
 */
declare function ApplyPedDamageDecal(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: string): void;

/**
 * Damage Packs:
 * "SCR_TrevorTreeBang"
 * "HOSPITAL_0"
 * "HOSPITAL_1"
 * "HOSPITAL_2"
 * "HOSPITAL_3"
 * "HOSPITAL_4"
 * "HOSPITAL_5"
 * "HOSPITAL_6"
 * "HOSPITAL_7"
 * "HOSPITAL_8"
 * "HOSPITAL_9"
 * "SCR_Dumpster"
 * "BigHitByVehicle"
 * "SCR_Finale_Michael_Face"
 * "SCR_Franklin_finb"
 * "SCR_Finale_Michael"
 * "SCR_Franklin_finb2"
 * "Explosion_Med"
 * "SCR_Torture"
 * "SCR_TracySplash"
 * "Skin_Melee_0"
 * Additional damage packs:
 * gist.github.com/alexguirre/f3f47f75ddcf617f416f3c8a55ae2227
 */
declare function ApplyPedDamagePack(ped: number, damagePack: string, damage: number, mult: number): void;

declare function AreAllNavmeshRegionsLoaded(): number;

/**
 * Appears to return false if any window is broken.
 */
declare function AreAllVehicleWindowsIntact(vehicle: number): number;
/**
 * Appears to return false if any window is broken.
 */
declare function AreAllVehicleWindowsIntact(vehicle: number): number;

/**
 * Returns false if every seat is occupied.
 */
declare function AreAnyVehicleSeatsFree(vehicle: number): number;
/**
 * Returns false if every seat is occupied.
 */
declare function IsAnyVehicleSeatEmpty(vehicle: number): number;

/**
 * Returns true if the coords are colliding with the outdoors, and false if they collide with an interior.
 */
declare function AreCoordsCollidingWithExterior(x: number, y: number, z: number): number;
/**
 * Returns true if the coords are colliding with the outdoors, and false if they collide with an interior.
 */
declare function N_0xeea5ac2eda7c33e8(x: number, y: number, z: number): number;

declare function ArePlayerFlashingStarsAboutToDrop(player: number): number;

declare function ArePlayerStarsGreyedOut(player: number): number;

/**
 * Found this in the decompiled scripts, I'd do more research before changing the name --
 * if (!ENTITY::IS_ENTITY_DEAD(l_1911)) {
 * if (!VEHICLE::_755D6D5267CBBD7E(l_1911)) {
 * sub_1ba80("TRAFFICKING AIR: FAILING - PROPELLERS ARE DAMAGED");
 * l_12CE = 9;
 * }
 * }
 */
declare function ArePropellersUndamaged(vehicle: number): number;
/**
 * Found this in the decompiled scripts, I'd do more research before changing the name --
 * if (!ENTITY::IS_ENTITY_DEAD(l_1911)) {
 * if (!VEHICLE::_755D6D5267CBBD7E(l_1911)) {
 * sub_1ba80("TRAFFICKING AIR: FAILING - PROPELLERS ARE DAMAGED");
 * l_12CE = 9;
 * }
 * }
 */
declare function N_0x755d6d5267cbbd7e(vehicle: number): number;

/**
 * is this like strcmp??
 */
declare function AreStringsEqual(string1: string, string2: string): number;

/**
 * ADD_A_MARKER_OVER_VEHICLE was a hash collision!!!
 * Can be used for planes only!
 */
declare function AreVehicleWingsIntact(vehicle: number): number;
/**
 * ADD_A_MARKER_OVER_VEHICLE was a hash collision!!!
 * Can be used for planes only!
 */
declare function N_0x5991a01434ce9677(vehicle: number): number;
/**
 * ADD_A_MARKER_OVER_VEHICLE was a hash collision!!!
 * Can be used for planes only!
 */
declare function AddAMarkerOverVehicle(vehicle: number): number;

declare function ArrayValueAddBoolean(value: boolean): number;

declare function ArrayValueAddFloat(value: number): number;

declare function ArrayValueAddInteger(value: number): number;

declare function ArrayValueAddObject(arrayData: number): number;

declare function ArrayValueAddString(value: string): number;

declare function ArrayValueAddVector3(valueX: number, valueY: number, valueZ: number): number;

declare function ArrayValueGetBoolean(arrayIndex: number): [number, number];

declare function ArrayValueGetFloat(arrayIndex: number): [number, number];

declare function ArrayValueGetInteger(arrayIndex: number): [number, number];

declare function ArrayValueGetObject(arrayIndex: number): [number, number];

declare function ArrayValueGetSize(arrayData: number): number;

declare function ArrayValueGetString(arrayIndex: number): [string, number];

/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 */
declare function ArrayValueGetType(arrayIndex: number): [number, number];

declare function ArrayValueGetVector3(arrayIndex: number): [number[], number];

declare function Asin(p0: number): number;

declare function AssistedMovementCloseRoute(): void;

declare function AssistedMovementFlushRoute(): void;

declare function AssistedMovementIsRouteLoaded(route: string): number;

declare function AssistedMovementOverrideLoadDistanceThisFrame(dist: number): void;

declare function AssistedMovementRemoveRoute(route: string): void;

/**
 * Routes: "1_FIBStairs", "2_FIBStairs", "3_FIBStairs", "4_FIBStairs", "5_FIBStairs", "5_TowardsFire", "6a_FIBStairs", "7_FIBStairs", "8_FIBStairs", "Aprtmnt_1", "AssAfterLift", "ATM_1", "coroner2", "coroner_stairs", "f5_jimmy1", "fame1", "family5b", "family5c", "Family5d", "family5d", "FIB_Glass1", "FIB_Glass2", "FIB_Glass3", "finaBroute1A", "finalb1st", "finalB1sta", "finalbround", "finalbroute2", "Hairdresser1", "jan_foyet_ft_door", "Jo_3", "Lemar1", "Lemar2", "mansion_1", "Mansion_1", "pols_1", "pols_2", "pols_3", "pols_4", "pols_5", "pols_6", "pols_7", "pols_8", "Pro_S1", "Pro_S1a", "Pro_S2", "Towards_case", "trev_steps", "tunrs1", "tunrs2", "tunrs3", "Wave01457s"
 */
declare function AssistedMovementRequestRoute(route: string): void;

declare function AssistedMovementSetRouteProperties(route: string, props: number): void;

declare function Atan(p0: number): number;

declare function Atan2(p0: number, p1: number): number;

/**
 * Last param determines if its relative to the Entity
 */
declare function AttachCamToEntity(cam: number, entity: number, xOffset: number, yOffset: number, zOffset: number, isRelative: boolean): void;

declare function AttachCamToPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, heading: boolean): void;

/**
 * Attaches entity 1 to entity 2.
 */
declare function AttachEntitiesToRope(rope: number, ent1: number, ent2: number, ent1_x: number, ent1_y: number, ent1_z: number, ent2_x: number, ent2_y: number, ent2_z: number, length: number, p10: boolean, p11: boolean): [number, number];

/**
 * Attaches entity1 to bone (boneIndex) of entity2.
 * boneIndex - this is different to boneID, use GET_PED_BONE_INDEX to get the index from the ID. use the index for attaching to specific bones. entity1 will be attached to entity2's centre if bone index given doesn't correspond to bone indexes for that entity type.
 * useSoftPinning - if set to false attached entity will not detach when fixed
 * collision - controls collision between the two entities (FALSE disables collision).
 * isPed - pitch doesnt work when false and roll will only work on negative numbers (only peds)
 * vertexIndex - position of vertex
 * fixedRot - if false it ignores entity vector
 */
declare function AttachEntityToEntity(entity1: number, entity2: number, boneIndex: number, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, p9: boolean, useSoftPinning: boolean, collision: boolean, isPed: boolean, vertexIndex: number, fixedRot: boolean): void;

/**
 * breakForce is the amount of force required to break the bond.
 * p14 - is always 1 in scripts
 * p15 - is 1 or 0 in scripts - unknoun what it does
 * p16 - controls collision between the two entities (FALSE disables collision).
 * p17 - do not teleport entity to be attached to the position of the bone Index of the target entity (if 1, entity will not be teleported to target bone)
 * p18 - is always 2 in scripts.
 */
declare function AttachEntityToEntityPhysically(entity1: number, entity2: number, boneIndex1: number, boneIndex2: number, xPos1: number, yPos1: number, zPos1: number, xPos2: number, yPos2: number, zPos2: number, xRot: number, yRot: number, zRot: number, breakForce: number, fixedRot: boolean, p15: boolean, collision: boolean, p17: boolean, p18: number): void;

declare function AttachPortablePickupToPed(ped: number, p1: number): void;

/**
 * The position supplied can be anywhere, and the entity should anchor relative to that point from it's origin.
 */
declare function AttachRopeToEntity(rope: number, entity: number, x: number, y: number, z: number, p5: boolean): void;

declare function AttachSynchronizedSceneToEntity(sceneID: number, entity: number, boneIndex: number): void;

/**
 * Might be more appropriate in AUDIO?
 */
declare function AttachTvAudioToEntity(entity: number): void;

declare function AttachVehicleToCargobob(vehicle: number, cargobob: number, p2: number, x: number, y: number, z: number): void;

/**
 * HookOffset defines where the hook is attached. leave at 0 for default attachment.
 */
declare function AttachVehicleToTowTruck(towTruck: number, vehicle: number, rear: boolean, hookOffsetX: number, hookOffsetY: number, hookOffsetZ: number): void;

declare function AttachVehicleToTrailer(vehicle: number, trailer: number, radius: number): void;

declare function AudioIsScriptedMusicPlaying(): number;

declare function BadSportPlayerLeftDetected(event: number, amountReceived: number): [number, number];
declare function N_0xec5e3af5289dca81(event: number, amountReceived: number): [number, number];

/**
 * MulleDK19: Starts a new enumeration of the current threads.
 * Call this first, then _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION (0x30B4FA1C82DD4B9F)
 * -----------------------------------------------------------------------
 * Some other guy: See _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION (0x30B4FA1C82DD4B9F) for an example
 */
declare function BeginEnumeratingThreads(): void;
/**
 * MulleDK19: Starts a new enumeration of the current threads.
 * Call this first, then _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION (0x30B4FA1C82DD4B9F)
 * -----------------------------------------------------------------------
 * Some other guy: See _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION (0x30B4FA1C82DD4B9F) for an example
 */
declare function N_0xdadfada5a20143a8(): void;

declare function BeginReplayStats(p0: number, p1: number): void;

declare function BeginSrl(): void;

/**
 * clears a print text command with this text
 */
declare function BeginTextCommandClearPrint(text: string): void;
/**
 * clears a print text command with this text
 */
declare function N_0xe124fa80a759019c(text: string): void;

/**
 * Used to be known as _SET_TEXT_COMPONENT_FORMAT
 */
declare function BeginTextCommandDisplayHelp(inputType: string): void;
/**
 * Used to be known as _SET_TEXT_COMPONENT_FORMAT
 */
declare function SetTextComponentFormat(inputType: string): void;

/**
 * The following were found in the decompiled script files:
 * STRING, TWOSTRINGS, NUMBER, PERCENTAGE, FO_TWO_NUM, ESMINDOLLA, ESDOLLA, MTPHPER_XPNO, AHD_DIST, CMOD_STAT_0, CMOD_STAT_1, CMOD_STAT_2, CMOD_STAT_3, DFLT_MNU_OPT, F3A_TRAFDEST, ES_HELP_SOC3
 * ESDOLLA
 * ESMINDOLLA - cash (negative)
 * Used to be known as _SET_TEXT_ENTRY
 */
declare function BeginTextCommandDisplayText(text: string): void;
/**
 * The following were found in the decompiled script files:
 * STRING, TWOSTRINGS, NUMBER, PERCENTAGE, FO_TWO_NUM, ESMINDOLLA, ESDOLLA, MTPHPER_XPNO, AHD_DIST, CMOD_STAT_0, CMOD_STAT_1, CMOD_STAT_2, CMOD_STAT_3, DFLT_MNU_OPT, F3A_TRAFDEST, ES_HELP_SOC3
 * ESDOLLA
 * ESMINDOLLA - cash (negative)
 * Used to be known as _SET_TEXT_ENTRY
 */
declare function SetTextEntry(text: string): void;

/**
 * nothin doin.
 * BOOL Message(char* text)
 * {
 * BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED();
 * }
 */
declare function BeginTextCommandIsMessageDisplayed(text: string): void;
/**
 * nothin doin.
 * BOOL Message(char* text)
 * {
 * BEGIN_TEXT_COMMAND_IS_MESSAGE_DISPLAYED("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return END_TEXT_COMMAND_IS_MESSAGE_DISPLAYED();
 * }
 */
declare function N_0x853648fd1063a213(text: string): void;

/**
 * BOOL IsContextActive(char *ctx)
 * {
 * BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(ctx);
 * return END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(0);
 * }
 */
declare function BeginTextCommandIsThisHelpMessageBeingDisplayed(labelName: string): void;
/**
 * BOOL IsContextActive(char *ctx)
 * {
 * BEGIN_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(ctx);
 * return END_TEXT_COMMAND_IS_THIS_HELP_MESSAGE_BEING_DISPLAYED(0);
 * }
 */
declare function N_0x0a24da3a41b718f5(labelName: string): void;

/**
 * get's line count
 * int GetLineCount(char *text, float x, float y)
 * {
 * _BEGIN_TEXT_COMMAND_LINE_COUNT("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return _END_TEXT_COMMAND_GET_LINE_COUNT(x, y);
 * }
 */
declare function BeginTextCommandLineCount(entry: string): void;
/**
 * get's line count
 * int GetLineCount(char *text, float x, float y)
 * {
 * _BEGIN_TEXT_COMMAND_LINE_COUNT("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return _END_TEXT_COMMAND_GET_LINE_COUNT(x, y);
 * }
 */
declare function SetTextGxtEntry(entry: string): void;

/**
 * nothin doin.
 * void message()
 * {
 * _BEGIN_TEXT_COMMAND_OBJECTIVE("AHT_RTIT");
 * _END_TEXT_COMMAND_OBJECTIVE(0);
 * }
 */
declare function BeginTextCommandObjective(p0: string): void;
/**
 * nothin doin.
 * void message()
 * {
 * _BEGIN_TEXT_COMMAND_OBJECTIVE("AHT_RTIT");
 * _END_TEXT_COMMAND_OBJECTIVE(0);
 * }
 */
declare function N_0x23d69e0465570028(p0: string): void;

/**
 * Used to be known as _SET_TEXT_ENTRY_2
 * void ShowSubtitle(char *text)
 * {
 * BEGIN_TEXT_COMMAND_PRINT("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_PRINT(2000, 1);
 * }
 */
declare function BeginTextCommandPrint(GxtEntry: string): void;
/**
 * Used to be known as _SET_TEXT_ENTRY_2
 * void ShowSubtitle(char *text)
 * {
 * BEGIN_TEXT_COMMAND_PRINT("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_PRINT(2000, 1);
 * }
 */
declare function SetTextEntry_2(GxtEntry: string): void;

/**
 * Called prior to adding a text component to the UI. After doing so, GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING is called.
 * Examples:
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("NUMBER");
 * UI::ADD_TEXT_COMPONENT_INTEGER(GAMEPLAY::ABSI(a_1));
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRING");
 * UI::_ADD_TEXT_COMPONENT_STRING(a_2);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM2");
 * UI::_0x17299B63C7683A2B(v_3);
 * UI::_0x17299B63C7683A2B(v_4);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM1");
 * UI::_0x17299B63C7683A2B(v_3);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 */
declare function BeginTextCommandScaleformString(componentType: string): void;
/**
 * Called prior to adding a text component to the UI. After doing so, GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING is called.
 * Examples:
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("NUMBER");
 * UI::ADD_TEXT_COMPONENT_INTEGER(GAMEPLAY::ABSI(a_1));
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRING");
 * UI::_ADD_TEXT_COMPONENT_STRING(a_2);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM2");
 * UI::_0x17299B63C7683A2B(v_3);
 * UI::_0x17299B63C7683A2B(v_4);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 * GRAPHICS::BEGIN_TEXT_COMMAND_SCALEFORM_STRING("STRTNM1");
 * UI::_0x17299B63C7683A2B(v_3);
 * GRAPHICS::END_TEXT_COMMAND_SCALEFORM_STRING();
 */
declare function BeginTextComponent(componentType: string): void;

/**
 * example:
 * UI::BEGIN_TEXT_COMMAND_SET_BLIP_NAME("STRING");
 * UI::_ADD_TEXT_COMPONENT_STRING("Name");
 * UI::END_TEXT_COMMAND_SET_BLIP_NAME(blip);
 */
declare function BeginTextCommandSetBlipName(gxtentry: string): void;

/**
 * void message(char *text)
 * {
 * _BEGIN_TEXT_COMMAND_TIMER("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _END_TEXT_COMMAND_TIMER(0);
 * }
 */
declare function BeginTextCommandTimer(p0: string): void;
/**
 * void message(char *text)
 * {
 * _BEGIN_TEXT_COMMAND_TIMER("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _END_TEXT_COMMAND_TIMER(0);
 * }
 */
declare function N_0x8f9ee5687f8eeccd(p0: string): void;

/**
 * Example:
 * _BEGIN_TEXT_COMMAND_WIDTH("NUMBER");
 * ADD_TEXT_COMPONENT_FLOAT(69.420f, 2);
 * float width = _END_TEXT_COMMAND_GET_WIDTH(1);
 */
declare function BeginTextCommandWidth(text: string): void;
/**
 * Example:
 * _BEGIN_TEXT_COMMAND_WIDTH("NUMBER");
 * ADD_TEXT_COMPONENT_FLOAT(69.420f, 2);
 * float width = _END_TEXT_COMMAND_GET_WIDTH(1);
 */
declare function SetTextEntryForWidth(text: string): void;

/**
 * Plays the siren sound of a vehicle which is otherwise activated when fastly double-pressing the horn key.
 * Only works on vehicles with a police siren.
 */
declare function BlipSiren(vehicle: number): void;

declare function BlockDecisionMakerEvent(name: string | number, _type: number): void;

declare function BreakEntityGlass(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean): void;

/**
 * Calculates the travel distance between a set of points.
 * Doesn't seem to correlate with distance on gps sometimes.
 */
declare function CalculateTravelDistanceBetweenPoints(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * This is similar to the PushScaleformMovieFunction natives, except it calls in the `TIMELINE` of a minimap overlay.
 * @param miniMap The minimap overlay ID.
 * @param fnName A function in the overlay's TIMELINE.
 */
declare function CallMinimapScaleformFunction(miniMap: number, fnName: string): number;

/**
 * Calls the Scaleform function and passes the parameters as floats.
 * The number of parameters passed to the function varies, so the end of the parameter list is represented by -1.0.
 */
declare function CallScaleformMovieFunctionFloatParams(scaleform: number, functionName: string, param1: number, param2: number, param3: number, param4: number, param5: number): void;

/**
 * Calls the Scaleform function and passes both float and string parameters (in their respective order).
 * The number of parameters passed to the function varies, so the end of the float parameters is represented by -1.0, and the end of the string parameters is represented by 0 (NULL).
 * NOTE: The order of parameters in the function prototype is important! All float parameters must come first, followed by the string parameters.
 * Examples:
 * // function MY_FUNCTION(floatParam1, floatParam2, stringParam)
 * GRAPHICS::_CALL_SCALEFORM_MOVIE_FUNCTION_MIXED_PARAMS(scaleform, "MY_FUNCTION", 10.0, 20.0, -1.0, -1.0, -1.0, "String param", 0, 0, 0, 0);
 * // function MY_FUNCTION_2(floatParam, stringParam1, stringParam2)
 * GRAPHICS::_CALL_SCALEFORM_MOVIE_FUNCTION_MIXED_PARAMS(scaleform, "MY_FUNCTION_2", 10.0, -1.0, -1.0, -1.0, -1.0, "String param #1", "String param #2", 0, 0, 0);
 */
declare function CallScaleformMovieFunctionMixedParams(scaleform: number, functionName: string, floatParam1: number, floatParam2: number, floatParam3: number, floatParam4: number, floatParam5: number, stringParam1: string, stringParam2: string, stringParam3: string, stringParam4: string, stringParam5: string): void;

/**
 * Calls the Scaleform function and passes the parameters as strings.
 * The number of parameters passed to the function varies, so the end of the parameter list is represented by 0 (NULL).
 */
declare function CallScaleformMovieFunctionStringParams(scaleform: number, functionName: string, param1: string, param2: string, param3: string, param4: string, param5: string): void;

/**
 * Calls the Scaleform function.
 */
declare function CallScaleformMovieMethod(scaleform: number, method: string): void;
/**
 * Calls the Scaleform function.
 */
declare function CallScaleformMovieFunctionVoid(scaleform: number, method: string): void;

declare function CanCreateRandomBikeRider(): number;

declare function CanCreateRandomCops(): number;

declare function CanCreateRandomDriver(): number;

declare function CanCreateRandomPed(unk: boolean): number;

declare function CanKnockPedOffVehicle(ped: number): number;

declare function CanPedHearPlayer(player: number, ped: number): number;

declare function CanPedInCombatSeeTarget(ped: number, target: number): number;

/**
 * Prevents the ped from going limp.
 * [Example: Can prevent peds from falling when standing on moving vehicles.]
 */
declare function CanPedRagdoll(ped: number): number;

/**
 * Checks if the ped can play the speech or has the speech file, last parameter is usually 0
 */
declare function CanPedSpeak(ped: number, speechName: string, unk: boolean): number;
/**
 * Checks if the ped can play the speech or has the speech file, last parameter is usually 0
 */
declare function N_0x49b99bf3fda89a7a(ped: number, speechName: string, unk: boolean): number;

/**
 * This one is weird and seems to return a TRUE state regardless of whether the phone is visible on screen or tucked away.
 * I can confirm the above. This function is hard-coded to always return 1.
 */
declare function CanPhoneBeSeenOnScreen(): number;

/**
 * if(_CAN_PLAY_ONLINE() == 0) means the player is banned(Social Club or Rockstar)
 */
declare function CanPlayOnline(): number;
/**
 * if(_CAN_PLAY_ONLINE() == 0) means the player is banned(Social Club or Rockstar)
 */
declare function IsPlayerBanned(): number;

declare function CanPlayerStartMission(player: number): number;

declare function CanRegisterMissionEntities(p0: number, p1: number, p2: number, p3: number): number;

declare function CanRegisterMissionObjects(p0: number): number;

declare function CanRegisterMissionPeds(p0: number): number;

declare function CanRegisterMissionVehicles(p0: number): number;

/**
 * modelHash (p1) was always 0 in R* scripts
 */
declare function CanSetEnterStateForRegisteredEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function CanSetExitStateForCamera(p0: boolean): number;

declare function CanSetExitStateForRegisteredEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function CanShuffleSeat(vehicle: number, p1: number): number;

declare function CanUseWeaponOnParachute(weaponHash: string | number): number;

/**
 * Cancels the currently executing event. See https://wiki.fivem.net/wiki/CancelEvent
 */
declare function CancelEvent(): void;

/**
 * All music event names found in the b617d scripts: pastebin.com/GnYt0R3P
 */
declare function CancelMusicEvent(eventName: string): number;

declare function CancelStuntJump(): void;

/**
 * Does something similar to INTERIOR::DISABLE_INTERIOR
 */
declare function CapInterior(interiorID: number, toggle: boolean): void;

/**
 * I'm guessing this rounds a float value up to the next whole number, and FLOOR rounds it down
 */
declare function Ceil(value: number): number;

declare function CellCamActivate(p0: boolean, p1: boolean): void;

declare function CellCamIsCharVisibleNoFaceCheck(entity: number): number;

/**
 * When calling this, the current frame will have the players "arrow icon" be focused on the dead center of the radar.
 */
declare function CenterPlayerOnRadarThisFrame(): void;

/**
 * b2 and/or b3 maybe got something to do with keeping values from the last ped. Both of them set to 1 works great. <br/><br/>Examples from the decompiled scripts:<br/><br/>PLAYER::CHANGE_PLAYER_PED(PLAYER::PLAYER_ID(), l_5C0[4 -- [[14]] ], 0, 1);<br/>PLAYER::CHANGE_PLAYER_PED(PLAYER::PLAYER_ID(), a_0[a_0._f7 -- [[1]] ], a_2, 0);<br/><br/><br/>===========================================================<br/>The only way I ever got this to work in GTA Online once is by setting both to 0, 0. However, when you switch from your online character to whomever, your character will start walking away 'as if you left the game.' If from there you attempt to call this native once more to switch back to you online ped. You will freeze or if you try changing to another ped. I've tried all posibilities so far.<br/>1, 1 (Freeze), 0, 0(Works Once), 1, 0 &amp; 0, 1 (Freeze). Note of course trying to call this on another online player will crash. Anyone have any idea if implementing a blr within the xex itself on a possible check if it would prevent this freezing?<br/>===========================================================
 */
declare function ChangePlayerPed(player: number, ped: number, b2: boolean, b3: boolean): void;

/**
 * minimum: Degrees between -90f and 90f.
 * maximum: Degrees between -90f and 90f.
 * Clamps the gameplay camera's current pitch.
 * Eg. _CLAMP_GAMEPLAY_CAM_PITCH(0.0f, 0.0f) will set the vertical angle directly behind the player.
 */
declare function ClampGameplayCamPitch(minimum: number, maximum: number): number;

/**
 * minimum: Degrees between -180f and 180f.
 * maximum: Degrees between -180f and 180f.
 * Clamps the gameplay camera's current yaw.
 * Eg. _CLAMP_GAMEPLAY_CAM_YAW(0.0f, 0.0f) will set the horizontal angle directly behind the player.
 */
declare function ClampGameplayCamYaw(minimum: number, maximum: number): number;

declare function CleanItemset(p0: number): void;

declare function ClearAdditionalText(p0: number, p1: boolean): void;

declare function ClearAllBrokenGlass(): number;

declare function ClearAllHelpMessages(): void;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function ClearAllPedProps(ped: number): void;

declare function ClearAmbientZoneListState(p1: boolean): number;

/**
 * This function also has a p2, unknown. Signature AUDIO::CLEAR_AMBIENT_ZONE_STATE(char* zoneName, bool p1, Any p2);
 * Still needs more research.
 * Here are the names I've found: pastebin.com/AfA0Qjyv
 */
declare function ClearAmbientZoneState(zoneName: string, p1: boolean): void;

declare function ClearAngledAreaOfVehicles(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: boolean): void;

/**
 * Example: CLEAR_AREA(0, 0, 0, 30, true, false, false, false);
 */
declare function ClearArea(X: number, Y: number, Z: number, radius: number, p4: boolean, ignoreCopCars: boolean, ignoreObjects: boolean, p7: boolean): void;

/**
 * flags appears to always be 0
 */
declare function ClearAreaOfCops(x: number, y: number, z: number, radius: number, flags: number): void;

/**
 * GAMEPLAY::_0x957838AAF91BD12D(x, y, z, radius, false, false, false, false); seem to make all objects go away, peds, vehicles etc. All booleans set to true doesn't seem to change anything.
 */
declare function ClearAreaOfEverything(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;
/**
 * GAMEPLAY::_0x957838AAF91BD12D(x, y, z, radius, false, false, false, false); seem to make all objects go away, peds, vehicles etc. All booleans set to true doesn't seem to change anything.
 */
declare function N_0x957838aaf91bd12d(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean): void;

/**
 * I looked through the PC scripts that this site provides you with a link to find. It shows the last param mainly uses, (0, 2, 6, 16, and 17) so I am going to assume it is a type of flag.
 */
declare function ClearAreaOfObjects(x: number, y: number, z: number, radius: number, flags: number): void;

/**
 * Example: 		CLEAR_AREA_OF_PEDS(0, 0, 0, 10000, 1);
 */
declare function ClearAreaOfPeds(x: number, y: number, z: number, radius: number, flags: number): void;

/**
 * flags is usually 0 in the scripts.
 */
declare function ClearAreaOfProjectiles(x: number, y: number, z: number, radius: number, flags: number): void;

/**
 * Example: 		CLEAR_AREA_OF_VEHICLES(0, 0, 0, 10000, false, false, false, false, false);
 */
declare function ClearAreaOfVehicles(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean): void;

/**
 * This sets bit [offset] of [address] to off.
 * Example:
 * GAMEPLAY::CLEAR_BIT(&amp;bitAddress, 1);
 * To check if this bit has been enabled:
 * GAMEPLAY::IS_BIT_SET(bitAddress, 1); // will return 0 afterwards
 */
declare function ClearBit(offset: number): number;

declare function ClearBrief(): void;

declare function ClearCloudHat(): void;

declare function ClearDecisionMakerEventResponse(name: string | number, _type: number): void;

/**
 * Resets the screen's draw-origin which was changed by the function GRAPHICS::SET_DRAW_ORIGIN(...) back to x=0,y=0.
 * See GRAPHICS::SET_DRAW_ORIGIN(...) for further information.
 */
declare function ClearDrawOrigin(): void;

declare function ClearDrivebyTaskUnderneathDrivingTask(ped: number): void;

declare function ClearEntityLastDamageEntity(entity: number): number;

declare function ClearEntityLastWeaponDamage(entity: number): void;

declare function ClearFacialIdleAnimOverride(ped: number): void;

/**
 * p0 looks like int in script
 */
declare function ClearFloatingHelp(p0: number, p1: boolean): void;

declare function ClearFocus(): void;

/**
 * Clears the GPS flags. Only the script that originally called SET_GPS_FLAGS can clear them.
 * Doesn't seem like the flags are actually read by the game at all.
 */
declare function ClearGpsFlags(): void;

declare function ClearGpsPlayerWaypoint(): void;

declare function ClearGpsRaceTrack(): void;

declare function ClearHdArea(): void;

declare function ClearHelp(toggle: boolean): void;

/**
 * _CLEAR_NOTIFICATIONS_POS(0.5f);
 */
declare function ClearNotificationsPos(pos: number): void;
/**
 * _CLEAR_NOTIFICATIONS_POS(0.5f);
 */
declare function N_0x55598d21339cb998(pos: number): void;

declare function ClearOverrideWeather(): void;

declare function ClearPedAlternateMovementAnim(ped: number, stance: number, p2: number): void;

declare function ClearPedAlternateWalkAnim(ped: number, p1: number): void;

declare function ClearPedBloodDamage(ped: number): void;

/**
 * Somehow related to changing ped's clothes.
 */
declare function ClearPedBloodDamageByZone(ped: number, p1: number): void;
/**
 * Somehow related to changing ped's clothes.
 */
declare function N_0x56e3b78c5408d9f4(ped: number, p1: number): void;

/**
 * p1: from 0 to 5 in the b617d scripts.
 * p2: "blushing" and "ALL" found in the b617d scripts.
 */
declare function ClearPedDamageDecalByZone(ped: number, p1: number, p2: string): void;
/**
 * p1: from 0 to 5 in the b617d scripts.
 * p2: "blushing" and "ALL" found in the b617d scripts.
 */
declare function N_0x523c79aeefcc4a2a(ped: number, p1: number, p2: string): void;

declare function ClearPedDecorations(ped: number): void;

declare function ClearPedDriveByClipsetOverride(ped: number): void;

declare function ClearPedFacialDecorations(ped: number): void;
declare function N_0xe3b27e70ceab9f0c(ped: number): void;

declare function ClearPedInPauseMenu(): void;

declare function ClearPedLastDamageBone(ped: number): void;

declare function ClearPedLastWeaponDamage(ped: number): void;

declare function ClearPedNonCreationArea(): void;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function ClearPedProp(ped: number, propId: number): void;

declare function ClearPedSecondaryTask(ped: number): void;

declare function ClearPedTasks(ped: number): void;

/**
 * Immediately stops the pedestrian from whatever it's doing. They stop fighting, animations, etc. they forget what they were doing.
 */
declare function ClearPedTasksImmediately(ped: number): void;

/**
 * It clears the wetness of the selected Ped/Player. Clothes have to be wet to notice the difference.
 */
declare function ClearPedWetness(ped: number): void;

declare function ClearPlayerHasDamagedAtLeastOneNonAnimalPed(player: number): void;

declare function ClearPlayerHasDamagedAtLeastOnePed(player: number): void;

declare function ClearPlayerParachuteModelOverride(player: number): void;

declare function ClearPlayerParachutePackModelOverride(player: number): void;

declare function ClearPlayerParachuteVariationOverride(player: number): void;

/**
 * This executes at the same as speed as PLAYER::SET_PLAYER_WANTED_LEVEL(player, 0, false);
 * PLAYER::GET_PLAYER_WANTED_LEVEL(player); executes in less than half the time. Which means that it's worth first checking if the wanted level needs to be cleared before clearing. However, this is mostly about good code practice and can important in other situations. The difference in time in this example is negligible.
 */
declare function ClearPlayerWantedLevel(player: number): void;

/**
 * Only used once in the decompiled scripts. Seems to be related to scripted vehicle generators.
 * Modified example from "am_imp_exp.c4", line 6418:
 *  -- [[ popSchedules[0] = ZONE::GET_ZONE_POPSCHEDULE(ZONE::GET_ZONE_AT_COORDS(891.3, 807.9, 188.1));
 * etc.
 * ]] 
 * STREAMING::SET_MODEL_AS_NO_LONGER_NEEDED(vehicleHash);
 * ZONE::CLEAR_POPSCHEDULE_OVERRIDE_VEHICLE_MODEL(popSchedules[index]);
 */
declare function ClearPopscheduleOverrideVehicleModel(scheduleId: number): void;

declare function ClearPrints(): void;

/**
 * Clears the relationship between two groups. This should be called twice (once for each group).
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * (Credits: Inco)
 * Example:
 * PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS(2, l_1017, 0xA49E591C);
 * PED::CLEAR_RELATIONSHIP_BETWEEN_GROUPS(2, 0xA49E591C, l_1017);
 */
declare function ClearRelationshipBetweenGroups(relationship: number, group1: string | number, group2: string | number): void;

declare function ClearReminderMessage(): void;
declare function N_0xb57d8dd645cfa2cf(): void;

declare function ClearReplayStats(): void;

declare function ClearRoomForEntity(entity: number): void;

declare function ClearSequenceTask(taskSequence: number): number;

declare function ClearSmallPrints(): void;

/**
 * p0: found arguments in the b617d scripts: pastebin.com/X5akCN7z
 */
declare function ClearThisPrint(p0: string): void;

declare function ClearTimecycleModifier(): void;

declare function ClearVehicleCustomPrimaryColour(vehicle: number): number;

declare function ClearVehicleCustomSecondaryColour(vehicle: number): number;

declare function ClearWeatherTypePersist(): void;

/**
 * p3 - last parameter does not mean ped handle is returned
 * maybe a quick view in disassembly will tell us what is actually does
 * Example of Cloning Your Player:
 * CLONE_PED(PLAYER_PED_ID(), GET_ENTITY_HEADING(PLAYER_PED_ID()), 0, 1);
 */
declare function ClonePed(ped: number, heading: number, isNetwork: boolean, p3: boolean): number;

/**
 * What exactly is the difference? What does this exactly do by chance?
 */
declare function ClonePedToTarget(ped: number, targetPed: number): void;
/**
 * What exactly is the difference? What does this exactly do by chance?
 */
declare function AssignPlayerToPed(ped: number, targetPed: number): void;

declare function CloseBombBayDoors(vehicle: number): void;
declare function N_0x3556041742a0dc74(vehicle: number): void;

declare function ClosePatrolRoute(): void;

declare function CloseSequenceTask(taskSequence: number): number;

/**
 * Compares two strings up to a specified number of characters.
 * Parameters:
 * str1 - String to be compared.
 * str2 - String to be compared.
 * matchCase - Comparison will be case-sensitive.
 * maxLength - Maximum number of characters to compare. A value of -1 indicates an infinite length.
 * Returns:
 * A value indicating the relationship between the strings:
 * &lt;0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'A' &lt; 'B', so result = -1)
 * 0 - The contents of both strings are equal.
 * &gt;0 - The first non-matching character in 'str1' is less than the one in 'str2'. (e.g. 'B' &gt; 'A', so result = 1)
 * Examples:
 * GAMEPLAY::COMPARE_STRINGS("STRING", "string", false, -1); // 0; equal
 * GAMEPLAY::COMPARE_STRINGS("TESTING", "test", false, 4); // 0; equal
 * GAMEPLAY::COMPARE_STRINGS("R2D2", "R2xx", false, 2); // 0; equal
 * GAMEPLAY::COMPARE_STRINGS("foo", "bar", false, -1); // 4; 'f' &gt; 'b'
 * GAMEPLAY::COMPARE_STRINGS("A", "A", true, 1); // 0; equal
 * When comparing case-sensitive strings, lower-case characters are greater than upper-case characters:
 * GAMEPLAY::COMPARE_STRINGS("A", "a", true, 1); // -1; 'A' &lt; 'a'
 * GAMEPLAY::COMPARE_STRINGS("a", "A", true, 1); // 1; 'a' &gt; 'A'
 */
declare function CompareStrings(str1: string, str2: string, matchCase: boolean, maxLength: number): number;

/**
 * Works for vehicles with a retractable landing gear
 * landing gear states:
 * 0: Deployed
 * 1: Closing
 * 2: Opening
 * 3: Retracted
 */
declare function ControlLandingGear(vehicle: number, state: number): void;
/**
 * Works for vehicles with a retractable landing gear
 * landing gear states:
 * 0: Deployed
 * 1: Closing
 * 2: Opening
 * 3: Retracted
 */
declare function SetVehicleLandingGear(vehicle: number, state: number): void;

/**
 * Forces the ped to use the mounted weapon.
 * Returns false if task is not possible.
 */
declare function ControlMountedWeapon(ped: number): number;

declare function Cos(value: number): number;

/**
 * Used for doing money drop
 * Pickup hashes: pastebin.com/8EuSv2r1
 */
declare function CreateAmbientPickup(pickupHash: string | number, posX: number, posY: number, posZ: number, p4: number, value: number, modelHash: string | number, p7: boolean, p8: boolean): number;

/**
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "TIMED_SPLINE_CAMERA"
 */
declare function CreateCam(camName: string, p1: boolean): number;

/**
 * camName is always set to "DEFAULT_SCRIPTED_CAMERA" in Rockstar's scripts.
 * ------------
 * Camera names found in the b617d scripts:
 * "DEFAULT_ANIMATED_CAMERA"
 * "DEFAULT_SCRIPTED_CAMERA"
 * "DEFAULT_SCRIPTED_FLY_CAMERA"
 * "DEFAULT_SPLINE_CAMERA"
 * ------------
 * Side Note: It seems p8 is basically to represent what would be the bool p1 within CREATE_CAM native. As well as the p9 since it's always 2 in scripts seems to represent what would be the last param within SET_CAM_ROT native which normally would be 2.
 */
declare function CreateCamWithParams(camName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: number): number;

declare function CreateCamera(camHash: string | number, p1: boolean): number;

/**
 * CAM::_GET_GAMEPLAY_CAM_COORDS can be used instead of posX,Y,Z
 * CAM::_GET_GAMEPLAY_CAM_ROT can be used instead of rotX,Y,Z
 * CAM::_80EC114669DAEFF4() can be used instead of p7 (Possible p7 is FOV parameter. )
 * p8 ???
 * p9 uses 2 by default
 */
declare function CreateCameraWithParams(camHash: string | number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fov: number, p8: boolean, p9: number): number;

/**
 * Creates a checkpoint. Returns the handle of the checkpoint.
 * 20/03/17 : Attention, checkpoints are already handled by the game itself, so you must not loop it like markers.
 * Parameters:
 * * type - The type of checkpoint to create. See below for a list of checkpoint types.
 * * pos1 - The position of the checkpoint.
 * * pos2 - The position of the next checkpoint to point to.
 * * radius - The radius of the checkpoint.
 * * color - The color of the checkpoint.
 * * reserved - Special parameter, see below for details. Usually set to 0 in the scripts.
 * Checkpoint types:
 * 0-4---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 5-9---------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 10-14-------Ring: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 15-19-------1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 20-24-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 25-29-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 30-34-------Cylinder: 1 arrow, 2 arrow, 3 arrows, CycleArrow, Checker
 * 35-38-------Ring: Airplane Up, Left, Right, UpsideDown
 * 39----------?
 * 40----------Ring: just a ring
 * 41----------?
 * 42-44-------Cylinder w/ number (uses 'reserved' parameter)
 * 45-47-------Cylinder no arrow or number
 * If using type 42-44, reserved sets number / number and shape to display
 * 0-99------------Just numbers (0-99)
 * 100-109-----------------Arrow (0-9)
 * 110-119------------Two arrows (0-9)
 * 120-129----------Three arrows (0-9)
 * 130-139----------------Circle (0-9)
 * 140-149------------CycleArrow (0-9)
 * 150-159----------------Circle (0-9)
 * 160-169----Circle  w/ pointer (0-9)
 * 170-179-------Perforated ring (0-9)
 * 180-189----------------Sphere (0-9)
 */
declare function CreateCheckpoint(_type: number, posX1: number, posY1: number, posZ1: number, posX2: number, posY2: number, posZ2: number, radius: number, red: number, green: number, blue: number, alpha: number, reserved: number): number;

declare function CreateCinematicShot(p0: number, p1: number, p2: number, entity: number): void;

declare function CreateForcedObject(x: number, y: number, z: number, p3: number, modelHash: string | number, p5: boolean): void;

/**
 * Creates a new ped group.
 * Groups can contain up to 8 peds.
 * The parameter is unused.
 * Returns a handle to the created group, or 0 if a group couldn't be created.
 */
declare function CreateGroup(unused: number): number;

/**
 * p0 could be type
 * =====================================================
 * enum IncidentTypes{
 * FireDepartment = 3,
 * Paramedics = 5,
 * Police = 7,
 * PedsInCavalcades = 11,
 * Merryweather = 14
 * };
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades &amp; Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 */
declare function CreateIncident(incidentType: number, x: number, y: number, z: number, p5: number, radius: number, outIncidentID: number): number;

/**
 * p0 could be type (valueused in scripts: 14, 7, 5, 3, 11)
 * p1 is a return from get_player_ped() in am_gang_call.c, but player_ped_id() in other (non am) scripts.
 * p3 is usually 0f or 3f
 * =====================================================
 * enum IncidentTypes{
 * FireDepartment = 3,
 * Paramedics = 5,
 * Police = 7,
 * PedsInCavalcades = 11,
 * Merryweather = 14
 * };
 * As for the 'police' incident, it will call police cars to you, but unlike PedsInCavalcades &amp; Merryweather they won't start shooting at you unless you shoot first or shoot at them. The top 2 however seem to cancel theirselves if there is noone dead around you or a fire. I only figured them out as I found out the 3rd param is definately the amountOfPeople and they called incident 3 in scripts with 4 people (which the firetruck has) and incident 5 with 2 people (which the ambulence has). The 4 param I cant say is radius, but for the pedsInCavalcades and Merryweather R* uses 0.0f and for the top 3 (Emergency Services) they use 3.0f.
 * Side Note: It seems calling the pedsInCavalcades or Merryweather then removing it seems to break you from calling the EmergencyEvents and I also believe pedsInCavalcades. (The V cavalcades of course not IV).
 * Side Note 2: I say it breaks as if you call this proper,
 * if(CREATE_INCIDENT) etc it will return false if you do as I said above.
 * =====================================================
 */
declare function CreateIncidentWithEntity(incidentType: number, ped: number, amountOfPeople: number, radius: number, outIncidentID: number): number;

declare function CreateItemset(): [number, number[]];

/**
 * creates single lightning+thunder at random position
 */
declare function CreateLightningThunder(): void;

/**
 * Train models HAVE TO be loaded (requested) before you use this.
 * For variation 15 - request:
 * freight
 * freightcar
 * freightgrain
 * freightcont1
 * freightcont2
 * freighttrailer
 */
declare function CreateMissionTrain(variation: number, x: number, y: number, z: number, direction: boolean): number;

/**
 * Creates a mobile phone of the specified type.
 * Possible phone types:
 * 0 - Default phone / Michael's phone
 * 1 - Trevor's phone
 * 2 - Franklin's phone
 * 4 - Prologue phone
 * These values represent bit flags, so a value of '3' would toggle Trevor and Franklin's phones together, causing unexpected behavior and most likely crash the game.
 */
declare function CreateMobilePhone(phoneType: number): void;

/**
 * p5 = sets as true in scripts
 * Same as the comment for CREATE_MODEL_SWAP unless for some reason p5 affects it this only works with objects as well.
 * Network players do not see changes done with this.
 */
declare function CreateModelHide(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean): void;

declare function CreateModelHideExcludingScriptObjects(x: number, y: number, z: number, radius: number, model: string | number, p5: boolean): void;

/**
 * Only works with objects!
 * Network players do not see changes done with this.
 */
declare function CreateModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean): void;

/**
 * Spawns one or more money pickups.
 * x: The X-component of the world position to spawn the money pickups at.
 * y: The Y-component of the world position to spawn the money pickups at.
 * z: The Z-component of the world position to spawn the money pickups at.
 * value: The combined value of the pickups (in dollars).
 * amount: The number of pickups to spawn.
 * model: The model to use, or 0 for default money model.
 * Example:
 * CREATE_MONEY_PICKUPS(x, y, z, 1000, 3, 0x684a97ae);
 * Spawns 3 spray cans that'll collectively give $1000 when picked up. (Three spray cans, each giving $334, $334, $332 = $1000).
 * ==============================================
 * Max is 2000 in MP. So if you put the amount to 20, but the value to $400,000 eg. They will only be able to pickup 20 - $2,000 bags. So, $40,000
 */
declare function CreateMoneyPickups(x: number, y: number, z: number, value: number, amount: number, model: string | number): void;

/**
 * p0 was the return of NET_TO_PED in fm_mission_controler.
 * p4 was always "".
 * returns headDisplayId
 */
declare function CreateMpGamerTag(ped: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: number): number;
/**
 * p0 was the return of NET_TO_PED in fm_mission_controler.
 * p4 was always "".
 * returns headDisplayId
 */
declare function N_0xbfefe3321a3f5015(ped: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: number): number;

/**
 * shouldn't this return an int?
 */
declare function CreateMpGamerTagColor(headDisplayId: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: number, r: number, g: number, b: number): void;
/**
 * shouldn't this return an int?
 */
declare function N_0x6dd05e9d83efa4c9(headDisplayId: number, username: string, pointedClanTag: boolean, isRockstarClan: boolean, clanTag: string, p5: number, r: number, g: number, b: number): void;

declare function CreateNewScriptedConversation(): void;

/**
 * Creates a new NaturalMotion message.
 * startImmediately: If set to true, the character will perform the message the moment it receives it by GIVE_PED_NM_MESSAGE. If false, the Ped will get the message but won't perform it yet. While it's a boolean value, if negative, the message will not be initialized.
 * messageId: The ID of the NaturalMotion message.
 * If a message already exists, this function does nothing. A message exists until the point it has been successfully dispatched by GIVE_PED_NM_MESSAGE.
 */
declare function CreateNmMessage(startImmediately: boolean, messageId: number): void;

/**
 * p5 - last parameter does not mean object handle is returned
 * maybe a quick view in disassembly will tell us what is actually does
 * ----------
 * prop_tt_screenstatic (0xE2E039BC) is handled different. Not sure how yet but it I know it is.
 * thx fr Xenus.oida
 */
declare function CreateObject(modelHash: number, x: number, y: number, z: number, isNetwork: boolean, p5: boolean, dynamic: boolean): number;

/**
 * p5 - does not mean object handle is returned
 * maybe a quick view in disassembly will tell us what is actually does
 */
declare function CreateObjectNoOffset(modelHash: string | number, x: number, y: number, z: number, isNetwork: boolean, p5: boolean, dynamic: boolean): number;

declare function CreatePatrolRoute(): void;

/**
 * p7 - last parameter does not mean ped handle is returned
 * maybe a quick view in disassembly will tell us what is actually does
 * *Heading*: 0.0
 * *Heading* is the Z axis spawn rotation of the ped 0-&gt;5th parameter.
 * Ped Types:
 * [Player,1|Male,4|Female,5|Cop,6|Human,26|SWAT,27|Animal,28|Army,29]
 * You can also use GET_PED_TYPE
 */
declare function CreatePed(pedType: number, modelHash: string | number, x: number, y: number, z: number, heading: number, isNetwork: boolean, p7: boolean): number;

/**
 * p5 - last parameter does not mean ped handle is returned
 * maybe a quick view in disassembly will tell us what is actually does
 * Ped Types:
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Taxi Driver = 25 (sfink)
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 */
declare function CreatePedInsideVehicle(vehicle: number, pedType: number, modelHash: string | number, seat: number, isNetwork: boolean, p5: boolean): number;

/**
 * Drops the Hook/Magnet on a cargobob
 * state
 * enum eCargobobHook
 * {
 * CARGOBOB_HOOK = 0,
 * CARGOBOB_MAGNET = 1,
 * };
 */
declare function CreatePickUpRopeForCargobob(cargobob: number, state: number): void;
/**
 * Drops the Hook/Magnet on a cargobob
 * state
 * enum eCargobobHook
 * {
 * CARGOBOB_HOOK = 0,
 * CARGOBOB_MAGNET = 1,
 * };
 */
declare function EnableCargobobHook(cargobob: number, state: number): void;

/**
 * Pickup hashes: pastebin.com/8EuSv2r1
 */
declare function CreatePickup(pickupHash: string | number, posX: number, posY: number, posZ: number, p4: number, value: number, p6: boolean, modelHash: string | number): number;

/**
 * Pickup hashes: pastebin.com/8EuSv2r1
 * flags:
 * 8 (1 &lt;&lt; 3): place on ground
 * 512 (1 &lt;&lt; 9): spin around
 */
declare function CreatePickupRotate(pickupHash: string | number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, flag: number, amount: number, p9: number, p10: boolean, modelHash: string | number): number;

/**
 * Pickup hashes: pastebin.com/8EuSv2r1
 */
declare function CreatePortablePickup(pickupHash: string | number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string | number): number;

declare function CreatePortablePickup_2(pickupHash: string | number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string | number): number;
declare function N_0x125494b98a21aaf7(pickupHash: string | number, x: number, y: number, z: number, placeOnGround: boolean, modelHash: string | number): number;

/**
 * vb.net
 * Dim ped_handle As Integer
 * With Game.Player.Character
 * Dim pos As Vector3 = .Position + .ForwardVector * 3
 * ped_handle = Native.Function.Call(Of Integer)(Hash.CREATE_RANDOM_PED, pos.X, pos.Y, pos.Z)
 * End With
 * Creates a Ped at the specified location, returns the Ped Handle.
 * Ped will not act until SET_PED_AS_NO_LONGER_NEEDED is called.
 */
declare function CreateRandomPed(posX: number, posY: number, posZ: number): number;

declare function CreateRandomPedAsDriver(vehicle: number, returnHandle: boolean): number;

/**
 * Creates a script vehicle generator at the given coordinates. Most parameters after the model hash are unknown.
 * Parameters:
 * x/y/z - Generator position
 * heading - Generator heading
 * p4 - Unknown (always 5.0)
 * p5 - Unknown (always 3.0)
 * modelHash - Vehicle model hash
 * p7/8/9/10 - Unknown (always -1)
 * p11 - Unknown (usually TRUE, only one instance of FALSE)
 * p12/13 - Unknown (always FALSE)
 * p14 - Unknown (usally FALSE, only two instances of TRUE)
 * p15 - Unknown (always TRUE)
 * p16 - Unknown (always -1)
 * Vector3 coords = GET_ENTITY_COORDS(PLAYER_PED_ID(), 0);	CREATE_SCRIPT_VEHICLE_GENERATOR(coords.x, coords.y, coords.z, 1.0f, 5.0f, 3.0f, GET_HASH_KEY("adder"), -1. -1, -1, -1, -1, true, false, false, false, true, -1);
 */
declare function CreateScriptVehicleGenerator(x: number, y: number, z: number, heading: number, p4: number, p5: number, modelHash: string | number, p7: number, p8: number, p9: number, p10: number, p11: boolean, p12: boolean, p13: boolean, p14: boolean, p15: boolean, p16: number): number;

/**
 * p6 always 2 (but it doesnt seem to matter...)
 * roll and pitch 0
 * yaw to Ped.rotation
 */
declare function CreateSynchronizedScene(x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p6: number): number;

/**
 * Creates a tracked point, useful for checking the visibility of a 3D point on screen.
 */
declare function CreateTrackedPoint(): number;

/**
 * p6 - last parameter does not mean vehicle handle is returned
 * maybe a quick view in disassembly will tell us what is actually does
 * p6 seems to check for something with the script in the disassembly
 */
declare function CreateVehicle(modelHash: string | number, x: number, y: number, z: number, heading: number, isNetwork: boolean, p6: boolean): number;

/**
 * Now has 8 params.
 */
declare function CreateWeaponObject(weaponHash: string | number, ammoCount: number, x: number, y: number, z: number, showWorldModel: boolean, heading: number, p7: number): number;

/**
 * some camera effect that is used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 */
declare function CustomMenuCoordinates(p0: number): void;
/**
 * some camera effect that is used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled.
 */
declare function N_0x487a82c650eb7799(p0: number): void;

declare function DatafileCreate(): void;

declare function DatafileDelete(): void;

declare function DatafileGetFileDict(): string;
declare function N_0x906b778ca1dc72b6(): string;

/**
 * Example:
 * if (!DATAFILE::_BEDB96A7584AA8CF())
 * {
 * if (!g_109E3)
 * {
 * if (((sub_d4f() == 2) == 0) &amp;&amp; (!NETWORK::NETWORK_IS_GAME_IN_PROGRESS()))
 * {
 * if (NETWORK::NETWORK_IS_CLOUD_AVAILABLE())
 * {
 * g_17A8B = 0;
 * }
 * if (!g_D52C)
 * {
 * sub_730();
 * }
 * }
 * }
 * }
 */
declare function DatafileIsSavePending(): number;
/**
 * Example:
 * if (!DATAFILE::_BEDB96A7584AA8CF())
 * {
 * if (!g_109E3)
 * {
 * if (((sub_d4f() == 2) == 0) &amp;&amp; (!NETWORK::NETWORK_IS_GAME_IN_PROGRESS()))
 * {
 * if (NETWORK::NETWORK_IS_CLOUD_AVAILABLE())
 * {
 * g_17A8B = 0;
 * }
 * if (!g_D52C)
 * {
 * sub_730();
 * }
 * }
 * }
 * }
 */
declare function N_0xbedb96a7584aa8cf(): number;

/**
 * Returns whether or not the specified property is set for the entity.
 */
declare function DecorExistOn(entity: number, propertyName: string): number;

declare function DecorGetBool(entity: number, propertyName: string): number;

/**
 * Console Hash: 0x8DE5382F
 * The native name is correct but the db automatically prefixes "_" to unknown natives when changed.
 */
declare function DecorGetFloat(entity: number, propertyName: string): number;

declare function DecorGetInt(entity: number, propertyName: string): number;

/**
 * Is property of that type.
 * 1
 * 2
 * 3
 * 5
 */
declare function DecorIsRegisteredAsType(propertyName: string, _type: number): number;

/**
 * Found this in standard_global_init.c4 line 1898
 * void sub_523a() {
 * DECORATOR::DECOR_REGISTER("Player_Vehicle", 3);
 * DECORATOR::DECOR_REGISTER("PV_Slot", 3);
 * DECORATOR::DECOR_REGISTER("Previous_Owner", 3);
 * DECORATOR::DECOR_REGISTER("Sprayed_Vehicle_Decorator", 2);
 * DECORATOR::DECOR_REGISTER("Sprayed_Vehicle_Timer_Dec", 5);
 * DECORATOR::DECOR_REGISTER("Vehicle_Reward", 3);
 * DECORATOR::DECOR_REGISTER("Vehicle_Reward_Teams", 3);
 * DECORATOR::DECOR_REGISTER("Skill_Blocker", 2);
 * DECORATOR::DECOR_REGISTER("TargetPlayerForTeam", 3);
 * DECORATOR::DECOR_REGISTER("XP_Blocker", 2);
 * DECORATOR::DECOR_REGISTER("CrowdControlSetUp", 3);
 * DECORATOR::DECOR_REGISTER("Bought_Drugs", 2);
 * DECORATOR::DECOR_REGISTER("HeroinInPossession", 1);
 * DECORATOR::DECOR_REGISTER("CokeInPossession", 1);
 * DECORATOR::DECOR_REGISTER("WeedInPossession", 1);
 * DECORATOR::DECOR_REGISTER("MethInPossession", 1);
 * DECORATOR::DECOR_REGISTER("bombdec", 3);
 * DECORATOR::DECOR_REGISTER("bombdec1", 3);
 * DECORATOR::DECOR_REGISTER("bombowner", 3);
 * DECORATOR::DECOR_REGISTER("noPlateScan", 2);
 * DECORATOR::DECOR_REGISTER("prisonBreakBoss", 2);
 * DECORATOR::DECOR_REGISTER("cashondeadbody", 3);
 * DECORATOR::DECOR_REGISTER("MissionType", 3);
 * DECORATOR::DECOR_REGISTER("MatchId", 3);
 * DECORATOR::DECOR_REGISTER("TeamId", 3);
 * DECORATOR::DECOR_REGISTER("Not_Allow_As_Saved_Veh", 3);
 * DECORATOR::DECOR_REGISTER("Veh_Modded_By_Player", 3);
 * DECORATOR::DECOR_REGISTER("MPBitset", 3);
 * DECORATOR::DECOR_REGISTER("MC_EntityID", 3);
 * DECORATOR::DECOR_REGISTER("MC_ChasePedID", 3);
 * DECORATOR::DECOR_REGISTER("MC_Team0_VehDeliveredRules", 3);
 * DECORATOR::DECOR_REGISTER("MC_Team1_VehDeliveredRules", 3);
 * DECORATOR::DECOR_REGISTER("MC_Team2_VehDeliveredRules", 3);
 * DECORATOR::DECOR_REGISTER("MC_Team3_VehDeliveredRules", 3);
 * DECORATOR::DECOR_REGISTER("AttributeDamage", 3);
 * DECORATOR::DECOR_REGISTER("GangBackup", 3);
 * DECORATOR::DECOR_REGISTER("CreatedByPegasus", 2);
 * DECORATOR::DECOR_REGISTER("BeforeCorona_0", 2);
 * }
 * -----------------------------------------------------------------------
 * Defines type of property for property name.
 * 1 - float,
 * 2 - bool,
 * 3
 * 5
 */
declare function DecorRegister(propertyName: string, _type: number): void;

/**
 * Called after all decorator type initializations.
 */
declare function DecorRegisterLock(): void;

declare function DecorRemove(entity: number, propertyName: string): number;

/**
 * This function sets metadata of type bool to specified entity.
 */
declare function DecorSetBool(entity: number, propertyName: string, value: boolean): number;

/**
 * Console Hash: 0xBC7BD5CB
 * The native name is correct but the db automatically prefixes "_" to unknown natives when changed.
 */
declare function DecorSetFloat(entity: number, propertyName: string, value: number): number;

/**
 * Sets property to int.
 */
declare function DecorSetInt(entity: number, propertyName: string, value: number): number;

declare function DecorSetTime(entity: number, propertyName: string, timestamp: number): number;

declare function DeleteAllTrains(): void;

declare function DeleteCheckpoint(checkpoint: number): void;

declare function DeleteChildRope(rope: number): number;

/**
 * Deletes the specified entity, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeleteEntity(entity: number): void;

declare function DeleteFunctionReference(referenceIdentity: string): void;

/**
 * Delete an incident with a given id.
 * =======================================================
 * Correction, I have change this to int, instead of int*
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 */
declare function DeleteIncident(incidentId: number): void;

declare function DeleteMissionTrain(train: number): void;

/**
 * Deletes the specified object, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeleteObject(object: number): void;

/**
 * From the b617d scripts:
 * AI::DELETE_PATROL_ROUTE("miss_merc0");
 * AI::DELETE_PATROL_ROUTE("miss_merc1");
 * AI::DELETE_PATROL_ROUTE("miss_merc2");
 * AI::DELETE_PATROL_ROUTE("miss_dock");
 */
declare function DeletePatrolRoute(patrolRoute: string): void;

/**
 * Deletes the specified ped, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeletePed(ped: number): void;

declare function DeleteResourceKvp(key: string): void;

declare function DeleteRope(rope: number): void;

declare function DeleteScriptVehicleGenerator(vehicleGenerator: number): void;

declare function DeleteStuntJump(p0: number): void;

/**
 * Deletes a vehicle.
 * The vehicle must be a mission entity to delete, so call this before deleting: SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * eg how to use:
 * SET_ENTITY_AS_MISSION_ENTITY(vehicle, true, true);
 * DELETE_VEHICLE(&amp;vehicle);
 * Deletes the specified vehicle, then sets the handle pointed to by the pointer to NULL.
 */
declare function DeleteVehicle(vehicle: number): void;

/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 */
declare function DestroyAllCams(thisScriptCheck: boolean): void;

/**
 * BOOL param indicates whether the cam should be destroyed if it belongs to the calling script.
 */
declare function DestroyCam(cam: number, thisScriptCheck: boolean): void;

declare function DestroyItemset(p0: number): void;

/**
 * Destroys the currently active mobile phone.
 */
declare function DestroyMobilePhone(): void;

/**
 * Hash collision
 */
declare function DestroyPlayerInPauseMenu(): number;

declare function DestroyTrackedPoint(point: number): void;

declare function DetachCam(cam: number): void;

/**
 * p1 and p2 have no effect
 * maybe a quick disassembly will tell us what they do
 * if p2 is set to true, the both entities won't collide with the other until the distance between them is above 4 meters.
 * p1?
 */
declare function DetachEntity(entity: number, p1: boolean, collision: boolean): void;

declare function DetachPortablePickupFromPed(ped: number): void;

declare function DetachRopeFromEntity(rope: number, entity: number): void;

declare function DetachSynchronizedScene(sceneID: number): void;

declare function DetachVehicleFromAnyCargobob(vehicle: number): number;

declare function DetachVehicleFromAnyTowTruck(vehicle: number): number;

declare function DetachVehicleFromCargobob(vehicle: number, cargobob: number): void;

/**
 * First two parameters swapped. Scripts verify that towTruck is the first parameter, not the second.
 */
declare function DetachVehicleFromTowTruck(towTruck: number, vehicle: number): void;

/**
 * Public Sub detatchTrailer(vh1 As Vehicle)
 * Native.Function.Call(Hash.DETACH_VEHICLE_FROM_TRAILER, vh1)
 * End Sub
 */
declare function DetachVehicleFromTrailer(vehicle: number): void;

/**
 * Detaches the vehicle's windscreen.
 * For further information, see : gtaforums.com/topic/859570-glass/#entry1068894566
 */
declare function DetachVehicleWindscreen(vehicle: number): void;

declare function DisableAimCamThisUpdate(): void;
declare function N_0x1a31fe0049e542f6(): void;

declare function DisableAllControlActions(inputGroup: number): void;

declare function DisableAutomaticRespawn(disableRespawn: boolean): void;

/**
 * Hash collision!!!
 * Returns a blip handle.
 */
declare function DisableBlipNameForVar(): number;

/**
 * control values and meaning: github.com/crosire/scripthookvdotnet/blob/dev_v3/source/scripting/Controls.cs
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 * Control values from the decompiled scripts: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,
 * 28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,53,5
 * 4,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,
 * 79,80,81,82,85,86,87,88,89,90,91,92,93,95,96,97,98,99,100,101,102,103,105,
 * 107,108,109,110,111,112,113,114,115,116,117,118,119,123,126,129,130,131,132,
 * 133,134,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,
 * 153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,171,172
 * ,177,187,188,189,190,195,196,199,200,201,202,203,205,207,208,209,211,212,213, 217,219,220,221,225,226,230,234,235,236,237,238,239,240,241,242,243,244,257,
 * 261,262,263,264,265,270,271,272,273,274,278,279,280,281,282,283,284,285,286,
 * 287,288,289,337.
 * Example: CONTROLS::DISABLE_CONTROL_ACTION(2, 19, true) disables the switching UI from appearing both when using a keyboard and Xbox 360 controller. Needs to be executed each frame.
 * Control group 1 and 0 gives the same results as 2. Same results for all players.
 */
declare function DisableControlAction(inputGroup: number, control: number, disable: boolean): void;

/**
 * Disables first person camera for the current frame.
 * Found in decompiled scripts:
 * GRAPHICS::DRAW_DEBUG_TEXT_2D("Disabling First Person Cam", 0.5, 0.8, 0.0, 0, 0, 255, 255);
 * CAM::_DE2EF5DA284CC8DF();
 */
declare function DisableFirstPersonCamThisFrame(): void;

declare function DisableFrontendThisFrame(): void;

/**
 * The game by default has 5 hospital respawn points. Disabling them all will cause the player to respawn at the last position they were.
 * Doesn't work....
 */
declare function DisableHospitalRestart(hospitalIndex: number, toggle: boolean): void;

declare function DisableInputGroup(inputGroup: number): void;
declare function N_0x7f4724035fdca1dd(inputGroup: number): void;

/**
 * Example:
 * This removes the interior from the strip club and when trying to walk inside the player just falls:
 * INTERIOR::DISABLE_INTERIOR(118018, true);
 */
declare function DisableInterior(interiorID: number, toggle: boolean): void;

declare function DisableInteriorProp(interiorID: number, propName: string): void;
declare function N_0x420bd37289eee162(interiorID: number, propName: string): void;

declare function DisableNavmeshInArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function DisablePedPainAudio(ped: number, toggle: boolean): void;

/**
 * Disables the phone up-button, oddly enough.
 * i.e.: When the phone is out, and this method is called with false as it's parameter, the phone will not be able to scroll up. However, when you use the down arrow key, it's functionality still, works on the phone.
 * When the phone is not out, and this method is called with false as it's parameter, you will not be able to bring up the phone. Although the up arrow key still works for whatever functionality it's used for, just not for the phone.
 * This can be used for creating menu's when trying to disable the phone from being used.
 * You do not have to call the function again with false as a parameter, as soon as the function stops being called, the phone will again be usable.
 */
declare function DisablePhoneThisFrame(toggle: boolean): void;
/**
 * Disables the phone up-button, oddly enough.
 * i.e.: When the phone is out, and this method is called with false as it's parameter, the phone will not be able to scroll up. However, when you use the down arrow key, it's functionality still, works on the phone.
 * When the phone is not out, and this method is called with false as it's parameter, you will not be able to bring up the phone. Although the up arrow key still works for whatever functionality it's used for, just not for the phone.
 * This can be used for creating menu's when trying to disable the phone from being used.
 * You do not have to call the function again with false as a parameter, as soon as the function stops being called, the phone will again be usable.
 */
declare function N_0x015c49a93e3e086e(toggle: boolean): void;

/**
 * hash collision??? - Don't think so. I fits alphabetically and it used with a plane in the scripts
 */
declare function DisablePlaneAileron(vehicle: number, p1: boolean, p2: boolean): void;

/**
 * Inhibits the player from using any method of combat including melee and firearms.
 * NOTE: Only disables the firing for one frame
 */
declare function DisablePlayerFiring(player: number, toggle: boolean): void;

declare function DisablePlayerVehicleRewards(player: number): void;

declare function DisablePoliceReports(): void;
declare function N_0xb4f90faf7670b16f(): void;

/**
 * Disables the spawn point at the police house on the specified index.
 * policeIndex: The police house index.
 * toggle: true to enable the spawn point, false to disable.
 */
declare function DisablePoliceRestart(policeIndex: number, toggle: boolean): void;

/**
 * confirmed working
 */
declare function DisableRadarThisFrame(): void;

declare function DisableScriptBrainSet(brainSet: number): void;

declare function DisableStuntJumpSet(p0: number): void;

declare function DisableVehicleDistantlights(toggle: boolean): void;

declare function DisableVehicleFirstPersonCamThisFrame(): void;

/**
 * if set to true, prevents vehicle sirens from having sound, leaving only the lights.
 * HASH COLLISION !!! Please change to _SET_VEHICLE_SIREN_SOUND
 */
declare function DisableVehicleImpactExplosionActivation(vehicle: number, toggle: boolean): void;

declare function DisableVehicleWeapon(disabled: boolean, weaponHash: string | number, vehicle: number, owner: number): void;

declare function DisplayAmmoThisFrame(display: boolean): void;

declare function DisplayAreaName(toggle: boolean): void;

/**
 * "DISPLAY_CASH(false);" makes the cash amount render on the screen when appropriate
 * "DISPLAY_CASH(true);" disables cash amount rendering
 */
declare function DisplayCash(toggle: boolean): void;

/**
 * Toggles to render distant vehicles. They may not be vehicles but images to look like vehicles.
 */
declare function DisplayDistantVehicles(toggle: boolean): void;
/**
 * Toggles to render distant vehicles. They may not be vehicles but images to look like vehicles.
 */
declare function N_0xf796359a959df65d(toggle: boolean): void;

/**
 * The messages are localized strings.
 * Examples:
 * "No_bus_money"
 * "Enter_bus"
 * "Tour_help"
 * "LETTERS_HELP2"
 * "Dummy"
 * **The bool appears to always be false (if it even is a bool, as it's represented by a zero)**
 * --------
 * p1 doesn't seem to make a difference, regardless of the state it's in.
 * picture of where this is displayed?
 */
declare function DisplayHelpTextThisFrame(message: string, p1: boolean): void;

/**
 * If Hud should be displayed
 */
declare function DisplayHud(toggle: boolean): void;

/**
 * sfink: note, p0 is set to 6 for PC platform in at least 1 script, or to `unk::_get_ui_language_id() == 0` otherwise.
 * NOTE: windowTitle uses text labels, and an invalid value will display nothing.
 * www.gtaforums.com/topic/788343-vrel-script-hook-v/?p=1067380474
 * windowTitle's
 * -----------------
 * CELL_EMAIL_BOD	=	"Enter your Eyefind message"
 * CELL_EMAIL_BODE	=	"Message too long. Try again"
 * CELL_EMAIL_BODF	=	"Forbidden message. Try again"
 * CELL_EMAIL_SOD	=	"Enter your Eyefind subject"
 * CELL_EMAIL_SODE	=	"Subject too long. Try again"
 * CELL_EMAIL_SODF	=	"Forbidden text. Try again"
 * CELL_EMASH_BOD	=	"Enter your Eyefind message"
 * CELL_EMASH_BODE	=	"Message too long. Try again"
 * CELL_EMASH_BODF	=	"Forbidden message. Try again"
 * CELL_EMASH_SOD	=	"Enter your Eyefind subject"
 * CELL_EMASH_SODE	=	"Subject too long. Try again"
 * CELL_EMASH_SODF	=	"Forbidden Text. Try again"
 * FMMC_KEY_TIP10	=	"Enter Synopsis"
 * FMMC_KEY_TIP12	=	"Enter Custom Team Name"
 * FMMC_KEY_TIP12F	=	"Forbidden Text. Try again"
 * FMMC_KEY_TIP12N	=	"Custom Team Name"
 * FMMC_KEY_TIP8	=	"Enter Message"
 * FMMC_KEY_TIP8F	=	"Forbidden Text. Try again"
 * FMMC_KEY_TIP8FS	=	"Invalid Message. Try again"
 * FMMC_KEY_TIP8S	=	"Enter Message"
 * FMMC_KEY_TIP9	=	"Enter Outfit Name"
 * FMMC_KEY_TIP9F	=	"Invalid Outfit Name. Try again"
 * FMMC_KEY_TIP9N	=	"Outfit Name"
 * PM_NAME_CHALL	=	"Enter Challenge Name"
 */
declare function DisplayOnscreenKeyboard(p0: number, windowTitle: string, p2: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, maxInputLength: number): void;

/**
 * only documented to be continued...
 */
declare function DisplayOnscreenKeyboard_2(p0: number, windowTitle: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): number;
/**
 * only documented to be continued...
 */
declare function N_0xca78cfa0366592fe(p0: number, windowTitle: string, defaultText: string, defaultConcat1: string, defaultConcat2: string, defaultConcat3: string, defaultConcat4: string, defaultConcat5: string, defaultConcat6: string, defaultConcat7: string, maxInputLength: number): number;

/**
 * If Minimap / Radar should be displayed.
 */
declare function DisplayRadar(Toggle: boolean): number;

/**
 * Displays the crosshair for this frame.
 */
declare function DisplaySniperScopeThisFrame(): void;

/**
 * Purpose of the BOOL currently unknown.
 * Both, true and false, work
 */
declare function DisplaySystemSigninUi(unk: boolean): void;

declare function DisposeSynchronizedScene(scene: number): void;
declare function N_0xcd9cc7e200a52a6f(scene: number): void;

declare function DoAutoSave(): void;

/**
 * Fades the screen in.
 * duration: The time the fade should take, in milliseconds.
 */
declare function DoScreenFadeIn(duration: number): void;

/**
 * Fades the screen out.
 * duration: The time the fade should take, in milliseconds.
 */
declare function DoScreenFadeOut(duration: number): void;

declare function DoesAnimDictExist(animDict: string): number;

declare function DoesBlipExist(blip: number): number;

/**
 * Returns whether or not the passed camera handle exists.
 */
declare function DoesCamExist(cam: number): number;

/**
 * Returns true only when the hook is active, will return false if the magnet is active
 */
declare function DoesCargobobHavePickUpRope(cargobob: number): number;
/**
 * Returns true only when the hook is active, will return false if the magnet is active
 */
declare function IsCargobobHookActive(cargobob: number): number;

/**
 * Returns true only when the magnet is active, will return false if the hook is active
 * console hash 0x4778CA0A
 */
declare function DoesCargobobHavePickupMagnet(cargobob: number): number;
/**
 * Returns true only when the magnet is active, will return false if the hook is active
 * console hash 0x4778CA0A
 */
declare function IsCargobobMagnetActive(cargobob: number): number;

declare function DoesCutsceneEntityExist(cutsceneEntName: string, modelHash: string | number): number;

/**
 * Returns true if a destructible object with this handle exists, false otherwise.
 */
declare function DoesDesObjectExist(handle: number): number;
/**
 * Returns true if a destructible object with this handle exists, false otherwise.
 */
declare function N_0x52af537a0c5b8aad(handle: number): number;

/**
 * Always used prior a door functions Example
 * if (OBJECT::_DOES_DOOR_EXIST(doorHash))
 * {
 * OBJECT::REMOVE_DOOR_FROM_SYSTEM(doorHash);
 * }
 */
declare function DoesDoorExist(doorHash: string | number): number;
/**
 * Always used prior a door functions Example
 * if (OBJECT::_DOES_DOOR_EXIST(doorHash))
 * {
 * OBJECT::REMOVE_DOOR_FROM_SYSTEM(doorHash);
 * }
 */
declare function N_0xc153c43ea202c8c1(doorHash: string | number): number;

declare function DoesEntityBelongToThisScript(entity: number, p1: boolean): number;

/**
 * Checks if the Entity exists
 */
declare function DoesEntityExist(entity: number): number;

declare function DoesEntityHaveDrawable(entity: number): number;

declare function DoesEntityHavePhysics(entity: number): number;

/**
 * Checks via CVehicleModelInfo
 */
declare function DoesExtraExist(vehicle: number, extraId: number): number;

declare function DoesGroupExist(groupId: number): number;

declare function DoesNavmeshBlockingObjectExist(p0: number): number;
declare function N_0x0eaeb0db4b132399(p0: number): number;

/**
 * p5 is usually 0.
 */
declare function DoesObjectOfTypeExistAtCoords(x: number, y: number, z: number, radius: number, hash: string | number, p5: boolean): number;

declare function DoesParticleFxLoopedExist(ptfxHandle: number): number;

/**
 * Returns whether the ped's blip is controlled by the game.
 * It's the default blip you can see on enemies during freeroam in singleplayer (the one that fades out quickly).
 */
declare function DoesPedHaveAiBlip(ped: number): number;

declare function DoesPickupExist(pickup: number): number;

declare function DoesPickupObjectExist(pickupObject: number): number;

/**
 * Ptr is correct
 */
declare function DoesRopeExist(rope: number): number;

declare function DoesScenarioExistInArea(x: number, y: number, z: number, radius: number, b: boolean): number;

/**
 * Occurrences in the b617d scripts:
 * "ARMY_GUARD",
 * "ARMY_HELI",
 * "Cinema_Downtown",
 * "Cinema_Morningwood",
 * "Cinema_Textile",
 * "City_Banks",
 * "Countryside_Banks",
 * "DEALERSHIP",
 * "GRAPESEED_PLANES",
 * "KORTZ_SECURITY",
 * "LOST_BIKERS",
 * "LSA_Planes",
 * "LSA_Planes",
 * "MP_POLICE",
 * "Observatory_Bikers",
 * "POLICE_POUND1",
 * "POLICE_POUND2",
 * "POLICE_POUND3",
 * "POLICE_POUND4",
 * "POLICE_POUND5"
 * "QUARRY",
 * "SANDY_PLANES",
 * "SCRAP_SECURITY",
 * "SEW_MACHINE",
 * "SOLOMON_GATE",
 * "Triathlon_1_Start",
 * "Triathlon_2_Start",
 * "Triathlon_3_Start"
 * Sometimes used with IS_SCENARIO_GROUP_ENABLED:
 * if (AI::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") &amp;&amp; (!AI::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {
 * else if (AI::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {
 */
declare function DoesScenarioGroupExist(scenarioGroup: string): number;

declare function DoesScenarioOfTypeExistInArea(p0: number, p1: number, p2: number, p4: number, p5: boolean): [number, number];

/**
 * For a full list, see here: pastebin.com/yLNWicUi
 */
declare function DoesScriptExist(scriptName: string): number;

declare function DoesScriptVehicleGeneratorExist(vehicleGenerator: number): number;

/**
 * formerly _IS_STREAMED_SCRIPT_RUNNING
 * Jenkins hash: 0x19EAE282
 */
declare function DoesScriptWithNameHashExist(scriptHash: string | number): number;
/**
 * formerly _IS_STREAMED_SCRIPT_RUNNING
 * Jenkins hash: 0x19EAE282
 */
declare function N_0xf86aa3c56ba31381(scriptHash: string | number): number;

/**
 * Checks if there is a cover point at position
 */
declare function DoesScriptedCoverPointExistAtCoords(x: number, y: number, z: number): number;

declare function DoesTextBlockExist(gxt: string): number;

/**
 * Checks if the passed gxt name exists in the game files.
 */
declare function DoesTextLabelExist(gxt: string): number;

declare function DoesVehicleExistWithDecorator(decorator: string): number;

/**
 * This function is called before ADD_CLAN_DECAL_TO_VEHICLE to see if it needs to run. IDK if it's for clan decal or not, but the 2nd parameter might be decal index? It's always passed 0. Not sure what this function really does. But it does return 0 if the clan tag is not on, and 1 if it is.
 */
declare function DoesVehicleHaveDecal(vehicle: number, p1: number): number;
/**
 * This function is called before ADD_CLAN_DECAL_TO_VEHICLE to see if it needs to run. IDK if it's for clan decal or not, but the 2nd parameter might be decal index? It's always passed 0. Not sure what this function really does. But it does return 0 if the clan tag is not on, and 1 if it is.
 */
declare function HasVehicleGotDecal(vehicle: number, p1: number): number;

declare function DoesVehicleHaveRoof(vehicle: number): number;

/**
 * Maximum amount of vehicles with vehicle stuck check appears to be 16.
 */
declare function DoesVehicleHaveStuckVehicleCheck(vehicle: number): number;

declare function DoesVehicleHaveWeapons(vehicle: number): number;

declare function DoesWeaponTakeWeaponComponent(weaponHash: string | number, componentHash: string | number): number;

/**
 * when you set locked to 0 the door open and to 1 the door close
 * OBJECT::_9B12F9A24FABEDB0(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 0, 0.0, 50.0, 0);  //door open
 * OBJECT::_9B12F9A24FABEDB0(${prop_gate_prison_01}, 1845.0, 2605.0, 45.0, 1, 0.0, 50.0, 0);  //door close
 * p5-7 - Rot?
 */
declare function DoorControl(doorHash: string | number, x: number, y: number, z: number, locked: boolean, p5: number, p6: number, p7: number): void;

/**
 * Downloads prod.cloud.rockstargames.com/titles/gta5/&lt;platform&gt;/check.json in the same manner that NETWORK_REQUEST_CLOUD_TUNABLES downloads the tunables.
 */
declare function DownloadCheck(): void;
/**
 * Downloads prod.cloud.rockstargames.com/titles/gta5/&lt;platform&gt;/check.json in the same manner that NETWORK_REQUEST_CLOUD_TUNABLES downloads the tunables.
 */
declare function N_0x4f18196c8d38768d(): void;

/**
 * x,y,z = start pos
 * x2,y2,z2 = end pos
 * Draw's a 3D Box between the two x,y,z coords.
 * --------------
 * Keep in mind that the edges of the box do only align to the worlds base-vectors. Therefore something like rotation cannot be applied. That means this function is pretty much useless, unless you want a static unicolor box somewhere.
 * I recommend using a predefined function to call this.
 * [VB.NET]
 * Public Sub DrawBox(a As Vector3, b As Vector3, col As Color)
 * [Function].Call(Hash.DRAW_BOX,a.X, a.Y, a.Z,b.X, b.Y, b.Z,col.R, col.G, col.B, col.A)
 * End Sub
 * [C#]
 * public void DrawBox(Vector3 a, Vector3 b, Color col)
 * {
 * Function.Call(Hash.DRAW_BOX,a.X, a.Y, a.Z,b.X, b.Y, b.Z,col.R, col.G, col.B, col.A);
 * }
 */
declare function DrawBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugCross(x: number, y: number, z: number, size: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugLineWithTwoColours(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, r1: number, g1: number, b1: number, r2: number, g2: number, b2: number, alpha1: number, alpha2: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugSphere(x: number, y: number, z: number, radius: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugText(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function DrawDebugText_2d(text: string, x: number, y: number, z: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawLightWithRange(posX: number, posY: number, posZ: number, colorR: number, colorG: number, colorB: number, range: number, intensity: number): void;

declare function DrawLightWithRangeAndShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number): void;
declare function DrawLightWithRangeWithShadow(x: number, y: number, z: number, r: number, g: number, b: number, range: number, intensity: number, shadow: number): void;

/**
 * Draws a depth-tested line from one point to another.
 * ----------------
 * x1, y1, z1 : Coordinates for the first point
 * x2, y2, z2 : Coordinates for the second point
 * r, g, b, alpha : Color with RGBA-Values
 * I recommend using a predefined function to call this.
 * [VB.NET]
 * Public Sub DrawLine(from As Vector3, [to] As Vector3, col As Color)
 * [Function].Call(Hash.DRAW_LINE, from.X, from.Y, from.Z, [to].X, [to].Y, [to].Z, col.R, col.G, col.B, col.A)
 * End Sub
 * [C#]
 * public void DrawLine(Vector3 from, Vector3 to, Color col)
 * {
 * Function.Call(Hash.DRAW_LINE, from.X, from.Y, from.Z, to.X, to.Y, to.Z, col.R, col.G, col.B, col.A);
 * }
 */
declare function DrawLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * enum MarkerTypes
 * {
 * MarkerTypeUpsideDownCone = 0,
 * MarkerTypeVerticalCylinder = 1,
 * MarkerTypeThickChevronUp = 2,
 * MarkerTypeThinChevronUp = 3,
 * MarkerTypeCheckeredFlagRect = 4,
 * MarkerTypeCheckeredFlagCircle = 5,
 * MarkerTypeVerticleCircle = 6,
 * MarkerTypePlaneModel = 7,
 * MarkerTypeLostMCDark = 8,
 * MarkerTypeLostMCLight = 9,
 * MarkerTypeNumber0 = 10,
 * MarkerTypeNumber1 = 11,
 * MarkerTypeNumber2 = 12,
 * MarkerTypeNumber3 = 13,
 * MarkerTypeNumber4 = 14,
 * MarkerTypeNumber5 = 15,
 * MarkerTypeNumber6 = 16,
 * MarkerTypeNumber7 = 17,
 * MarkerTypeNumber8 = 18,
 * MarkerTypeNumber9 = 19,
 * MarkerTypeChevronUpx1 = 20,
 * MarkerTypeChevronUpx2 = 21,
 * MarkerTypeChevronUpx3 = 22,
 * MarkerTypeHorizontalCircleFat = 23,
 * MarkerTypeReplayIcon = 24,
 * MarkerTypeHorizontalCircleSkinny = 25,
 * MarkerTypeHorizontalCircleSkinny_Arrow = 26,
 * MarkerTypeHorizontalSplitArrowCircle = 27,
 * MarkerTypeDebugSphere = 28,
 * MarkerTypeDallorSign = 29,
 * MarkerTypeHorizontalBars = 30,
 * MarkerTypeWolfHead = 31
 * };
 * dirX/Y/Z represent a heading on each axis in which the marker should face, alternatively you can rotate each axis independently with rotX/Y/Z (and set dirX/Y/Z all to 0).
 * faceCamera - Rotates only the y-axis (the heading) towards the camera
 * p19 - no effect, default value in script is 2
 * rotate - Rotates only on the y-axis (the heading)
 * textureDict - Name of texture dictionary to load texture from (e.g. "GolfPutting")
 * textureName - Name of texture inside dictionary to load (e.g. "PuttingMarker")
 * drawOnEnts - Draws the marker onto any entities that intersect it
 * basically what he said, except textureDict and textureName are totally not char*, or if so, then they are always set to 0/NULL/nullptr in every script I checked, eg:
 * bj.c: graphics::draw_marker(6, vParam0, 0f, 0f, 1f, 0f, 0f, 0f, 4f, 4f, 4f, 240, 200, 80, iVar1, 0, 0, 2, 0, 0, 0, false);
 * his is what I used to draw an amber downward pointing chevron "V", has to be redrawn every frame.  The 180 is for 180 degrees rotation around the Y axis, the 50 is alpha, assuming max is 100, but it will accept 255.
 * GRAPHICS::DRAW_MARKER(2, v.x, v.y, v.z + 2, 0, 0, 0, 0, 180, 0, 2, 2, 2, 255, 128, 0, 50, 0, 1, 1, 0, 0, 0, 0);
 */
declare function DrawMarker(_type: number, posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, rotX: number, rotY: number, rotZ: number, scaleX: number, scaleY: number, scaleZ: number, red: number, green: number, blue: number, alpha: number, bobUpAndDown: boolean, faceCamera: boolean, p19: number, rotate: boolean, textureDict: string, textureName: string, drawOnEnts: boolean): void;

/**
 * Draws a notification above the map and returns the notifications handle
 * Color syntax:
 * ~r~ = Red
 * ~b~ = Blue
 * ~g~ = Green
 * ~y~ = Yellow
 * ~p~ = Purple
 * ~o~ = Orange
 * ~c~ = Grey
 * ~m~ = Darker Grey
 * ~u~ = Black
 * ~n~ = New Line
 * ~s~ = Default White
 * ~w~ = White
 * ~h~ = Bold Text
 * ~nrt~ = ???
 * Special characters:
 * ?? = Rockstar Verified Icon (U+00A6:Broken Bar - Alt+0166)
 * ?? = Rockstar Icon (U+00F7:Division Sign - Alt+0247)
 * ??? = Rockstar Icon 2 (U+2211:N-Ary Summation)
 * Example C#:
 * Function.Call(Hash._ADD_TEXT_COMPONENT_STRING3, "Now I need you to bring the ~b~vehicle~w~ back to me!");
 */
declare function DrawNotification(blink: boolean, p1: boolean): number;

/**
 * Example:
 * UI::_SET_NOTIFICATION_TEXT_ENTRY("HUNT");
 * UI::_0xAA295B6F28BD587D("Hunting", "Hunting_Gold_128", 0, 109, "HUD_MED_UNLKED");
 */
declare function DrawNotificationIcon(p0: string, p1: string, p2: number, p3: number, p4: string): number;
/**
 * Example:
 * UI::_SET_NOTIFICATION_TEXT_ENTRY("HUNT");
 * UI::_0xAA295B6F28BD587D("Hunting", "Hunting_Gold_128", 0, 109, "HUD_MED_UNLKED");
 */
declare function N_0xaa295b6f28bd587d(p0: string, p1: string, p2: number, p3: number, p4: string): number;

declare function DrawNotification_2(blink: boolean, p1: boolean): number;

declare function DrawNotification_3(blink: boolean, p1: boolean): number;

declare function DrawNotification_4(blink: boolean, p1: boolean): number;

/**
 * x/y/z - Location of a vertex (in world coords), presumably.
 * ----------------
 * x1, y1, z1     : Coordinates for the first point
 * x2, y2, z2     : Coordinates for the second point
 * x3, y3, z3     : Coordinates for the third point
 * r, g, b, alpha : Color with RGBA-Values
 * Keep in mind that only one side of the drawn triangle is visible: It's the side, in which the vector-product of the vectors heads to: (b-a)x(c-a) Or (b-a)x(c-b).
 * But be aware: The function seems to work somehow differently. I have trouble having them drawn in rotated orientation. Try it yourself and if you somehow succeed, please edit this and post your solution.
 * I recommend using a predefined function to call this.
 * [VB.NET]
 * Public Sub DrawPoly(a As Vector3, b As Vector3, c As Vector3, col As Color)
 * [Function].Call(Hash.DRAW_POLY, a.X, a.Y, a.Z, b.X, b.Y, b.Z, c.X, c.Y, c.Z, col.R, col.G, col.B, col.A)
 * End Sub
 * [C#]
 * public void DrawPoly(Vector3 a, Vector3 b, Vector3 c, Color col)
 * {
 * Function.Call(Hash.DRAW_POLY, a.X, a.Y, a.Z, b.X, b.Y, b.Z, c.X, c.Y, c.Z, col.R, col.G, col.B, col.A);
 * }
 * BTW: Intersecting triangles are not supported: They overlap in the order they were called.
 */
declare function DrawPoly(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * Draws a rectangle on the screen.
 * -x: The relative X point of the center of the rectangle. (0.0-1.0, 0.0 is the left edge of the screen, 1.0 is the right edge of the screen)
 * -y: The relative Y point of the center of the rectangle. (0.0-1.0, 0.0 is the top edge of the screen, 1.0 is the bottom edge of the screen)
 * -width: The relative width of the rectangle. (0.0-1.0, 1.0 means the whole screen width)
 * -height: The relative height of the rectangle. (0.0-1.0, 1.0 means the whole screen height)
 * -R: Red part of the color. (0-255)
 * -G: Green part of the color. (0-255)
 * -B: Blue part of the color. (0-255)
 * -A: Alpha part of the color. (0-255, 0 means totally transparent, 255 means totally opaque)
 * The total number of rectangles to be drawn in one frame is apparently limited to 399.
 */
declare function DrawRect(x: number, y: number, width: number, height: number, r: number, g: number, b: number, a: number): void;

declare function DrawScaleformMovie(scaleformHandle: number, x: number, y: number, width: number, height: number, red: number, green: number, blue: number, alpha: number, unk: number): void;

/**
 * unk is not used so no need
 */
declare function DrawScaleformMovieFullscreen(scaleform: number, red: number, green: number, blue: number, alpha: number, unk: number): void;

declare function DrawScaleformMovieFullscreenMasked(scaleform1: number, scaleform2: number, red: number, green: number, blue: number, alpha: number): void;

declare function DrawScaleformMovie_3d(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: number): void;
declare function N_0x87d51d72255d4e78(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: number): void;

/**
 * what the heck does this one do differently from the one above?
 */
declare function DrawScaleformMovie_3dNonAdditive(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: number): void;
/**
 * what the heck does this one do differently from the one above?
 */
declare function N_0x1ce592fdc749d6f5(scaleform: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, p7: number, p8: number, p9: number, scaleX: number, scaleY: number, scaleZ: number, p13: number): void;

/**
 * Parameters:
 * * pos - coordinate where the spotlight is located
 * * dir - the direction vector the spotlight should aim at from its current position
 * * r,g,b - color of the spotlight
 * * distance - the maximum distance the light can reach
 * * brightness - the brightness of the light
 * * roundness - "smoothness" of the circle edge
 * * radius - the radius size of the spotlight
 * * falloff - the falloff size of the light's edge (example: www.i.imgur.com/DemAWeO.jpg)
 * Example in C# (spotlight aims at the closest vehicle):
 * Vector3 myPos = Game.Player.Character.Position;
 * Vehicle nearest = World.GetClosestVehicle(myPos , 1000f);
 * Vector3 destinationCoords = nearest.Position;
 * Vector3 dirVector = destinationCoords - myPos;
 * dirVector.Normalize();
 * Function.Call(Hash.DRAW_SPOT_LIGHT, pos.X, pos.Y, pos.Z, dirVector.X, dirVector.Y, dirVector.Z, 255, 255, 255, 100.0f, 1f, 0.0f, 13.0f, 1f);
 */
declare function DrawSpotLight(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number): void;

declare function DrawSpotLightWithShadow(posX: number, posY: number, posZ: number, dirX: number, dirY: number, dirZ: number, colorR: number, colorG: number, colorB: number, distance: number, brightness: number, roundness: number, radius: number, falloff: number, shadow: number): void;

/**
 * Draws a 2D sprite on the screen.
 * Parameters:
 * textureDict - Name of texture dictionary to load texture from (e.g. "CommonMenu", "MPWeaponsCommon", etc.)
 * textureName - Name of texture to load from texture dictionary (e.g. "last_team_standing_icon", "tennis_icon", etc.)
 * screenX/Y - Screen offset (0.5 = center)
 * scaleX/Y - Texture scaling. Negative values can be used to flip the texture on that axis. (0.5 = half)
 * heading - Texture rotation in degrees (default = 0.0) positive is clockwise, measured in degrees
 * red,green,blue - Sprite color (default = 255/255/255)
 * alpha - if set to '2' it will grab all entitys in the game on call
 * alpha - why would it do that and where would it output the entites. And shouldn't it the alpha color for this param?
 */
declare function DrawSprite(textureDict: string, textureName: string, screenX: number, screenY: number, width: number, height: number, heading: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * All calls to this native are preceded by calls to GRAPHICS::_0x61BB1D9B3A95D802 and GRAPHICS::_0xC6372ECD45D73BCD, respectively.
 * "act_cinema.ysc", line 1483:
 * UI::SET_HUD_COMPONENT_POSITION(15, 0.0, -0.0375);
 * UI::SET_TEXT_RENDER_ID(l_AE);
 * GRAPHICS::_0x61BB1D9B3A95D802(4);
 * GRAPHICS::_0xC6372ECD45D73BCD(1);
 * if (GRAPHICS::_0x0AD973CA1E077B60(${movie_arthouse})) {
 * GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 0.7375, 1.0, 0.0, 255, 255, 255, 255);
 * } else {
 * GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
 * }
 * "am_mp_property_int.ysc", line 102545:
 * if (ENTITY::DOES_ENTITY_EXIST(a_2._f3)) {
 * if (UI::IS_NAMED_RENDERTARGET_LINKED(ENTITY::GET_ENTITY_MODEL(a_2._f3))) {
 * UI::SET_TEXT_RENDER_ID(a_2._f1);
 * GRAPHICS::_0x61BB1D9B3A95D802(4);
 * GRAPHICS::_0xC6372ECD45D73BCD(1);
 * GRAPHICS::DRAW_TV_CHANNEL(0.5, 0.5, 1.0, 1.0, 0.0, 255, 255, 255, 255);
 * if (GRAPHICS::GET_TV_CHANNEL() == -1) {
 * sub_a8fa5(a_2, 1);
 * } else {
 * sub_a8fa5(a_2, 1);
 * GRAPHICS::ATTACH_TV_AUDIO_TO_ENTITY(a_2._f3);
 * }
 * UI::SET_TEXT_RENDER_ID(UI::GET_DEFAULT_SCRIPT_RENDERTARGET_RENDER_ID());
 * }
 * }
 */
declare function DrawTvChannel(xPos: number, yPos: number, xScale: number, yScale: number, rotation: number, red: number, green: number, blue: number, alpha: number): void;

declare function DuplicateFunctionReference(referenceIdentity: string): string;

/**
 * All found occurrences in b678d:
 * pastebin.com/ceu67jz8
 * Still not sure on the functionality of this native but it has something to do with dynamic mixer groups defined in dynamix.dat15
 */
declare function DynamicMixerRelatedFn(p0: number, p1: string, p2: number): void;
/**
 * All found occurrences in b678d:
 * pastebin.com/ceu67jz8
 * Still not sure on the functionality of this native but it has something to do with dynamic mixer groups defined in dynamix.dat15
 */
declare function N_0x153973ab99fe8980(p0: number, p1: string, p2: number): void;

declare function EjectJb700Roof(vehicle: number, x: number, y: number, z: number): void;
declare function N_0xe38cb9d7d39fdbcc(vehicle: number, x: number, y: number, z: number): void;

declare function EnableAlienBloodVfx(Toggle: boolean): void;
declare function N_0x9dce1f0f78260875(Toggle: boolean): void;

declare function EnableAllControlActions(inputGroup: number): void;

/**
 * Creates cartoon effect when Michel smokes the weed
 */
declare function EnableClownBloodVfx(toggle: boolean): void;
/**
 * Creates cartoon effect when Michel smokes the weed
 */
declare function SetCameraEndtime(toggle: boolean): void;

/**
 * control values and meaning: github.com/crosire/scripthookvdotnet/blob/dev/source/scripting/Controls.hpp
 * 0, 1 and 2 used in the scripts.
 * Control values from the decompiled scripts:
 * 0,1,2,3,4,5,6,8,9,10,11,14,15,16,17,19,21,22,24,25,26,30,31,32,33,34,35,36,
 * 37,44,46,47,59,60,65,68,69,70,71,72,73,74,75,76,79,80,81,82,86,95,98,99,100
 * ,101,114,140,141,143,172,173,174,175,176,177,178,179,180,181,187,188,189,19
 * 0,195,196,197,198,199,201,202,203,204,205,206,207,208,209,210,217,218,219,2
 * 20,221,225,228,229,230,231,234,235,236,237,238,239,240,241,242,245,246,257,
 * 261,262,263,264,286,287,288,289,337,338,339,340,341,342,343
 * INPUTGROUP_MOVE
 * INPUTGROUP_LOOK
 * INPUTGROUP_WHEEL
 * INPUTGROUP_CELLPHONE_NAVIGATE
 * INPUTGROUP_CELLPHONE_NAVIGATE_UD
 * INPUTGROUP_CELLPHONE_NAVIGATE_LR
 * INPUTGROUP_FRONTEND_DPAD_ALL
 * INPUTGROUP_FRONTEND_DPAD_UD
 * INPUTGROUP_FRONTEND_DPAD_LR
 * INPUTGROUP_FRONTEND_LSTICK_ALL
 * INPUTGROUP_FRONTEND_RSTICK_ALL
 * INPUTGROUP_FRONTEND_GENERIC_UD
 * INPUTGROUP_FRONTEND_GENERIC_LR
 * INPUTGROUP_FRONTEND_GENERIC_ALL
 * INPUTGROUP_FRONTEND_BUMPERS
 * INPUTGROUP_FRONTEND_TRIGGERS
 * INPUTGROUP_FRONTEND_STICKS
 * INPUTGROUP_SCRIPT_DPAD_ALL
 * INPUTGROUP_SCRIPT_DPAD_UD
 * INPUTGROUP_SCRIPT_DPAD_LR
 * INPUTGROUP_SCRIPT_LSTICK_ALL
 * INPUTGROUP_SCRIPT_RSTICK_ALL
 * INPUTGROUP_SCRIPT_BUMPERS
 * INPUTGROUP_SCRIPT_TRIGGERS
 * INPUTGROUP_WEAPON_WHEEL_CYCLE
 * INPUTGROUP_FLY
 * INPUTGROUP_SUB
 * INPUTGROUP_VEH_MOVE_ALL
 * INPUTGROUP_CURSOR
 * INPUTGROUP_CURSOR_SCROLL
 * INPUTGROUP_SNIPER_ZOOM_SECONDARY
 * INPUTGROUP_VEH_HYDRAULICS_CONTROL
 * Took those in IDA Pro.Not sure in which order they go
 */
declare function EnableControlAction(inputGroup: number, control: number, enable: boolean): void;

/**
 * Shows the crosshair even if it wouldn't show normally. Only works for one frame, so make sure to call it repeatedly.
 */
declare function EnableCrosshairThisFrame(): void;

/**
 * Please change back to _0x4895BDEA16E7C080 (hash collision)
 */
declare function EnableDeathbloodSeethrough(p0: boolean): void;

/**
 * Found dispatch service types in the exe:
 * enum eDispatchServiceType
 * {
 * PoliceAutomobileDispatch = 1,
 * PoliceHelicopterDispatch = 2,
 * FireDepartmentDispatch = 3,
 * SwatAutomobileDispatch = 4,
 * AmbulanceDepartmentDispatch = 5,
 * PoliceRidersDispatch = 6,
 * PoliceVehicleRequest = 7,
 * PoliceRoadBlockDispatch = 8,
 * GangDispatch = 11,
 * SwatHelicopterDispatch = 12,
 * PoliceBoatDispatch = 13,
 * ArmyVehicleDispatch = 14,
 * BikerBackupDispatch = 15
 * };
 * By making toggle false it disables the dispatch.
 * curious if this is what they used when you toggled on and off cops in a GTA IV freemode you hosted. Sad they got rid of the option to make a private session without cops.
 * Also on x360 seems with or without neverWanted on, setting these to all false in SP of course doesn't seem to work. I would understand getting stars, but cops are still dispatched and combat you.
 */
declare function EnableDispatchService(dispatchService: number, toggle: boolean): void;
/**
 * Found dispatch service types in the exe:
 * enum eDispatchServiceType
 * {
 * PoliceAutomobileDispatch = 1,
 * PoliceHelicopterDispatch = 2,
 * FireDepartmentDispatch = 3,
 * SwatAutomobileDispatch = 4,
 * AmbulanceDepartmentDispatch = 5,
 * PoliceRidersDispatch = 6,
 * PoliceVehicleRequest = 7,
 * PoliceRoadBlockDispatch = 8,
 * GangDispatch = 11,
 * SwatHelicopterDispatch = 12,
 * PoliceBoatDispatch = 13,
 * ArmyVehicleDispatch = 14,
 * BikerBackupDispatch = 15
 * };
 * By making toggle false it disables the dispatch.
 * curious if this is what they used when you toggled on and off cops in a GTA IV freemode you hosted. Sad they got rid of the option to make a private session without cops.
 * Also on x360 seems with or without neverWanted on, setting these to all false in SP of course doesn't seem to work. I would understand getting stars, but cops are still dispatched and combat you.
 */
declare function N_0xdc0f817884cdd856(dispatchService: number, toggle: boolean): void;

/**
 * More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/
 */
declare function EnableInteriorProp(interiorID: number, propName: string): void;
/**
 * More info: http://gtaforums.com/topic/836367-adding-props-to-interiors/
 */
declare function N_0x55e86af2712b36a1(interiorID: number, propName: string): void;

/**
 * Enables laser sight on any weapon.
 * It doesn't work. Neither on tick nor OnKeyDown
 */
declare function EnableLaserSightRendering(toggle: boolean): void;

declare function EnableMovieSubtitles(toggle: boolean): void;

declare function EnableScriptBrainSet(brainSet: number): void;

declare function EnableSpecialAbility(player: number, toggle: boolean): void;

declare function EnableStuntJumpSet(p0: number): void;

/**
 * Makes the ped jump around like they're in a tennis match
 */
declare function EnableTennisMode(ped: number, toggle: boolean, p2: boolean): void;

declare function EndFindKvp(handle: number): void;

declare function EndFindObject(findHandle: number): void;

declare function EndFindPed(findHandle: number): void;

declare function EndFindPickup(findHandle: number): void;

declare function EndFindVehicle(findHandle: number): void;

declare function EndReplayStats(): void;

declare function EndSrl(): void;

declare function EndTextCommandClearPrint(): void;
declare function N_0xfcc75460aba29378(): void;

/**
 * shape goes from -1 to 50 (may be more).
 * p0 is always 0.
 * Example:
 * void FloatingHelpText(char* text)
 * {
 * BEGIN_TEXT_COMMAND_DISPLAY_HELP("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_DISPLAY_HELP (0, 0, 1, -1);
 * }
 * Image:
 * - imgbin.org/images/26209.jpg
 * more inputs/icons:
 * - pastebin.com/nqNYWMSB
 * Used to be known as _DISPLAY_HELP_TEXT_FROM_STRING_LABEL
 */
declare function EndTextCommandDisplayHelp(p0: number, loop: boolean, beep: boolean, shape: number): void;
/**
 * shape goes from -1 to 50 (may be more).
 * p0 is always 0.
 * Example:
 * void FloatingHelpText(char* text)
 * {
 * BEGIN_TEXT_COMMAND_DISPLAY_HELP("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * END_TEXT_COMMAND_DISPLAY_HELP (0, 0, 1, -1);
 * }
 * Image:
 * - imgbin.org/images/26209.jpg
 * more inputs/icons:
 * - pastebin.com/nqNYWMSB
 * Used to be known as _DISPLAY_HELP_TEXT_FROM_STRING_LABEL
 */
declare function DisplayHelpTextFromStringLabel(p0: number, loop: boolean, beep: boolean, shape: number): void;

/**
 * After applying the properties to the text (See UI::SET_TEXT_), this will draw the text in the applied position. Also 0.0f &lt; x, y &lt; 1.0f, percentage of the axis.
 * Used to be known as _DRAW_TEXT
 */
declare function EndTextCommandDisplayText(x: number, y: number): void;
/**
 * After applying the properties to the text (See UI::SET_TEXT_), this will draw the text in the applied position. Also 0.0f &lt; x, y &lt; 1.0f, percentage of the axis.
 * Used to be known as _DRAW_TEXT
 */
declare function DrawText(x: number, y: number): void;

/**
 * Determines how many lines the text string will use when drawn on screen.
 * Must use 0x521FB041D93DD0E4 for setting up
 */
declare function EndTextCommandGetLineCount(x: number, y: number): number;
/**
 * Determines how many lines the text string will use when drawn on screen.
 * Must use 0x521FB041D93DD0E4 for setting up
 */
declare function N_0x9040dfb09be75706(x: number, y: number): number;

/**
 * In scripts font most of the time is passed as 1.
 * Use _BEGIN_TEXT_COMMAND_WIDTH
 * param is not font from what i've tested
 */
declare function EndTextCommandGetWidth(font: number): number;
/**
 * In scripts font most of the time is passed as 1.
 * Use _BEGIN_TEXT_COMMAND_WIDTH
 * param is not font from what i've tested
 */
declare function GetTextScreenWidth(font: number): number;

declare function EndTextCommandIsMessageDisplayed(): number;
declare function N_0x8a9ba1ab3e237613(): number;

declare function EndTextCommandIsThisHelpMessageBeingDisplayed(p0: number): number;
declare function N_0x10bddbfc529428dd(p0: number): number;

declare function EndTextCommandObjective(p0: boolean): void;
declare function N_0xcfdbdf5ae59ba0f4(p0: boolean): void;

/**
 * Draws the subtitle at middle center of the screen.
 * int duration = time in milliseconds to show text on screen before disappearing
 * drawImmediately = If true, the text will be drawn immediately, if false, the text will be drawn after the previous subtitle has finished
 * Used to be known as _DRAW_SUBTITLE_TIMED
 */
declare function EndTextCommandPrint(duration: number, drawImmediately: boolean): void;
/**
 * Draws the subtitle at middle center of the screen.
 * int duration = time in milliseconds to show text on screen before disappearing
 * drawImmediately = If true, the text will be drawn immediately, if false, the text will be drawn after the previous subtitle has finished
 * Used to be known as _DRAW_SUBTITLE_TIMED
 */
declare function DrawSubtitleTimed(duration: number, drawImmediately: boolean): void;

declare function EndTextCommandScaleformString(): void;
declare function EndTextComponent(): void;

declare function EndTextCommandScaleformString_2(): void;
declare function N_0xae4e8157d9ecf087(): void;

declare function EndTextCommandSetBlipName(blip: number): void;

declare function EndTextCommandTimer(p0: boolean): void;
declare function N_0xa86911979638106f(p0: boolean): void;

declare function ExecuteCommand(commandString: string): void;

/**
 * Appears only 3 times in the scripts, more specifically in michael1.ysc
 * Console hash: 0x64ddb07d
 */
declare function ExpandWorldLimits(x: number, y: number, z: number): void;
/**
 * Appears only 3 times in the scripts, more specifically in michael1.ysc
 * Console hash: 0x64ddb07d
 */
declare function N_0x5006d96c995a5827(x: number, y: number, z: number): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneCreate(data: string, objectId: number, tree: string): number;

/**
 * This native is not implemented.
 */
declare function ExperimentalLoadCloneSync(entity: number, data: string): void;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneCreate(entity: number): string;

/**
 * This native is not implemented.
 */
declare function ExperimentalSaveCloneSync(entity: number): string;

/**
 * Forces the ped to fall back and kills it.
 */
declare function ExplodePedHead(ped: number, weaponHash: string | number): void;

declare function ExplodeProjectiles(ped: number, weaponHash: string | number, p2: boolean): void;

/**
 * Explodes a selected vehicle.
 * Vehicle vehicle = Vehicle you want to explode.
 * BOOL isAudible = If explosion makes a sound.
 * BOOL isInvisible = If the explosion is invisible or not.
 * First BOOL does not give any visual explosion, the vehicle just falls apart completely but slowly and starts to burn.
 */
declare function ExplodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean): void;

declare function ExplodeVehicleInCutscene(vehicle: number, p1: boolean): void;

/**
 * Fades nearby decals within the range specified
 */
declare function FadeDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * Hardcoded to not work in SP.
 */
declare function FadeOutLocalPlayer(p0: boolean): void;

declare function FilloutPmPlayerList(p1: number, p2: number): [number, number];

declare function FilloutPmPlayerListWithNames(p2: number, p3: number): [number, number, number];

/**
 * In the script "player_scene_t_bbfight.c4":
 * "if (ENTITY::FIND_ANIM_EVENT_PHASE(&amp;l_16E, &amp;l_19F[v_4 -- [[16]] ], v_9, &amp;v_A, &amp;v_B))"
 * -- &amp;l_16E (p0) is requested as an anim dictionary earlier in the script.
 * -- &amp;l_19F[v_4 -- [[16]] ] (p1) is used in other natives in the script as the "animation" param.
 * -- v_9 (p2) is instantiated as "victim_fall"; I'm guessing that's another anim
 * --v_A and v_B (p3 &amp; p4) are both set as -1.0, but v_A is used immediately after this native for:
 * "if (v_A &lt; ENTITY::GET_ENTITY_ANIM_CURRENT_TIME(...))"
 * Both v_A and v_B are seemingly used to contain both Vector3's and floats, so I can't say what either really is other than that they are both output parameters. p4 looks more like a *Vector3 though
 * -alphazolam
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function FindAnimEventPhase(animDictionary: string, animName: string, p2: string): [number, number, number];

declare function FindFirstObject(outEntity: number): number;

declare function FindFirstPed(outEntity: number): number;

declare function FindFirstPickup(outEntity: number): number;

declare function FindFirstVehicle(outEntity: number): number;

declare function FindKvp(handle: number): string;

declare function FindNextObject(findHandle: number, outEntity: number): number;

declare function FindNextPed(findHandle: number, outEntity: number): number;

declare function FindNextPickup(findHandle: number, outEntity: number): number;

declare function FindNextVehicle(findHandle: number, outEntity: number): number;

declare function FindRadioStationIndex(station: number): number;

/**
 * Finds a position ahead of the player by predicting the players next actions.
 * The positions match path finding node positions.
 * When roads diverge, the position may rapidly change between two or more positions. This is due to the engine not being certain of which path the player will take.
 * =======================================================
 * I may sort this with alter research, but if someone
 * already knows please tell what the difference in
 * X2, Y2, Z2 is. I doubt it's rotation. Is it like
 * checkpoints where X1, Y1, Z1 is your/a position and
 * X2, Y2, Z2 is a given position ahead of that position?
 * =======================================================
 */
declare function FindSpawnPointInDirection(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, distance: number): [number, number[]];

declare function FixVehicleWindow(vehicle: number, index: number): number;

/**
 * If set to true ability bar will flash
 */
declare function FlashAbilityBar(toggle: boolean): void;

/**
 * adds a short flash to the Radar/Minimap
 * Usage: UI.FLASH_MINIMAP_DISPLAY
 */
declare function FlashMinimapDisplay(): void;

declare function FlashWantedDisplay(p0: boolean): number;

declare function Floor(value: number): number;

/**
 * if value is set to true, and ambient siren sound will be played.
 * -------------------------------------------------------------------------
 * Appears to enable/disable an audio flag.
 */
declare function ForceAmbientSiren(value: boolean): void;
/**
 * if value is set to true, and ambient siren sound will be played.
 * -------------------------------------------------------------------------
 * Appears to enable/disable an audio flag.
 */
declare function N_0x552369f549563ad5(value: boolean): void;

/**
 * used with 1,2,8,64,128 in the scripts
 */
declare function ForceCleanup(cleanupFlags: number): void;

/**
 * PLAYER::FORCE_CLEANUP_FOR_ALL_THREADS_WITH_THIS_NAME("pb_prostitute", 1); // Found in decompilation
 */
declare function ForceCleanupForAllThreadsWithThisName(name: string, cleanupFlags: number): void;

declare function ForceCleanupForThreadWithThisId(id: number, cleanupFlags: number): void;

/**
 * Based on carmod_shop script decompile this takes a vehicle parameter. It is called when repair is done on initial enter.
 */
declare function ForceEntityAiAndAnimationUpdate(entity: number): void;

/**
 * Some motionstate hashes are
 * 0xec17e58 (standing idle), 0xbac0f10b (nothing?), 0x3f67c6af (aiming with pistol 2-h), 0x422d7a25 (stealth), 0xbd8817db, 0x916e828c
 * and those for the strings
 * "motionstate_idle", "motionstate_walk", "motionstate_run", "motionstate_actionmode_idle", and "motionstate_actionmode_walk".
 * Regarding p2, p3 and p4: Most common is 0, 0, 0); followed by 0, 1, 0); and 1, 1, 0); in the scripts. p4 is very rarely something other than 0.
 * [31/03/2017] ins1de :
 * enum MotionState
 * {
 * StopRunning = -530524,
 * StopWalking = -668482597,
 * Idle = 247561816, // 1, 1, 0
 * Idl2 = -1871534317,
 * SkyDive =-1161760501, // 0, 1, 0
 * Stealth = 1110276645,
 * Sprint = -1115154469,
 * Swim = -1855028596,
 * Unknown1 = 1063765679,
 * Unknown2 = -633298724,
 * }
 */
declare function ForcePedMotionState(ped: number, motionStateHash: string | number, p2: boolean, p3: boolean, p4: boolean): number;

declare function ForcePedToOpenParachute(ped: number): void;

/**
 * Does anyone know what this does? I know online modding isn't generally supported especially by the owner of this db, but I first thought this could be used to force ourselves into someones apartment, but I see now that isn't possible.
 */
declare function ForceRoomForEntity(entity: number, interiorID: number, roomHashKey: string | number): void;

/**
 * Exits the game and downloads a fresh social club update on next restart.
 */
declare function ForceSocialClubUpdate(): void;

declare function FormatFocusHeading(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;
declare function N_0x219c7b8d53e429fd(x: number, y: number, z: number, rad: number, p4: number, p5: number): number;

declare function FreezeEntityPosition(entity: number, toggle: boolean): void;

declare function FreezePedCameraRotation(ped: number): void;
declare function N_0xff287323b0e2c69a(ped: number): void;

declare function FreezeRadioStation(radioStation: string): void;

/**
 * Usage example:
 * Public Function GenerateDirectionsToCoord(Pos As Vector3) As Tuple(Of String, Single, Single)
 * Dim f4, f5, f6 As New OutputArgument()
 * Native.Function.Call(Hash.GENERATE_DIRECTIONS_TO_COORD, Pos.X, Pos.Y, Pos.Z, True, f4, f5, f6)
 * Dim direction As String = f4.GetResult(Of Single)()
 * Return New Tuple(Of String, Single, Single)(direction.Substring(0, 1), f5.GetResult(Of Single)(), f6.GetResult(Of Single)())
 * End Function
 * p3 I use 1
 * direction:
 * 0 = You Have Arrive
 * 1 = Recalculating Route, Please make a u-turn where safe
 * 2 = Please Proceed the Highlighted Route
 * 3 = Keep Left (unsure)
 * 4 = In (distToNxJunction) Turn Left
 * 5 = In (distToNxJunction) Turn Right
 * 6 = Keep Right (unsure)
 * 7 = In (distToNxJunction) Go Straight Ahead
 * 8 = In (distToNxJunction) Join the freeway
 * 9 = In (distToNxJunction) Exit Freeway
 * return value set to 0 always
 */
declare function GenerateDirectionsToCoord(x: number, y: number, z: number, p3: boolean): [number, number, number, number];

/**
 * Returns current screen resolution.
 */
declare function GetActiveScreenResolution(): [number, number];
/**
 * Returns current screen resolution.
 */
declare function GetScreenActiveResolution(): [number, number];

declare function GetActiveVehicleMissionType(veh: number): number;

declare function GetAllocatedStackSize(): number;

declare function GetAmmoInClip(ped: number, weaponHash: string | number, ammo: number): number;

/**
 * WEAPON::GET_AMMO_IN_PED_WEAPON(PLAYER::PLAYER_PED_ID(), a_0)
 * From decompiled scripts
 * Returns total ammo in weapon
 * GTALua Example :
 * natives.WEAPON.GET_AMMO_IN_PED_WEAPON(plyPed, WeaponHash)
 */
declare function GetAmmoInPedWeapon(ped: number, weaponhash: string | number): number;

declare function GetAngleBetween_2dVectors(x1: number, y1: number, x2: number, y2: number): number;

/**
 * Console Hash: 0x8B5E3E3D = GET_ANIM_DURATION
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function GetAnimDuration(animDict: string, animName: string): number;

declare function GetAnimInitialOffsetPosition(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): number[];

declare function GetAnimInitialOffsetRotation(animDict: string, animName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p8: number, p9: number): number[];

declare function GetAspectRatio(b: boolean): number;
declare function GetScreenAspectRatio(b: boolean): number;

declare function GetAudibleMusicTrackTextId(): number;

/**
 * p1 is always 0 in the scripts.
 */
declare function GetBestPedWeapon(ped: number, p1: boolean): number;

declare function GetBitsInRange(_var: number, rangeStart: number, rangeEnd: number): number;

declare function GetBlipAlpha(blip: number): number;

declare function GetBlipColour(blip: number): number;

declare function GetBlipCoords(blip: number): number[];

/**
 * Returns the Blip handle of given Entity.
 */
declare function GetBlipFromEntity(entity: number): number;

declare function GetBlipHudColour(blip: number): number;

declare function GetBlipInfoIdCoord(blip: number): number[];

declare function GetBlipInfoIdDisplay(blip: number): number;

declare function GetBlipInfoIdEntityIndex(blip: number): number;

declare function GetBlipInfoIdIterator(): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function GetBlipInfoIdPickupIndex(blip: number): number;

/**
 * Returns a value based on what the blip is attached to
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 */
declare function GetBlipInfoIdType(blip: number): number;

/**
 * Blips Images + IDs:
 * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 */
declare function GetBlipSprite(blip: number): number;

/**
 * Console Hash: 0xE97A4F5E
 */
declare function GetBoatAnchor(vehicle: number): number;

declare function GetCamAnimCurrentPhase(cam: number): number;

declare function GetCamCoord(cam: number): number[];

declare function GetCamFarClip(cam: number): number;

declare function GetCamFarDof(cam: number): number;

declare function GetCamFov(cam: number): number;

/**
 * Returns the world matrix of the specified camera. To turn this into a view matrix, calculate the inverse.
 */
declare function GetCamMatrix(camera: number): [number[], number[], number[], number[]];

declare function GetCamNearClip(cam: number): number;

/**
 * The last parameter, as in other "ROT" methods, is usually 2.
 */
declare function GetCamRot(cam: number, rotationOrder: number): number[];

/**
 * I named the beginning from Any to BOOL as this native is used in an if statement as well.
 */
declare function GetCamSplineNodeIndex(cam: number): number;

/**
 * I'm pretty sure the parameter is the camera as usual, but I am not certain so I'm going to leave it as is.
 */
declare function GetCamSplineNodePhase(cam: number): number;

/**
 * Can use this with SET_CAM_SPLINE_PHASE to set the float it this native returns.
 * (returns 1.0f when no nodes has been added, reached end of non existing spline)
 */
declare function GetCamSplinePhase(cam: number): number;

/**
 * Gets the position of the cargobob hook, in world coords.
 */
declare function GetCargobobHookPosition(cargobob: number): number[];
/**
 * Gets the position of the cargobob hook, in world coords.
 */
declare function N_0xcbdb9b923cacc92d(cargobob: number): number[];

declare function GetCauseOfMostRecentForceCleanup(): number;

declare function GetCgoffset(rope: number): number[];

declare function GetClipSetForScriptedGunTask(p0: number): string;

declare function GetClockDayOfMonth(): number;

/**
 * Gets the current day of the week.
 * 0: Sunday
 * 1: Monday
 * 2: Tuesday
 * 3: Wednesday
 * 4: Thursday
 * 5: Friday
 * 6: Saturday
 */
declare function GetClockDayOfWeek(): number;

/**
 * Gets the current ingame hour, expressed without zeros. (09:34 will be represented as 9)
 */
declare function GetClockHours(): number;

/**
 * Gets the current ingame clock minute.
 */
declare function GetClockMinutes(): number;

declare function GetClockMonth(): number;

/**
 * Gets the current ingame clock second. Note that ingame clock seconds change really fast since a day in GTA is only 48 minutes in real life.
 */
declare function GetClockSeconds(): number;

declare function GetClockYear(): number;

/**
 * Returns TRUE if it found something. FALSE if not.
 */
declare function GetClosestFirePos(x: number, y: number, z: number): [number, number[]];

/**
 * Get the closest vehicle node to a given position, unknown1 = 3.0, unknown2 = 0
 */
declare function GetClosestMajorVehicleNode(x: number, y: number, z: number, unknown1: number, unknown2: number): [number, number[]];

/**
 * Has 8 params in the latest patches.
 * isMission - if true doesn't return mission objects
 */
declare function GetClosestObjectOfType(x: number, y: number, z: number, radius: number, modelHash: string | number, isMission: boolean, p6: boolean, p7: boolean): number;

/**
 * Gets the closest ped in a radius.
 * Ped Types:
 * Any ped = -1
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 * ------------------
 * P4 P5 P7 P8
 * 1  0  x  x  = return nearest walking Ped
 * 1  x  0  x  = return nearest walking Ped
 * x  1  1  x  = return Ped you are using
 * 0  0  x  x  = no effect
 * 0  x  0  x  = no effect
 * x = can be 1 or 0. Does not have any obvious changes.
 * This function does not return ped who is:
 * 1. Standing still
 * 2. Driving
 * 3. Fleeing
 * 4. Attacking
 * This function only work if the ped is:
 * 1. walking normally.
 * 2. waiting to cross a road.
 * Note: PED::GET_PED_NEARBY_PEDS works for more peds.
 */
declare function GetClosestPed(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p7: boolean, p8: boolean, pedType: number): [number, number];

/**
 * p1 seems to be always 1.0f in the scripts
 */
declare function GetClosestRoad(x: number, y: number, z: number, p3: number, p4: number, p10: boolean): [number, number[], number[], number, number, number];

/**
 * Example usage
 * VEHICLE::GET_CLOSEST_VEHICLE(x, y, z, radius, hash, unknown leave at 70)
 * x, y, z: Position to get closest vehicle to.
 * radius: Max radius to get a vehicle.
 * modelHash: Limit to vehicles with this model. 0 for any.
 * flags: The bitwise flags altering the function's behaviour.
 * Does not return police cars or helicopters.
 * It seems to return police cars for me, does not seem to return helicopters, planes or boats for some reason
 * Only returns non police cars and motorbikes with the flag set to 70 and modelHash to 0. ModelHash seems to always be 0 when not a modelHash in the scripts, as stated above.
 * These flags were found in the b617d scripts: 0,2,4,6,7,23,127,260,2146,2175,12294,16384,16386,20503,32768,67590,67711,98309,100359.
 * Converted to binary, each bit probably represents a flag as explained regarding another native here: gtaforums.com/topic/822314-guide-driving-styles
 * Conversion of found flags to binary: pastebin.com/kghNFkRi
 * At exactly 16384 which is 0100000000000000 in binary and 4000 in hexadecimal only planes are returned.
 * It's probably more convenient to use worldGetAllVehicles(int *arr, int arrSize) and check the shortest distance yourself and sort if you want by checking the vehicle type with for example VEHICLE::IS_THIS_MODEL_A_BOAT
 * -------------------------------------------------------------------------
 * Conclusion: This native is not worth trying to use. Use something like this instead: pastebin.com/xiFdXa7h
 */
declare function GetClosestVehicle(x: number, y: number, z: number, radius: number, modelHash: string | number, flags: number): number;

/**
 * FYI: When falling through the map (or however you got under it) you will respawn when your player ped's height is &lt;= -200.0 meters (I think you all know this) and when in a vehicle you will actually respawn at the closest vehicle node.
 * ----------
 * Vector3 nodePos;
 * GET_CLOSEST_VEHICLE_NODE(x,y,z,&amp;nodePos,...)
 * p4 is either 0, 1 or 8. 1 means any path/road. 0 means node in the middle of the closest main (asphalt) road.
 * p5, p6 are always the same:
 * 0x40400000 (3.0), 0
 * p5 can also be 100.0 and p6 can be 2.5:
 * PATHFIND::GET_CLOSEST_VEHICLE_NODE(a_0, &amp;v_5, v_9, 100.0, 2.5)
 * Known node types: simple path/asphalt road, only asphalt road, water, under the map at always the same coords.
 * The node types follows a pattern. For example, every fourth node is of the type water i.e. 3, 7, 11, 15, 19, 23, 27, 31, 35, 39... 239. Could not see any difference between nodes within certain types.
 * Starting at 2, every fourth node is under the map, always same coords.
 * Same with only asphalt road (0, 4, 8, etc) and simple path/asphalt road (1, 5, 9, etc).
 * gtaforums.com/topic/843561-pathfind-node-types
 */
declare function GetClosestVehicleNode(x: number, y: number, z: number, nodeType: number, p5: number, p6: number): [number, number[]];

/**
 * p5, p6 and p7 seems to be about the same as p4, p5 and p6 for GET_CLOSEST_VEHICLE_NODE. p6 and/or p7 has something to do with finding a node on the same path/road and same direction(at least for this native, something to do with the heading maybe). Edit this when you find out more.
 * p5 is either 1 or 12. 1 means any path/road. 12, 8, 0 means node in the middle of the closest main (asphalt) road.
 * p6 is always 3.0
 * p7 is always 0.
 * Known node types: simple path/asphalt road, only asphalt road, water, under the map at always the same coords.
 * The node types follows a pattern. For example, every fourth node is of the type water i.e. 3, 7, 11, 15, 19, 23, 27, 31, 35, 39... 239. Could not see any difference between nodes within certain types.
 * Starting at 2, every fourth node is under the map, always same coords.
 * Same with only asphalt road (0, 4, 8, etc) and simple path/asphalt road (1, 5, 9, etc).
 * gtaforums.com/topic/843561-pathfind-node-types
 * Example of usage, moving vehicle to closest path/road:
 * Vector3 coords = ENTITY::GET_ENTITY_COORDS(playerVeh, true);
 * Vector3 closestVehicleNodeCoords;
 * float roadHeading;
 * PATHFIND::GET_CLOSEST_VEHICLE_NODE_WITH_HEADING(coords.x, coords.y, coords.z, &amp;closestVehicleNodeCoords, &amp;roadHeading, 1, 3, 0);
 * ENTITY::SET_ENTITY_HEADING(playerVeh, roadHeading);
 * ENTITY::SET_ENTITY_COORDS(playerVeh, closestVehicleNodeCoords.x, closestVehicleNodeCoords.y, closestVehicleNodeCoords.z, 1, 0, 0, 1);
 * VEHICLE::SET_VEHICLE_ON_GROUND_PROPERLY(playerVeh);
 * ------------------------------------------------------------------
 * C# Example (ins1de) : pastebin.com/fxtMWAHD
 */
declare function GetClosestVehicleNodeWithHeading(x: number, y: number, z: number, nodeType: number, p6: number, p7: number): [number, number[], number];

declare function GetCloudHatOpacity(): number;
declare function N_0x20ac25e781ae4a84(): number;

declare function GetCollisionNormalOfLastHitForEntity(entity: number): number[];

/**
 * p0: Ped Handle
 * p1: int i | 0 &lt;= i &lt;= 27
 * p1 probably refers to the attributes configured in combatbehavior.meta. There are 13. Example:
 * &lt;BlindFireChance value="0.1"/&gt;
 * &lt;WeaponShootRateModifier value="1.0"/&gt;
 * &lt;TimeBetweenBurstsInCover value="1.25"/&gt;
 * &lt;BurstDurationInCover value="2.0"/&gt;
 * &lt;TimeBetweenPeeks value="10.0"/&gt;
 * &lt;WeaponAccuracy value="0.18"/&gt;
 * &lt;FightProficiency value="0.8"/&gt;
 * &lt;StrafeWhenMovingChance value="1.0"/&gt;
 * &lt;WalkWhenStrafingChance value="0.0"/&gt;
 * &lt;AttackWindowDistanceForCover value="55.0"/&gt;
 * &lt;TimeToInvalidateInjuredTarget value="9.0"/&gt;
 * &lt;TriggerChargeTime_Near value="4.0"/&gt;
 * &lt;TriggerChargeTime_Far value="10.0"/&gt;
 * -------------Confirmed by editing combatbehavior.meta:
 * p1:
 * 0=BlindFireChance
 * 1=BurstDurationInCover
 * 3=TimeBetweenBurstsInCover
 * 4=TimeBetweenPeeks
 * 5=StrafeWhenMovingChance
 * 8=WalkWhenStrafingChance
 * 11=AttackWindowDistanceForCover
 * 12=TimeToInvalidateInjuredTarget
 * 16=OptimalCoverDistance
 */
declare function GetCombatFloat(ped: number, p1: number): number;

declare function GetContentCategory(p0: number): number;
declare function N_0xa7bab11e7c9c6c5a(p0: number): number;

declare function GetContentDescriptionHash(p0: number): number;
declare function N_0x7cf0448787b23758(p0: number): number;

declare function GetContentFileVersion(p0: number, p1: number): number;
declare function N_0x37025b27d9b658b1(p0: number, p1: number): number;

/**
 * Return the mission id of a job.
 */
declare function GetContentId(p0: number): string;
/**
 * Return the mission id of a job.
 */
declare function N_0x55aa95f481d694d2(p0: number): string;

declare function GetContentUserId(p0: number): string;
declare function N_0xcd67ad041a394c9c(p0: number): string;

/**
 * formerly called _GET_CONTROL_ACTION_NAME incorrectly
 * p2 appears to always be true.
 * p2 is unused variable in function.
 * EG:
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 201, 1)  -- [[INPUT_FRONTEND_ACCEPT (e.g. Enter button)]] 
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 202, 1)  -- [[INPUT_FRONTEND_CANCEL (e.g. ESC button)]] 
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 51, 1)  -- [[INPUT_CONTEXT (e.g. E button)]] 
 * gtaforums.com/topic/819070-c-draw-instructional-buttons-scaleform-movie/#entry1068197378
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function GetControlInstructionalButton(inputGroup: number, control: number, p2: boolean): string;
/**
 * formerly called _GET_CONTROL_ACTION_NAME incorrectly
 * p2 appears to always be true.
 * p2 is unused variable in function.
 * EG:
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 201, 1)  -- [[INPUT_FRONTEND_ACCEPT (e.g. Enter button)]] 
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 202, 1)  -- [[INPUT_FRONTEND_CANCEL (e.g. ESC button)]] 
 * GET_CONTROL_INSTRUCTIONAL_BUTTON (2, 51, 1)  -- [[INPUT_CONTEXT (e.g. E button)]] 
 * gtaforums.com/topic/819070-c-draw-instructional-buttons-scaleform-movie/#entry1068197378
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function N_0x0499d7b09fc9b407(inputGroup: number, control: number, p2: boolean): string;

/**
 * Returns the value of CONTROLS::GET_CONTROL_VALUE Normalized (ie a real number value between -1 and 1)
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function GetControlNormal(inputGroup: number, control: number): number;

/**
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function GetControlValue(inputGroup: number, control: number): number;

/**
 * 0 -&gt; up
 * 1 -&gt; lowering down
 * 2 -&gt; down
 * 3 -&gt; raising up
 */
declare function GetConvertibleRoofState(vehicle: number): number;

/**
 * if (UI::_2309595AD6145265() == ${fe_menu_version_empty_no_background})
 * Seems to get the current frontend menu
 */
declare function GetCurrentFrontendMenu(): number;
/**
 * if (UI::_2309595AD6145265() == ${fe_menu_version_empty_no_background})
 * Seems to get the current frontend menu
 */
declare function N_0x2309595ad6145265(): number;

/**
 * american = 0
 * french = 1
 * german = 2
 * italian =3
 * spanish = 4
 * portuguese = 5
 * polish = 6
 * russian = 7
 * korean = 8
 * chinese = 9
 * japanese = 10
 * mexican = 11
 */
declare function GetCurrentLanguageId(): number;
/**
 * american = 0
 * french = 1
 * german = 2
 * italian =3
 * spanish = 4
 * portuguese = 5
 * polish = 6
 * russian = 7
 * korean = 8
 * chinese = 9
 * japanese = 10
 * mexican = 11
 */
declare function GetUiLanguageId(): number;

/**
 * Returns the handle for the notification currently displayed on the screen.
 */
declare function GetCurrentNotification(): number;
/**
 * Returns the handle for the notification currently displayed on the screen.
 */
declare function N_0x82352748437638ca(): number;

/**
 * Example in VB
 * Public Shared Function GetVehicleCurrentWeapon(Ped As Ped) As Integer
 * Dim arg As New OutputArgument()
 * Native.Function.Call(Hash.GET_CURRENT_PED_VEHICLE_WEAPON, Ped, arg)
 * Return arg.GetResult(Of Integer)()
 * End Function
 * Usage:
 * If GetVehicleCurrentWeapon(Game.Player.Character) = -821520672 Then ...Do something
 * Note: -821520672 = VEHICLE_WEAPON_PLANE_ROCKET
 */
declare function GetCurrentPedVehicleWeapon(ped: number, weaponHash: number): number;

/**
 * The return value seems to indicate returns true if the hash of the weapon object weapon equals the weapon hash.
 * p2 seems to be 1 most of the time.
 * p2 is not implemented
 * disassembly said that?
 */
declare function GetCurrentPedWeapon(ped: number, p2: boolean): [number, number];

declare function GetCurrentPedWeaponEntityIndex(ped: number): number;

declare function GetCurrentPlaybackForVehicle(p0: number): number;

/**
 * Returns the name of the currently executing resource.
 * @return The name of the resource.
 */
declare function GetCurrentResourceName(): string;

declare function GetCurrentScriptedConversationLine(): number;

declare function GetCurrentWebsiteId(): number;

declare function GetCutsceneSectionPlaying(): number;

declare function GetCutsceneTime(): number;

declare function GetCutsceneTotalDuration(): number;

/**
 * Takes the specified time and writes it to the structure specified in the second argument.
 * struct date_time
 * {
 * int year;
 * int PADDING1;
 * int month;
 * int PADDING2;
 * int day;
 * int PADDING3;
 * int hour;
 * int PADDING4;
 * int minute;
 * int PADDING5;
 * int second;
 * int PADDING6;
 * };
 */
declare function GetDateAndTimeFromUnixEpoch(unixEpoch: number, timeStructure: number): void;

declare function GetDeadPedPickupCoords(ped: number, p1: number, p2: number): number[];

declare function GetDecalWashLevel(decal: number): number;

/**
 * This function is hard-coded to always return 1.
 */
declare function GetDefaultScriptRendertargetRenderId(): number;

/**
 * Gets a destructible object's handle
 * Example:
 * OBJECT::_B48FCED898292E52(-809.9619750976562, 170.919, 75.7406997680664, 3.0, "des_tvsmash");
 * All found arguments for p4 starts with "des_" like "DES_FIB_Floor" and "des_shipsink".
 */
declare function GetDesObject(x: number, y: number, z: number, rotation: number, name: string): number;
/**
 * Gets a destructible object's handle
 * Example:
 * OBJECT::_B48FCED898292E52(-809.9619750976562, 170.919, 75.7406997680664, 3.0, "des_tvsmash");
 * All found arguments for p4 starts with "des_" like "DES_FIB_Floor" and "des_shipsink".
 */
declare function N_0xb48fced898292e52(x: number, y: number, z: number, rotation: number, name: string): number;

/**
 * Get a destrictible object's state.
 * Substract 1 to get the real state.
 * See _SET_DES_OBJECT_STATE to see the different states
 * For example, if the object just spawned (state 2), the native will return 3.
 */
declare function GetDesObjectState(handle: number): number;
/**
 * Get a destrictible object's state.
 * Substract 1 to get the real state.
 * See _SET_DES_OBJECT_STATE to see the different states
 * For example, if the object just spawned (state 2), the native will return 3.
 */
declare function N_0x899ba936634a322e(handle: number): number;

/**
 * control - c# works with (int)GTA.Control.CursorY / (int)GTA.Control.CursorX and returns the mouse movement (additive).
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function GetDisabledControlNormal(inputGroup: number, control: number): number;

/**
 * Returns model name of vehicle in all caps. Needs to be displayed through localizing text natives to get proper display name.
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * While often the case, this does not simply return the model name of the vehicle (which could be hashed to return the model hash). Variations of the same vehicle may also use the same display name.
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * Returns "CARNOTFOUND" if the hash doesn't match a vehicle hash.
 * Using UI::_GET_LABEL_TEXT, you can get the localized name.
 * For a full list, see here: pastebin.com/wvpyS4kS (pastebin.com/dA3TbkZw)
 */
declare function GetDisplayNameFromVehicleModel(modelHash: string | number): string;

/**
 * If useZ is false, only the 2D plane (X-Y) will be considered for calculating the distance.
 * Consider using this faster native instead: SYSTEM::VDIST - DVIST always takes in consideration the 3D coordinates.
 */
declare function GetDistanceBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, useZ: boolean): number;

/**
 * dlcVehicleIndex takes a number from 0 - GET_NUM_DLC_VEHICLES() - 1.
 * outData is a struct of 3 8-byte items.
 * The Second item in the struct *(Hash *)(outData + 1) is the vehicle hash.
 */
declare function GetDlcVehicleData(dlcVehicleIndex: number, outData: number): number;

declare function GetDlcVehicleFlags(dlcVehicleIndex: number): number;

/**
 * dlcVehicleIndex is 0 to GET_NUM_DLC_VEHICLS()
 */
declare function GetDlcVehicleModel(dlcVehicleIndex: number): number;

/**
 * p0 seems to be the weapon index
 * p1 seems to be the weapon component index
 * struct DlcComponentData{
 * int attachBone;
 * int padding1;
 * int bActiveByDefault;
 * int padding2;
 * int unk;
 * int padding3;
 * int componentHash;
 * int padding4;
 * int unk2;
 * int padding5;
 * int componentCost;
 * int padding6;
 * char nameLabel[64];
 * char descLabel[64];
 * };
 */
declare function GetDlcWeaponComponentData(dlcWeaponIndex: number, dlcWeapCompIndex: number, ComponentDataPtr: number): number;

/**
 * dlcWeaponIndex takes a number from 0 - GET_NUM_DLC_WEAPONS() - 1.
 * struct DlcWeaponData
 * {
 * int emptyCheck; //use DLC1::_IS_DLC_DATA_EMPTY on this
 * int padding1;
 * int weaponHash;
 * int padding2;
 * int unk;
 * int padding3;
 * int weaponCost;
 * int padding4;
 * int ammoCost;
 * int padding5;
 * int ammoType;
 * int padding6;
 * int defaultClipSize;
 * int padding7;
 * char nameLabel[64];
 * char descLabel[64];
 * char desc2Label[64]; // usually "the" + name
 * char upperCaseNameLabel[64];
 * };
 */
declare function GetDlcWeaponData(dlcWeaponIndex: number, outData: number): number;

declare function GetEntityAlpha(entity: number): number;

/**
 * Returns a float value representing animation's current playtime with respect to its total playtime. This value increasing in a range from [0 to 1] and wrap back to 0 when it reach 1.
 * Example:
 * 0.000000 - mark the starting of animation.
 * 0.500000 - mark the midpoint of the animation.
 * 1.000000 - mark the end of animation.
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function GetEntityAnimCurrentTime(entity: number, animDict: string, animName: string): number;

/**
 * Returns a float value representing animation's total playtime in milliseconds.
 * Example:
 * GET_ENTITY_ANIM_TOTAL_TIME(PLAYER_ID(),"amb@world_human_yoga@female@base","base_b")
 * return 20800.000000
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function GetEntityAnimTotalTime(entity: number, animDict: string, animName: string): number;

declare function GetEntityAttachedTo(entity: number): number;

declare function GetEntityAttachedToTowTruck(towTruck: number): number;

/**
 * Returns the index of the bone. If the bone was not found, -1 will be returned.
 * list:
 * pastebin.com/D7JMnX1g
 * BoneNames:
 * chassis,
 * windscreen,
 * seat_pside_r,
 * seat_dside_r,
 * bodyshell,
 * suspension_lm,
 * suspension_lr,
 * platelight,
 * attach_female,
 * attach_male,
 * bonnet,
 * boot,
 * chassis_dummy,	//Center of the dummy
 * chassis_Control,	//Not found yet
 * door_dside_f,	//Door left, front
 * door_dside_r,	//Door left, back
 * door_pside_f,	//Door right, front
 * door_pside_r,	//Door right, back
 * Gun_GripR,
 * windscreen_f,
 * platelight,	//Position where the light above the numberplate is located
 * VFX_Emitter,
 * window_lf,	//Window left, front
 * window_lr,	//Window left, back
 * window_rf,	//Window right, front
 * window_rr,	//Window right, back
 * engine,	//Position of the engine
 * gun_ammo,
 * ROPE_ATTATCH,	//Not misspelled. In script "finale_heist2b.c4".
 * wheel_lf,	//Wheel left, front
 * wheel_lr,	//Wheel left, back
 * wheel_rf,	//Wheel right, front
 * wheel_rr,	//Wheel right, back
 * exhaust,	//Exhaust. shows only the position of the stock-exhaust
 * overheat,	//A position on the engine(not exactly sure, how to name it)
 * misc_e,	//Not a car-bone.
 * seat_dside_f,	//Driver-seat
 * seat_pside_f,	//Seat next to driver
 * Gun_Nuzzle,
 * seat_r
 * I doubt that the function is case-sensitive, since I found a "Chassis" and a "chassis". - Just tested: Definitely not case-sensitive.
 */
declare function GetEntityBoneIndexByName(entity: number, boneName: string): number;

/**
 * console hash: 0xE8C0C629
 */
declare function GetEntityCollisonDisabled(entity: number): number;
/**
 * console hash: 0xE8C0C629
 */
declare function N_0xccf1e97befdae480(entity: number): number;

/**
 * p1 = !IS_ENTITY_DEAD
 */
declare function GetEntityCoords(entity: number, alive: boolean): number[];

/**
 * Gets the entity's forward vector.
 */
declare function GetEntityForwardVector(entity: number): number[];

/**
 * Gets the X-component of the entity's forward vector.
 */
declare function GetEntityForwardX(entity: number): number;

/**
 * Gets the Y-component of the entity's forward vector.
 */
declare function GetEntityForwardY(entity: number): number;

/**
 * Returns the heading of the entity in degrees. Also know as the "Yaw" of an entity.
 */
declare function GetEntityHeading(entity: number): number;

/**
 * Returns an integer value of entity's current health.
 * Example of range for ped:
 * - Player [0 to 200]
 * - Ped [100 to 200]
 * - Vehicle [0 to 1000]
 * - Object [0 to 1000]
 * Health is actually a float value but this native casts it to int.
 * In order to get the actual value, do:
 * float health = *(float *)(entityAddress + 0x280);
 */
declare function GetEntityHealth(entity: number): number;

declare function GetEntityHeight(entity: number, X: number, Y: number, Z: number, atTop: boolean, inWorldCoords: boolean): number;

/**
 * Return height (z-dimension) above ground.
 * Example: The pilot in a titan plane is 1.844176 above ground.
 * How can i convert it to meters?
 * Everything seems to be in meters, probably this too.
 */
declare function GetEntityHeightAboveGround(entity: number): number;

declare function GetEntityIndexOfCutsceneEntity(cutsceneEntName: string, modelHash: string | number): number;

declare function GetEntityIndexOfRegisteredEntity(cutsceneEntName: string, modelHash: string | number): number;

/**
 * Returns the LOD distance of an entity.
 */
declare function GetEntityLodDist(entity: number): number;

declare function GetEntityMatrix(entity: number): [number[], number[], number[], number[]];

/**
 * Return an integer value of entity's maximum health.
 * Example:
 * - Player = 200
 */
declare function GetEntityMaxHealth(entity: number): number;

/**
 * Returns the model hash from the entity
 */
declare function GetEntityModel(entity: number): number;

/**
 * Gets the heading of the entity physics in degrees, which tends to be more accurate than just "GET_ENTITY_HEADING". This can be clearly seen while, for example, ragdolling a ped/player.
 * NOTE: The name and description of this native are based on independent research. If you find this native to be more suitable under a different name and/or described differently, please feel free to do so.
 */
declare function GetEntityPhysicsHeading(entity: number): number;
/**
 * Gets the heading of the entity physics in degrees, which tends to be more accurate than just "GET_ENTITY_HEADING". This can be clearly seen while, for example, ragdolling a ped/player.
 * NOTE: The name and description of this native are based on independent research. If you find this native to be more suitable under a different name and/or described differently, please feel free to do so.
 */
declare function N_0x846bf6291198a71e(entity: number): number;

declare function GetEntityPitch(entity: number): number;

/**
 * Returns TRUE if it found an entity in your crosshair within range of your weapon. Assigns the handle of the target to the *entity that you pass it.
 * Returns false if no entity found.
 */
declare function GetEntityPlayerIsFreeAimingAt(player: number, entity: number): number;

/**
 * Console Hash: 0xFC30DDFF
 * Returns range from 0-10
 * --------------------------------------------------------------
 * The type name can be retrieved by using this:
 * typedef LPSTR(__fastcall *GetEntityPopulationTypeName_t)(unsigned __int16 entityPopulationType, bool scriptName);
 * GetEntityPopulationTypeName_t GetEntityPopulationTypeName = (GetEntityPopulationTypeName_t)FindPattern("44 0F B7 C1 4C 8D 0D ?? ?? ?? ?? 41 83 F8 07");
 */
declare function GetEntityPopulationType(entity: number): number;

/**
 * w is the correct parameter name!
 */
declare function GetEntityQuaternion(entity: number): [number, number, number, number];

/**
 * Displays the current ROLL axis of the entity [-180.0000/180.0000+]
 * (Sideways Roll) such as a vehicle tipped on its side
 */
declare function GetEntityRoll(entity: number): number;

/**
 * rotationOrder refers to the order yaw pitch roll is applied
 * value ranges from 0 to 5. What you use for rotationOrder when getting must be the same as rotationOrder when setting the rotation.
 * Unsure what value corresponds to what rotation order, more testing will be needed for that.
 * ------
 * rotationOrder is usually 2 in scripts
 * ------
 * ENTITY::GET_ENTITY_ROTATION(Any p0, false or true);
 * if false than return from -180 to 180
 * if true than return from -90 to 90
 * ---
 * As said above, the value of p1 affects the outcome. R* uses 1 and 2 instead of 0 and 1, so I marked it as an int.
 * What it returns is the yaw on the z part of the vector, which makes sense considering R* considers z as vertical. Here's a picture for those of you who don't understand pitch, yaw, and roll:
 * www.allstar.fiu.edu/aero/images/pic5-1.gif
 * I don't know why it returns a Vec3, but sometimes the values x and y go negative, yet they're always zero. Just use GET_ENTITY_PITCH and GET_ENTITY_ROLL for pitch and roll.
 */
declare function GetEntityRotation(entity: number, rotationOrder: number): number[];

declare function GetEntityRotationVelocity(entity: number): number[];

/**
 * All ambient entities in-world seem to have the same value for the second argument (Any *script), depending on when the scripthook was activated/re-activated. I've seen numbers from ~5 to almost 70 when the value was translated with to_string. The function return value seems to always be 0.
 */
declare function GetEntityScript(entity: number, script: number): string;

/**
 * result is in meters per second
 * ------------------------------------------------------------
 * So would the conversion to mph and km/h, be along the lines of this.
 * float speed = GET_ENTITY_SPEED(veh);
 * float kmh = (speed * 3.6);
 * float mph = (speed * 2.236936);
 */
declare function GetEntitySpeed(entity: number): number;

/**
 * Relative can be used for getting speed relative to the frame of the vehicle, to determine for example, if you are going in reverse (-y speed) or not (+y speed).
 */
declare function GetEntitySpeedVector(entity: number, relative: boolean): number[];

/**
 * Get how much of the entity is submerged.  1.0f is whole entity.
 */
declare function GetEntitySubmergedLevel(entity: number): number;

/**
 * Returns:
 * 0 = no entity
 * 1 = ped
 * 2 = vehicle
 * 3 = object
 */
declare function GetEntityType(entity: number): number;

declare function GetEntityUprightValue(entity: number): number;

declare function GetEntityVelocity(entity: number): number[];

declare function GetEventAtIndex(p0: boolean, eventNum: number): number;

declare function GetEventData(p0: boolean, eventNum: number, argStructSize: number): [number, number];

declare function GetEventExists(p0: boolean, p1: number): number;

declare function GetFakeWantedLevel(): number;
declare function N_0x4c9296cbcd1b971e(): number;

declare function GetFirstBlipInfoId(blipSprite: number): number;

/**
 * Type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
 * Used when calling SET_PED_HEAD_BLEND_DATA.
 */
declare function GetFirstParentIdForPedType(_type: number): number;

/**
 * Returns
 * 0 - Third Person Close
 * 1 - Third Person Mid
 * 2 - Third Person Far
 * 4 - First Person
 */
declare function GetFollowPedCamViewMode(): number;

declare function GetFollowPedCamZoomLevel(): number;

/**
 * Returns the type of camera:
 * 0 - Third Person Close
 * 1 - Third Person Mid
 * 2 - Third Person Far
 * 4 - First Person
 */
declare function GetFollowVehicleCamViewMode(): number;

declare function GetFollowVehicleCamZoomLevel(): number;

declare function GetForcedComponent(componentHash: string | number, componentId: number): [number, number, number];

declare function GetFrameCount(): number;

declare function GetFrameTime(): number;

declare function GetFreeStackSlotsCount(stackSize: number): number;

declare function GetGameTimer(): number;

declare function GetGameplayCamCoord(): number[];

declare function GetGameplayCamCoords(): number[];

declare function GetGameplayCamFov(): number;

declare function GetGameplayCamRelativeHeading(): number;

declare function GetGameplayCamRelativePitch(): number;

/**
 * p0 seems to consistently be 2 across scripts
 * Function is called faily often by CAM::CREATE_CAM_WITH_PARAMS
 */
declare function GetGameplayCamRot(rotationOrder: number): number[];

/**
 * p0 dosen't seem to change much, I tried it with 0, 1, 2:
 * 0-Pitch(X): -70.000092
 * 0-Roll(Y): -0.000001
 * 0-Yaw(Z): -43.886459
 * 1-Pitch(X): -70.000092
 * 1-Roll(Y): -0.000001
 * 1-Yaw(Z): -43.886463
 * 2-Pitch(X): -70.000092
 * 2-Roll(Y): -0.000002
 * 2-Yaw(Z): -43.886467
 */
declare function GetGameplayCamRot(rotationOrder: number): number[];

declare function GetGameplayCamZoom(): number;

/**
 * Returns a global c-style string buffer that is used internally by the game
 * nope, it returns a reference to an empty string, the same empty string that's used by 1687 internal gta functions.   if it was used in a script (and i cannot find an instance of it being used), it would be as the source for a StringCopy or somesuch.
 */
declare function GetGlobalCharBuffer(): string;
/**
 * Returns a global c-style string buffer that is used internally by the game
 * nope, it returns a reference to an empty string, the same empty string that's used by 1687 internal gta functions.   if it was used in a script (and i cannot find an instance of it being used), it would be as the source for a StringCopy or somesuch.
 */
declare function N_0x24da7d7667fd7b09(): string;

/**
 * Gets the ground elevation at the specified position. Note that if the specified position is below ground level, the function will output zero!
 * x: Position on the X-axis to get ground elevation at.
 * y: Position on the Y-axis to get ground elevation at.
 * z: Position on the Z-axis to get ground elevation at.
 * groundZ: The ground elevation at the specified position.
 * unk: Nearly always 0, very rarely 1 in the scripts.
 */
declare function GetGroundZFor_3dCoord(x: number, y: number, z: number, unk: boolean): [number, number];

/**
 * p1 may be a BOOL representing whether or not the group even exists
 */
declare function GetGroupSize(groupID: number): [number, number];

/**
 * This native converts its past string to hash. It is hashed using jenkins one at a time method.
 */
declare function GetHashKey(model: string): number;

declare function GetHashNameForComponent(entity: number, componentId: number, drawableVariant: number, textureVariant: number): number;

declare function GetHashNameForProp(entity: number, componentId: number, propIndex: number, propTextureIndex: number): number;

/**
 * Returns a hash representing which part of the map the given coords are located.
 * Possible return values:
 * (Hash of) city -&gt; -289320599
 * (Hash of) countryside -&gt; 2072609373
 * C# Example :
 * Ped player = Game.Player.Character;
 * Hash h = Function.Call&lt;Hash&gt;(Hash.GET_HASH_OF_MAP_AREA_AT_COORDS, player.Position.X, player.Position.Y, player.Position.Z);
 */
declare function GetHashOfMapAreaAtCoords(x: number, y: number, z: number): number;

declare function GetHashOfThisScriptName(): number;
declare function GetThisScriptHash(): number;

/**
 * dx = x1
 * dy = y1
 */
declare function GetHeadingFromVector_2d(dx: number, dy: number): number;

/**
 * Max 1000.
 * At -100 both helicopter rotors will stall.
 */
declare function GetHeliEngineHealth(vehicle: number): number;

/**
 * Max 1000.
 * At 0 the main rotor will stall.
 */
declare function GetHeliMainRotorHealth(vehicle: number): number;

/**
 * Max 1000.
 * At 0 the tail rotor will stall.
 */
declare function GetHeliTailRotorHealth(vehicle: number): number;

/**
 * HUD colors and their values: pastebin.com/d9aHPbXN
 */
declare function GetHudColour(hudColorIndex: number): [number, number, number, number];

declare function GetHudComponentPosition(id: number): number[];

/**
 * MulleDK19: Gets the ID of the next active thread.
 * First call _BEGIN_ENUMERATE_THREADS (0xDADFADA5A20143A8).
 * Any subsequent call to this function will then return the ID of the next active thread.
 * If the function returns 0, the end of the enumeration has been reached.
 * -----------------------------------------------------------------------
 * Some other guy: Here's an example:
 * std::vector&lt;int&gt; vecCurrentThreads;
 * void update_current_threads_list()
 * {
 * vecCurrentThreads.clear();
 * _BEGIN_ENUMERATING_THREADS();
 * int id = _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION();
 * while (id != 0)
 * {
 * id = _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION();
 * vecCurrentThreads.push_back(id);
 * }
 * }
 */
declare function GetIdOfNextThreadInEnumeration(): number;
/**
 * MulleDK19: Gets the ID of the next active thread.
 * First call _BEGIN_ENUMERATE_THREADS (0xDADFADA5A20143A8).
 * Any subsequent call to this function will then return the ID of the next active thread.
 * If the function returns 0, the end of the enumeration has been reached.
 * -----------------------------------------------------------------------
 * Some other guy: Here's an example:
 * std::vector&lt;int&gt; vecCurrentThreads;
 * void update_current_threads_list()
 * {
 * vecCurrentThreads.clear();
 * _BEGIN_ENUMERATING_THREADS();
 * int id = _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION();
 * while (id != 0)
 * {
 * id = _GET_ID_OF_NEXT_THREAD_IN_ENUMERATION();
 * vecCurrentThreads.push_back(id);
 * }
 * }
 */
declare function N_0x30b4fa1c82dd4b9f(): number;

declare function GetIdOfThisThread(): number;

/**
 * x1, y1, z1 -- Coords of your ped model
 * x2, y2, z2 -- Coords of the ped you want to switch to
 */
declare function GetIdealPlayerSwitchType(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function GetIndexOfCurrentLevel(): number;

declare function GetIndexedItemInItemset(p0: number, p1: number): number;

declare function GetInstanceId(): number;

/**
 * Returns interior ID from specified coordinates. If coordinates are outside, then it returns 0.
 * Example for VB.NET
 * Dim interiorID As Integer = Native.Function.Call(Of Integer)(Hash.GET_INTERIOR_AT_COORDS, X, Y, Z)
 */
declare function GetInteriorAtCoords(x: number, y: number, z: number): number;

/**
 * Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.
 * Use: INTERIOR::UNPIN_INTERIOR(INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE(x, y, z, interior))
 * Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.
 * Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.
 */
declare function GetInteriorAtCoordsWithType(x: number, y: number, z: number, interiorType: string): number;
/**
 * Returns the interior ID representing the requested interior at that location (if found?). The supplied interior string is not the same as the one used to load the interior.
 * Use: INTERIOR::UNPIN_INTERIOR(INTERIOR::GET_INTERIOR_AT_COORDS_WITH_TYPE(x, y, z, interior))
 * Interior types include: "V_Michael", "V_Franklins", "V_Franklinshouse", etc.. you can find them in the scripts.
 * Not a very useful native as you could just use GET_INTERIOR_AT_COORDS instead and get the same result, without even having to specify the interior type.
 */
declare function N_0x05b7a89bd78797fc(x: number, y: number, z: number, interiorType: string): number;

declare function GetInteriorFromCollision(x: number, y: number, z: number): number;

/**
 * Returns the handle of the interior that the entity is in. Returns 0 if outside.
 */
declare function GetInteriorFromEntity(entity: number): number;

/**
 * Returns the group ID of the specified interior. For example, regular interiors have group 0, subway interiors have group 1. There are a few other groups too.
 */
declare function GetInteriorGroupId(interiorID: number): number;

/**
 * false = Any resolution &lt; 1280x720
 * true = Any resolution &gt;= 1280x720
 */
declare function GetIsHidef(): number;

/**
 * From the driver's perspective, is the left headlight broken.
 */
declare function GetIsLeftVehicleHeadlightDamaged(vehicle: number): number;
/**
 * From the driver's perspective, is the left headlight broken.
 */
declare function IsHeadlightLBroken(vehicle: number): number;

declare function GetIsLoadingScreenActive(): number;

/**
 * Hash collision
 */
declare function GetIsMultiplayerBrief(p0: boolean): void;

/**
 * gadgetHash - was always 0xFBAB5776 ("GADGET_PARACHUTE").
 */
declare function GetIsPedGadgetEquipped(ped: number, gadgetHash: string | number): number;

/**
 * From the driver's perspective, is the right headlight broken.
 */
declare function GetIsRightVehicleHeadlightDamaged(vehicle: number): number;
/**
 * From the driver's perspective, is the right headlight broken.
 */
declare function IsHeadlightRBroken(vehicle: number): number;

/**
 * p0 = VEHICLE_NODE_ID
 * Returns true when the node is Offroad. Alleys, some dirt roads, and carparks return true.
 * Normal roads where plenty of Peds spawn will return false
 */
declare function GetIsSlowRoadFlag(nodeID: number): number;
/**
 * p0 = VEHICLE_NODE_ID
 * Returns true when the node is Offroad. Alleys, some dirt roads, and carparks return true.
 * Normal roads where plenty of Peds spawn will return false
 */
declare function N_0x4f5070aa58f69279(nodeID: number): number;

/**
 * from docks_heistb.c4:
 * AI::GET_IS_TASK_ACTIVE(PLAYER::PLAYER_PED_ID(), 2))
 * Known Tasks: pastebin.com/2gFqJ3Px
 */
declare function GetIsTaskActive(ped: number, taskNumber: number): number;

/**
 * Returns true when in a vehicle, false whilst entering/exiting.
 */
declare function GetIsVehicleEngineRunning(vehicle: number): number;
/**
 * Returns true when in a vehicle, false whilst entering/exiting.
 */
declare function IsVehicleEngineOn(vehicle: number): number;

declare function GetIsVehiclePrimaryColourCustom(vehicle: number): number;

/**
 * Check if Vehicle Secondary is avaliable for customize
 */
declare function GetIsVehicleSecondaryColourCustom(vehicle: number): number;

/**
 * For a full list, see here: pastebin.com/Tp0XpBMN
 */
declare function GetIsWaypointRecordingLoaded(name: string): number;

/**
 * Setting Aspect Ratio Manually in game will return:
 * false - for Narrow format Aspect Ratios (3:2, 4:3, 5:4, etc. )
 * true - for Wide format Aspect Ratios (5:3, 16:9, 16:10, etc. )
 * Setting Aspect Ratio to "Auto" in game will return "false" or "true" based on the actual set Resolution Ratio.
 */
declare function GetIsWidescreen(): number;

declare function GetItemsetSize(p0: number): number;

declare function GetJackTarget(ped: number): number;

/**
 * Seems to do the exact same as INTERIOR::GET_ROOM_KEY_FROM_ENTITY
 */
declare function GetKeyForEntityInRoom(entity: number): number;

/**
 * Gets a string literal from a label name.
 */
declare function GetLabelText(labelName: string): string;

/**
 * landing gear states:
 * 0: Deployed
 * 1: Closing
 * 2: Opening
 * 3: Retracted
 */
declare function GetLandingGearState(vehicle: number): number;
/**
 * landing gear states:
 * 0: Deployed
 * 1: Closing
 * 2: Opening
 * 3: Retracted
 */
declare function GetVehicleLandingGear(vehicle: number): number;

/**
 * Not exactly sure on this one, but here's a snippet of code:
 * if (PED::IS_PED_IN_ANY_VEHICLE(PLAYER::PLAYER_PED_ID(), 0)) {
 * v_2 = PED::GET_VEHICLE_PED_IS_IN(PLAYER::PLAYER_PED_ID(), 0);
 * } else {
 * v_2 = VEHICLE::_B2D06FAEDE65B577();
 * }
 */
declare function GetLastDrivenVehicle(): number;
/**
 * Not exactly sure on this one, but here's a snippet of code:
 * if (PED::IS_PED_IN_ANY_VEHICLE(PLAYER::PLAYER_PED_ID(), 0)) {
 * v_2 = PED::GET_VEHICLE_PED_IS_IN(PLAYER::PLAYER_PED_ID(), 0);
 * } else {
 * v_2 = VEHICLE::_B2D06FAEDE65B577();
 * }
 */
declare function N_0xb2d06faede65b577(): number;

declare function GetLastMaterialHitByEntity(entity: number): number;

declare function GetLastPedInVehicleSeat(vehicle: number, seatIndex: number): number;

/**
 * Returns the length of the string passed (much like strlen).
 */
declare function GetLengthOfLiteralString(_string: string): number;

/**
 * gets the length of a null terminated string, without checking unicode encodings
 */
declare function GetLengthOfString(p0: string): number;
/**
 * gets the length of a null terminated string, without checking unicode encodings
 */
declare function N_0x43e4111189e54f0e(p0: string): number;

/**
 * Returns the string length of the string from the gxt string .
 */
declare function GetLengthOfStringWithThisTextLabel(gxt: string): number;

/**
 * Second Param = LiveryIndex
 * example
 * int count = VEHICLE::GET_VEHICLE_LIVERY_COUNT(veh);
 * for (int i = 0; i &lt; count; i++)
 * {
 * char* LiveryName = VEHICLE::GET_LIVERY_NAME(veh, i);
 * }
 * this example will work fine to fetch all names
 * for example for Sanchez we get
 * SANC_LV1
 * SANC_LV2
 * SANC_LV3
 * SANC_LV4
 * SANC_LV5
 * Use _GET_LABEL_TEXT, to get the localized livery name.
 */
declare function GetLiveryName(vehicle: number, liveryIndex: number): string;

declare function GetLocalPlayerAimState(): number;

/**
 * Gets local system time as year, month, day, hour, minute and second.
 * Example usage:
 * int year;
 * int month;
 * int day;
 * int hour;
 * int minute;
 * int second;
 * or use std::tm struct
 * TIME::GET_LOCAL_TIME(&amp;year, &amp;month, &amp;day, &amp;hour, &amp;minute, &amp;second);
 */
declare function GetLocalTime(): [number, number, number, number, number, number];

declare function GetLockonRangeOfCurrentPedWeapon(ped: number): number;
declare function N_0x840f03e9041e2c9c(ped: number): number;

declare function GetMainPlayerBlipId(): number;

declare function GetMaxAmmo(ped: number, weaponHash: string | number, ammo: number): number;

/**
 * p2 is mostly 1 in the scripts.
 */
declare function GetMaxAmmoInClip(ped: number, weaponHash: string | number, p2: boolean): number;

declare function GetMaxRangeOfCurrentPedWeapon(ped: number): number;

/**
 * Gets the maximum wanted level the player can get.
 * Ranges from 0 to 5.
 */
declare function GetMaxWantedLevel(): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function GetMaximumNumberOfPhotos(): number;

declare function GetMeleeTargetForPed(ped: number): number;

declare function GetMillisecondsPerGameMinute(): number;

declare function GetMissionFlag(): number;

declare function GetMobilePhonePosition(): number[];

declare function GetMobilePhoneRenderId(renderId: number): void;

declare function GetMobilePhoneRotation(p1: number): number[];

/**
 * Returns the name for the type of vehicle mod(Armour, engine etc)
 */
declare function GetModSlotName(vehicle: number, modType: number): string;

/**
 * Returns the text label of a mod type for a given vehicle
 * Use _GET_LABEL_TEXT to get the part name in the game's language
 */
declare function GetModTextLabel(vehicle: number, modType: number, modValue: number): string;

/**
 * Gets the dimensions of a model.
 * Calculate (maximum - minimum) to get the size, in which case, Y will be how long the model is.
 * Example from the scripts: GAMEPLAY::GET_MODEL_DIMENSIONS(ENTITY::GET_ENTITY_MODEL(PLAYER::PLAYER_PED_ID()), &amp;v_1A, &amp;v_17);
 */
declare function GetModelDimensions(modelHash: string | number): [number[], number[]];

/**
 * Function just returns 0
 * void __fastcall ped__get_mount(NativeContext *a1)
 * {
 * NativeContext *v1; // rbx@1
 * v1 = a1;
 * GetAddressOfPedFromScriptHandle(a1-&gt;Args-&gt;Arg1);
 * v1-&gt;Returns-&gt;Item1= 0;
 * }
 */
declare function GetMount(ped: number): number;

declare function GetMusicPlaytime(): number;

/**
 * The reversed code looks like this (Sasuke78200)
 * //
 * char g_szScriptName[64];
 * char* _0xBE7ACD89(int a_iThreadID)
 * {
 * scrThread* l_pThread;
 * // Get the script thread
 * l_pThread = GetThreadByID(a_iThreadID);
 * if(l_pThread == 0 || l_pThread-&gt;m_iThreadState == 2)
 * {
 * strncpy(g_szScriptName, "", 64);
 * }
 * else
 * {
 * strncpy(g_szScriptName, l_pThread-&gt;m_szScriptName, 64);
 * }
 * return g_szScriptName;
 * }
 */
declare function GetNameOfThread(threadId: number): string;
/**
 * The reversed code looks like this (Sasuke78200)
 * //
 * char g_szScriptName[64];
 * char* _0xBE7ACD89(int a_iThreadID)
 * {
 * scrThread* l_pThread;
 * // Get the script thread
 * l_pThread = GetThreadByID(a_iThreadID);
 * if(l_pThread == 0 || l_pThread-&gt;m_iThreadState == 2)
 * {
 * strncpy(g_szScriptName, "", 64);
 * }
 * else
 * {
 * strncpy(g_szScriptName, l_pThread-&gt;m_szScriptName, 64);
 * }
 * return g_szScriptName;
 * }
 */
declare function GetThreadName(threadId: number): string;

/**
 * AIRP = Los Santos International Airport
 * ALAMO = Alamo Sea
 * ALTA = Alta
 * ARMYB = Fort Zancudo
 * BANHAMC = Banham Canyon Dr
 * BANNING = Banning
 * BEACH = Vespucci Beach
 * BHAMCA = Banham Canyon
 * BRADP = Braddock Pass
 * BRADT = Braddock Tunnel
 * BURTON = Burton
 * CALAFB = Calafia Bridge
 * CANNY = Raton Canyon
 * CCREAK = Cassidy Creek
 * CHAMH = Chamberlain Hills
 * CHIL = Vinewood Hills
 * CHU = Chumash
 * CMSW = Chiliad Mountain State Wilderness
 * CYPRE = Cypress Flats
 * DAVIS = Davis
 * DELBE = Del Perro Beach
 * DELPE = Del Perro
 * DELSOL = La Puerta
 * DESRT = Grand Senora Desert
 * DOWNT = Downtown
 * DTVINE = Downtown Vinewood
 * EAST_V = East Vinewood
 * EBURO = El Burro Heights
 * ELGORL = El Gordo Lighthouse
 * ELYSIAN = Elysian Island
 * GALFISH = Galilee
 * GOLF = GWC and Golfing Society
 * GRAPES = Grapeseed
 * GREATC = Great Chaparral
 * HARMO = Harmony
 * HAWICK = Hawick
 * HORS = Vinewood Racetrack
 * HUMLAB = Humane Labs and Research
 * JAIL = Bolingbroke Penitentiary
 * KOREAT = Little Seoul
 * LACT = Land Act Reservoir
 * LAGO = Lago Zancudo
 * LDAM = Land Act Dam
 * LEGSQU = Legion Square
 * LMESA = La Mesa
 * LOSPUER = La Puerta
 * MIRR = Mirror Park
 * MORN = Morningwood
 * MOVIE = Richards Majestic
 * MTCHIL = Mount Chiliad
 * MTGORDO = Mount Gordo
 * MTJOSE = Mount Josiah
 * MURRI = Murrieta Heights
 * NCHU = North Chumash
 * NOOSE = N.O.O.S.E
 * OCEANA = Pacific Ocean
 * PALCOV = Paleto Cove
 * PALETO = Paleto Bay
 * PALFOR = Paleto Forest
 * PALHIGH = Palomino Highlands
 * PALMPOW = Palmer-Taylor Power Station
 * PBLUFF = Pacific Bluffs
 * PBOX = Pillbox Hill
 * PROCOB = Procopio Beach
 * RANCHO = Rancho
 * RGLEN = Richman Glen
 * RICHM = Richman
 * ROCKF = Rockford Hills
 * RTRAK = Redwood Lights Track
 * SANAND = San Andreas
 * SANCHIA = San Chianski Mountain Range
 * SANDY = Sandy Shores
 * SKID = Mission Row
 * SLAB = Stab City
 * STAD = Maze Bank Arena
 * STRAW = Strawberry
 * TATAMO = Tataviam Mountains
 * TERMINA = Terminal
 * TEXTI = Textile City
 * TONGVAH = Tongva Hills
 * TONGVAV = Tongva Valley
 * VCANA = Vespucci Canals
 * VESP = Vespucci
 * VINE = Vinewood
 * WINDF = Ron Alternates Wind Farm
 * WVINE = West Vinewood
 * ZANCUDO = Zancudo River
 * ZP_ORT = Port of South Los Santos
 * ZQ_UAR = Davis Quartz
 */
declare function GetNameOfZone(x: number, y: number, z: number): string;

declare function GetNamedRendertargetRenderId(p0: string): number;

declare function GetNavmeshRouteDistanceRemaining(ped: number): [number, number, number];

declare function GetNavmeshRouteResult(ped: number): number;

declare function GetNearestPlayerToEntity(entity: number): number;

declare function GetNearestPlayerToEntityOnTeam(entity: number, team: number): number;

/**
 * Could this be used alongside either,
 * SET_NETWORK_ID_EXISTS_ON_ALL_MACHINES or _SET_NETWORK_ID_SYNC_TO_PLAYER to make it so other players can hear the sound while online? It'd be a bit troll-fun to be able to play the Zancudo UFO creepy sounds globally.
 */
declare function GetNetworkIdFromSoundId(soundId: number): number;

declare function GetNetworkTime(): number;

declare function GetNextBlipInfoId(blipSprite: number): number;

/**
 * Returns weather name hash
 */
declare function GetNextWeatherTypeHashName(): number;
/**
 * Returns weather name hash
 */
declare function GetNextWeatherType(): number;

/**
 * Needs more research. Gets the stat name of a masked bool?
 * p4 - Usually "_NGPSTAT_BOOL" or "_NGTATPSTAT_BOOL". There may be more that I missed.
 */
declare function GetNgstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;
/**
 * Needs more research. Gets the stat name of a masked bool?
 * p4 - Usually "_NGPSTAT_BOOL" or "_NGTATPSTAT_BOOL". There may be more that I missed.
 */
declare function N_0xba52ff538ed2bc71(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;

/**
 * Needs more research. Gets the stat name of a masked int?
 * p4 - Usually one of the following (there may be more that I missed):
 * -----&gt; "_APAPSTAT_INT"
 * -----&gt; "_LRPSTAT_INT"
 * -----&gt; "_NGPSTAT_INT"
 * -----&gt; "_MP_APAPSTAT_INT"
 * -----&gt; "_MP_LRPSTAT_INT"
 */
declare function GetNgstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;
/**
 * Needs more research. Gets the stat name of a masked int?
 * p4 - Usually one of the following (there may be more that I missed):
 * -----&gt; "_APAPSTAT_INT"
 * -----&gt; "_LRPSTAT_INT"
 * -----&gt; "_NGPSTAT_INT"
 * -----&gt; "_MP_APAPSTAT_INT"
 * -----&gt; "_MP_LRPSTAT_INT"
 */
declare function N_0x2b4cdca6f07ff3da(index: number, spStat: boolean, charStat: boolean, character: number, section: string): number;

declare function GetNoLoadingScreen(): number;

declare function GetNthClosestVehicleNode(x: number, y: number, z: number, nthClosest: number, unknown1: number, unknown2: number, unknown3: number): [number, number[]];

/**
 * See gtaforums.com/topic/843561-pathfind-node-types for node type info. 0 = paved road only, 1 = any road, 3 = water
 * p10 always equal 0x40400000
 * p11 always equal 0
 */
declare function GetNthClosestVehicleNodeFavourDirection(x: number, y: number, z: number, desiredX: number, desiredY: number, desiredZ: number, nthClosest: number, nodetype: number, p10: number, p11: number): [number, number[], number];

/**
 * Returns the id.
 */
declare function GetNthClosestVehicleNodeId(x: number, y: number, z: number, nth: number, nodetype: number, p5: number, p6: number): number;

declare function GetNthClosestVehicleNodeIdWithHeading(x: number, y: number, z: number, nthClosest: number, outHeading: number, p6: number, p7: number, p8: number): [number, number[]];

/**
 * Get the nth closest vehicle node and its heading. (unknown2 = 9, unknown3 = 3.0, unknown4 = 2.5)
 */
declare function GetNthClosestVehicleNodeWithHeading(x: number, y: number, z: number, nthClosest: number, unknown2: number, unknown3: number, unknown4: number): [number, number[], number, number];

/**
 * _GET_NUM_DECORATIONS
 * only documented to be continued...
 */
declare function GetNumDecorations(character: number): number;
/**
 * _GET_NUM_DECORATIONS
 * only documented to be continued...
 */
declare function N_0x278f76c3b0a8f109(character: number): number;

declare function GetNumDlcVehicles(): number;

/**
 * Allowed Values from 0 - DLC1::GET_NUM_DLC_WEAPONS()
 */
declare function GetNumDlcWeaponComponents(dlcWeaponIndex: number): number;

/**
 * Gets the total number of DLC weapons.
 */
declare function GetNumDlcWeapons(): number;

/**
 * Returns number of possible values of the componentId argument of GET_FORCED_COMPONENT.
 */
declare function GetNumForcedComponents(componentHash: string | number): number;

/**
 * Used for freemode (online) characters.
 */
declare function GetNumHairColors(): number;

/**
 * Used with freemode (online) characters.
 */
declare function GetNumHeadOverlayValues(overlayID: number): number;

declare function GetNumMakeupColors(): number;
declare function N_0xd1f7ca1535d22818(): number;

declare function GetNumMembershipDesc(): number;
declare function N_0x1f471b79acc90bef(): number;

declare function GetNumModColors(p0: number, p1: boolean): number;

declare function GetNumModKits(vehicle: number): number;

/**
 * Type equals 0 for male non-dlc, 1 for female non-dlc, 2 for male dlc, and 3 for female dlc.
 */
declare function GetNumParentPedsOfType(_type: number): number;

/**
 * character is 0 for Michael, 1 for Franklin, 2 for Trevor, 3 for freemode male, and 4 for freemode female.
 * componentId is between 0 and 11 and corresponds to the usual component slots.
 * p1 could be the outfit number; unsure.
 * p2 is usually -1; unknown function.
 * p3 appears to be a boolean flag; unknown function.
 * p4 is usually -1; unknown function.
 */
declare function GetNumPropsFromOutfit(character: number, p1: number, p2: number, p3: boolean, p4: number, componentId: number): number;

/**
 * p0 appears to be for MP
 */
declare function GetNumReservedMissionObjects(p0: boolean): number;

/**
 * p0 appears to be for MP
 */
declare function GetNumReservedMissionPeds(p0: boolean): number;

/**
 * p0 appears to be for MP
 */
declare function GetNumReservedMissionVehicles(p0: boolean): number;

/**
 * Gets the amount of metadata values with the specified key existing in the specified resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param resourceName The resource name.
 * @param metadataKey The key to look up in the resource manifest.
 */
declare function GetNumResourceMetadata(resourceName: string, metadataKey: string): number;

declare function GetNumResources(): number;

/**
 * Returns how many possible mods a vehicle has for a given mod type
 */
declare function GetNumVehicleMods(vehicle: number, modType: number): number;

declare function GetNumVehicleWindowTints(): number;

declare function GetNumberOfActiveBlips(): number;

declare function GetNumberOfDispatchedUnitsForPlayer(dispatchService: number): number;
declare function N_0xeb4a0c2d56441717(dispatchService: number): number;

declare function GetNumberOfEvents(p0: boolean): number;

declare function GetNumberOfFiresInRange(x: number, y: number, z: number, radius: number): number;

/**
 * Gets the number of instances of the specified script is currently running.
 * Actually returns numInstances - 1.
 * if (scriptPtr)
 * v3 = GetNumberOfInstancesOfScript(scriptPtr) - 1;
 * return v3;
 */
declare function GetNumberOfInstancesOfScriptWithNameHash(scriptHash: string | number): number;
/**
 * Gets the number of instances of the specified script is currently running.
 * Actually returns numInstances - 1.
 * if (scriptPtr)
 * v3 = GetNumberOfInstancesOfScript(scriptPtr) - 1;
 * return v3;
 */
declare function GetNumberOfInstancesOfStreamedScript(scriptHash: string | number): number;

declare function GetNumberOfPassengerVoiceVariations(p0: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetNumberOfPedDrawableVariations(ped: number, componentId: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetNumberOfPedPropDrawableVariations(ped: number, propId: number): number;

/**
 * Need to check behavior when drawableId = -1
 * - Doofy.Ass
 * Why this function doesn't work and return nill value?
 * GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(PLAYER.PLAYER_PED_ID(), 0, 5)
 * tick: scripts/addins/menu_execute.lua:51: attempt to call field 'GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS' (a nil value)
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetNumberOfPedPropTextureVariations(ped: number, propId: number, drawableId: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetNumberOfPedTextureVariations(ped: number, componentId: number, drawableId: number): number;

/**
 * Gets the number of players in the current session.<br/>If not multiplayer, always returns 1.
 */
declare function GetNumberOfPlayers(): number;

declare function GetNumberOfStreamingRequests(): number;

/**
 * Actually number of color combinations
 */
declare function GetNumberOfVehicleColours(vehicle: number): number;

/**
 * Returns the number of *types* of licence plates, enumerated below in SET_VEHICLE_NUMBER_PLATE_TEXT_INDEX.
 */
declare function GetNumberOfVehicleNumberPlates(): number;

declare function GetObjectFragmentDamageHealth(p0: number, p1: boolean): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function GetObjectIndexFromEntityIndex(entity: number): number;

declare function GetObjectOffsetFromCoords(xPos: number, yPos: number, zPos: number, heading: number, xOffset: number, yOffset: number, zOffset: number): number[];

/**
 * Converts world coords (posX - Z) to coords relative to the entity
 * Example:
 * posX is given as 50
 * entity's x coord is 40
 * the returned x coord will then be 10 or -10, not sure haven't used this in a while (think it is 10 though).
 */
declare function GetOffsetFromEntityGivenWorldCoords(entity: number, posX: number, posY: number, posZ: number): number[];

/**
 * Offset values are relative to the entity.
 * x = left/right
 * y = forward/backward
 * z = up/down
 */
declare function GetOffsetFromEntityInWorldCoords(entity: number, offsetX: number, offsetY: number, offsetZ: number): number[];

declare function GetOffsetFromInteriorInWorldCoords(interiorID: number, x: number, y: number, z: number): number[];

/**
 * Online version is defined here: update\update.rpf\common\data\version.txt
 * Example:
 * [ONLINE_VERSION_NUMBER]
 * 1.33
 * _GET_ONLINE_VERSION() will return "1.33"
 * Belongs in NETWORK
 */
declare function GetOnlineVersion(): string;
/**
 * Online version is defined here: update\update.rpf\common\data\version.txt
 * Example:
 * [ONLINE_VERSION_NUMBER]
 * 1.33
 * _GET_ONLINE_VERSION() will return "1.33"
 * Belongs in NETWORK
 */
declare function GetGameVersion(): string;

/**
 * Returns NULL unless UPDATE_ONSCREEN_KEYBOARD() returns 1 in the same tick.
 */
declare function GetOnscreenKeyboardResult(): string;

/**
 * Returns:
 * 5
 * 10
 * 15
 * 20
 * 25
 * 30
 * 35
 */
declare function GetPauseMenuState(): number;

declare function GetPedAccuracy(ped: number): number;

/**
 * Returns the ped's alertness (0-3).
 * Values :
 * 0 : Neutral
 * 1 : Heard something (gun shot, hit, etc)
 * 2 : Knows (the origin of the event)
 * 3 : Fully alerted (is facing the event?)
 * If the Ped does not exist, returns -1.
 */
declare function GetPedAlertness(ped: number): number;

declare function GetPedAmmoByType(ped: number, ammoType: number): number;

declare function GetPedAmmoTypeFromWeapon(ped: number, weaponHash: string | number): number;
declare function GetPedAmmoType(ped: number, weaponHash: string | number): number;

declare function GetPedArmour(ped: number): number;

declare function GetPedAsGroupLeader(groupID: number): number;

/**
 * from fm_mission_controller.c4 (variable names changed for clarity):
 * int groupID = PLAYER::GET_PLAYER_GROUP(PLAYER::PLAYER_ID());
 * PED::GET_GROUP_SIZE(group, &amp;unused, &amp;groupSize);
 * if (groupSize &gt;= 1) {
 * . . . . for (int memberNumber = 0; memberNumber &lt; groupSize; memberNumber++) {
 * . . . . . . . . Ped ped1 = PED::GET_PED_AS_GROUP_MEMBER(groupID, memberNumber);
 * . . . . . . . . //and so on
 */
declare function GetPedAsGroupMember(groupID: number, memberNumber: number): number;

/**
 * Gets the position of the specified bone of the specified ped.
 * ped: The ped to get the position of a bone from.
 * boneId: The ID of the bone to get the position from. This is NOT the index.
 * offsetX: The X-component of the offset to add to the position relative to the bone's rotation.
 * offsetY: The Y-component of the offset to add to the position relative to the bone's rotation.
 * offsetZ: The Z-component of the offset to add to the position relative to the bone's rotation.
 */
declare function GetPedBoneCoords(ped: number, boneId: number, offsetX: number, offsetY: number, offsetZ: number): number[];

/**
 * no bone= -1
 */
declare function GetPedBoneIndex(ped: number, boneId: number): number;

/**
 * Returns the hash of the weapon/model/object that killed the ped.
 */
declare function GetPedCauseOfDeath(ped: number): number;

declare function GetPedCombatMovement(ped: number): number;

declare function GetPedCombatRange(ped: number): number;

/**
 * p2 is always 1 in the scripts.
 * if (GET_PED_CONFIG_FLAG(ped, 78, 1))
 * = returns true if ped is aiming/shooting a gun
 */
declare function GetPedConfigFlag(ped: number, flagId: number, p2: boolean): number;

declare function GetPedDecorationsState(ped: number): number;
declare function N_0x71eab450d86954a1(ped: number): number;

declare function GetPedDefensiveAreaPosition(ped: number, p1: boolean): number[];

declare function GetPedDesiredMoveBlendRatio(ped: number): number;

/**
 * Ids
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7 - ------
 * 8 - Accessories 1
 * 9 - Accessories 2
 * 10
 * 11 - Auxiliary parts for torso
 */
declare function GetPedDrawableVariation(ped: number, componentId: number): number;

declare function GetPedEnveffScale(ped: number): number;

/**
 * Gets the offset the specified ped has moved since the previous tick.
 * If worldSpace is false, the returned offset is relative to the ped. That is, if the ped has moved 1 meter right and 5 meters forward, it'll return 1,5,0.
 * If worldSpace is true, the returned offset is relative to the world. That is, if the ped has moved 1 meter on the X axis and 5 meters on the Y axis, it'll return 1,5,0.
 */
declare function GetPedExtractedDisplacement(ped: number, worldSpace: boolean): number[];

/**
 * hash collision???
 */
declare function GetPedFloodInvincibility(ped: number, p1: boolean): void;

/**
 * Returns the group id of which the specified ped is a member of.
 */
declare function GetPedGroupIndex(ped: number): number;

/**
 * The pointer is to a padded struct that matches the arguments to SET_PED_HEAD_BLEND_DATA(...). There are 4 bytes of padding after each field.
 * (Edit) Console Hash: 0x44E1680C
 * pass this struct in the second parameter
 * typedef struct
 * {
 * int shapeFirst, shapeSecond, shapeThird;
 * int skinFirst, skinSecond, skinThird;
 * float shapeMix, skinMix, thirdMix;
 * } headBlendData;
 */
declare function GetPedHeadBlendData(ped: number, headBlendData: number): number;

/**
 * Likely a char, if that overlay is not set, e.i. "None" option, returns 255;
 */
declare function GetPedHeadOverlayValue(ped: number, overlayID: number): number;

/**
 * -1 (driver) &lt;= index &lt; GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle)
 */
declare function GetPedInVehicleSeat(vehicle: number, index: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function GetPedIndexFromEntityIndex(entity: number): number;

/**
 * Returns a handle to the first entity within the a circle spawned inside the 2 points from a radius. It could return a ped or an entity, but the scripts expect a ped, but still check if it's a ped.
 */
declare function GetPedInsideExplosionArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number): number;

declare function GetPedLastDamageBone(ped: number, outBone: number): number;

/**
 * Pass ped. Pass address of Vector3.
 * The coord will be put into the Vector3.
 * The return will determine whether there was a coord found or not.
 */
declare function GetPedLastWeaponImpactCoord(ped: number): [number, number[]];

declare function GetPedMaxHealth(ped: number): number;

declare function GetPedMoney(ped: number): number;

/**
 * sizeAndPeds - is a pointer to an array. The array is filled with peds found nearby the ped supplied to the first argument.
 * ignore - ped type to ignore
 * Return value is the number of peds found and added to the array passed.
 * -----------------------------------
 * To make this work in most menu bases at least in C++ do it like so,
 * Formatted Example: pastebin.com/D8an9wwp
 * -----------------------------------
 * Example: gtaforums.com/topic/789788-function-args-to-pedget-ped-nearby-peds/?p=1067386687
 */
declare function GetPedNearbyPeds(ped: number, ignore: number): [number, number];

/**
 * Returns size of array, passed into the second variable.
 * See below for usage information.
 * This function actually requires a struct, where the first value is the maximum number of elements to return.  Here is a sample of how I was able to get it to work correctly, without yet knowing the struct format.
 * //Setup the array
 * const int numElements = 10;
 * const int arrSize = numElements * 2 + 2;
 * Any veh[arrSize];
 * //0 index is the size of the array
 * veh[0] = numElements;
 * int count = PED::GET_PED_NEARBY_VEHICLES(PLAYER::PLAYER_PED_ID(), veh);
 * if (veh != NULL)
 * {
 * //Simple loop to go through results
 * for (int i = 0; i &lt; count; i++)
 * {
 * int offsettedID = i * 2 + 2;
 * //Make sure it exists
 * if (veh[offsettedID] != NULL &amp;&amp; ENTITY::DOES_ENTITY_EXIST(veh[offsettedID]))
 * {
 * //Do something
 * }
 * }
 * }
 */
declare function GetPedNearbyVehicles(ped: number, sizeAndVehs: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetPedPaletteVariation(ped: number, componentId: number): number;

/**
 * -1: no landing
 * 0: landing on both feet
 * 1: stumbling
 * 2: rolling
 * 3: ragdoll
 */
declare function GetPedParachuteLandingType(ped: number): number;

/**
 * Returns:
 * -1: Normal
 * 0: Wearing parachute on back
 * 1: Parachute opening
 * 2: Parachute open
 * 3: Falling to doom (e.g. after exiting parachute)
 * Normal means no parachute?
 */
declare function GetPedParachuteState(ped: number): number;

declare function GetPedParachuteTintIndex(ped: number, outTintIndex: number): void;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetPedPropIndex(ped: number, componentId: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetPedPropTextureIndex(ped: number, componentId: number): number;

declare function GetPedRagdollBoneIndex(ped: number, bone: number): number;

declare function GetPedRelationshipGroupDefaultHash(ped: number): number;

declare function GetPedRelationshipGroupHash(ped: number): number;

declare function GetPedResetFlag(ped: number, flagId: number): number;

/**
 * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
 * Is best to check if the Ped is dead before asking for its killer.
 */
declare function GetPedSourceOfDeath(ped: number): number;
/**
 * Returns the Entity (Ped, Vehicle, or ?Object?) that killed the 'ped'
 * Is best to check if the Ped is dead before asking for its killer.
 */
declare function GetPedKiller(ped: number): number;

/**
 * Returns whether the entity is in stealth mode
 */
declare function GetPedStealthMovement(ped: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function GetPedTextureVariation(ped: number, componentId: number): number;

/**
 * Console Hash: 0xDF6D5D54
 * There is no way this is the correct name. The only time this is called it's compared with the game timer and I used this to test something and noticed when I was killed by no matter what it was my 'Time Of Death' via this native was always 0, but my friends was some random big number like so, 147591.
 * Retreives [CPed + 15CC] (as of 944)
 */
declare function GetPedTimeOfDeath(ped: number): number;

/**
 * Ped Types: (ordered by return priority)
 * Michael = 0
 * Franklin = 1
 * Trevor = 2
 * Army = 29
 * Animal = 28
 * SWAT = 27
 * LSFD = 21
 * Paramedic = 20
 * Cop = 6
 * Male = 4
 * Female = 5
 * Human = 26
 * Note/Exception
 * hc_gunman : 4 // Mix male and female
 * hc_hacker : 4 // Mix male and female
 * mp_f_misty_01 : 4 // Female character
 * s_f_y_ranger_01 : 5 // Ranger
 * s_m_y_ranger_01 : 4 // Ranger
 * s_m_y_uscg_01 : 6 // US Coast Guard
 */
declare function GetPedType(ped: number): number;

/**
 * Quick disassembly and test seems to indicate that this native gets the Ped currently using the specified door.
 */
declare function GetPedUsingVehicleDoor(vehicle: number, doorIndex: number): number;
/**
 * Quick disassembly and test seems to indicate that this native gets the Ped currently using the specified door.
 */
declare function N_0x218297bf0cfd853b(vehicle: number, doorIndex: number): number;

declare function GetPedWaypointDistance(p0: number): number;

declare function GetPedWaypointProgress(p0: number): number;

declare function GetPedWeaponTintIndex(ped: number, weaponHash: string | number): number;

declare function GetPedWeapontypeInSlot(ped: number, weaponSlot: string | number): number;

/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 */
declare function GetPedheadshotTxdString(handle: number): string;

declare function GetPedsJacker(ped: number): number;

declare function GetPhoneGestureAnimCurrentTime(ped: number): number;

declare function GetPhoneGestureAnimTotalTime(ped: number): number;

declare function GetPickupCoords(pickup: number): number[];

declare function GetPickupObject(pickup: number): number;
declare function N_0x5099bc55630b25ae(pickup: number): number;

declare function GetPlayerCurrentStealthNoise(player: number): number;

declare function GetPlayerFromServerId(serverId: number): number;

/**
 * Returns the group ID the player is member of.
 */
declare function GetPlayerGroup(player: number): number;

declare function GetPlayerHasReserveParachute(player: number): number;

/**
 * Called 5 times in the scripts. All occurrences found in b617d, sorted alphabetically and identical lines removed:
 * AUDIO::GET_PLAYER_HEADSET_SOUND_ALTERNATE("INOUT", 0.0);
 * AUDIO::GET_PLAYER_HEADSET_SOUND_ALTERNATE("INOUT", 1.0);
 */
declare function GetPlayerHeadsetSoundAlternate(p0: string, p1: number): void;

/**
 * Returns the same as PLAYER_ID and NETWORK_PLAYER_ID_TO_INT
 */
declare function GetPlayerIndex(): number;

/**
 * Returns the Player's Invincible status.
 * This function will always return false if 0x733A643B5B0C53C1 is used to set the invincibility status. To always get the correct result, use this:
 * bool IsPlayerInvincible(Player player)
 * {
 * auto addr = getScriptHandleBaseAddress(GET_PLAYER_PED(player));
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x188);
 * return ((flag &amp; (1 &lt;&lt; 8)) != 0) || ((flag &amp; (1 &lt;&lt; 9)) != 0);
 * }
 * return false;
 * }
 */
declare function GetPlayerInvincible(player: number): number;

declare function GetPlayerMaxArmour(player: number): number;

declare function GetPlayerName(player: number): string;

declare function GetPlayerParachutePackTintIndex(player: number, tintIndex: number): void;

declare function GetPlayerParachuteSmokeTrailColor(player: number): [number, number, number];

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 */
declare function GetPlayerParachuteTintIndex(player: number, tintIndex: number): void;

/**
 * Gets the local player ped
 */
declare function GetPlayerPed(player: number): number;

declare function GetPlayerPedIsFollowing(ped: number): number;

/**
 * Same as GET_PLAYER_PED.
 */
declare function GetPlayerPedScriptIndex(player: number): number;

declare function GetPlayerRadioStationGenre(): number;

/**
 * Returns 255 (radio off index) if the function fails.
 */
declare function GetPlayerRadioStationIndex(): number;

/**
 * Returns active radio station name
 */
declare function GetPlayerRadioStationName(): string;

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 */
declare function GetPlayerReserveParachuteTintIndex(player: number, index: number): void;

/**
 * Returns RGB color of the player (duh)
 */
declare function GetPlayerRgbColour(player: number): [number, number, number];

declare function GetPlayerServerId(player: number): number;

declare function GetPlayerShortSwitchState(): number;

declare function GetPlayerSprintStaminaRemaining(player: number): number;

declare function GetPlayerSprintTimeRemaining(player: number): number;

declare function GetPlayerSwitchState(): number;

declare function GetPlayerSwitchType(): number;

/**
 * Assigns the handle of locked-on melee target to *entity that you pass it.
 * Returns false if no entity found.
 */
declare function GetPlayerTargetEntity(player: number, entity: number): number;

/**
 * Gets the player's team.<br/>Does nothing in singleplayer.
 */
declare function GetPlayerTeam(player: number): number;

declare function GetPlayerUnderwaterTimeRemaining(player: number): number;

declare function GetPlayerWantedCentrePosition(player: number): number[];

declare function GetPlayerWantedLevel(player: number): number;

/**
 * Alternative: GET_VEHICLE_PED_IS_IN(PLAYER_PED_ID(), 1);
 */
declare function GetPlayersLastVehicle(): number;

declare function GetPositionInRecording(p0: number): number;

/**
 * p1 is some kind of tolerance
 */
declare function GetPositionOfVehicleRecordingAtTime(p0: number, p1: number, p2: string): number[];

/**
 * Return POSIX timestamp.
 */
declare function GetPosixTime(): number;
/**
 * Return POSIX timestamp.
 */
declare function N_0x9a73240b49945c76(): number;

/**
 * Gets system time as year, month, day, hour, minute and second.
 * Example usage:
 * int year;
 * int month;
 * int day;
 * int hour;
 * int minute;
 * int second;
 * TIME::GET_POSIX_TIME(&amp;year, &amp;month, &amp;day, &amp;hour, &amp;minute, &amp;second);
 */
declare function GetPosixTime(): [number, number, number, number, number, number];

/**
 * Returns current weather name hash
 */
declare function GetPrevWeatherTypeHashName(): number;
/**
 * Returns current weather name hash
 */
declare function GetPrevWeatherType(): number;

/**
 * anyone have a settingid dump?
 */
declare function GetProfileSetting(profileSetting: number): number;

/**
 * outfit = a structure passing though it - see GET_SHOP_PED_QUERY_OUTFIT
 * slot - outfit slot
 * item - hold 3 ints in a struct, you can use Vector3 structure
 * GET_SHOP_PED_???
 */
declare function GetPropFromOutfit(outfit: number, slot: number, item: number): number;

declare function GetPstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number): number;
declare function N_0x80c75307b1c42837(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetPstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number): number;
declare function N_0x61e111e323419e07(index: number, spStat: boolean, charStat: boolean, character: number): number;

/**
 * Returns String with radio station name.
 */
declare function GetRadioStationName(radioStation: number): string;

declare function GetRainLevel(): number;

declare function GetRandomEventFlag(): number;

declare function GetRandomFloatInRange(startRange: number, endRange: number): number;

/**
 * Another extremely useful native.
 * You can use it simply like:
 * if (GAMEPLAY::GET_RANDOM_INT_IN_RANGE(0, 2))
 * and the if-statement will count it as false only if the random int is 0. That means there is a one in three chance of it being false. Put a "!" in front and it means there is a one in three chance of it being true.
 */
declare function GetRandomIntInRange(startRange: number, endRange: number): number;

/**
 * Gets a random ped in the x/y/zRadius near the x/y/z coordinates passed.
 * Ped Types:
 * Any = -1
 * Player = 1
 * Male = 4
 * Female = 5
 * Cop = 6
 * Human = 26
 * SWAT = 27
 * Animal = 28
 * Army = 29
 */
declare function GetRandomPedAtCoord(x: number, y: number, z: number, xRadius: number, yRadius: number, zRadius: number, pedType: number): number;

declare function GetRandomVehicleBackBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function GetRandomVehicleFrontBumperInSphere(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

/**
 * Gets a random vehicle in a sphere at the specified position, of the specified radius.
 * x: The X-component of the position of the sphere.
 * y: The Y-component of the position of the sphere.
 * z: The Z-component of the position of the sphere.
 * radius: The radius of the sphere. Max is 9999.9004.
 * modelHash: The vehicle model to limit the selection to. Pass 0 for any model.
 * flags: The bitwise flags that modifies the behaviour of this function.
 */
declare function GetRandomVehicleInSphere(x: number, y: number, z: number, radius: number, modelHash: string | number, flags: number): number;

/**
 * Not present in the retail version! It's just a nullsub.
 * p0 always true (except in one case)
 * p1 returns a random vehicle hash loaded in memory
 * p2 unsure, maybe returns a different model
 */
declare function GetRandomVehicleModelInMemory(p0: boolean): [number, number];

declare function GetRandomVehicleNode(x: number, y: number, z: number, radius: number, p4: boolean, p5: boolean, p6: boolean): [number, number[], number];

/**
 * Gets the relationship between two groups. This should be called twice (once for each group).
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * Example:
 * PED::GET_RELATIONSHIP_BETWEEN_GROUPS(l_1017, 0xA49E591C);
 * PED::GET_RELATIONSHIP_BETWEEN_GROUPS(0xA49E591C, l_1017);
 */
declare function GetRelationshipBetweenGroups(group1: string | number, group2: string | number): number;

/**
 * Gets the relationship between two peds. This should be called twice (once for each ped).
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * (Credits: Inco)
 * Example:
 * PED::GET_RELATIONSHIP_BETWEEN_PEDS(2, l_1017, 0xA49E591C);
 * PED::GET_RELATIONSHIP_BETWEEN_PEDS(2, 0xA49E591C, l_1017);
 */
declare function GetRelationshipBetweenPeds(ped1: number, ped2: number): number;

declare function GetRenderingCam(): number;

declare function GetResourceByFindIndex(findIndex: number): string;

declare function GetResourceKvpFloat(key: string): number;

declare function GetResourceKvpInt(key: string): number;

declare function GetResourceKvpString(key: string): string;

/**
 * Gets the metadata value at a specified key/index from a resource's manifest.
 * See also: [Resource manifest](https://wiki.fivem.net/wiki/Resource_manifest)
 * @param metadataKey The key in the resource manifest.
 * @param index The value index, in a range from [0..GET_NUM_RESOURCE_METDATA-1].
 * @param resourceName The resource name.
 */
declare function GetResourceMetadata(resourceName: string, metadataKey: string, index: number): string;

/**
 * Gets the room hash key from the room that the specified entity is in. Each room in every interior has a unique key. Returns 0 if the entity is outside.
 */
declare function GetRoomKeyFromEntity(entity: number): number;

/**
 * Returns the room hash key from the current gameplay cam.
 */
declare function GetRoomKeyFromGameplayCam(): number;
/**
 * Returns the room hash key from the current gameplay cam.
 */
declare function N_0xa6575914d2a0b450(): number;

/**
 * Return the root content id of a job.
 */
declare function GetRootContentId(p0: number): string;
/**
 * Return the root content id of a job.
 */
declare function N_0xc0173d6bff4e0348(p0: number): string;

declare function GetRopeLastVertexCoord(rope: number): number;

/**
 * Get a rope's length.  Can be modified with ROPE_FORCE_LENGTH
 */
declare function GetRopeLength(rope: number): number;

declare function GetRopeVertexCoord(rope: number, vertex: number): number;

declare function GetRopeVertexCount(rope: number): number;

declare function GetRotationOfVehicleRecordingAtTime(p0: number, p1: number, p2: number): number;

/**
 * When onGround == true outPosition is a position located on the nearest pavement.
 * When a safe coord could not be found the result of a function is false and outPosition == Vector3.Zero.
 * In the scripts these flags are used: 0, 14, 12, 16, 20, 21, 28. 0 is most commonly used, then 16.
 * 16 works for me, 0 crashed the script.
 */
declare function GetSafeCoordForPed(x: number, y: number, z: number, onGround: boolean, flags: number): [number, number[]];

declare function GetSafePickupCoords(x: number, y: number, z: number, p3: number, p4: number): number[];

/**
 * Gets the scale of safe zone. if the safe zone size scale is max, it will return 1.0.
 */
declare function GetSafeZoneSize(): number;

/**
 * World to relative screen coords
 * this world to screen will keep the text on screen. it will keep it in the screen pos
 */
declare function GetScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): [number, number, number];
/**
 * World to relative screen coords
 * this world to screen will keep the text on screen. it will keep it in the screen pos
 */
declare function N_0xf9904d11f1acbec3(worldX: number, worldY: number, worldZ: number): [number, number, number];

/**
 * Convert a world coordinate into its relative screen coordinate.  (WorldToScreen)
 * Returns a boolean; whether or not the operation was successful. It will return false if the coordinates given are not visible to the rendering camera.
 * For .NET users...
 * VB:
 * Public Shared Function World3DToScreen2d(pos as vector3) As Vector2
 * Dim x2dp, y2dp As New Native.OutputArgument
 * Native.Function.Call(Of Boolean)(Native.Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.x, pos.y, pos.z, x2dp, y2dp)
 * Return New Vector2(x2dp.GetResult(Of Single), y2dp.GetResult(Of Single))
 * End Function
 * C#:
 * Vector2 World3DToScreen2d(Vector3 pos)
 * {
 * var x2dp = new OutputArgument();
 * var y2dp = new OutputArgument();
 * Function.Call&lt;bool&gt;(Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.X, pos.Y, pos.Z, x2dp, y2dp);
 * return new Vector2(x2dp.GetResult&lt;float&gt;(), y2dp.GetResult&lt;float&gt;());
 * }
 * //USE VERY SMALL VALUES FOR THE SCALE OF RECTS/TEXT because it is dramatically larger on screen than in 3D, e.g '0.05' small.
 * Used to be called _WORLD3D_TO_SCREEN2D
 * I thought we lost you from the scene forever. It does seem however that calling SET_DRAW_ORIGIN then your natives, then ending it. Seems to work better for certain things such as keeping boxes around people for a predator missile e.g.
 */
declare function GetScreenCoordFromWorldCoord(worldX: number, worldY: number, worldZ: number): [number, number, number];
/**
 * Convert a world coordinate into its relative screen coordinate.  (WorldToScreen)
 * Returns a boolean; whether or not the operation was successful. It will return false if the coordinates given are not visible to the rendering camera.
 * For .NET users...
 * VB:
 * Public Shared Function World3DToScreen2d(pos as vector3) As Vector2
 * Dim x2dp, y2dp As New Native.OutputArgument
 * Native.Function.Call(Of Boolean)(Native.Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.x, pos.y, pos.z, x2dp, y2dp)
 * Return New Vector2(x2dp.GetResult(Of Single), y2dp.GetResult(Of Single))
 * End Function
 * C#:
 * Vector2 World3DToScreen2d(Vector3 pos)
 * {
 * var x2dp = new OutputArgument();
 * var y2dp = new OutputArgument();
 * Function.Call&lt;bool&gt;(Hash.GET_SCREEN_COORD_FROM_WORLD_COORD , pos.X, pos.Y, pos.Z, x2dp, y2dp);
 * return new Vector2(x2dp.GetResult&lt;float&gt;(), y2dp.GetResult&lt;float&gt;());
 * }
 * //USE VERY SMALL VALUES FOR THE SCALE OF RECTS/TEXT because it is dramatically larger on screen than in 3D, e.g '0.05' small.
 * Used to be called _WORLD3D_TO_SCREEN2D
 * I thought we lost you from the scene forever. It does seem however that calling SET_DRAW_ORIGIN then your natives, then ending it. Seems to work better for certain things such as keeping boxes around people for a predator missile e.g.
 */
declare function World3dToScreen2d(worldX: number, worldY: number, worldZ: number): [number, number, number];

/**
 * Returns whether the specified screen effect is active.
 * See the effects list in _START_SCREEN_EFFECT
 */
declare function GetScreenEffectIsActive(effectName: string): number;

/**
 * int screenresx,screenresy;
 * GET_SCREEN_RESOLUTION(&amp;screenresx,&amp;screenresy);
 */
declare function GetScreenResolution(): [number, number];

/**
 * Gets the status of a script-assigned task. The hash does not seem to match the actual native name, but is assigned hardcoded from the executable during task creation.
 * Statuses are specific to tasks, in addition '7' means the specified task is not assigned to the ped.
 * A few hashes found in the executable (although not a complete list) can be found at pastebin.com/R9iK6M9W as it was too long for this wiki.
 */
declare function GetScriptTaskStatus(targetPed: number, taskHash: string | number): number;

declare function GetScriptedCoverPointCoords(coverpoint: number): number[];

declare function GetSeatPedIsTryingToEnter(ped: number): number;

/**
 * Returns the hash of the weapon.
 * var num7 = WEAPON::GET_SELECTED_PED_WEAPON(num4);
 * sub_27D3(num7);
 * switch (num7)
 * {
 * case 0x24B17070:
 * Also see WEAPON::GET_CURRENT_PED_WEAPON. Difference?
 * -------------------------------------------------------------------------
 * The difference is that GET_SELECTED_PED_WEAPON simply returns the ped's current weapon hash but GET_CURRENT_PED_WEAPON also checks the weapon object and returns true if the hash of the weapon object equals the weapon hash
 */
declare function GetSelectedPedWeapon(ped: number): number;

/**
 * returned values:
 * 0 to 7 = task that's currently in progress, 0 meaning the first one.
 */
declare function GetSequenceProgress(ped: number): number;

/**
 * Parameters:
 * rayHandle - Ray Handle from a casted ray, as returned by CAST_RAY_POINT_TO_POINT
 * hit - Where to store whether or not it hit anything. False is when the ray reached its destination.
 * endCoords - Where to store the world-coords of where the ray was stopped (by hitting its desired max range or by colliding with an entity/the map)
 * surfaceNormal - Where to store the surface-normal coords (NOT relative to the game world) of where the entity was hit by the ray
 * entityHit - Where to store the handle of the entity hit by the ray
 * Returns:
 * Result? Some type of enum.
 * NOTE: To get the offset-coords of where the ray hit relative to the entity that it hit (which is NOT the same as surfaceNormal), you can use these two natives:
 * Vector3 offset = ENTITY::GET_OFFSET_FROM_ENTITY_GIVEN_WORLD_COORDS(entityHit, endCoords.x, endCoords.y, endCoords.z);
 * Vector3 entitySpotCoords = ENTITY::GET_OFFSET_FROM_ENTITY_IN_WORLD_COORDS(entityHit, offset.x, offset.y, offset.z);
 * Use ENTITY::GET_ENTITY_TYPE(entityHit) to quickly distinguish what type of entity you hit (ped/vehicle/object - 1/2/3)
 */
declare function GetShapeTestResult(rayHandle: number): [number, any /* actually bool */, number[], number[], number];
/**
 * Parameters:
 * rayHandle - Ray Handle from a casted ray, as returned by CAST_RAY_POINT_TO_POINT
 * hit - Where to store whether or not it hit anything. False is when the ray reached its destination.
 * endCoords - Where to store the world-coords of where the ray was stopped (by hitting its desired max range or by colliding with an entity/the map)
 * surfaceNormal - Where to store the surface-normal coords (NOT relative to the game world) of where the entity was hit by the ray
 * entityHit - Where to store the handle of the entity hit by the ray
 * Returns:
 * Result? Some type of enum.
 * NOTE: To get the offset-coords of where the ray hit relative to the entity that it hit (which is NOT the same as surfaceNormal), you can use these two natives:
 * Vector3 offset = ENTITY::GET_OFFSET_FROM_ENTITY_GIVEN_WORLD_COORDS(entityHit, endCoords.x, endCoords.y, endCoords.z);
 * Vector3 entitySpotCoords = ENTITY::GET_OFFSET_FROM_ENTITY_IN_WORLD_COORDS(entityHit, offset.x, offset.y, offset.z);
 * Use ENTITY::GET_ENTITY_TYPE(entityHit) to quickly distinguish what type of entity you hit (ped/vehicle/object - 1/2/3)
 */
declare function GetRaycastResult(rayHandle: number): [number, any /* actually bool */, number[], number[], number];

/**
 * behaves exactly the same way as GET_SHAPE_TEST_RESULT except it has one extra parameter (_materialHash).
 * Quick disassembly seems to indicate that the unknown is a hash. EDIT: Seems to be the hash of the hit material or surface type.
 * found a materialFX.dat list of them but not sure if it has to do with this native yet.
 */
declare function GetShapeTestResultEx(rayHandle: number): [number, any /* actually bool */, number[], number[], number, number];
/**
 * behaves exactly the same way as GET_SHAPE_TEST_RESULT except it has one extra parameter (_materialHash).
 * Quick disassembly seems to indicate that the unknown is a hash. EDIT: Seems to be the hash of the hit material or surface type.
 * found a materialFX.dat list of them but not sure if it has to do with this native yet.
 */
declare function N_0x65287525d951f6be(rayHandle: number): [number, any /* actually bool */, number[], number[], number, number];

declare function GetShopPedComponent(p0: string | number, p1: number): void;

declare function GetShopPedOutfit(p0: number, p1: number): void;

declare function GetShopPedOutfitLocate(p0: number): number;
declare function N_0x073ca26b079f956e(p0: number): number;

declare function GetShopPedQueryComponent(componentId: number, outComponent: number): void;

/**
 * struct Outfit_s
 * {
 * int mask, torso, pants, parachute, shoes, misc1, tops1, armour, crew, tops2, hat, glasses, earpiece;
 * int maskTexture, torsoTexture, pantsTexture, parachuteTexture, shoesTexture, misc1Texture, tops1Texture,
 * armourTexture, crewTexture, tops2Texture, hatTexture, glassesTexture, earpieceTexture;
 * };
 */
declare function GetShopPedQueryOutfit(p0: number, outfit: number): void;

declare function GetShopPedQueryProp(p0: number, p1: number): void;

declare function GetSnowLevel(): number;

declare function GetSoundId(): number;

declare function GetSoundIdFromNetworkId(netId: number): number;
declare function N_0x75262fd12d0a1c84(netId: number): number;

/**
 * locked is 0 if no door is found
 * locked is 0 if door is unlocked
 * locked is 1 if door is found and unlocked.
 * -------------
 * the locked bool is either 0(unlocked)(false) or 1(locked)(true)
 */
declare function GetStateOfClosestDoorOfType(_type: string | number, x: number, y: number, z: number): [any /* actually bool */, number];

declare function GetStreamPlayTime(): number;

/**
 * Determines the name of the street which is the closest to the given coordinates.
 * x,y,z - the coordinates of the street
 * streetName - returns a hash to the name of the street the coords are on
 * crossingRoad - if the coordinates are on an intersection, a hash to the name of the crossing road
 * Note: the names are returned as hashes, the strings can be returned using the function UI::GET_STREET_NAME_FROM_HASH_KEY.
 */
declare function GetStreetNameAtCoord(x: number, y: number, z: number): [number, number];

/**
 * This functions converts the hash of a street name into a readable string.
 * For how to get the hashes, see PATHFIND::GET_STREET_NAME_AT_COORD.
 */
declare function GetStreetNameFromHashKey(hash: string | number): string;

/**
 * p0 = VEHICLE_NODE_ID
 * Returns false for nodes that aren't used for GPS routes.
 * Example:
 * Nodes in Fort Zancudo and LSIA are false
 */
declare function GetSupportsGpsRouteFlag(nodeID: number): number;
/**
 * p0 = VEHICLE_NODE_ID
 * Returns false for nodes that aren't used for GPS routes.
 * Example:
 * Nodes in Fort Zancudo and LSIA are false
 */
declare function N_0xa2ae5c478b96e3b6(nodeID: number): number;

declare function GetSynchronizedScenePhase(sceneID: number): number;

declare function GetSynchronizedSceneRate(sceneID: number): number;

/**
 * Returns the zoneID for the overlay if it is a member of collection.
 * enum TattooZoneData
 * {
 * ZONE_TORSO = 0,
 * ZONE_HEAD = 1,
 * ZONE_LEFT_ARM = 2,
 * ZONE_RIGHT_ARM = 3,
 * ZONE_LEFT_LEG = 4,
 * ZONE_RIGHT_LEG = 5,
 * ZONE_UNKNOWN = 6,
 * ZONE_NONE = 7,
 * };
 */
declare function GetTattooZone(collection: string | number, overlay: string | number): number;

/**
 * This get's the height of the FONT and not the total text. You need to get the number of lines your text uses, and get the height of a newline (I'm using a smaller value) to get the total text height.
 */
declare function GetTextScaleHeight(size: number, font: number): number;
/**
 * This get's the height of the FONT and not the total text. You need to get the number of lines your text uses, and get the height of a newline (I'm using a smaller value) to get the total text height.
 */
declare function N_0xdb88a37483346780(size: number, font: number): number;

/**
 * Returns a substring of a specified length starting at a specified position.
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * subStr = UI::_GET_TEXT_SUBSTRING("MY_STRING", 3, 6);
 */
declare function GetTextSubstring(text: string, position: number, length: number): string;

/**
 * Returns a substring of a specified length starting at a specified position. The result is guaranteed not to exceed the specified max length.
 * NOTE: The 'maxLength' parameter might actually be the size of the buffer that is returned. More research is needed. -CL69
 * Example:
 * // Condensed example of how Rockstar uses this function
 * strLen = UI::GET_LENGTH_OF_LITERAL_STRING(GAMEPLAY::GET_ONSCREEN_KEYBOARD_RESULT());
 * subStr = UI::_GET_TEXT_SUBSTRING_SAFE(GAMEPLAY::GET_ONSCREEN_KEYBOARD_RESULT(), 0, strLen, 63);
 * --
 * "fm_race_creator.ysc", line 85115:
 * // parameters modified for clarity
 * BOOL sub_8e5aa(char *text, int length) {
 * for (i = 0; i &lt;= (length - 2); i += 1) {
 * if (!GAMEPLAY::ARE_STRINGS_EQUAL(UI::_GET_TEXT_SUBSTRING_SAFE(text, i, i + 1, 1), " ")) {
 * return FALSE;
 * }
 * }
 * return TRUE;
 * }
 */
declare function GetTextSubstringSafe(text: string, position: number, length: number, maxLength: number): string;

/**
 * Returns a substring that is between two specified positions. The length of the string will be calculated using (endPosition - startPosition).
 * Example:
 * // Get "STRING" text from "MY_STRING"
 * subStr = UI::_GET_TEXT_SUBSTRING_SLICE("MY_STRING", 3, 9);
 * // Overflows are possibly replaced with underscores (needs verification)
 * subStr = UI::_GET_TEXT_SUBSTRING_SLICE("MY_STRING", 3, 10); // "STRING_"?
 */
declare function GetTextSubstringSlice(text: string, startPosition: number, endPosition: number): string;

/**
 * Returns the texture resolution of the passed texture dict+name.
 * Note: Most texture resolutions are doubled compared to the console version of the game.
 */
declare function GetTextureResolution(textureDict: string, textureName: string): number[];

declare function GetThisScriptName(): string;

declare function GetTimeAsString(time: number): string;
declare function FormatTime(time: number): string;

/**
 * Subtracts the second argument from the first.
 */
declare function GetTimeDifference(timeA: number, timeB: number): number;

/**
 * Adds the first argument to the second.
 */
declare function GetTimeOffset(timeA: number, timeB: number): number;

declare function GetTimePositionInRecording(p0: number): number;

/**
 * Returns the time since the character was arrested in (ms) milliseconds.
 * example
 * var time = Function.call&lt;int&gt;(Hash.GET_TIME_SINCE_LAST_ARREST();
 * UI.DrawSubtitle(time.ToString());
 * if player has not been arrested, the int returned will be -1.
 */
declare function GetTimeSinceLastArrest(): number;

/**
 * Returns the time since the character died in (ms) milliseconds.
 * example
 * var time = Function.call&lt;int&gt;(Hash.GET_TIME_SINCE_LAST_DEATH();
 * UI.DrawSubtitle(time.ToString());
 * if player has not died, the int returned will be -1.
 */
declare function GetTimeSinceLastDeath(): number;

declare function GetTimeSincePlayerDroveAgainstTraffic(player: number): number;

declare function GetTimeSincePlayerDroveOnPavement(player: number): number;

declare function GetTimeSincePlayerHitPed(player: number): number;

declare function GetTimeSincePlayerHitVehicle(player: number): number;

/**
 * Only use for this in the PC scripts is:
 * if (GRAPHICS::GET_TIMECYCLE_MODIFIER_INDEX() != -1)
 * For a full list, see here: pastebin.com/cnk7FTF2
 */
declare function GetTimecycleModifierIndex(): number;

declare function GetTotalDurationOfVehicleRecording(p0: number, p1: number): number;

declare function GetTotalDurationOfVehicleRecordingId(p0: number): number;

declare function GetTotalScInboxIds(): number;
declare function N_0x03a93ff1a2ca0864(): number;

/**
 * Corrected p1. it's basically the 'carriage/trailer number'. So if the train has 3 trailers you'd call the native once with a var or 3 times with 1, 2, 3.
 */
declare function GetTrainCarriage(train: number, trailerNumber: number): number;

/**
 * Return the content modifier id (the tunables context if you want) of a specific content.
 * It takes the content hash (which is the mission id hash), and return the content modifier id, used as the tunables context.
 * The mission id can be found on the Social club, for example, 'socialclub.rockstargames.com/games/gtav/jobs/job/A8M6Bz8MLEC5xngvDCzGwA'
 * 'A8M6Bz8MLEC5xngvDCzGwA' is the mission id, so the game hash this and use it as the parameter for this native.
 */
declare function GetTunablesContentModifierId(contentHash: string | number): number;
/**
 * Return the content modifier id (the tunables context if you want) of a specific content.
 * It takes the content hash (which is the mission id hash), and return the content modifier id, used as the tunables context.
 * The mission id can be found on the Social club, for example, 'socialclub.rockstargames.com/games/gtav/jobs/job/A8M6Bz8MLEC5xngvDCzGwA'
 * 'A8M6Bz8MLEC5xngvDCzGwA' is the mission id, so the game hash this and use it as the parameter for this native.
 */
declare function N_0x187382f8a3e0a6c3(contentHash: string | number): number;

declare function GetTupstatBoolHash(index: number, spStat: boolean, charStat: boolean, character: number): number;
declare function N_0xc4bb08ee7907471e(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetTupstatIntHash(index: number, spStat: boolean, charStat: boolean, character: number): number;
declare function N_0xd16c2ad6b8e32854(index: number, spStat: boolean, charStat: boolean, character: number): number;

declare function GetTvChannel(): number;

declare function GetTvVolume(): number;

/**
 * Returns the user's defined langauge as ID
 * english: 12
 * french = 7
 * german = 22
 * italian = 21
 * japanese = 9
 * korean = 17
 * portuguese = 16
 * spanish = 10
 * russian = 25
 */
declare function GetUserLanguageId(): number;

/**
 * console hash: 0xC589CD7D = GET_UTC_TIME
 * gets current UTC time
 */
declare function GetUtcTime(): [number, number, number, number, number, number];
/**
 * console hash: 0xC589CD7D = GET_UTC_TIME
 * gets current UTC time
 */
declare function GetLocalTime(): [number, number, number, number, number, number];

declare function GetVariantComponent(componentHash: string | number, componentId: number): [number, number, number];

declare function GetVehicleAcceleration(vehicle: number): number;

/**
 * static - max acceleration
 */
declare function GetVehicleAcceleration(vehicle: number): number;

declare function GetVehicleAlarmTimeLeft(vehicle: number): number;

/**
 * Returns attached vehicle (Vehicle in parameter must be cargobob)
 */
declare function GetVehicleAttachedToCargobob(cargobob: number): number;

/**
 * Get the vehicle attached to the object/entity? May also just convert it to a vehicle, but I'm not sure.
 */
declare function GetVehicleAttachedToEntity(object: number): number;
/**
 * Get the vehicle attached to the object/entity? May also just convert it to a vehicle, but I'm not sure.
 */
declare function N_0x375e7fc44f21c8ab(object: number): number;

/**
 * Seems related to vehicle health, like the one in IV.
 * Max 1000, min 0.
 * Vehicle does not necessarily explode or become undrivable at 0.
 */
declare function GetVehicleBodyHealth(vehicle: number): number;

/**
 * 0 min 100 max
 * starts at 100
 * Seams to have health zones
 * Front of vehicle when damaged goes from 100-50 and stops at 50.
 * Rear can be damaged from 100-0
 * Only tested with two cars.
 * any idea how this differs from the first one?
 * --
 * May return the vehicle health on a scale of 0.0 - 100.0 (needs to be confirmed)
 * example:
 * v_F = ENTITY::GET_ENTITY_MODEL(v_3);
 * if (((v_F == ${tanker}) || (v_F == ${armytanker})) || (v_F == ${tanker2})) {
 * if (VEHICLE::_GET_VEHICLE_BODY_HEALTH_2(v_3) &lt;= 1.0) {
 * NETWORK::NETWORK_EXPLODE_VEHICLE(v_3, 1, 1, -1);
 * }
 * }
 */
declare function GetVehicleBodyHealth_2(vehicle: number): number;

/**
 * iVar3 = get_vehicle_cause_of_destruction(uLocal_248[iVar2]);
 * if (iVar3 == joaat("weapon_stickybomb"))
 * {
 * func_171(726);
 * iLocal_260 = 1;
 * }
 */
declare function GetVehicleCauseOfDestruction(vehicle: number): number;

/**
 * Returns an int
 * Vehicle Classes:
 * 0: Compacts
 * 1: Sedans
 * 2: SUVs
 * 3: Coupes
 * 4: Muscle
 * 5: Sports Classics
 * 6: Sports
 * 7: Super
 * 8: Motorcycles
 * 9: Off-road
 * 10: Industrial
 * 11: Utility
 * 12: Vans
 * 13: Cycles
 * 14: Boats
 * 15: Helicopters
 * 16: Planes
 * 17: Service
 * 18: Emergency
 * 19: Military
 * 20: Commercial
 * 21: Trains
 * char buffer[128];
 * std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS(vehicle));
 * char* className = UI::_GET_LABEL_TEXT(buffer);
 */
declare function GetVehicleClass(vehicle: number): number;

/**
 * For a full enum, see here : pastebin.com/i2GGAjY0
 * char buffer[128];
 * std::sprintf(buffer, "VEH_CLASS_%i", VEHICLE::GET_VEHICLE_CLASS_FROM_NAME (hash));
 * char* className = UI::_GET_LABEL_TEXT(buffer);
 */
declare function GetVehicleClassFromName(modelHash: string | number): number;

declare function GetVehicleClassMaxAcceleration(vehicleClass: number): number;

declare function GetVehicleClassMaxAgility(vehicleClass: number): number;

declare function GetVehicleClassMaxBraking(vehicleClass: number): number;

declare function GetVehicleClassMaxTraction(vehicleClass: number): number;

declare function GetVehicleClutch(vehicle: number): number;

/**
 * What's this for? Primary and Secondary RGB have their own natives and this one doesn't seem specific.
 */
declare function GetVehicleColor(vehicle: number): [number, number, number];

declare function GetVehicleColourCombination(vehicle: number): number;

declare function GetVehicleColours(vehicle: number): [number, number];

declare function GetVehicleCurrentGear(vehicle: number): number;

declare function GetVehicleCurrentRpm(vehicle: number): number;

declare function GetVehicleCustomPrimaryColour(vehicle: number): [number, number, number];

declare function GetVehicleCustomSecondaryColour(vehicle: number): [number, number, number];

declare function GetVehicleDashboardSpeed(vehicle: number): number;

/**
 * Returns hash of default vehicle horn
 * Hash is stored in audVehicleAudioEntity
 */
declare function GetVehicleDefaultHorn(vehicle: number): number;

/**
 * The only example I can find of this function in the scripts, is this:
 * struct _s = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(rPtr((A_0) + 4), 1.21f, 6.15f, 0.3f);
 * -----------------------------------------------------------------------------------------------------------------------------------------
 * PC scripts:
 * v_5 -- [[{3}]]  = VEHICLE::GET_VEHICLE_DEFORMATION_AT_POS(a_0._f1, 1.21, 6.15, 0.3);
 */
declare function GetVehicleDeformationAtPos(vehicle: number, offsetX: number, offsetY: number, offsetZ: number): number[];

/**
 * Dirt level 0..15
 */
declare function GetVehicleDirtLevel(vehicle: number): number;

/**
 * example in vb:
 * Public Shared Function Get_Vehicle_Door_Angle(Vehicle As Vehicle, Door As VehicleDoor) As Single
 * Return Native.Function.Call(Of Single)(Hash.GET_VEHICLE_DOOR_ANGLE_RATIO, Vehicle.Handle, Door)
 * End Function
 * I'm Not MentaL
 */
declare function GetVehicleDoorAngleRatio(vehicle: number, door: number): number;

/**
 * 2 seems to disable getting vehicle in modshop
 */
declare function GetVehicleDoorLockStatus(vehicle: number): number;

declare function GetVehicleDoorsLockedForPlayer(vehicle: number, player: number): number;

/**
 * Returns 1000.0 if the function is unable to get the address of the specified vehicle or if it's not a vehicle.
 * Minimum: -4000
 * Maximum: 1000
 * -4000: Engine is destroyed
 * 0 and below: Engine catches fire and health rapidly declines
 * 300: Engine is smoking and losing functionality
 * 1000: Engine is perfect
 */
declare function GetVehicleEngineHealth(vehicle: number): number;

declare function GetVehicleEngineTemperature(vehicle: number): number;

/**
 * formerly known as _GET_VEHICLE_PAINT_FADE
 * The result is a value from 0-1, where 0 is fresh paint.
 * -----------------------------------------------------------------------
 * The actual value isn't stored as a float but as an unsigned char (BYTE).
 */
declare function GetVehicleEnveffScale(vehicle: number): number;
/**
 * formerly known as _GET_VEHICLE_PAINT_FADE
 * The result is a value from 0-1, where 0 is fresh paint.
 * -----------------------------------------------------------------------
 * The actual value isn't stored as a float but as an unsigned char (BYTE).
 */
declare function GetVehiclePaintFade(vehicle: number): number;

declare function GetVehicleExtraColours(vehicle: number): [number, number];

declare function GetVehicleFuelLevel(vehicle: number): number;

declare function GetVehicleGravityAmount(vehicle: number): number;

declare function GetVehicleHandbrake(vehicle: number): number;

/**
 * Returns the effective handling data of a vehicle as a floating-point value.
 * Example: `local fSteeringLock = GetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock')`
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param vehicle The vehicle to obtain data for.
 * @return A floating-point value.
 */
declare function GetVehicleHandlingFloat(vehicle: number, _class: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as an integer value.
 * Example: `local modelFlags = GetVehicleHandlingInt(vehicle, 'CHandlingData', 'strModelFlags')`
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param vehicle The vehicle to obtain data for.
 * @return An integer.
 */
declare function GetVehicleHandlingInt(vehicle: number, _class: string, fieldName: string): number;

/**
 * Returns the effective handling data of a vehicle as a vector value.
 * Example: `local inertiaMultiplier = GetVehicleHandlingVector(vehicle, 'CHandlingData', 'vecInertiaMultiplier')`
 * @param class The handling class to get. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to get. These match the keys in `handling.meta`.
 * @param vehicle The vehicle to obtain data for.
 * @return An integer.
 */
declare function GetVehicleHandlingVector(vehicle: number, _class: string, fieldName: string): number[];

declare function GetVehicleHighGear(vehicle: number): number;

/**
 * Seems to get the hash of the vehicle's currently installed horn?
 */
declare function GetVehicleHornHash(vehicle: number): number;
/**
 * Seems to get the hash of the vehicle's currently installed horn?
 */
declare function N_0xacb5dcca1ec76840(vehicle: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function GetVehicleIndexFromEntityIndex(entity: number): number;

/**
 * Gets the vehicle indicator light state. 0 = off, 1 = left, 2 = right, 3 = both
 * @return An integer.
 */
declare function GetVehicleIndicatorLights(vehicle: number): number;

declare function GetVehicleLayoutHash(vehicle: number): number;

declare function GetVehicleLightsState(vehicle: number): [number, any /* actually bool */, any /* actually bool */];

/**
 * -1 = no livery
 */
declare function GetVehicleLivery(vehicle: number): number;

/**
 * Returns -1 if the vehicle has no livery
 */
declare function GetVehicleLiveryCount(vehicle: number): number;

declare function GetVehicleMaxBraking(vehicle: number): number;

declare function GetVehicleMaxNumberOfPassengers(vehicle: number): number;

declare function GetVehicleMaxTraction(vehicle: number): number;

/**
 * In b944, there are 50 (0 - 49) mod types.
 * Returns -1 if the vehicle mod is stock
 */
declare function GetVehicleMod(vehicle: number, modType: number): number;

declare function GetVehicleModColor_1(vehicle: number): [number, number, number];

/**
 * returns a string which is the codename of the vehicle's currently selected primary color
 * p1 is always 0
 */
declare function GetVehicleModColor_1Name(vehicle: number, p1: boolean): string;
/**
 * returns a string which is the codename of the vehicle's currently selected primary color
 * p1 is always 0
 */
declare function N_0xb45085b721efd38c(vehicle: number, p1: boolean): string;

declare function GetVehicleModColor_2(vehicle: number): [number, number];

/**
 * returns a string which is the codename of the vehicle's currently selected secondary color
 */
declare function GetVehicleModColor_2Name(vehicle: number): string;
/**
 * returns a string which is the codename of the vehicle's currently selected secondary color
 */
declare function N_0x4967a516ed23a5a1(vehicle: number): string;

/**
 * Can be used for IS_DLC_VEHICLE_MOD and _0xC098810437312FFF
 */
declare function GetVehicleModData(vehicle: number, modType: number, modIndex: number): number;
/**
 * Can be used for IS_DLC_VEHICLE_MOD and _0xC098810437312FFF
 */
declare function N_0x4593cf82aa179706(vehicle: number, modType: number, modIndex: number): number;

declare function GetVehicleModKit(vehicle: number): number;

declare function GetVehicleModKitType(vehicle: number): number;

declare function GetVehicleModModifierValue(vehicle: number, modType: number, modIndex: number): number;

/**
 * Only used for wheels(ModType = 23/24) Returns true if the wheels are custom wheels
 */
declare function GetVehicleModVariation(vehicle: number, modType: number): number;

/**
 * Returns the acceleration of the specified model.
 * For a full list, see here: pastebin.com/GaN6vT4R
 */
declare function GetVehicleModelAcceleration(modelHash: string | number): number;

/**
 * Returns max braking of the specified vehicle model.
 * For a full list, see here: pastebin.com/3N8DVbpG
 */
declare function GetVehicleModelMaxBraking(modelHash: string | number): number;

/**
 * Returns max speed (without mods) of the specified vehicle model in m/s.
 * For a full list, see here: pastebin.com/AUuHHK06
 * GET_VEHICLE_MODEL_*
 */
declare function GetVehicleModelMaxSpeed(modelHash: string | number): number;
/**
 * Returns max speed (without mods) of the specified vehicle model in m/s.
 * For a full list, see here: pastebin.com/AUuHHK06
 * GET_VEHICLE_MODEL_*
 */
declare function GetVehicleMaxSpeed(modelHash: string | number): number;

/**
 * Returns max traction of the specified vehicle model.
 * For a full list, see here: pastebin.com/ERnntVjK
 */
declare function GetVehicleModelMaxTraction(modelHash: string | number): number;

/**
 * Returns max number of passengers (including the driver) for the specified vehicle model.
 * For a full list, see here: pastebin.com/MdETCS1j
 */
declare function GetVehicleModelNumberOfSeats(modelHash: string | number): number;
/**
 * Returns max number of passengers (including the driver) for the specified vehicle model.
 * For a full list, see here: pastebin.com/MdETCS1j
 */
declare function GetVehicleModelMaxNumberOfPassengers(modelHash: string | number): number;

/**
 * Gets the color of the neon lights of the specified vehicle.
 * See _SET_VEHICLE_NEON_LIGHTS_COLOUR (0x8E0A582209A62695) for more information
 */
declare function GetVehicleNeonLightsColour(vehicle: number): [number, number, number];

declare function GetVehicleNextGear(vehicle: number): number;

/**
 * Calling this with an invalid node id, will crash the game.
 * Note that IS_VEHICLE_NODE_ID_VALID simply checks if nodeId is not zero. It does not actually ensure that the id is valid.
 * Eg. IS_VEHICLE_NODE_ID_VALID(1) will return true, but will crash when calling GET_VEHICLE_NODE_POSITION().
 * sfink: This native returns a pointer to a packed Vector3 struct in the RAX register, as do the following natives:
 * AI::WAYPOINT_RECORDING_GET_COORD
 * ENTITY::GET_ENTITY_MATRIX
 * FIRE::GET_CLOSEST_FIRE_POS
 * GAMEPLAY::FIND_SPAWN_POINT_IN_DIRECTION
 * GAMEPLAY::GET_MODEL_DIMENSIONS
 * GAMEPLAY::OVERRIDE_SAVE_HOUSE
 * GAMEPLAY::_0x82FDE6A57EE4EE44
 * GAMEPLAY::_0x8BDC7BFC57A81E76
 * GAMEPLAY::_0x8D7A43EC6A5FEA45
 * GAMEPLAY::_0xA4A0065E39C9F25C
 * GAMEPLAY::_0xDFB4138EEFED7B81
 * MOBILE::GET_MOBILE_PHONE_POSITION
 * MOBILE::GET_MOBILE_PHONE_ROTATION
 * NETWORK::NETWORK_GET_RESPAWN_RESULT
 * OBJECT::_0x163F8B586BC95F2A
 * PATHFIND::GET_CLOSEST_MAJOR_VEHICLE_NODE
 * PATHFIND::GET_CLOSEST_ROAD
 * PATHFIND::GET_CLOSEST_VEHICLE_NODE
 * PATHFIND::GET_CLOSEST_VEHICLE_NODE_WITH_HEADING
 * PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE
 * PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE_FAVOUR_DIRECTION
 * PATHFIND::GET_NTH_CLOSEST_VEHICLE_NODE_WITH_HEADING
 * PATHFIND::GET_RANDOM_VEHICLE_NODE
 * PATHFIND::GET_SAFE_COORD_FOR_PED
 * PATHFIND::GET_VEHICLE_NODE_POSITION
 * PATHFIND::_0x16F46FB18C8009E4
 * VEHICLE::_0xA4822F1CF23F4810
 * VEHICLE::_0xDF7E3EEB29642C38
 * WATER::TEST_PROBE_AGAINST_ALL_WATER
 * WATER::TEST_PROBE_AGAINST_WATER
 * WEAPON::GET_PED_LAST_WEAPON_IMPACT_COORD
 * WORLDPROBE::_0xFF6BE494C7987F34
 * WORLDPROBE::_GET_RAYCAST_RESULT
 */
declare function GetVehicleNodePosition(nodeId: number): number[];

/**
 * MulleDK19: Gets the density and flags of the closest node to the specified position.
 * Density is a value between 0 and 15, indicating how busy the road is.
 * Flags is a bit field.
 */
declare function GetVehicleNodeProperties(x: number, y: number, z: number): [number, number, number];

/**
 * Gets the number of passengers, NOT including the driver. Use IS_VEHICLE_SEAT_FREE(Vehicle, -1) to also check for the driver
 */
declare function GetVehicleNumberOfPassengers(vehicle: number): number;

declare function GetVehicleNumberOfWheels(vehicle: number): number;

/**
 * Returns the license plate text from a vehicle.  8 chars maximum.
 */
declare function GetVehicleNumberPlateText(vehicle: number): string;

/**
 * Returns the PlateType of a vehicle
 * Blue_on_White_1 = 3,
 * Blue_on_White_2 = 0,
 * Blue_on_White_3 = 4,
 * Yellow_on_Blue = 2,
 * Yellow_on_Black = 1,
 * North_Yankton = 5,
 */
declare function GetVehicleNumberPlateTextIndex(vehicle: number): number;

declare function GetVehicleOilLevel(vehicle: number): number;

/**
 * The resulting entity can be a Vehicle or Ped.
 * The native is stored between GET_VEHICLE_LIVERY_COUNT and GET_VEHICLE_MAX_BRAKING so the actual name is either GET_VEHICLE_L* or GET_VEHICLE_M*
 */
declare function GetVehicleOwner(vehicle: number, entity: number): number;

/**
 * Gets the vehicle the specified Ped is/was in depending on bool value.
 * [False = CurrentVehicle, True = LastVehicle]
 */
declare function GetVehiclePedIsIn(ped: number, lastVehicle: boolean): number;

declare function GetVehiclePedIsTryingToEnter(ped: number): number;

/**
 * Gets ID of vehicle player using. It means it can get ID at any interaction with vehicle. Enter\exit for example. And that means it is faster than GET_VEHICLE_PED_IS_IN but less safe.
 */
declare function GetVehiclePedIsUsing(ped: number): number;

/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 */
declare function GetVehiclePetrolTankHealth(vehicle: number): number;

declare function GetVehiclePlateType(vehicle: number): number;

declare function GetVehicleRecordingId(p0: number, p1: string): number;

declare function GetVehicleSteeringAngle(vehicle: number): number;

declare function GetVehicleSteeringScale(vehicle: number): number;

/**
 * Gets the height of the vehicle's suspension.
 * The higher the value the lower the suspension. Each 0.002 corresponds with one more level lowered.
 * 0.000 is the stock suspension.
 * 0.008 is Ultra Suspension.
 */
declare function GetVehicleSuspensionHeight(vehicle: number): number;

/**
 * Gets the trailer of a vehicle and puts it into the trailer parameter.
 */
declare function GetVehicleTrailerVehicle(vehicle: number, trailer: number): number;

declare function GetVehicleTurboPressure(vehicle: number): number;

declare function GetVehicleTyreSmokeColor(vehicle: number): [number, number, number];

declare function GetVehicleTyresCanBurst(vehicle: number): number;

declare function GetVehicleWaypointProgress(p0: number): number;

declare function GetVehicleWaypointTargetPoint(p0: number): number;

declare function GetVehicleWheelHealth(vehicle: number, wheelIndex: number): number;

/**
 * Gets speed of a wheel at the tyre.
 * Max number of wheels can be retrieved with the native GET_VEHICLE_NUMBER_OF_WHEELS.
 * @return An integer.
 */
declare function GetVehicleWheelSpeed(vehicle: number, wheelIndex: number): number;

/**
 * Returns an int
 * Wheel Types:
 * 0: Sport
 * 1: Muscle
 * 2: Lowrider
 * 3: SUV
 * 4: Offroad
 * 5: Tuner
 * 6: Bike Wheels
 * 7: High End
 * Tested in Los Santos Customs
 */
declare function GetVehicleWheelType(vehicle: number): number;

/**
 * Returns the offset of the specified wheel relative to the wheel's axle center.
 */
declare function GetVehicleWheelXOffset(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWheelXrot(vehicle: number, wheelIndex: number): number;

declare function GetVehicleWindowTint(vehicle: number): number;

/**
 * Remnant from GTA IV. Does nothing in GTA V.
 */
declare function GetWantedLevelRadius(player: number): number;

/**
 * Drft
 */
declare function GetWantedLevelThreshold(wantedLevel: number): number;

/**
 * This function set height to the value of z-axis of the water surface.
 * This function works with sea and lake. However it does not work with shallow rivers (e.g. raton canyon will return -100000.0f)
 * note: seems to return true when you are in water
 */
declare function GetWaterHeight(x: number, y: number, z: number, height: number): number;

declare function GetWaterHeightNoWaves(x: number, y: number, z: number, height: number): number;

/**
 * Gets the aggressiveness factor of the ocean waves.
 * console hash: 0xBD0A67FB
 * Most likely GET_CURRENT_*
 */
declare function GetWavesIntensity(): number;
/**
 * Gets the aggressiveness factor of the ocean waves.
 * console hash: 0xBD0A67FB
 * Most likely GET_CURRENT_*
 */
declare function N_0x2b2a2cc86778b619(): number;

declare function GetWaypointDistanceAlongRoute(p0: string, p1: number): number;

/**
 * // Returns the size of the default weapon component clip.
 * Use it like this:
 * char cClipSize[32];
 * Hash cur;
 * if (WEAPON::GET_CURRENT_PED_WEAPON(playerPed, &amp;cur, 1))
 * {
 * if (WEAPON::IS_WEAPON_VALID(cur))
 * {
 * int iClipSize = WEAPON::GET_WEAPON_CLIP_SIZE(cur);
 * sprintf_s(cClipSize, "ClipSize: %.d", iClipSize);
 * vDrawString(cClipSize, 0.5f, 0.5f);
 * }
 * }
 */
declare function GetWeaponClipSize(weaponHash: string | number): number;

declare function GetWeaponComponentHudStats(componentHash: string | number, outData: number): number;

declare function GetWeaponComponentTypeModel(componentHash: string | number): number;

/**
 * 0=unknown (or incorrect weaponHash)
 * 1= no damage (flare,snowball, petrolcan)
 * 2=melee
 * 3=bullet
 * 4=force ragdoll fall
 * 5=explosive (RPG, Railgun, grenade)
 * 6=fire(molotov)
 * 8=fall(WEAPON_HELI_CRASH)
 * 10=electric
 * 11=barbed wire
 * 12=extinguisher
 * 13=gas
 * 14=water cannon(WEAPON_HIT_BY_WATER_CANNON)
 */
declare function GetWeaponDamageType(weaponHash: string | number): number;

/**
 * returns the weapon hash of pickup
 */
declare function GetWeaponHashFromPickup(pickupHash: number): number;
/**
 * returns the weapon hash of pickup
 */
declare function N_0x08f96ca6c551ad51(pickupHash: number): number;

/**
 * struct WeaponHudStatsData
 * {
 * BYTE hudDamage; // 0x0000
 * char _0x0001[0x7]; // 0x0001
 * BYTE hudSpeed; // 0x0008
 * char _0x0009[0x7]; // 0x0009
 * BYTE hudCapacity; // 0x0010
 * char _0x0011[0x7]; // 0x0011
 * BYTE hudAccuracy; // 0x0018
 * char _0x0019[0x7]; // 0x0019
 * BYTE hudRange; // 0x0020
 * };
 * Usage:
 * WeaponHudStatsData data;
 * if (GET_WEAPON_HUD_STATS(weaponHash, (int *)&amp;data))
 * {
 * // BYTE damagePercentage = data.hudDamage and so on
 * }
 */
declare function GetWeaponHudStats(weaponHash: string | number, outData: number): number;

/**
 * Drops the current weapon and returns the object
 * Unknown behavior when unarmed.
 */
declare function GetWeaponObjectFromPed(ped: number, p1: boolean): number;

declare function GetWeaponObjectTintIndex(weapon: number): number;

declare function GetWeaponTintCount(weaponHash: string | number): number;

declare function GetWeapontypeGroup(weaponHash: string | number): number;

/**
 * Returns the model of any weapon.
 * Can also take an ammo hash?
 * sub_6663a(&amp;l_115B, WEAPON::GET_WEAPONTYPE_MODEL(${ammo_rpg}));
 */
declare function GetWeapontypeModel(weaponHash: string | number): number;

declare function GetWeapontypeSlot(weaponHash: string | number): number;

declare function GetWeatherTypeTransition(): [number, number, number];

declare function GetWindDirection(): number[];

declare function GetWindSpeed(): number;

/**
 * Returns the coordinates of an entity-bone.
 */
declare function GetWorldPositionOfEntityBone(entity: number, boneIndex: number): number[];

declare function GetZoneAtCoords(x: number, y: number, z: number): number;

/**
 * 'zoneName' corresponds to an entry in 'popzone.ipl'.
 * AIRP = Los Santos International Airport
 * ALAMO = Alamo Sea
 * ALTA = Alta
 * ARMYB = Fort Zancudo
 * BANHAMC = Banham Canyon Dr
 * BANNING = Banning
 * BEACH = Vespucci Beach
 * BHAMCA = Banham Canyon
 * BRADP = Braddock Pass
 * BRADT = Braddock Tunnel
 * BURTON = Burton
 * CALAFB = Calafia Bridge
 * CANNY = Raton Canyon
 * CCREAK = Cassidy Creek
 * CHAMH = Chamberlain Hills
 * CHIL = Vinewood Hills
 * CHU = Chumash
 * CMSW = Chiliad Mountain State Wilderness
 * CYPRE = Cypress Flats
 * DAVIS = Davis
 * DELBE = Del Perro Beach
 * DELPE = Del Perro
 * DELSOL = La Puerta
 * DESRT = Grand Senora Desert
 * DOWNT = Downtown
 * DTVINE = Downtown Vinewood
 * EAST_V = East Vinewood
 * EBURO = El Burro Heights
 * ELGORL = El Gordo Lighthouse
 * ELYSIAN = Elysian Island
 * GALFISH = Galilee
 * GOLF = GWC and Golfing Society
 * GRAPES = Grapeseed
 * GREATC = Great Chaparral
 * HARMO = Harmony
 * HAWICK = Hawick
 * HORS = Vinewood Racetrack
 * HUMLAB = Humane Labs and Research
 * JAIL = Bolingbroke Penitentiary
 * KOREAT = Little Seoul
 * LACT = Land Act Reservoir
 * LAGO = Lago Zancudo
 * LDAM = Land Act Dam
 * LEGSQU = Legion Square
 * LMESA = La Mesa
 * LOSPUER = La Puerta
 * MIRR = Mirror Park
 * MORN = Morningwood
 * MOVIE = Richards Majestic
 * MTCHIL = Mount Chiliad
 * MTGORDO = Mount Gordo
 * MTJOSE = Mount Josiah
 * MURRI = Murrieta Heights
 * NCHU = North Chumash
 * NOOSE = N.O.O.S.E
 * OCEANA = Pacific Ocean
 * PALCOV = Paleto Cove
 * PALETO = Paleto Bay
 * PALFOR = Paleto Forest
 * PALHIGH = Palomino Highlands
 * PALMPOW = Palmer-Taylor Power Station
 * PBLUFF = Pacific Bluffs
 * PBOX = Pillbox Hill
 * PROCOB = Procopio Beach
 * RANCHO = Rancho
 * RGLEN = Richman Glen
 * RICHM = Richman
 * ROCKF = Rockford Hills
 * RTRAK = Redwood Lights Track
 * SANAND = San Andreas
 * SANCHIA = San Chianski Mountain Range
 * SANDY = Sandy Shores
 * SKID = Mission Row
 * SLAB = Stab City
 * STAD = Maze Bank Arena
 * STRAW = Strawberry
 * TATAMO = Tataviam Mountains
 * TERMINA = Terminal
 * TEXTI = Textile City
 * TONGVAH = Tongva Hills
 * TONGVAV = Tongva Valley
 * VCANA = Vespucci Canals
 * VESP = Vespucci
 * VINE = Vinewood
 * WINDF = Ron Alternates Wind Farm
 * WVINE = West Vinewood
 * ZANCUDO = Zancudo River
 * ZP_ORT = Port of South Los Santos
 * ZQ_UAR = Davis Quartz
 */
declare function GetZoneFromNameId(zoneName: string): number;

declare function GetZonePopschedule(zoneId: number): number;

/**
 * cellphone range 1- 5 used for signal bar in iFruit phone
 */
declare function GetZoneScumminess(zoneId: number): number;

/**
 * Achievements from 0-57
 * more achievements came with update 1.29 (freemode events update), I'd say that they now go to 60, but I'll need to check.
 */
declare function GiveAchievementToPlayer(achievement: number): number;

/**
 * Gives a weapon to PED with a delay, example:
 * WEAPON::GIVE_DELAYED_WEAPON_TO_PED(PED::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("WEAPON_PISTOL"), 1000, false)
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * Translation table:
 * pastebin.com/a39K8Nz8
 */
declare function GiveDelayedWeaponToPed(ped: number, weaponHash: string | number, time: number, equipNow: boolean): void;

/**
 * PoliceMotorcycleHelmet	1024
 * RegularMotorcycleHelmet	4096
 * FiremanHelmet	16384
 * PilotHeadset	32768
 * PilotHelmet	65536
 * --
 * p2 is generally 4096 or 16384 in the scripts. p1 varies between 1 and 0.
 */
declare function GivePedHelmet(ped: number, cannotRemove: boolean, helmetFlag: number, textureIndex: number): void;

/**
 * Sends the message that was created by a call to CREATE_NM_MESSAGE to the specified Ped.
 * If a message hasn't been created already, this function does nothing.
 * If the Ped is not ragdolled with Euphoria enabled, this function does nothing.
 * The following call can be used to ragdoll the Ped with Euphoria enabled: SET_PED_TO_RAGDOLL(ped, 4000, 5000, 1, 1, 1, 0);
 * Call order:
 * SET_PED_TO_RAGDOLL
 * CREATE_NM_MESSAGE
 * GIVE_PED_NM_MESSAGE
 * Multiple messages can be chained. Eg. to make the ped stagger and swing his arms around, the following calls can be made:
 * SET_PED_TO_RAGDOLL(ped, 4000, 5000, 1, 1, 1, 0);
 * CREATE_NM_MESSAGE(true, 0); // stopAllBehaviours - Stop all other behaviours, in case the Ped is already doing some Euphoria stuff.
 * GIVE_PED_NM_MESSAGE(ped); // Dispatch message to Ped.
 * CREATE_NM_MESSAGE(true, 1151); // staggerFall - Attempt to walk while falling.
 * GIVE_PED_NM_MESSAGE(ped); // Dispatch message to Ped.
 * CREATE_NM_MESSAGE(true, 372); // armsWindmill - Swing arms around.
 * GIVE_PED_NM_MESSAGE(ped); // Dispatch message to Ped.
 */
declare function GivePedNmMessage(ped: number): void;

/**
 * p1 is either 1 or 2 in the PC scripts.
 */
declare function GivePedToPauseMenu(ped: number, p1: number): void;

declare function GivePlayerRagdollControl(player: number, toggle: boolean): void;

declare function GiveWeaponComponentToPed(ped: number, weaponHash: string | number, componentHash: string | number): void;

/**
 * addonHash:
 * (use WEAPON::GET_WEAPON_COMPONENT_TYPE_MODEL() to get hash value)
 * ${component_at_ar_flsh}, ${component_at_ar_supp}, ${component_at_pi_flsh}, ${component_at_scope_large}, ${component_at_ar_supp_02}
 */
declare function GiveWeaponComponentToWeaponObject(weaponObject: number, addonHash: string | number): void;

declare function GiveWeaponObjectToPed(weaponObject: number, ped: number): void;

/**
 * isHidden - ????
 * All weapon names (add to the list if something is missing), use GAMEPLAY::GET_HASH_KEY((char *)weaponNames[i]) to get get the hash:
 * static LPCSTR weaponNames[] = {
 * "WEAPON_KNIFE", "WEAPON_NIGHTSTICK", "WEAPON_HAMMER", "WEAPON_BAT", "WEAPON_GOLFCLUB",
 * "WEAPON_CROWBAR", "WEAPON_PISTOL", "WEAPON_COMBATPISTOL", "WEAPON_APPISTOL", "WEAPON_PISTOL50",
 * "WEAPON_MICROSMG", "WEAPON_SMG", "WEAPON_ASSAULTSMG", "WEAPON_ASSAULTRIFLE",
 * "WEAPON_CARBINERIFLE", "WEAPON_ADVANCEDRIFLE", "WEAPON_MG", "WEAPON_COMBATMG", "WEAPON_PUMPSHOTGUN",
 * "WEAPON_SAWNOFFSHOTGUN", "WEAPON_ASSAULTSHOTGUN", "WEAPON_BULLPUPSHOTGUN", "WEAPON_STUNGUN", "WEAPON_SNIPERRIFLE",
 * "WEAPON_HEAVYSNIPER", "WEAPON_GRENADELAUNCHER", "WEAPON_GRENADELAUNCHER_SMOKE", "WEAPON_RPG", "WEAPON_MINIGUN",
 * "WEAPON_GRENADE", "WEAPON_STICKYBOMB", "WEAPON_SMOKEGRENADE", "WEAPON_BZGAS", "WEAPON_MOLOTOV",
 * "WEAPON_FIREEXTINGUISHER", "WEAPON_PETROLCAN", "WEAPON_FLARE", "WEAPON_SNSPISTOL", "WEAPON_SPECIALCARBINE",
 * "WEAPON_HEAVYPISTOL", "WEAPON_BULLPUPRIFLE", "WEAPON_HOMINGLAUNCHER", "WEAPON_PROXMINE", "WEAPON_SNOWBALL",
 * "WEAPON_VINTAGEPISTOL", "WEAPON_DAGGER", "WEAPON_FIREWORK", "WEAPON_MUSKET", "WEAPON_MARKSMANRIFLE",
 * "WEAPON_HEAVYSHOTGUN", "WEAPON_GUSENBERG", "WEAPON_HATCHET", "WEAPON_RAILGUN", "WEAPON_COMBATPDW",
 * "WEAPON_KNUCKLE", "WEAPON_MARKSMANPISTOL", "WEAPON_FLASHLIGHT", "WEAPON_MACHETE", "WEAPON_MACHINEPISTOL",
 * "WEAPON_SWITCHBLADE", "WEAPON_REVOLVER", "WEAPON_COMPACTRIFLE", "WEAPON_DBSHOTGUN", "WEAPON_FLAREGUN",
 * "WEAPON_AUTOSHOTGUN", "WEAPON_BATTLEAXE", "WEAPON_COMPACTLAUNCHER", "WEAPON_MINISMG", "WEAPON_PIPEBOMB",
 * "WEAPON_POOLCUE", "WEAPON_SWEEPER", "WEAPON_WRENCH"
 * };
 * ----------------------------------------------------------------------------------------------------------------------------------------
 * Translation table:
 * pastebin.com/a39K8Nz8
 */
declare function GiveWeaponToPed(ped: number, weaponHash: string | number, ammoCount: number, isHidden: boolean, equipNow: boolean): void;

declare function HasAchievementBeenPassed(achievement: number): number;

declare function HasActionModeAssetLoaded(asset: string): number;

declare function HasAdditionalTextLoaded(slot: number): number;

declare function HasAnimDictLoaded(animDict: string): number;

/**
 * if (ENTITY::HAS_ANIM_EVENT_FIRED(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("CreateObject")))
 */
declare function HasAnimEventFired(entity: number, actionHash: string | number): number;

/**
 * Gets whether the specified animation set has finished loading. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 * Animation set and clip set are synonymous.
 */
declare function HasAnimSetLoaded(animSet: string): number;

/**
 * Console Hash
 */
declare function HasBgScriptBeenDownloaded(): number;
/**
 * Console Hash
 */
declare function N_0x8132c0eb8b2b3293(): number;

/**
 * p3 - possibly radius?
 */
declare function HasBulletImpactedInArea(x: number, y: number, z: number, p3: number, p4: boolean, p5: boolean): number;

declare function HasBulletImpactedInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): number;

/**
 * This native appears on the cheat_controller script and tracks a combination of buttons, which may be used to toggle cheats in-game. Credits to ThreeSocks for the info. The hash contains the combination, while the "amount" represents the amount of buttons used in a combination. The following page can be used to make a button combination: gta5offset.com/ts/hash/
 * INT_SCORES_SCORTED was a hash collision
 */
declare function HasButtonCombinationJustBeenEntered(hash: string | number, amount: number): number;
/**
 * This native appears on the cheat_controller script and tracks a combination of buttons, which may be used to toggle cheats in-game. Credits to ThreeSocks for the info. The hash contains the combination, while the "amount" represents the amount of buttons used in a combination. The following page can be used to make a button combination: gta5offset.com/ts/hash/
 * INT_SCORES_SCORTED was a hash collision
 */
declare function N_0x071e2a839de82d90(hash: string | number, amount: number): number;

/**
 * Get inputted "Cheat code", for example:
 * while (TRUE)
 * {
 * if (GAMEPLAY::_557E43C447E700A8(${fugitive}))
 * {
 * // Do something.
 * }
 * SYSTEM::WAIT(0);
 * }
 * Calling this will also set the last saved string hash to zero.
 */
declare function HasCheatStringJustBeenEntered(hash: string | number): number;
/**
 * Get inputted "Cheat code", for example:
 * while (TRUE)
 * {
 * if (GAMEPLAY::_557E43C447E700A8(${fugitive}))
 * {
 * // Do something.
 * }
 * SYSTEM::WAIT(0);
 * }
 * Calling this will also set the last saved string hash to zero.
 */
declare function N_0x557e43c447e700a8(hash: string | number): number;

/**
 * Alias for HAS_ANIM_SET_LOADED.
 */
declare function HasClipSetLoaded(clipSet: string): number;

declare function HasClosestObjectOfTypeBeenBroken(p0: number, p1: number, p2: number, p3: number, modelHash: string | number, p5: number): number;

declare function HasCollisionForModelLoaded(model: string | number): number;

declare function HasCollisionLoadedAroundEntity(entity: number): number;

declare function HasCutsceneFinished(): number;

declare function HasCutsceneLoaded(): number;

/**
 * P3 is always 3 as far as i cant tell
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function HasEntityAnimFinished(entity: number, animDict: string, animName: string, p3: number): number;

declare function HasEntityBeenDamagedByAnyObject(entity: number): number;

declare function HasEntityBeenDamagedByAnyPed(entity: number): number;

declare function HasEntityBeenDamagedByAnyVehicle(entity: number): number;

/**
 * Entity 1 = Victim
 * Entity 2 = Attacker
 * p2 seems to always be 1
 */
declare function HasEntityBeenDamagedByEntity(entity1: number, entity2: number, p2: boolean): number;

/**
 * It determines what weapons caused damage:
 * If youu want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 */
declare function HasEntityBeenDamagedByWeapon(entity: number, weaponHash: string | number, weaponType: number): number;

/**
 * traceType is always 17 in the scripts.
 * There is other codes used for traceType:
 * 19 - in jewelry_prep1a
 * 126 - in am_hunt_the_beast
 * 256 &amp; 287 - in fm_mission_controller
 */
declare function HasEntityClearLosToEntity(entity1: number, entity2: number, traceType: number): number;

/**
 * Has the entity1 got a clear line of sight to the other entity2 from the direction entity1 is facing.
 * This is one of the most CPU demanding BOOL natives in the game; avoid calling this in things like nested for-loops
 */
declare function HasEntityClearLosToEntityInFront(entity1: number, entity2: number): number;

/**
 * Called on tick.
 * Tested with vehicles, returns true whenever the vehicle is touching any entity.
 * Note: for vehicles, the wheels can touch the ground and it will still return false, but if the body of the vehicle touches the ground, it will return true.
 */
declare function HasEntityCollidedWithAnything(entity: number): number;

declare function HasForceCleanupOccurred(cleanupFlags: number): number;

/**
 * Check to see if hud component Scaleform has loaded?
 */
declare function HasHudScaleformLoaded(hudComponent: number): number;

/**
 * Returns whether or not the specific minimap overlay has loaded.
 * @param id A minimap overlay ID.
 * @return A boolean indicating load status.
 */
declare function HasMinimapOverlayLoaded(id: number): number;

/**
 * Checks if the specified model has loaded into memory.
 */
declare function HasModelLoaded(model: string | number): number;

declare function HasNamedPtfxAssetLoaded(fxName: string): number;

/**
 * Pretty sure it's the real name (not 100% sure so I added the _ prefix); can someone else confirm it?
 * Only values used in the scripts are:
 * "heist_mp"
 * "heistmap_mp"
 * "instructional_buttons"
 * "heist_pre"
 */
declare function HasNamedScaleformMovieLoaded(scaleformName: string): number;
/**
 * Pretty sure it's the real name (not 100% sure so I added the _ prefix); can someone else confirm it?
 * Only values used in the scripts are:
 * "heist_mp"
 * "heistmap_mp"
 * "instructional_buttons"
 * "heist_pre"
 */
declare function N_0x0c1c5d756fb5f337(scaleformName: string): number;

declare function HasNetworkTimeStarted(): number;
declare function N_0x46718aceedeafc84(): number;

declare function HasObjectBeenBroken(object: number): number;

/**
 * It determines what weapons caused damage:
 * If you want to define only a specific weapon, second parameter=weapon hash code, third parameter=0
 * If you want to define any melee weapon, second parameter=0, third parameter=1.
 * If you want to identify any weapon (firearms, melee, rockets, etc.), second parameter=0, third parameter=2.
 */
declare function HasPedBeenDamagedByWeapon(ped: number, weaponHash: string | number, weaponType: number): number;

/**
 * p2 should be FALSE, otherwise it seems to always return FALSE
 * Bool does not check if the weapon is current equipped, unfortunately.
 */
declare function HasPedGotWeapon(ped: number, weaponHash: string | number, p2: boolean): number;

declare function HasPedGotWeaponComponent(ped: number, weaponHash: string | number, componentHash: string | number): number;

declare function HasPedHeadBlendFinished(ped: number): number;

declare function HasPedReceivedEvent(p0: number, p1: number): number;

declare function HasPickupBeenCollected(pickup: number): number;

declare function HasPlayerBeenSpottedInStolenVehicle(player: number): number;

declare function HasPlayerDamagedAtLeastOneNonAnimalPed(player: number): number;

declare function HasPlayerDamagedAtLeastOnePed(player: number): number;

/**
 * Gets the player's info and calls a function that checks the player's ped position.
 * Here's the decompiled function that checks the position: pastebin.com/ZdHG2E7n
 */
declare function HasPlayerLeftTheWorld(player: number): number;

declare function HasPlayerTeleportFinished(player: number): number;
declare function N_0xe23d5873c2394c61(player: number): number;

declare function HasPreloadModsFinished(p0: number): number;

declare function HasPtfxAssetLoaded(): number;

declare function HasScaleformContainerMovieLoadedIntoParent(scaleformHandle: number): number;

declare function HasScaleformMovieLoaded(scaleformHandle: number): number;

/**
 * Returns if a script has been loaded into the game. Used to see if a script was loaded after requesting.
 * For a full list, see here: pastebin.com/yLNWicUi
 */
declare function HasScriptLoaded(scriptName: string): number;

declare function HasScriptWithNameHashLoaded(scriptHash: string | number): number;
declare function HasStreamedScriptLoaded(scriptHash: string | number): number;

declare function HasSoundFinished(soundId: number): number;

declare function HasStealthModeAssetLoaded(asset: string): number;

declare function HasStreamedTextureDictLoaded(textureDict: string): number;

/**
 * Checks if the specified gxt has loaded into the passed slot.
 */
declare function HasThisAdditionalTextLoaded(gxt: string, slot: number): number;

declare function HasThisCutsceneLoaded(cutsceneName: string): number;

/**
 * Console Hash
 */
declare function HasTunablesBeenDownloaded(): number;
/**
 * Console Hash
 */
declare function N_0x0467c11ed88b7d28(): number;

declare function HasVehicleAssetLoaded(vehicleAsset: number): number;

/**
 * Third Parameter = unsure, but pretty sure it is weapon hash
 * --&gt; get_hash_key("weapon_stickybomb")
 * Fourth Parameter = unsure, almost always -1
 */
declare function HasVehicleGotProjectileAttached(driver: number, vehicle: number, weaponHash: string | number, p3: number): number;

declare function HasVehicleRecordingBeenLoaded(p0: number, p1: number): number;

declare function HasWeaponAssetLoaded(weaponHash: string | number): number;

declare function HasWeaponGotWeaponComponent(weapon: number, addonHash: string | number): number;

declare function HideHelpTextThisFrame(): void;

/**
 * I think this works, but seems to prohibit switching to other weapons (or accessing the weapon wheel)
 */
declare function HideHudAndRadarThisFrame(): void;

declare function HideHudComponentThisFrame(id: number): void;

declare function HideLoadingOnFadeThisFrame(): void;

/**
 * This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
 * More info: http://gtaforums.com/topic/836301-hiding-gta-online-apartment-exteriors/
 */
declare function HideMapObjectThisFrame(mapObjectHash: string | number): void;
/**
 * This is the native that is used to hide the exterior of GTA Online apartment buildings when you are inside an apartment.
 * More info: http://gtaforums.com/topic/836301-hiding-gta-online-apartment-exteriors/
 */
declare function N_0xa97f257d0151a6ab(mapObjectHash: string | number): void;

declare function HideNumberOnBlip(blip: number): void;

declare function HidePedBloodDamageByZone(ped: number, p1: number, p2: boolean): void;
declare function N_0x62ab793144de75dc(ped: number, p1: number, p2: boolean): void;

/**
 * Hides the players weapon during a cutscene.
 */
declare function HidePedWeaponForScriptedCutscene(ped: number, toggle: boolean): void;

declare function HideScriptedHudComponentThisFrame(id: number): void;

/**
 * Hash collision
 */
declare function HideSpecialAbilityLockonOperation(p0: number, p1: boolean): void;

/**
 * draws circular marker at pos
 * -1 = none
 * 0 = red
 * 1 = green
 * 2 = blue
 * 3 = green larger
 * 4 = nothing
 * 5 = green small
 */
declare function HighlightPlacementCoords(x: number, y: number, z: number, colorIndex: number): void;
/**
 * draws circular marker at pos
 * -1 = none
 * 0 = red
 * 1 = green
 * 2 = blue
 * 3 = green larger
 * 4 = nothing
 * 5 = green small
 */
declare function N_0x3430676b11cdf21d(x: number, y: number, z: number, colorIndex: number): void;

declare function HintAmbientAudioBank(p0: number, p1: number): number;

declare function HintScriptAudioBank(p0: number, p1: number): number;

declare function IgnoreNextRestart(toggle: boolean): void;

declare function InitShopPedComponent(outComponent: number): void;

declare function InitShopPedProp(outProp: number): void;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 * --------------------------------------------------------
 * if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::INT_TO_PARTICIPANTINDEX(i)))
 */
declare function IntToParticipantindex(value: number): number;

/**
 * Simply returns whatever is passed to it (Regardless of whether the handle is valid or not).
 */
declare function IntToPlayerindex(value: number): number;

declare function InterruptConversation(p0: number): [number, number];

declare function InvokeFunctionReference(referenceIdentity: string, argsSerialized: string, argsLength: number, retvalLength: number): string;

declare function IsAimCamActive(): number;

/**
 * Example:
 * bool playing = AUDIO::IS_ALARM_PLAYING("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");
 */
declare function IsAlarmPlaying(alarmName: string): number;

/**
 * Common in the scripts:
 * AUDIO::IS_AMBIENT_SPEECH_DISABLED(PLAYER::PLAYER_PED_ID());
 */
declare function IsAmbientSpeechDisabled(ped: number): number;

declare function IsAmbientSpeechPlaying(p0: number): number;

declare function IsAmbientZoneEnabled(ambientZone: string): number;

declare function IsAnEntity(handle: number): number;

declare function IsAnyObjectNearPoint(x: number, y: number, z: number, range: number, p4: boolean): number;

declare function IsAnyPedNearPoint(x: number, y: number, z: number, radius: number): number;

declare function IsAnyPedShootingInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): number;

declare function IsAnySpeechPlaying(ped: number): number;

declare function IsAnyVehicleNearPoint(x: number, y: number, z: number, radius: number): number;

declare function IsAreaOccupied(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean, p8: boolean, p9: boolean, p10: boolean, p11: number, p12: boolean): number;

declare function IsAudioSceneActive(scene: string): number;

/**
 * if (GAMEPLAY::IS_AUSSIE_VERSION()) {
 * sub_127a9(&amp;l_31, 1024); // l_31 |= 1024
 * l_129 = 3;
 * sub_129d2("AUSSIE VERSION IS TRUE!?!?!"); // DEBUG
 * }
 * Used to block some of the prostitute stuff due to laws in Australia.
 */
declare function IsAussieVersion(): number;

declare function IsAutoSaveInProgress(): number;

declare function IsBigVehicle(vehicle: number): number;

/**
 * Returns bit's boolean state from [offset] of [address].
 * Example:
 * GAMEPLAY::IS_BIT_SET(bitAddress, 1);
 * To enable and disable bits, see:
 * GAMEPLAY::SET_BIT(&amp;bitAddress, 1);   // enable
 * GAMEPLAY::CLEAR_BIT(&amp;bitAddress, 1); // disable
 */
declare function IsBitSet(address: number, offset: number): number;

declare function IsBlipFlashing(blip: number): number;

declare function IsBlipOnMinimap(blip: number): number;

declare function IsBlipShortRange(blip: number): number;

declare function IsBulletInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: boolean): number;

declare function IsBulletInArea(p0: number, p1: number, p2: number, p3: number, p4: boolean): number;

declare function IsBulletInBox(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): number;

/**
 * Returns whether or not the passed camera handle is active.
 */
declare function IsCamActive(cam: number): number;

declare function IsCamInterpolating(cam: number): number;

declare function IsCamPlayingAnim(cam: number, animName: string, animDictionary: string): number;

declare function IsCamRendering(cam: number): number;

declare function IsCamShaking(cam: number): number;

declare function IsCamSplinePaused(p0: number): number;

declare function IsCinematicCamRendering(): number;

declare function IsCinematicCamShaking(): number;

declare function IsCinematicShotActive(p0: number): number;

/**
 * Control Groups:
 * enum InputGroups
 * {
 * INPUTGROUP_MOVE = 0,
 * INPUTGROUP_LOOK = 1,
 * INPUTGROUP_WHEEL = 2,
 * INPUTGROUP_CELLPHONE_NAVIGATE = 3,
 * INPUTGROUP_CELLPHONE_NAVIGATE_UD = 4,
 * INPUTGROUP_CELLPHONE_NAVIGATE_LR = 5,
 * INPUTGROUP_FRONTEND_DPAD_ALL = 6,
 * INPUTGROUP_FRONTEND_DPAD_UD = 7,
 * INPUTGROUP_FRONTEND_DPAD_LR = 8,
 * INPUTGROUP_FRONTEND_LSTICK_ALL = 9,
 * INPUTGROUP_FRONTEND_RSTICK_ALL = 10,
 * INPUTGROUP_FRONTEND_GENERIC_UD = 11,
 * INPUTGROUP_FRONTEND_GENERIC_LR = 12,
 * INPUTGROUP_FRONTEND_GENERIC_ALL = 13,
 * INPUTGROUP_FRONTEND_BUMPERS = 14,
 * INPUTGROUP_FRONTEND_TRIGGERS = 15,
 * INPUTGROUP_FRONTEND_STICKS = 16,
 * INPUTGROUP_SCRIPT_DPAD_ALL = 17,
 * INPUTGROUP_SCRIPT_DPAD_UD = 18,
 * INPUTGROUP_SCRIPT_DPAD_LR = 19,
 * INPUTGROUP_SCRIPT_LSTICK_ALL = 20,
 * INPUTGROUP_SCRIPT_RSTICK_ALL = 21,
 * INPUTGROUP_SCRIPT_BUMPERS = 22,
 * INPUTGROUP_SCRIPT_TRIGGERS = 23,
 * INPUTGROUP_WEAPON_WHEEL_CYCLE = 24,
 * INPUTGROUP_FLY = 25,
 * INPUTGROUP_SUB = 26,
 * INPUTGROUP_VEH_MOVE_ALL = 27,
 * INPUTGROUP_CURSOR = 28,
 * INPUTGROUP_CURSOR_SCROLL = 29,
 * INPUTGROUP_SNIPER_ZOOM_SECONDARY = 30,
 * INPUTGROUP_VEH_HYDRAULICS_CONTROL = 31,
 * MAX_INPUTGROUPS = 32,
 * INPUTGROUP_INVALID = 33
 * };
 * 0, 1 and 2 used in the scripts.
 */
declare function IsControlEnabled(inputGroup: number, control: number): number;

declare function IsControlJustPressed(inputGroup: number, control: number): number;

declare function IsControlJustReleased(inputGroup: number, control: number): number;

/**
 * index always is 2 for xbox 360 controller and razerblade
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsControlPressed(inputGroup: number, control: number): number;

/**
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsControlReleased(inputGroup: number, control: number): number;

declare function IsConversationPedDead(ped: number): number;

/**
 * xyz - relative to the world origin.
 */
declare function IsCopPedInArea_3d(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * Usage:
 * public bool isCopInRange(Vector3 Location, float Range)
 * {
 * return Function.Call&lt;bool&gt;(Hash.IS_COP_PED_IN_AREA_3D, Location.X - Range, Location.Y - Range, Location.Z - Range, Location.X + Range, Location.Y + Range, Location.Z + Range);
 * }
 */
declare function IsCopVehicleInArea_3d(x1: number, x2: number, y1: number, y2: number, z1: number, z2: number): number;

declare function IsCutsceneActive(): number;

declare function IsCutscenePlaying(): number;

declare function IsDamageTrackerActiveOnNetworkId(netID: number): number;

declare function IsDecalAlive(decal: number): number;

/**
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsDisabledControlJustPressed(inputGroup: number, control: number): number;

/**
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsDisabledControlJustReleased(inputGroup: number, control: number): number;

/**
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsDisabledControlPressed(inputGroup: number, control: number): number;

declare function IsDlcDataEmpty(dlcData: number): number;
declare function IsOutfitEmpty(dlcData: number): number;

/**
 * Example:
 * DLC2::IS_DLC_PRESENT($\mpbusiness2\);
 * ($ = gethashkey)
 * bruteforce these:
 * 0xB119F6D
 * 0x96F02EE6
 */
declare function IsDlcPresent(dlcHash: string | number): number;

/**
 * Use _GET_VEHICLE_MOD_DATA for modData
 */
declare function IsDlcVehicleMod(modData: number): number;
/**
 * Use _GET_VEHICLE_MOD_DATA for modData
 */
declare function N_0x0564b9ff9631b82c(modData: number): number;

declare function IsDoorClosed(door: string | number): number;

declare function IsDrivebyTaskUnderneathDrivingTask(ped: number): number;

/**
 * Gets whether or not this is the CitizenFX server.
 * @return A boolean value.
 */
declare function IsDuplicityVersion(): number;

/**
 * XBOX ONE
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function IsDurangoVersion(): number;

declare function IsEntityAMissionEntity(entity: number): number;

declare function IsEntityAPed(entity: number): number;

declare function IsEntityAVehicle(entity: number): number;

declare function IsEntityAnObject(entity: number): number;

/**
 * Checks if entity is within x/y/zSize distance of x/y/z.
 * Last three are unknown ints, almost always p7 = 0, p8 = 1, p9 = 0
 */
declare function IsEntityAtCoord(entity: number, xPos: number, yPos: number, zPos: number, xSize: number, ySize: number, zSize: number, p7: boolean, p8: boolean, p9: number): number;

/**
 * Checks if entity1 is within the box defined by x/y/zSize of entity2.
 * Last three parameters are almost alwasy p5 = 0, p6 = 1, p7 = 0
 */
declare function IsEntityAtEntity(entity1: number, entity2: number, xSize: number, ySize: number, zSize: number, p5: boolean, p6: boolean, p7: number): number;

declare function IsEntityAttached(entity: number): number;

declare function IsEntityAttachedToAnyObject(entity: number): number;

declare function IsEntityAttachedToAnyPed(entity: number): number;

declare function IsEntityAttachedToAnyVehicle(entity: number): number;

declare function IsEntityAttachedToEntity(_from: number, to: number): number;

declare function IsEntityDead(entity: number): number;

declare function IsEntityFocus(entity: number): number;

declare function IsEntityInAir(entity: number): number;

/**
 * Creates a spherical cone at origin that extends to surface with the angle specified. Then returns true if the entity is inside the spherical cone
 * Angle is measured in degrees.
 * These values are constant, most likely bogus:
 * p8 = 0, p9 = 1, p10 = 0
 * This method can also take two float&lt;3&gt; instead of 6 floats.
 */
declare function IsEntityInAngledArea(entity: number, originX: number, originY: number, originZ: number, edgeX: number, edgeY: number, edgeZ: number, angle: number, p8: boolean, p9: boolean, p10: number): number;

declare function IsEntityInArea(entity: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean, p9: number): number;

declare function IsEntityInWater(entity: number): number;

declare function IsEntityInZone(entity: number, zone: string): number;

declare function IsEntityOccluded(entity: number): number;

declare function IsEntityOnFire(entity: number): number;

/**
 * Returns true if the entity is in between the minimum and maximum values for the 2d screen coords.
 * This means that it will return true even if the entity is behind a wall for example, as long as you're looking at their location.
 * Chipping
 */
declare function IsEntityOnScreen(entity: number): number;

/**
 * See also PED::IS_SCRIPTED_SCENARIO_PED_USING_CONDITIONAL_ANIM 0x6EC47A344923E1ED 0x3C30B447
 * Taken from ENTITY::IS_ENTITY_PLAYING_ANIM(PLAYER::PLAYER_PED_ID(), "creatures@shark@move", "attack_player", 3)
 * p4 is always 3 in the scripts.
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function IsEntityPlayingAnim(entity: number, animDict: string, animName: string, p4: number): number;

/**
 * a static ped will not react to natives like "APPLY_FORCE_TO_ENTITY" or "SET_ENTITY_VELOCITY" and oftentimes will not react to task-natives like "AI::TASK_COMBAT_PED". The only way I know of to make one of these peds react is to ragdoll them (or sometimes to use CLEAR_PED_TASKS_IMMEDIATELY(). Static peds include almost all far-away peds, beach-combers, peds in certain scenarios, peds crossing a crosswalk, peds walking to get back into their cars, and others. If anyone knows how to make a ped non-static without ragdolling them, please edit this with the solution.
 * how can I make an entity static???
 */
declare function IsEntityStatic(entity: number): number;

declare function IsEntityTouchingEntity(entity: number, targetEntity: number): number;

declare function IsEntityTouchingModel(entity: number, modelHash: string | number): number;

declare function IsEntityUpright(entity: number, angle: number): number;

declare function IsEntityUpsidedown(entity: number): number;

declare function IsEntityVisible(entity: number): number;

declare function IsEntityVisibleToScript(entity: number): number;

declare function IsEntityWaitingForWorldCollision(entity: number): number;

declare function IsExplosionInAngledArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number): number;

declare function IsExplosionInArea(explosionType: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function IsExplosionInSphere(explosionType: number, x: number, y: number, z: number, radius: number): number;

declare function IsFirstPersonAimCamActive(): number;

declare function IsFollowPedCamActive(): number;

declare function IsFollowVehicleCamActive(): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function IsFrontendFading(): number;

/**
 * Hardcoded to return 1
 */
declare function IsGameInControlOfMusic(): number;

declare function IsGameplayCamLookingBehind(): number;

/**
 * Examples when this function will return 0 are:
 * - During busted screen.
 * - When player is coming out from a hospital.
 * - When player is coming out from a police station.
 */
declare function IsGameplayCamRendering(): number;

declare function IsGameplayCamShaking(): number;

declare function IsGameplayHintActive(): number;

declare function IsGarageEmpty(garage: number, p1: boolean, p2: number): number;

declare function IsHeliPartBroken(vehicle: number, p1: boolean, p2: boolean, p3: boolean): number;

declare function IsHelpMessageBeingDisplayed(): number;

declare function IsHelpMessageFadingOut(): number;

declare function IsHelpMessageOnScreen(): number;

/**
 * Checks whether the horn of a vehicle is currently played.
 */
declare function IsHornActive(vehicle: number): number;

/**
 * Full list of components below
 * HUD = 0;
 * HUD_WANTED_STARS = 1;
 * HUD_WEAPON_ICON = 2;
 * HUD_CASH = 3;
 * HUD_MP_CASH = 4;
 * HUD_MP_MESSAGE = 5;
 * HUD_VEHICLE_NAME = 6;
 * HUD_AREA_NAME = 7;
 * HUD_VEHICLE_CLASS = 8;
 * HUD_STREET_NAME = 9;
 * HUD_HELP_TEXT = 10;
 * HUD_FLOATING_HELP_TEXT_1 = 11;
 * HUD_FLOATING_HELP_TEXT_2 = 12;
 * HUD_CASH_CHANGE = 13;
 * HUD_RETICLE = 14;
 * HUD_SUBTITLE_TEXT = 15;
 * HUD_RADIO_STATIONS = 16;
 * HUD_SAVING_GAME = 17;
 * HUD_GAME_STREAM = 18;
 * HUD_WEAPON_WHEEL = 19;
 * HUD_WEAPON_WHEEL_STATS = 20;
 * MAX_HUD_COMPONENTS = 21;
 * MAX_HUD_WEAPONS = 22;
 * MAX_SCRIPTED_HUD_COMPONENTS = 141;
 */
declare function IsHudComponentActive(id: number): number;

declare function IsHudHidden(): number;

declare function IsHudPreferenceSwitchedOn(): number;

declare function IsInItemset(p0: number, p1: number): number;

/**
 * Only occurrence was false, in maintransition.
 */
declare function IsInLoadingScreen(p0: boolean): void;
/**
 * Only occurrence was false, in maintransition.
 */
declare function N_0xfc309e94546fcdb5(p0: boolean): void;

declare function IsInVehicleCamDisabled(): number;
declare function N_0x4f32c0d5a90a9b40(): number;

/**
 * =======================================================
 * Correction, I have change this to int, instead of int*
 * as it doesn't use a pointer to the createdIncident.
 * If you try it you will crash (or) freeze.
 * =======================================================
 */
declare function IsIncidentValid(incidentId: number): number;

/**
 * Seems to return true if the input is currently disabled. "_GET_LAST_INPUT_METHOD" didn't seem very accurate, but I've left the original description below.
 * --
 * index usually 2
 * returns true if the last input method was made with mouse + keyboard, false if it was made with a gamepad
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsInputDisabled(inputGroup: number): number;
/**
 * Seems to return true if the input is currently disabled. "_GET_LAST_INPUT_METHOD" didn't seem very accurate, but I've left the original description below.
 * --
 * index usually 2
 * returns true if the last input method was made with mouse + keyboard, false if it was made with a gamepad
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function GetLastInputMethod(inputGroup: number): number;

/**
 * I may be wrong with this one, but from the looks of the scripts, it sets keyboard related stuff as soon as this returns true.
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function IsInputJustDisabled(inputGroup: number): number;
/**
 * I may be wrong with this one, but from the looks of the scripts, it sets keyboard related stuff as soon as this returns true.
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function N_0x13337b38db572509(inputGroup: number): number;

declare function IsInteriorCapped(interiorID: number): number;

declare function IsInteriorDisabled(interiorID: number): number;

declare function IsInteriorPropEnabled(interiorID: number, propName: string): number;
declare function N_0x35f7dd45e8c0a16d(interiorID: number, propName: string): number;

declare function IsInteriorReady(interiorID: number): number;

/**
 * Returns a bool if interior rendering is disabled, if yes, all "normal" rendered interiors are invisible
 */
declare function IsInteriorRenderingDisabled(): number;

declare function IsInteriorScene(): number;

declare function IsIplActive(iplName: string): number;

declare function IsItemsetValid(p0: number): number;

declare function IsLoadingPromptBeingDisplayed(): number;
declare function N_0xd422fcc5f239a915(): number;

declare function IsLookInverted(): number;

declare function IsMemoryCardInUse(): number;

declare function IsMessageBeingDisplayed(): number;

declare function IsMinigameInProgress(): number;

declare function IsMinimapAreaRevealed(x: number, y: number, radius: number): number;
declare function N_0x6e31b91145873922(x: number, y: number, radius: number): number;

declare function IsMissionCompletePlaying(): number;

declare function IsMissionCreatorBlip(blip: number): number;

declare function IsMobilePhoneCallOngoing(): number;

declare function IsMobilePhoneRadioActive(): number;

/**
 * Returns whether the specified model represents a vehicle.
 */
declare function IsModelAVehicle(model: string | number): number;

/**
 * Check if model is in cdimage(rpf)
 */
declare function IsModelInCdimage(model: string | number): number;

/**
 * Returns whether the specified model exists in the game.
 */
declare function IsModelValid(model: string | number): number;

declare function IsMountedWeaponTaskUnderneathDrivingTask(ped: number): number;

declare function IsMoveBlendRatioRunning(ped: number): number;

declare function IsMoveBlendRatioSprinting(ped: number): number;

declare function IsMoveBlendRatioStill(ped: number): number;

declare function IsMoveBlendRatioWalking(ped: number): number;

declare function IsMpGamerTagActive(gamerTagId: number): number;
declare function N_0x4e929e7a5796fd26(gamerTagId: number): number;

declare function IsNamedRendertargetLinked(hash: string | number): number;

declare function IsNamedRendertargetRegistered(p0: string): number;

/**
 * Returns whether navmesh for the region is loaded. The region is a rectangular prism defined by it's top left deepest corner to it's bottom right shallowest corner.
 * If you can re-word this so it makes more sense, please do. I'm horrible with words sometimes...
 */
declare function IsNavmeshLoadedInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

declare function IsNetworkLoadingScene(): number;

/**
 * hash collision.
 * Definitely a hash collision, has something do to with your local player, not a vehicle
 */
declare function IsNetworkVehicleBeenDamagedByAnyObject(x: number, y: number, z: number): number;

declare function IsNewLoadSceneActive(): number;

declare function IsNewLoadSceneLoaded(): number;

declare function IsNextWeatherType(weatherType: string): number;

/**
 * Gets whether or not NIGHTVISION is Active.
 * Note:  When nightvision is actually active, this native will return TRUE!
 */
declare function IsNightvisionActive(): number;
/**
 * Gets whether or not NIGHTVISION is Active.
 * Note:  When nightvision is actually active, this native will return TRUE!
 */
declare function IsNightvisionInactive(): number;

declare function IsObjectNearPoint(objectHash: string | number, x: number, y: number, z: number, range: number): number;

declare function IsObjectVisible(object: number): number;

declare function IsObjectWithinBrainActivationRange(object: number): number;

/**
 * PS4
 * MulleDK19: This function is hard-coded to always return 0.
 * Force67: I patched return result and got this : i.imgur.com/hUn7zSj.jpg
 * translate please?
 */
declare function IsOrbisVersion(): number;

declare function IsParticleFxDelayedBlink(): number;

declare function IsPauseMenuActive(): number;

declare function IsPauseMenuRestarting(): number;

/**
 * PC
 * MulleDK19: This function is hard-coded to always return 1.
 */
declare function IsPcVersion(): number;

/**
 * Returns true if the given ped has a valid pointer to CPlayerInfo in its CPed class. That's all.
 */
declare function IsPedAPlayer(ped: number): number;

declare function IsPedActiveInScenario(ped: number): number;

declare function IsPedAimingFromCover(ped: number): number;

/**
 * p1 is anywhere from 4 to 7 in the scripts. Might be a weapon wheel group?
 * ^It's kinda like that.
 * 7 returns true if you are equipped with any weapon except your fists.
 * 6 returns true if you are equipped with any weapon except melee weapons.
 * 5 returns true if you are equipped with any weapon except the Explosives weapon group.
 * 4 returns true if you are equipped with any weapon except Explosives weapon group AND melee weapons.
 * 3 returns true if you are equipped with either Explosives or Melee weapons (the exact opposite of 4).
 * 2 returns true only if you are equipped with any weapon from the Explosives weapon group.
 * 1 returns true only if you are equipped with any Melee weapon.
 * 0 never returns true.
 * Note: When I say "Explosives weapon group", it does not include the Jerry can and Fire Extinguisher.
 */
declare function IsPedArmed(ped: number, p1: number): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function IsPedBeingArrested(ped: number): number;

declare function IsPedBeingJacked(ped: number): number;

declare function IsPedBeingStealthKilled(ped: number): number;

/**
 * p1 is always 0
 */
declare function IsPedBeingStunned(ped: number, p1: number): number;

declare function IsPedBlushColorValid(colorID: number): number;
declare function N_0x604e810189ee3a59(colorID: number): number;

declare function IsPedClimbing(ped: number): number;

/**
 * Checks if the component variation is valid, this works great for randomizing components using loops.
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function IsPedComponentVariationValid(ped: number, componentId: number, drawableId: number, textureId: number): number;

/**
 * l
 */
declare function IsPedCuffed(ped: number): number;

/**
 * This native returns a true or false value.
 * Ped ped = The ped whose weapon you want to check.
 */
declare function IsPedCurrentWeaponSilenced(ped: number): number;

/**
 * Seems to consistently return true if the ped is dead.
 * p1 is always passed 1 in the scripts.
 * I suggest to remove "OR_DYING" part, because it does not detect dying phase.
 * That's what the devs call it, cry about it.
 * lol
 */
declare function IsPedDeadOrDying(ped: number, p1: boolean): number;

declare function IsPedDiving(ped: number): number;

declare function IsPedDoingDriveby(ped: number): number;

declare function IsPedDucking(ped: number): number;

/**
 * Presumably returns the Entity that the Ped is currently diving out of the way of.
 * var num3;
 * if (PED::IS_PED_EVASIVE_DIVING(A_0, &amp;num3) != 0)
 * if (ENTITY::IS_ENTITY_A_VEHICLE(num3) != 0)
 */
declare function IsPedEvasiveDiving(ped: number, evadingEntity: number): number;

/**
 * angle is ped's view cone
 */
declare function IsPedFacingPed(ped: number, otherPed: number, angle: number): number;

declare function IsPedFalling(ped: number): number;

/**
 * Gets a value indicating whether this ped's health is below its fatally injured threshold. The default threshold is 100.
 * If the handle is invalid, the function returns true.
 */
declare function IsPedFatallyInjured(ped: number): number;

declare function IsPedFleeing(ped: number): number;

declare function IsPedGettingIntoAVehicle(ped: number): number;

declare function IsPedGettingUp(ped: number): number;

declare function IsPedGoingIntoCover(ped: number): number;

declare function IsPedGroupMember(ped: number, groupId: number): number;

declare function IsPedHairColorValid(colorID: number): number;
declare function N_0xe0d36e5d9e99cc21(colorID: number): number;

declare function IsPedHangingOnToVehicle(ped: number): number;

declare function IsPedHeadtrackingEntity(ped: number, entity: number): number;

declare function IsPedHeadtrackingPed(ped1: number, ped2: number): number;

/**
 * Returns true/false if the ped is/isn't humanoid.
 */
declare function IsPedHuman(ped: number): number;

/**
 * Returns whether the specified ped is hurt.
 */
declare function IsPedHurt(ped: number): number;

declare function IsPedInAnyBoat(ped: number): number;

declare function IsPedInAnyHeli(ped: number): number;

declare function IsPedInAnyPlane(ped: number): number;

declare function IsPedInAnyPoliceVehicle(ped: number): number;

declare function IsPedInAnySub(ped: number): number;

declare function IsPedInAnyTaxi(ped: number): number;

declare function IsPedInAnyTrain(ped: number): number;

/**
 * Gets a value indicating whether the specified ped is in any vehicle.
 * If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
 */
declare function IsPedInAnyVehicle(ped: number, atGetIn: boolean): number;

/**
 * Checks to see if ped and target are in combat with eachother. Only goes one-way: if target is engaged in combat with ped but ped has not yet reacted, the function will return false until ped starts fighting back.
 * p1 is usually 0 in the scripts because it gets the ped id during the task sequence. For instance: PED::IS_PED_IN_COMBAT(l_42E[4 -- [[14]] ], PLAYER::PLAYER_PED_ID()) // armenian2.ct4: 43794
 */
declare function IsPedInCombat(ped: number, target: number): number;

/**
 * p1 is nearly always 0 in the scripts.
 */
declare function IsPedInCover(ped: number, p1: boolean): number;

declare function IsPedInCoverFacingLeft(ped: number): number;

declare function IsPedInCurrentConversation(ped: number): number;

declare function IsPedInFlyingVehicle(ped: number): number;

declare function IsPedInGroup(ped: number): number;

/**
 * Notes: The function only returns true while the ped is:
 * A.) Swinging a random melee attack (including pistol-whipping)
 * B.) Reacting to being hit by a melee attack (including pistol-whipping)
 * C.) Is locked-on to an enemy (arms up, strafing/skipping in the default fighting-stance, ready to dodge+counter).
 * You don't have to be holding the melee-targetting button to be in this stance; you stay in it by default for a few seconds after swinging at someone. If you do a sprinting punch, it returns true for the duration of the punch animation and then returns false again, even if you've punched and made-angry many peds
 */
declare function IsPedInMeleeCombat(ped: number): number;

declare function IsPedInModel(ped: number, modelHash: string | number): number;

declare function IsPedInParachuteFreeFall(ped: number): number;

/**
 * Gets a value indicating whether the specified ped is in the specified vehicle.
 * If 'atGetIn' is false, the function will not return true until the ped is sitting in the vehicle and is about to close the door. If it's true, the function returns true the moment the ped starts to get onto the seat (after opening the door). Eg. if false, and the ped is getting into a submersible, the function will not return true until the ped has descended down into the submersible and gotten into the seat, while if it's true, it'll return true the moment the hatch has been opened and the ped is about to descend into the submersible.
 */
declare function IsPedInVehicle(ped: number, vehicle: number, atGetIn: boolean): number;

/**
 * returns true is the ped is on the ground whining like a little female dog from a gunshot wound
 */
declare function IsPedInWrithe(ped: number): number;

/**
 * Gets a value indicating whether this ped's health is below its injured threshold.
 * The default threshold is 100.
 */
declare function IsPedInjured(ped: number): number;

declare function IsPedJacking(ped: number): number;

declare function IsPedJumping(ped: number): number;

declare function IsPedJumpingOutOfVehicle(ped: number): number;

declare function IsPedLipstickColorValid(colorID: number): number;
declare function N_0x0525a2c2562f3cd4(colorID: number): number;

/**
 * Returns true/false if the ped is/isn't male.
 */
declare function IsPedMale(ped: number): number;

declare function IsPedModel(ped: number, modelHash: string | number): number;

declare function IsPedOnAnyBike(ped: number): number;

declare function IsPedOnFoot(ped: number): number;

/**
 * Same function call as PED::GET_MOUNT, aka just returns 0
 */
declare function IsPedOnMount(ped: number): number;

declare function IsPedOnSpecificVehicle(ped: number, vehicle: number): number;

/**
 * Gets a value indicating whether the specified ped is on top of any vehicle.
 * Return 1 when ped is on vehicle.
 * Return 0 when ped is not on a vehicle.
 */
declare function IsPedOnVehicle(ped: number): number;

declare function IsPedPerformingStealthKill(ped: number): number;

declare function IsPedPlantingBomb(ped: number): number;

declare function IsPedProne(ped: number): number;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function IsPedPropValid(ped: number, componentId: number, drawableId: number, TextureId: number): number;
/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function N_0x2b16a3bff1fbce49(ped: number, componentId: number, drawableId: number, TextureId: number): number;

/**
 * If the ped handle passed through the parenthesis is in a ragdoll state this will return true.
 */
declare function IsPedRagdoll(ped: number): number;

/**
 * Returns whether the specified ped is reloading.
 */
declare function IsPedReloading(ped: number): number;

declare function IsPedRespondingToEvent(ped: number, event: number): number;

declare function IsPedRingtonePlaying(ped: number): number;

declare function IsPedRunning(ped: number): number;

declare function IsPedRunningArrestTask(ped: number): number;

declare function IsPedRunningMobilePhoneTask(ped: number): number;

declare function IsPedRunningRagdollTask(ped: number): number;

/**
 * Returns whether the specified ped is shooting.
 */
declare function IsPedShooting(ped: number): number;

declare function IsPedShootingInArea(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: boolean, p8: boolean): number;

/**
 * Detect if ped is in any vehicle
 * [True/False]
 */
declare function IsPedSittingInAnyVehicle(ped: number): number;

/**
 * Detect if ped is sitting in the specified vehicle
 * [True/False]
 */
declare function IsPedSittingInVehicle(ped: number, vehicle: number): number;

declare function IsPedSprinting(ped: number): number;

/**
 * Console Hash: 0xDD5D08A7
 */
declare function IsPedStandingInCover(ped: number): number;
/**
 * Console Hash: 0xDD5D08A7
 */
declare function N_0x6a03bf943d767c93(ped: number): number;

declare function IsPedStill(ped: number): number;

/**
 * Returns true if the ped doesn't do any movement. If the ped is being pushed forwards by using APPLY_FORCE_TO_ENTITY for example, the function returns false.
 */
declare function IsPedStopped(ped: number): number;

/**
 * What's strafing?
 */
declare function IsPedStrafing(ped: number): number;

declare function IsPedSwimming(ped: number): number;

declare function IsPedSwimmingUnderWater(ped: number): number;

declare function IsPedTracked(ped: number): number;

declare function IsPedTryingToEnterALockedVehicle(ped: number): number;

declare function IsPedUsingActionMode(ped: number): number;

declare function IsPedUsingAnyScenario(ped: number): number;

declare function IsPedUsingScenario(ped: number, scenario: string): number;

declare function IsPedVaulting(ped: number): number;

declare function IsPedWalking(ped: number): number;

declare function IsPedWeaponComponentActive(ped: number, weaponHash: string | number, componentHash: string | number): number;

declare function IsPedWeaponReadyToShoot(ped: number): number;

/**
 * Returns true if the ped passed through the parenthesis is wearing a helmet.
 */
declare function IsPedWearingHelmet(ped: number): number;

/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 */
declare function IsPedheadshotReady(handle: number): number;

/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 */
declare function IsPedheadshotValid(handle: number): number;

/**
 * Pickup hashes: pastebin.com/8EuSv2r1
 */
declare function IsPickupWithinRadius(pickupHash: string | number, x: number, y: number, z: number, radius: number): number;

declare function IsPlaybackGoingOnForVehicle(p0: number): number;

declare function IsPlaybackUsingAiGoingOnForVehicle(p0: number): number;

/**
 * Return true while player is being arrested / busted.
 * If atArresting is set to 1, this function will return 1 when player is being arrested (while player is putting his hand up, but still have control)
 * If atArresting is set to 0, this function will return 1 only when the busted screen is shown.
 */
declare function IsPlayerBeingArrested(player: number, atArresting: boolean): number;

/**
 * Returns true when the player is not able to control the cam i.e. when running a benchmark test, switching the player or viewing a cutscene.
 * Note: I am not 100% sure if the native actually checks if the cam control is disabled but it seems promising.
 */
declare function IsPlayerCamControlDisabled(): number;
/**
 * Returns true when the player is not able to control the cam i.e. when running a benchmark test, switching the player or viewing a cutscene.
 * Note: I am not 100% sure if the native actually checks if the cam control is disabled but it seems promising.
 */
declare function N_0x7c814d2fb49f40c0(): number;

/**
 * Returns TRUE if the player ('s ped) is climbing at the moment.
 */
declare function IsPlayerClimbing(player: number): number;

/**
 * Can the player control himself, used to disable controls for player for things like a cutscene.
 * ---
 * You can't disable controls with this, use SET_PLAYER_CONTROL(...) for this.
 */
declare function IsPlayerControlOn(player: number): number;

declare function IsPlayerDead(player: number): number;

/**
 * Gets a value indicating whether the specified player is currently aiming freely.
 */
declare function IsPlayerFreeAiming(player: number): number;

/**
 * Gets a value indicating whether the specified player is currently aiming freely at the specified entity.
 */
declare function IsPlayerFreeAimingAtEntity(player: number, entity: number): number;

declare function IsPlayerFreeForAmbientTask(player: number): number;

declare function IsPlayerInCutscene(player: number): number;

/**
 * this function is hard-coded to always return 0.
 */
declare function IsPlayerLoggingInNp(): number;

/**
 * Returns TRUE if the game is in online mode and FALSE if in offline mode.
 * This is an alias for NETWORK_IS_SIGNED_ONLINE.
 */
declare function IsPlayerOnline(): number;

/**
 * Checks whether the specified player has a Ped, the Ped is not dead, is not injured and is not arrested.
 */
declare function IsPlayerPlaying(player: number): number;

declare function IsPlayerPressingHorn(player: number): number;

declare function IsPlayerReadyForCutscene(player: number): number;

/**
 * Returns true if the player is riding a train.
 */
declare function IsPlayerRidingTrain(player: number): number;

declare function IsPlayerScriptControlOn(player: number): number;

/**
 * Returns true if the player is currently switching, false otherwise.
 * (When the camera is in the sky moving from Trevor to Franklin for example)
 */
declare function IsPlayerSwitchInProgress(): number;
/**
 * Returns true if the player is currently switching, false otherwise.
 * (When the camera is in the sky moving from Trevor to Franklin for example)
 */
declare function N_0xd9d2cfff49fab35f(): number;

declare function IsPlayerTargettingAnything(player: number): number;

declare function IsPlayerTargettingEntity(player: number, entity: number): number;

declare function IsPlayerTeleportActive(): number;

declare function IsPlayerVehicleRadioEnabled(): number;
declare function N_0x5f43d83fd6738741(): number;

declare function IsPlayerWantedLevelGreater(player: number, wantedLevel: number): number;

declare function IsPlayingPhoneGestureAnim(ped: number): number;

declare function IsPointInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, p11: boolean): number;

declare function IsPointObscuredByAMissionEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

/**
 * Gets a value indicating whether the specified position is on a road.
 * The vehicle parameter is not implemented (ignored).
 */
declare function IsPointOnRoad(x: number, y: number, z: number, vehicle: number): number;

declare function IsPositionOccupied(x: number, y: number, z: number, range: number, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: boolean, p9: number, p10: boolean): number;

declare function IsPrevWeatherType(weatherType: string): number;

/**
 * Determines whether there is a projectile within the specified coordinates. The coordinates form a rectangle.
 * ownedByPlayer = only projectiles fired by the player will be detected.
 */
declare function IsProjectileInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, ownedByPlayer: boolean): number;

declare function IsProjectileTypeInAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): number;

/**
 * Determines whether there is a projectile of a specific type within the specified coordinates. The coordinates form a rectangle.
 * Note: This native hasn't been tested yet.
 */
declare function IsProjectileTypeInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, _type: number, p7: boolean): number;

/**
 * PS3
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function IsPs3Version(): number;

declare function IsRadarEnabled(): number;
declare function N_0xaf754f20eb5cd51a(): number;

declare function IsRadarHidden(): number;

declare function IsRadarPreferenceSwitchedOn(): number;

declare function IsRadioRetuning(): number;

/**
 * Checks if you're recording, returns TRUE when you start recording (F1) or turn on action replay (F2)
 * mov al, cs:g_bIsRecordingGameplay // byte_141DD0CD0 in b944
 * retn
 */
declare function IsRecording(): number;

/**
 * if(NETWORK::_IS_ROCKSTAR_BANNED() == 0) means the player is rockstar banned
 */
declare function IsRockstarBanned(): number;

declare function IsScInboxValid(p0: number): number;
declare function N_0x93028f1db42bfd08(p0: number): number;

/**
 * Occurrences in the b617d scripts:
 * "ARMY_GUARD",
 * "ARMY_HELI",
 * "BLIMP",
 * "Cinema_Downtown",
 * "Cinema_Morningwood",
 * "Cinema_Textile",
 * "City_Banks",
 * "Countryside_Banks",
 * "DEALERSHIP",
 * "KORTZ_SECURITY",
 * "LSA_Planes",
 * "MP_POLICE",
 * "Observatory_Bikers",
 * "POLICE_POUND1",
 * "POLICE_POUND2",
 * "POLICE_POUND3",
 * "POLICE_POUND4",
 * "POLICE_POUND5",
 * "Rampage1",
 * "SANDY_PLANES",
 * "SCRAP_SECURITY",
 * "SEW_MACHINE",
 * "SOLOMON_GATE"
 * Sometimes used with DOES_SCENARIO_GROUP_EXIST:
 * if (AI::DOES_SCENARIO_GROUP_EXIST("Observatory_Bikers") &amp;&amp;   (!AI::IS_SCENARIO_GROUP_ENABLED("Observatory_Bikers"))) {
 * else if (AI::IS_SCENARIO_GROUP_ENABLED("BLIMP")) {
 */
declare function IsScenarioGroupEnabled(scenarioGroup: string): number;

declare function IsScenarioOccupied(p0: number, p1: number, p2: number, p3: number, p4: boolean): number;

/**
 * Occurrences in the b617d scripts:
 * "PROP_HUMAN_SEAT_CHAIR",
 * "WORLD_HUMAN_DRINKING",
 * "WORLD_HUMAN_HANG_OUT_STREET",
 * "WORLD_HUMAN_SMOKING",
 * "WORLD_MOUNTAIN_LION_WANDER",
 * "WORLD_HUMAN_DRINKING"
 * Sometimes used together with GAMEPLAY::IS_STRING_NULL_OR_EMPTY in the scripts.
 * scenarioType could be the same as scenarioName, used in for example AI::TASK_START_SCENARIO_AT_POSITION.
 */
declare function IsScenarioTypeEnabled(scenarioType: string): number;

declare function IsScreenFadedIn(): number;

declare function IsScreenFadedOut(): number;

declare function IsScreenFadingIn(): number;

declare function IsScreenFadingOut(): number;

/**
 * In drunk_controller.c4, sub_309
 * if (CAM::_C912AF078AF19212()) {
 * CAM::_1C9D7949FA533490(0);
 * }
 * What does "IS_SCRIPT_GLOBAL_SHAKING" mean..? :/ Is this a hash collision?
 */
declare function IsScriptGlobalShaking(): number;
/**
 * In drunk_controller.c4, sub_309
 * if (CAM::_C912AF078AF19212()) {
 * CAM::_1C9D7949FA533490(0);
 * }
 * What does "IS_SCRIPT_GLOBAL_SHAKING" mean..? :/ Is this a hash collision?
 */
declare function N_0xc912af078af19212(): number;

declare function IsScriptedConversationLoaded(): number;

declare function IsScriptedConversationOngoing(): number;

declare function IsScriptedHudComponentActive(id: number): number;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function IsScriptedScenarioPedUsingConditionalAnim(ped: number, animDict: string, anim: string): number;

declare function IsScriptedSpeechPlaying(p0: number): number;

/**
 * Returns whether or not SEETHROUGH is active.
 */
declare function IsSeethroughActive(): number;

/**
 * Some events that i found, not sure about them, but seems to have logic based on my tests:
 * '82 - dead body
 * '86
 * '87
 * '88 - shooting, fire extinguisher in use
 * '89
 * '93 - ped using horn
 * '95 - ped receiving melee attack
 * '102 - living ped receiving shot
 * '104 - player thrown grenade, tear gas, smoke grenade, jerry can dropping gasoline
 * '105 - melee attack against veh
 * '106 - player running
 * '108 - vehicle theft
 * '112 - melee attack
 * '113 - veh rollover ped
 * '114 - dead ped receiving shot
 * '116 - aiming at ped
 * '121
 * Here is full dump of shocking event types from the exe camx.me/gtav/tasks/shockingevents.txt
 */
declare function IsShockingEventInSphere(_type: number, x: number, y: number, z: number, radius: number): number;

/**
 * Determines whether there is a sniper bullet within the specified coordinates. The coordinates form a rectangle.
 */
declare function IsSniperBulletInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function IsSniperInverted(): number;

declare function IsSocialClubActive(): number;
declare function N_0xc406be343fc4b9af(): number;

/**
 * if(_IS_SOCIALCLUB_BANNED() == 0) means the player is social club banned
 */
declare function IsSocialclubBanned(): number;

declare function IsSpecialAbilityActive(player: number): number;

declare function IsSpecialAbilityEnabled(player: number): number;

declare function IsSpecialAbilityMeterFull(player: number): number;

declare function IsSpecialAbilityUnlocked(playerModel: string | number): number;

declare function IsSphereVisible(x: number, y: number, z: number, radius: number): number;

declare function IsSphereVisibleToAnotherMachine(p0: number, p1: number, p2: number, p3: number): number;

declare function IsSphereVisibleToPlayer(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function IsSrlLoaded(): number;

declare function IsStreamPlaying(): number;

declare function IsStreamingAdditionalText(p0: number): number;

declare function IsStringNull(_string: string): number;

declare function IsStringNullOrEmpty(_string: string): number;

declare function IsStuntJumpInProgress(): number;

declare function IsStuntJumpMessageShowing(): number;
declare function N_0x2272b0a1343129f4(): number;

declare function IsSubtitlePreferenceSwitchedOn(): number;

declare function IsSynchronizedSceneLooped(sceneID: number): number;

/**
 * Returns true if a synchronized scene is running
 */
declare function IsSynchronizedSceneRunning(sceneId: number): number;

declare function IsSystemUiBeingDisplayed(): number;

declare function IsTaxiLightOn(vehicle: number): number;

/**
 * Return whether tennis mode is active or not.
 */
declare function IsTennisMode(ped: number): number;

/**
 * Returns whether or not the text chat (MULTIPLAYER_CHAT Scaleform component) is active.
 */
declare function IsTextChatActive(): number;

declare function IsThisAMinigameScript(): number;

declare function IsThisModelABicycle(model: string | number): number;

declare function IsThisModelABike(model: string | number): number;

declare function IsThisModelABoat(model: string | number): number;

/**
 * To check if the model is an amphibious car, see gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-33#entry1069317363 (for build 944 and above only!)
 */
declare function IsThisModelACar(model: string | number): number;

declare function IsThisModelAHeli(model: string | number): number;

declare function IsThisModelAPlane(model: string | number): number;

declare function IsThisModelAQuadbike(model: string | number): number;

declare function IsThisModelATrain(model: string | number): number;

/**
 * Checks if model is a boat, then checks an additional flag.
 * Returns true for these models:
 * PREDATOR
 * SEASHARK2
 * SPEEDER
 */
declare function IsThisModelAnEmergencyBoat(model: string | number): number;
/**
 * Checks if model is a boat, then checks an additional flag.
 * Returns true for these models:
 * PREDATOR
 * SEASHARK2
 * SPEEDER
 */
declare function IsThisModelASubmersible(model: string | number): number;

declare function IsThreadActive(threadId: number): number;

/**
 * Returns true if the two times are equal; otherwise returns false.
 */
declare function IsTimeEqualTo(timeA: number, timeB: number): number;
/**
 * Returns true if the two times are equal; otherwise returns false.
 */
declare function AreIntegersEqual(timeA: number, timeB: number): number;

/**
 * Subtracts the second argument from the first, then returns whether the result is negative.
 */
declare function IsTimeLessThan(timeA: number, timeB: number): number;
/**
 * Subtracts the second argument from the first, then returns whether the result is negative.
 */
declare function SubtractBFromAAndCheckIfNegative(timeA: number, timeB: number): number;

/**
 * Subtracts the first argument from the second, then returns whether the result is negative.
 */
declare function IsTimeMoreThan(timeA: number, timeB: number): number;
/**
 * Subtracts the first argument from the second, then returns whether the result is negative.
 */
declare function SubtractAFromBAndCheckIfNegative(timeA: number, timeB: number): number;

declare function IsToggleModOn(vehicle: number, modType: number): number;

/**
 * returns whether or not a ped is visible within your FOV, not this check auto's to false after a certain distance.
 * Target needs to be tracked.. won't work otherwise.
 */
declare function IsTrackedPedVisible(ped: number): number;

declare function IsTrackedPointVisible(point: number): number;

declare function IsUiLoadingMultiplayer(): number;
declare function N_0xc6dc823253fbb366(): number;

/**
 * Return if interior is valid.
 */
declare function IsValidInterior(interiorID: number): number;

/**
 * p1 is false almost always.
 * However, in launcher_carwash/carwash1/carwash2 scripts, p1 is true and is accompanied by DOES_VEHICLE_HAVE_ROOF
 */
declare function IsVehicleAConvertible(vehicle: number, p1: boolean): number;

declare function IsVehicleAlarmActivated(vehicle: number): number;

declare function IsVehicleAlarmSet(vehicle: number): number;

declare function IsVehicleAttachedToCargobob(cargobob: number, vehicleAttached: number): number;

/**
 * Scripts verify that towTruck is the first parameter, not the second.
 */
declare function IsVehicleAttachedToTowTruck(towTruck: number, vehicle: number): number;

/**
 * Public Function isVehicleAttachedToTrailer(vh As Vehicle) As Boolean
 * Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_ATTACHED_TO_TRAILER, vh)
 * End Function
 */
declare function IsVehicleAttachedToTrailer(vehicle: number): number;

declare function IsVehicleBumperBrokenOff(vehicle: number, front: boolean): number;

/**
 * Appears to return true if the vehicle has any damage, including cosmetically.
 */
declare function IsVehicleDamaged(vehicle: number): number;

/**
 * doorID starts at 0, not seeming to skip any numbers. Four door vehicles intuitively range from 0 to 3.
 */
declare function IsVehicleDoorDamaged(veh: number, doorID: number): number;

/**
 * doorIndex:
 * 0 = Front Left Door
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Trunk2
 */
declare function IsVehicleDoorFullyOpen(vehicle: number, doorIndex: number): number;

/**
 * p1 is always 0 in the scripts.
 * p1 = check if vehicle is on fire
 */
declare function IsVehicleDriveable(vehicle: number, isOnFireCheck: boolean): number;

declare function IsVehicleEngineStarting(vehicle: number): number;

declare function IsVehicleExtraTurnedOn(vehicle: number, extraId: number): number;

declare function IsVehicleHighDetail(vehicle: number): number;

/**
 * Returns whether the specified vehicle is currently in a burnout.
 * vb.net
 * Public Function isVehicleInBurnout(vh As Vehicle) As Boolean
 * Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_IN_BURNOUT, vh)
 * End Function
 */
declare function IsVehicleInBurnout(vehicle: number): number;

/**
 * garageName example "Michael - Beverly Hills"
 * For a full list, see here: pastebin.com/73VfwsmS
 */
declare function IsVehicleInGarageArea(garageName: string, vehicle: number): number;

declare function IsVehicleInteriorLightOn(vehicle: number): number;

/**
 * Returns whether or not the vehicle has a CVehicleStreamRequestGfx that's trying to load mods.
 * True if it isn't loading mods, false if it is.
 */
declare function IsVehicleModLoadDone(vehicle: number): number;
/**
 * Returns whether or not the vehicle has a CVehicleStreamRequestGfx that's trying to load mods.
 * True if it isn't loading mods, false if it is.
 */
declare function N_0x9a83f5f9963775ef(vehicle: number): number;

declare function IsVehicleModel(vehicle: number, model: string | number): number;

declare function IsVehicleNeedsToBeHotwired(vehicle: number): number;

/**
 * indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 */
declare function IsVehicleNeonLightEnabled(vehicle: number, index: number): number;

/**
 * Returns true if the id is non zero.
 */
declare function IsVehicleNodeIdValid(vehicleNodeId: number): number;

/**
 * Public Function isVehicleOnAllWheels(vh As Vehicle) As Boolean
 * Return Native.Function.Call(Of Boolean)(Hash.IS_VEHICLE_ON_ALL_WHEELS, vh)
 * End Function
 */
declare function IsVehicleOnAllWheels(vehicle: number): number;

declare function IsVehiclePreviouslyOwnedByPlayer(vehicle: number): number;

declare function IsVehicleRadioLoud(vehicle: number): number;

/**
 * Possibly: Returns whether the searchlight (found on police vehicles) is toggled on.
 */
declare function IsVehicleSearchlightOn(vehicle: number): number;

/**
 * Has an additional BOOL parameter since version [???].
 * Check if a vehicle seat is free.
 * -1 being the driver seat.
 * Use GET_VEHICLE_MAX_NUMBER_OF_PASSENGERS(vehicle) - 1 for last seat index.
 */
declare function IsVehicleSeatFree(vehicle: number, seatIndex: number): number;

/**
 * Checks some flag in the vehicle's model. If this function returns false, mod shops will not allow respray. it checks for FLAG_NO_RESPRAY
 */
declare function IsVehicleShopResprayAllowed(vehicle: number): number;
/**
 * Checks some flag in the vehicle's model. If this function returns false, mod shops will not allow respray. it checks for FLAG_NO_RESPRAY
 */
declare function N_0x8d474c8faeff6cde(vehicle: number): number;

declare function IsVehicleSirenOn(vehicle: number): number;

declare function IsVehicleSirenSoundOn(vehicle: number): number;
declare function N_0xb5cc40fbcb586380(vehicle: number): number;

declare function IsVehicleStolen(vehicle: number): number;

/**
 * Returns true if the vehicle's current speed is less than, or equal to 0.0025f.
 * For some vehicles it returns true if the current speed is &lt;= 0.00039999999.
 */
declare function IsVehicleStopped(vehicle: number): number;

/**
 * is this for red lights only?  more testing required.
 */
declare function IsVehicleStoppedAtTrafficLights(vehicle: number): number;

declare function IsVehicleStuckOnRoof(vehicle: number): number;

/**
 * p1 can be anywhere from 0 to 3 in the scripts. p2 is generally somewhere in the 1000 to 10000 range.
 */
declare function IsVehicleStuckTimerUp(vehicle: number, p1: number, p2: number): number;

/**
 * wheelID used for 4 wheelers seem to be (0, 1, 4, 5)
 * completely - is to check if tire completely gone from rim.
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 */
declare function IsVehicleTyreBurst(vehicle: number, wheelID: number, completely: boolean): number;

/**
 * must be called after TRACK_VEHICLE_VISIBILITY
 * it's not instant so probabilly must pass an 'update' to see correct result.
 */
declare function IsVehicleVisible(vehicle: number): number;

declare function IsVehicleWanted(vehicle: number): number;

declare function IsVehicleWindowIntact(vehicle: number, windowIndex: number): number;

declare function IsWarningMessageActive(): number;
declare function IsMedicalDisabled(): number;

declare function IsWaypointActive(): number;

declare function IsWaypointPlaybackGoingOnForPed(p0: number): number;

declare function IsWaypointPlaybackGoingOnForVehicle(p0: number): number;

declare function IsWeaponValid(weaponHash: string | number): number;

/**
 * Gets whether the world point the calling script is registered to is within desired range of the player.
 */
declare function IsWorldPointWithinBrainActivationRange(): number;

/**
 * XBOX 360
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function IsXbox360Version(): number;

/**
 * When I called this with what the script was doing, which was -190f for yaw pitch and roll, all my car did was jitter a little. I also tried 0 and 190f. I altered the p1 variable between TRUE and FALSE and didn't see a difference.
 * This might have something to do with the physbox of the vehicle, but I'm not sure.
 */
declare function JitterVehicle(vehicle: number, p1: boolean, yaw: number, pitch: number, roll: number): void;

/**
 * hash collision
 */
declare function KeyHudColour(p0: boolean, p1: number): void;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function KnockOffPedProp(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

declare function KnockPedOffVehicle(ped: number): void;

declare function Leaderboards2ReadByHandle(): [number, number, number];

declare function Leaderboards2ReadByRadius(p1: number): [number, number, number];

declare function Leaderboards2ReadByRank(p1: number, p2: number): [number, number];

declare function Leaderboards2ReadByRow(p2: number, p4: number, p6: number): [number, number, number, number, number];

declare function Leaderboards2ReadByScoreFloat(p1: number, p2: number): [number, number];

declare function Leaderboards2ReadByScoreInt(p1: number, p2: number): [number, number];

declare function Leaderboards2ReadFriendsByRow(p2: number, p3: boolean, p4: number, p5: number): [number, number, number];

declare function Leaderboards2WriteData(p0: number): number;

declare function LeaderboardsCacheDataRow(p0: number): number;

declare function LeaderboardsClearCacheData(): void;

declare function LeaderboardsGetCacheDataRow(p0: number, p1: number, p2: number): number;

declare function LeaderboardsGetCacheExists(p0: number): number;

declare function LeaderboardsGetCacheTime(p0: number): number;

declare function LeaderboardsGetColumnId(p0: number, p1: number, p2: number): number;

declare function LeaderboardsGetColumnType(p0: number, p1: number, p2: number): number;

declare function LeaderboardsGetNumberOfColumns(p0: number, p1: number): number;

declare function LeaderboardsReadClear(p0: number, p1: number, p2: number): number;

declare function LeaderboardsReadClearAll(): number;

declare function LeaderboardsReadPending(p0: number, p1: number, p2: number): number;

declare function LeaderboardsReadSuccessful(p0: number, p1: number, p2: number): number;

declare function LinkNamedRendertarget(hash: string | number): void;

declare function LoadAllObjectsNow(): void;

/**
 * Loads all path nodes.
 * If keepInMemory is true, all path nodes will be loaded and be kept in memory; otherwise, all path nodes will be loaded, but unloaded as the game sees fit.
 */
declare function LoadAllPathNodes(keepInMemory: boolean): number;

/**
 * Load interior
 */
declare function LoadInterior(interiorID: number): void;
/**
 * Load interior
 */
declare function N_0x2ca429c029ccf247(interiorID: number): void;

declare function LoadMovieMeshSet(movieMeshSetName: string): number;

/**
 * This loads the GTA:O dlc map parts (high end garages, apartments).
 * Works in singleplayer.
 * In order to use GTA:O heist IPL's you have to call this native with the following params: _9BAE5AD2508DF078(1);
 * console hash: 0xC65586A9
 */
declare function LoadMpDlcMaps(): void;

/**
 * Reads the contents of a text file in a specified resource.
 * If executed on the client, this file has to be included in `files` in the resource manifest.
 * Example: `local data = LoadResourceFile("devtools", "data.json")`
 * @param resourceName The resource name.
 * @param fileName The file in the resource.
 * @return The file contents
 */
declare function LoadResourceFile(resourceName: string, fileName: string): string;

/**
 * Rope presets can be found in the gamefiles. One example is "ropeFamily3", it is NOT a hash but rather a string.
 */
declare function LoadRopeData(rope: number, rope_preset: string): number;

declare function LoadScene(x: number, y: number, z: number): void;

/**
 * Unloads GROUP_MAP (GTAO/MP) DLC data and loads GROUP_MAP_SP DLC. Neither are loaded by default, 0888C3502DBBEEF5 is a cognate to this function and loads MP DLC (and unloads SP DLC by extension).
 * The original (and wrong) definition is below:
 * This unload the GTA:O DLC map parts (like high end garages/apartments).
 * Works in singleplayer.
 * console hash: 0x8BF60FC3
 */
declare function LoadSpDlcMaps(): void;

/**
 * Example:
 * AUDIO::LOAD_STREAM("CAR_STEAL_1_PASSBY", "CAR_STEAL_1_SOUNDSET");
 * All found occurrences in the b678d decompiled scripts: pastebin.com/3rma6w5w
 * Stream names often ends with "_MASTER", "_SMALL" or "_STREAM". Also "_IN", "_OUT" and numbers.
 * soundSet is often set to 0 in the scripts. These are common to end the soundSets: "_SOUNDS", "_SOUNDSET" and numbers.
 */
declare function LoadStream(streamName: string, soundSet: string): number;

/**
 * Example:
 * AUDIO::LOAD_STREAM_WITH_START_OFFSET("STASH_TOXIN_STREAM", 2400, "FBI_05_SOUNDS");
 * Only called a few times in the scripts.
 */
declare function LoadStreamWithStartOffset(streamName: string, startOffset: number, soundSet: string): number;

declare function LoadTvChannel(tvChannel: string | number): number;
declare function N_0x0ad973ca1e077b60(tvChannel: string | number): number;

/**
 * Loads a User-Generated Content (UGC) file. These files can be found in "[GTA5]\data\ugc" and "[GTA5]\common\patch\ugc". They seem to follow a naming convention, most likely of "[name]_[part].ugc". See example below for usage.
 * Returns whether or not the file was successfully loaded.
 * Example:
 * DATAFILE::_LOAD_UGC_FILE("RockstarPlaylists") // loads "rockstarplaylists_00.ugc"
 */
declare function LoadUgcFile(filename: string): number;

/**
 * Locks the minimap to the specified angle in integer degrees.
 * angle: The angle in whole degrees. If less than 0 or greater than 360, unlocks the angle.
 */
declare function LockMinimapAngle(angle: number): void;

/**
 * Locks the minimap to the specified world position.
 */
declare function LockMinimapPosition(x: number, y: number): void;

/**
 * Not present in retail version of the game, actual definiton seems to be
 * _LOG_DEBUG_INFO(char* category, char* debugText);
 */
declare function LogDebugInfo(p0: string): void;
/**
 * Not present in retail version of the game, actual definiton seems to be
 * _LOG_DEBUG_INFO(char* category, char* debugText);
 */
declare function N_0x2162c446dfdf38fd(p0: string): void;

declare function LowerConvertibleRoof(vehicle: number, instantlyLower: boolean): void;

declare function MakePedReload(ped: number): number;

/**
 * is this like setting is as no longer needed?
 */
declare function MarkObjectForDeletion(object: number): void;

declare function MaxRadioStationIndex(): number;

/**
 * Sets the water height for a given position and radius.
 */
declare function ModifyWater(x: number, y: number, radius: number, height: number): void;

/**
 * For move the finger of player, the value of int goes 1 at 5.
 */
declare function MoveFinger(direction: number): void;

declare function MoveVehicleDecals(p0: number, p1: number): void;

/**
 * 2 matches in 1 script
 * Used in multiplayer scripts?
 */
declare function N_0x0032a6dba562c518(): void;

/**
 * GET_VEHICLE_CLASS_MAX_*
 */
declare function N_0x00c09f246abedd82(vehicleClass: number): number;

/**
 * if ((NETWORK::_597F8DBA9B206FC7() &gt; 0) &amp;&amp; DATAFILE::_01095C95CD46B624(0)) {
 * v_10 = DATAFILE::_GET_ROOT_OBJECT();
 * v_11 = DATAFILE::_OBJECT_VALUE_GET_INTEGER(v_10, "pt");
 * sub_20202(2, v_11);
 * a_0 += 1;
 * } else {
 * a_0 += 1;
 * }
 */
declare function N_0x01095c95cd46b624(p0: number): number;

declare function N_0x011883f41211432a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x013e5cfc38cd5387(p0: number): [number, number, number];

declare function N_0x0150b6ff25a9e2e5(): void;

declare function N_0x01708e8dd3ff8c65(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x017568a8182d98a6(p0: number): number;

/**
 * native only found once in appinternet.c4
 */
declare function N_0x01a358d9128b7a86(): number;

declare function N_0x01abce5e7cbda196(): number;

declare function N_0x01bb4d577d38bd9e(p0: number, p1: number): void;

declare function N_0x0218ba067d249dea(): void;

/**
 * some camera effect that is (also) used in the drunk-cheat, and turned off (by setting it to 0.0) along with the shaking effects once the drunk cheat is disabled. Possibly a cinematic or script-cam version of _0x487A82C650EB7799
 */
declare function N_0x0225778816fdc28c(p0: number): void;

declare function N_0x02369d5c8a51fdcf(p0: boolean): void;

declare function N_0x02398b627547189c(p0: number, p1: boolean): void;

declare function N_0x024a60deb0ea69f0(p0: number, player: number, p2: number, p3: number): number;

declare function N_0x02a8bec6fd9af660(p1: number): [number, number];

declare function N_0x02ac28f3a01fa04a(p0: number): number;

declare function N_0x02ada21ea2f6918f(): number;

/**
 * Found in the scripts:
 * GAMEPLAY::_02DEAAC8F8EA7FE7("");
 */
declare function N_0x02deaac8f8ea7fe7(p0: string): void;

declare function N_0x02e93c796abd3a97(p0: boolean): void;

/**
 * 2 calls in the b617d scripts. This line is called 2 times:
 * AUDIO::_031ACB6ABA18C729("RADIO_16_SILVERLAKE", "MIRRORPARK_LOCKED");
 * Note: Another name for RADIO_16_SILVERLAKE is RADIO MIRROR PARK
 */
declare function N_0x031acb6aba18c729(radioStation: string, p1: string): void;

declare function N_0x03300b57fcac6ddb(p0: boolean): void;

declare function N_0x0378c08504160d0d(p0: number): number;

declare function N_0x0395cb47b022e62c(p0: number): number;

declare function N_0x03c27e13b42a0e82(doorHash: string | number, p1: number, p2: boolean, p3: boolean): void;

declare function N_0x03ea03af85a85cb7(ped: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean, p5: boolean, p6: boolean, p7: boolean, p8: number): number;

declare function N_0x03f1a106bda7dd3e(): void;

declare function N_0x03fc694ae06c5a20(): void;

/**
 * Found in the b617d scripts, duplicates removed:
 * AUDIO::_044DBAD7A7FA2BE5("V_CARSHOWROOM_PS_WINDOW_UNBROKEN", "V_CARSHOWROOM_PS_WINDOW_BROKEN");
 * AUDIO::_044DBAD7A7FA2BE5("V_CIA_PS_WINDOW_UNBROKEN", "V_CIA_PS_WINDOW_BROKEN");
 * AUDIO::_044DBAD7A7FA2BE5("V_DLC_HEIST_APARTMENT_DOOR_CLOSED", "V_DLC_HEIST_APARTMENT_DOOR_OPEN");
 * AUDIO::_044DBAD7A7FA2BE5("V_FINALEBANK_PS_VAULT_INTACT", "V_FINALEBANK_PS_VAULT_BLOWN");
 * AUDIO::_044DBAD7A7FA2BE5("V_MICHAEL_PS_BATHROOM_WITH_WINDOW", "V_MICHAEL_PS_BATHROOM_WITHOUT_WINDOW");
 */
declare function N_0x044dbad7a7fa2be5(p0: string, p1: string): void;

declare function N_0x04655f9d075d0ae5(p0: boolean): void;

declare function N_0x047cbed6f6f8b63c(): void;

/**
 * p0 was always 0xAE2602A3.
 */
declare function N_0x052991e59076e4e4(p0: string | number, p1: number): number;

declare function N_0x06087579e7aa85a9(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x061cb768363d6424(p0: number, p1: boolean): void;

declare function N_0x0626a247d2405330(): number;

declare function N_0x062d5ead4da2fa6a(): void;

declare function N_0x063ae2b2cc273588(p0: number, p1: boolean): void;

declare function N_0x06462a961e94b67c(): void;

declare function N_0x06582aff74894c75(p0: number, p1: boolean): void;

declare function N_0x06a320535f5f0248(p0: number): void;

declare function N_0x06a3524161c502ba(p0: number): void;

declare function N_0x06c0023bed16dd6b(p0: number, p1: boolean): void;

declare function N_0x06ee9048fd080382(p0: boolean): void;

declare function N_0x06f761ea47c1d3ed(p0: boolean): void;

declare function N_0x075f1d57402c93ba(): number;

declare function N_0x07c313f94746702c(p0: number): number;

declare function N_0x07c61676e5bb52cd(p0: number): number;

declare function N_0x07dd29d5e22763f1(p0: number): number;

declare function N_0x07fb139b592fa687(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x0811381ef5062fec(p0: number): void;

declare function N_0x0923dbf87dff735e(x: number, y: number, z: number): void;

declare function N_0x098760c7461724cd(): void;

declare function N_0x098ab65b9ed9a9ec(p1: number, p2: number): [number, number];

declare function N_0x09c0403ed9a751c2(p0: number): number;

declare function N_0x0a123435a26c36cd(): void;

declare function N_0x0a436b8643716d14(): void;

declare function N_0x0a46af8a78dc5e0a(): void;

declare function N_0x0a60017f841a54f2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0a6a279f3aa4fd70(vehicle: number, p1: boolean): void;

declare function N_0x0a6d923dffc9bd89(): number;

declare function N_0x0a9f2a468b328e74(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x0abc54de641dc0fc(p0: number): number;

declare function N_0x0ad9710cee2f590f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x0ad9e8f87ff7c16f(p0: number, p1: boolean): void;

declare function N_0x0ae1f1653b554ab9(p0: number): number;

declare function N_0x0ae73d8df3a762b2(p0: boolean): void;

/**
 * Appear to have something to do with the clipping at close range.
 */
declare function N_0x0af7b437918103b3(p0: number): void;

/**
 * calling this each frame, it stops the player from receiving a weapon via the weapon wheel.
 */
declare function N_0x0afc4af510774b47(): void;

declare function N_0x0afce529f69b21ff(): number;

declare function N_0x0b203b4afde53a4f(p2: boolean): [number, number, number];

declare function N_0x0b40ed49d7d6ff84(): void;

declare function N_0x0b568201dd99f0eb(p0: boolean): void;

declare function N_0x0b919e1fb47cc4e0(p0: number): void;

declare function N_0x0bc3144deb678666(modelHash: string | number): number;

declare function N_0x0bca1d2c47b0d269(p0: number, p1: number, p2: number): void;

declare function N_0x0bf3b3bd47d79c08(p0: number, p1: number): void;

declare function N_0x0c0c4e81e1ac60a0(): number;

declare function N_0x0c15b0e443b2349d(): number;

declare function N_0x0c1f7d49c39d2289(): number;

declare function N_0x0c4bbf625ca98c4e(ped: number, p1: boolean): void;

declare function N_0x0c5a80a9e096d529(p0: number, p2: number, p3: number, p4: number, p5: number): [number, number];

/**
 * x360 Hash: 0x4AF0ADF5
 */
declare function N_0x0c978fda19692c2c(p0: boolean, p1: boolean): void;

declare function N_0x0cd9ab83489430ea(p0: boolean): number;

declare function N_0x0cdda42f9e360ca6(vehicle: number, p1: boolean): void;

declare function N_0x0cf54f20de43879c(p0: number): void;

declare function N_0x0d01d20616fc73fb(p0: number, p1: number): void;

declare function N_0x0d6ca79eeebd8ca3(): number;

declare function N_0x0d77a82dc2d0da59(): [number, number];

declare function N_0x0dbd5d7e3c5bec3b(): number;

declare function N_0x0e4299c549f0d1f1(p0: boolean): void;

declare function N_0x0ede326d47cd0f3e(ped: number, player: number): number;

declare function N_0x0f3b4d4e43177236(p0: number, p1: boolean): void;

declare function N_0x0f70731baccfbb96(): number;

declare function N_0x0f73393bac7e6730(): [number, number, number];

declare function N_0x0fb82563989cf4fb(p0: number, p1: number, p2: number, p3: number): void;

/**
 * SET_PLAYERS_*
 */
declare function N_0x0fde9dbfc0a6bc65(p0: number): void;

/**
 * p0 is always false in scripts.
 */
declare function N_0x0ff2862b61a58af9(p0: boolean): void;

declare function N_0x1033371fc8e842a7(p0: number): number;

declare function N_0x10655fab9915623d(p0: number, p1: number): void;

declare function N_0x1072f115dab0717e(p0: boolean, p1: boolean): void;

declare function N_0x108be26959a9d9bb(p0: boolean): void;

declare function N_0x1093408b4b9d1146(p0: number, p1: number): void;

/**
 * Not sure what this function does, but it's related to the audio of the local player's vehicle (Considering the surrounding natives, it's probably radio related).
 */
declare function N_0x109697e2ffbac8a1(): number;

declare function N_0x10bd227a753b0d84(): number;

/**
 * In agency_heist3b.c4, its like this 90% of the time:
 * PED::_110F526AB784111F(ped, 0.099);
 * PED::SET_PED_ENVEFF_SCALE(ped, 1.0);
 * PED::_D69411AA0CEBF9E9(ped, 87, 81, 68);
 * PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);
 * and its like this 10% of the time:
 * PED::_110F526AB784111F(ped, 0.2);
 * PED::SET_PED_ENVEFF_SCALE(ped, 0.65);
 * PED::_D69411AA0CEBF9E9(ped, 74, 69, 60);
 * PED::SET_ENABLE_PED_ENVEFF_SCALE(ped, 1);
 */
declare function N_0x110f526ab784111f(ped: number, p1: number): void;

declare function N_0x1121bfa1a1a522a8(): number;

declare function N_0x113e6e3e50e286b0(p0: number): void;

declare function N_0x1153fa02a659051c(): void;

declare function N_0x116fb94dc4b79f17(p0: string): void;

declare function N_0x1171a97a3d3981b6(p2: number, p3: number): [number, number, number];

/**
 * SET_TEXT_??? - Used in golf and golf_mp
 */
declare function N_0x1185a8087587322c(p0: boolean): void;

/**
 * Found in the scripts:
 * GAMEPLAY::_11B56FBBF7224868("CONTRAILS");
 */
declare function N_0x11b56fbbf7224868(p0: string): void;

declare function N_0x11d1e53a726891fe(p0: number): number;

declare function N_0x11fa5d3479c7dd47(p0: number): void;

declare function N_0x11ff1c80276097ed(p0: number, p1: number, p2: number): void;

declare function N_0x120364de2845daf8(p1: number): [number, number];

declare function N_0x1216e0bfa72cc703(p0: number, p1: number): void;

declare function N_0x121fb4dddc2d5291(p0: number, p1: number, p2: number, p3: number): void;

/**
 * p0 is usually 0. sometimes 2. Not sure what this does.
 */
declare function N_0x12561fcbb62d5b9c(p0: number): void;

declare function N_0x1280804f7cfd2d6c(p0: number): void;

declare function N_0x129466ed55140f8d(ped: number, toggle: boolean): void;

/**
 * Only used in the golf and golf_mp script
 */
declare function N_0x12995f2e53ffa601(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

declare function N_0x12b6281b6c6706c0(p0: boolean): number;

/**
 * Hardcoded to only work in multiplayer.
 */
declare function N_0x12ded8ca53d47ea5(p0: number): void;

declare function N_0x1327e2fe9746baee(p0: number): number;

declare function N_0x13518ff1c6b28938(p0: number): number;

/**
 * Returns some kind of banned state
 */
declare function N_0x1353f87e89946207(): number;

declare function N_0x135f9b7b7add2185(p0: number): number;

declare function N_0x13b350b8ad0eee10(): void;

declare function N_0x13c4b962653a5280(): number;

declare function N_0x140e6a44870a11ce(): void;

declare function N_0x14590ddbedb1ec85(ped: number): number;

declare function N_0x14621bb1df14e2b2(): void;

declare function N_0x14832bf2aba53fc5(): number;

declare function N_0x14922ed3e38761f0(): number;

declare function N_0x149aee66f0cb3a99(p0: number, p1: number): void;

declare function N_0x14c9fdcc41f81f63(p0: boolean): void;

declare function N_0x14d29bb12d47f68c(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x14e0b2d1ad1044e0(): [number, number, number, number];

declare function N_0x14fc5833464340a8(): void;

declare function N_0x152d90e4c1b4738a(): [number, number, number];

declare function N_0x158ec424f35ec469(p1: boolean): [number, number, number];

declare function N_0x15e33297c3e8dc60(p0: number): void;

declare function N_0x15e69e2802c24b8d(p0: number): void;

declare function N_0x15ff52b809db2353(p0: number): number;

declare function N_0x1600fd8cf72ebc12(p0: number): void;

declare function N_0x160aa1b32f6139b8(doorHash: string | number): number;

declare function N_0x1612c45f9e3e0d44(): void;

declare function N_0x162c23ca83ed0a62(p0: number): number;

/**
 * gets some camera far clip
 */
declare function N_0x162f9d995753dc19(): number;

/**
 * only documented params
 * dont know what this does.... To Be Continued...
 */
declare function N_0x163f8b586bc95f2a(coords: number, radius: number, modelHash: string | number, x: number, y: number, z: number, p7: number): [number, number[]];

/**
 * 3 calls in the b617d scripts, removed duplicate.
 * AUDIO::_1654F24A88A8E3FE("RADIO_16_SILVERLAKE");
 * AUDIO::_1654F24A88A8E3FE("RADIO_01_CLASS_ROCK");
 */
declare function N_0x1654f24a88a8e3fe(radioStation: string): void;

declare function N_0x1670f8d05056f257(p0: number): number;

declare function N_0x16a304e6cb2bfab9(r: number, g: number, b: number, a: number): void;

/**
 * only documented to be continued...
 */
declare function N_0x16b5e274bde402f8(vehicle: number, trailer: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

declare function N_0x16da8172459434aa(): number;

declare function N_0x16f46fb18c8009e4(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x170910093218c8b9(p0: number): number;

/**
 * Related to displaying cash on the HUD
 * Always called before UI::_SET_SINGLEPLAYER_HUD_CASH in decompiled scripts
 */
declare function N_0x170f541e1cadd1de(p0: boolean): void;

declare function N_0x171df6a0c07fb3dc(p0: number, p1: number): number;

declare function N_0x172f75b6ee2233ba(): number;

declare function N_0x17440aa15d1d3739(): void;

declare function N_0x1761dc5d8471cbaa(p0: number, player: number, p2: number): number;

declare function N_0x17ad8c9706bdd88a(p0: number): void;

declare function N_0x17df68d720aa77f8(p0: number): number;

declare function N_0x17e0198b3882c2cb(): void;

declare function N_0x17fca7199a530203(): number;

declare function N_0x182f266c2d9e2beb(vehicle: number, p1: number): void;

declare function N_0x18eb48cfc41f2ea0(p0: number, p1: number): void;

declare function N_0x190428512b240692(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: boolean): void;

declare function N_0x192547247864dfdd(vehicle: number, p1: boolean): void;

declare function N_0x19853b5b17d77bca(p0: number, p1: number): number;

declare function N_0x1989c6e6f67e76a8(): [number, number, number, number];

declare function N_0x19af7ed9b9d23058(): void;

declare function N_0x19bfed045c647c49(p0: number): number;

/**
 * Seems to return the current type of view
 * example: // checks if you're currently in first person
 * if ((CAM::_EE778F8C7E1142E2(CAM::_19CAFA3C87F7C2FF()) == 4) &amp;&amp; (!__463_$28ED382849B17AFC())) {
 * UI::_FDEC055AB549E328();
 * UI::_SET_NOTIFICATION_TEXT_ENTRY("REC_FEED_WAR");
 * l_CE[0 -- [[1]] ] = UI::_DRAW_NOTIFICATION(0, 1);
 * }
 */
declare function N_0x19cafa3c87f7c2ff(): number;

/**
 * SET_ENTITY_*
 */
declare function N_0x1a092bb0c3808b96(entity: number, p1: boolean): void;

/**
 * Only appears in lamar1 script.
 */
declare function N_0x1a330d297aac6bc1(ped: number, p1: number): void;

declare function N_0x1a78ad3d8240536f(vehicle: number, p1: boolean): void;

declare function N_0x1a8e2c8b9cf4549c(): [number, number];

declare function N_0x1aa8a837d2169d94(vehicle: number, p1: boolean): void;

declare function N_0x1accfba3d8dab2ee(p0: number, p1: number): number;

/**
 * unk_0xCEA55F4C(uVar3, "AM_ROLLERCOASTER", -1))
 * Probably has to do with seeing if they are riding the roller coaster or ferris wheel
 * NETWORK_IS_PLAYER_???
 */
declare function N_0x1ad5b71586b94820(p0: number, p2: number): [number, number];

declare function N_0x1b0b4aeed5b9b41c(p0: number): void;

declare function N_0x1b2366c3f2a5c8df(): number;

/**
 * Console Hash: 0x76A9FEB6
 */
declare function N_0x1b857666604b1a74(p0: boolean): void;

declare function N_0x1bb299305c3e8c13(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x1bbc135a4d25edde(p0: boolean): void;

declare function N_0x1c073274e065c6d2(p0: number, p1: boolean): void;

/**
 * p0 = int (?)
 */
declare function N_0x1c186837d0619335(p0: number): number;

/**
 * NETWORK_CAN_R??? or NETWORK_CAN_S???
 */
declare function N_0x1c2473301b1c66ba(): number;

declare function N_0x1c4fc5752bcd8e48(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number): void;

declare function N_0x1cae5d2e3f9a07f0(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x1cba05ae7bd7ee05(p0: number): void;

/**
 * what does this do?
 * you'RE mother
 */
declare function N_0x1cf38d529d7441d9(vehicle: number, toggle: boolean): void;

declare function N_0x1d4446a62d35b0d0(p0: number, p1: number): number;

declare function N_0x1d4dc17c38feaff0(): number;

declare function N_0x1d610eb0fea716d9(p0: number): number;

/**
 * Related to Hao races.
 */
declare function N_0x1d97d1e3a70a649f(vehicle: number, p1: boolean): void;

declare function N_0x1dd2139a9a20dce8(): number;

declare function N_0x1de0f5f50d723caa(): [number, number, number, number];

declare function N_0x1e77fa7a62ee6c4c(p0: number): number;

declare function N_0x1e9057a74fd73e23(): void;

declare function N_0x1eac5f91bcbc5073(p0: boolean): void;

/**
 * Unsure about the use of this native but here's an example:
 * void sub_8709() {
 * GAMEPLAY::_1EAE0A6E978894A2(0, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(1, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(2, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(3, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(4, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(5, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(6, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(7, 1);
 * GAMEPLAY::_1EAE0A6E978894A2(8, 1);
 * }
 * So it appears that p0 ranges from 0 to 8.
 * ENABLE_DISPATCH_SERVICE, seems to have a similar layout.
 */
declare function N_0x1eae0a6e978894a2(p0: number, p1: boolean): void;

declare function N_0x1eae6dd17b7a5efa(p0: number): void;

declare function N_0x1ee7d8df4425f053(p0: number): void;

declare function N_0x1f1e9682483697c7(p0: number, p1: number): number;

declare function N_0x1f2300cb7fa7b7f6(): number;

declare function N_0x1f2e4e06dea8992b(p0: number, p1: boolean): void;

declare function N_0x1f3f018bc3afa77c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function N_0x1f9fb66f3a3842d2(vehicle: number, p1: boolean): void;

declare function N_0x1fc289a0c3ff470f(p0: boolean): number;

declare function N_0x1ff6bf9a63e5757f(): void;

declare function N_0x2016c603d6b8987c(p0: number, p1: boolean): void;

declare function N_0x206bc5dc9d1ac70a(vehicle: number, p1: boolean): void;

declare function N_0x20746f7b1032a3c7(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

/**
 * -This function appears to be deprecated/ unused. Tracing the call internally leads to a _nullsub -
 * first one seems to be a string of a mission name, second one seems to be a bool/toggle
 * p1 was always 0.
 */
declare function N_0x208784099002bc30(missionNameLabel: string, p1: number): void;

declare function N_0x20c6c7e4eb082a7f(p0: boolean): void;

declare function N_0x20fe7fdfeead38c0(): void;

declare function N_0x2107a3773771186d(): number;

declare function N_0x21115bcd6e44656a(p0: number, p1: boolean): void;

declare function N_0x211c4ef450086857(): void;

/**
 * example
 * if (UI::IS_HELP_MESSAGE_BEING_DISPLAYED()&amp;&amp;(!UI::_214CD562A939246A())) {
 * return 0;
 * }
 */
declare function N_0x214cd562a939246a(): number;

/**
 * Only called once inside main_persitant with the parameters, 0
 */
declare function N_0x21973bbf8d17edfa(p0: number, p1: number): void;

declare function N_0x21c235bc64831e5a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): number[];

declare function N_0x21d04d7bc538c146(p0: number): number;

/**
 * From b617 scripts:
 * CAM::_21E253A7F8DA5DFB("DINGHY");
 * CAM::_21E253A7F8DA5DFB("ISSI2");
 * CAM::_21E253A7F8DA5DFB("SPEEDO");
 */
declare function N_0x21e253a7f8da5dfb(vehicleName: string): void;

/**
 * SET_TV_???
 */
declare function N_0x2201c576facaebe8(p0: number, p1: string, p2: number): void;

/**
 * Function.Call(Hash._0x2208438012482A1A, ped, 0, 0);
 * This makes the ped have faster animations
 */
declare function N_0x2208438012482a1a(ped: number, p1: boolean, p2: boolean): void;

declare function N_0x225798743970412b(p0: number): number;

/**
 * Probably the opposite of  0x80E4A6EDDB0BE8D9 / LOAD_ALL_PATH_NODES
 */
declare function N_0x228e5c6ad4d74bfd(p0: boolean): void;

declare function N_0x22a249a53034450a(p0: boolean): void;

declare function N_0x22da66936e0fff37(p0: number): number;

declare function N_0x2302c0264ea58d31(): void;

declare function N_0x2311dd7159f00582(vehicle: number, p1: boolean): void;

declare function N_0x23227df0b2115469(): void;

declare function N_0x23789e777d14ce44(): number;

declare function N_0x237d5336a9a54108(p0: number): number;

declare function N_0x23b59d8912f94246(): void;

declare function N_0x23ba6b0c2ad7b0d3(p0: boolean): void;

declare function N_0x23f09eadc01449d6(p0: boolean): number;

/**
 * Console Hash: 0x0AF83036
 * Only used once in scripts, in maintransition.
 * maintransition.c4, line ~82432:
 * if (PED::_7350823473013C02(PLAYER::PLAYER_PED_ID()) &amp;&amp; (DECORATOR::_241FCA5B1AA14F75() == 0)) {
 * g_2542A5 = a_1; // 'g_2542A5' used in 'building_controller.ysc' for IPL stuff?
 * return 1;
 * }
 * Likely used solely for the players ped. The function it's in seems to only be used for initialization/quitting. Called among natives to discard scaleforms, disable frontend, fading in/out, etc. Neighboring strings to some calls include "HUD_JOINING", "HUD_QUITTING".
 */
declare function N_0x241fca5b1aa14f75(): number;

/**
 * p0 is int or bool
 */
declare function N_0x2432784aca090da4(p0: number): number;

declare function N_0x24409fc4c55cb22d(p0: number): number;

declare function N_0x247acbc4abbc9d1c(p0: boolean): void;

declare function N_0x2485d34e50a22e84(p0: number, p1: number, p2: number): void;

declare function N_0x24a49beaf468dc90(p0: number, p2: number, p3: number, p4: number): [number, number];

declare function N_0x24e4e51fc16305f9(): number;

declare function N_0x25361a96e0f7e419(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x25367de49d64cf16(vehicle: number, p1: boolean): void;

declare function N_0x25615540d894b814(p0: number, p1: boolean): void;

declare function N_0x2587a48bc88dfadf(p0: boolean): void;

declare function N_0x25b99872d588a101(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x25d990f8e0e3f13c(): void;

declare function N_0x25f87b30c382fca7(): void;

declare function N_0x25fc3e33a31ad0c9(p0: boolean): void;

declare function N_0x260ee4fdbdf4db01(p0: number): number;

declare function N_0x261e97ad7bcf3d40(p0: boolean): void;

declare function N_0x2632482fd6b9ab87(): void;

declare function N_0x265635150fb0d82e(): void;

declare function N_0x267c78c60e806b9a(p0: number, p1: boolean): void;

declare function N_0x26903d9cd1175f2c(p0: number, p1: number): number;

declare function N_0x26af0e8e30bd2a2c(ped: number): number;

/**
 * STATS::0x343B27E2(0);
 * STATS::0x343B27E2(1);
 * STATS::0x343B27E2(2);
 * STATS::0x343B27E2(3);
 * STATS::0x343B27E2(4);
 * STATS::0x343B27E2(5);
 * STATS::0x343B27E2(6);
 * STATS::0x343B27E2(7);
 * Identical in ingamehud &amp; maintransition.
 */
declare function N_0x26d7399b9587fe89(p0: number): void;

declare function N_0x26f07dd83a5f7f98(): number;

declare function N_0x2708fc083123f9ff(): void;

declare function N_0x271017b9ba825366(p0: number, p1: boolean): void;

declare function N_0x271401846bd26e92(p0: boolean, p1: boolean): void;

declare function N_0x271c9d3aca5d6409(rope: number): number;

declare function N_0x2735233a786b1bef(ped: number, p1: number): void;

declare function N_0x274a1519dfc1094f(p1: boolean): [number, number, number];

declare function N_0x279d50de5652d935(p0: number, p1: boolean): void;

declare function N_0x27b926779deb502d(vehicle: number, p1: boolean): number;

declare function N_0x27cb772218215325(): void;

declare function N_0x27cfb1b1e078cb2d(): void;

declare function N_0x27e32866e9a5c416(p0: number): void;

declare function N_0x27feb5254759cde3(textureDict: string, p1: boolean): number;

declare function N_0x2801d0012266df07(p0: number): void;

declare function N_0x280c7e3ac7f56e90(p0: number): [number, number, number];

declare function N_0x283b6062a2c01e9b(): void;

declare function N_0x287f1f75d2803595(p0: number, p1: number): number;

declare function N_0x288df530c92dad6f(p0: number, p1: number): void;

declare function N_0x293220da1b46cebc(p0: number, p1: number, p2: boolean): void;

declare function N_0x299ef3c576773506(): number;

declare function N_0x29c24bfbed8ab8fb(p0: number, p1: number): number;

declare function N_0x2a2173e46daecd12(p0: number, p1: number): void;

declare function N_0x2a25adc48f87841f(): number;

declare function N_0x2a2a52824db96700(p0: number): void;

declare function N_0x2a56c06ebef2b0d9(cutsceneEntName: string, ped: number, modelHash: string | number): void;

declare function N_0x2a7776c709904ab0(p0: number): number;

/**
 * 2 matches across 2 scripts. Only showed in appcamera &amp; appmedia. Both were 0.
 */
declare function N_0x2a893980e96b659a(p0: number): number;

/**
 * VEHICLE::_2A8F319B392E7B3F(vehicle, 0.5);
 */
declare function N_0x2a8f319b392e7b3f(vehicle: number, p1: number): void;

/**
 * if (ENTITY::DOES_ENTITY_EXIST(l_228)) {
 * CAM::_2AED6301F67007D5(l_228);
 */
declare function N_0x2aed6301f67007d5(entity: number): void;

declare function N_0x2b3334bca57cd799(p0: number): void;

declare function N_0x2b51edbefc301339(p0: number, p1: string): number;

declare function N_0x2b5aa717a181fb4c(p0: number, p1: boolean): void;

declare function N_0x2b5e102e4a42f2bf(): number;

declare function N_0x2b626a0150e4d449(): number;

declare function N_0x2b6747faa9db9d6b(vehicle: number, p1: boolean): number;

declare function N_0x2b694afcf64e6994(ped: number, p1: boolean): void;

declare function N_0x2b69f5074c894811(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x2b949a1e6aec8f6a(): number;

declare function N_0x2be4bc731d039d5a(p0: number, p1: boolean): void;

declare function N_0x2bf66d2e7414f686(): number;

declare function N_0x2bf72ad5b41aa739(): void;

/**
 * SET_ENTITY_*
 */
declare function N_0x2c2e3dc128f44309(entity: number, p1: boolean): void;

declare function N_0x2c328af17210f009(p0: number): void;

declare function N_0x2c42340f916c5930(p0: number): number;

declare function N_0x2c4a1590abf43e8b(vehicle: number, p1: boolean): void;

declare function N_0x2c8cbfe1ea5fc631(p0: number): number;

declare function N_0x2c96cdb04fca358e(p0: number): void;

declare function N_0x2cc848a861d01493(): number;

declare function N_0x2ce544c68fb812a0(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): number;

declare function N_0x2d4259f1feb81da9(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x2d5dc831176d0114(p0: number): number;

/**
 * Needs a bit more research, but it seems to return an int.
 * "agency_heist3b.ysc", line 71836:
 * if (CONTROLS::IS_CONTROL_JUST_PRESSED(2, 201) || CONTROLS::IS_CONTROL_JUST_PRESSED(2, 237)) {
 * GRAPHICS::_PUSH_SCALEFORM_MOVIE_FUNCTION(l_46, "SET_INPUT_EVENT_SELECT");
 * l_45 = GRAPHICS::_POP_SCALEFORM_MOVIE_FUNCTION();
 * }
 * if (GRAPHICS::_0x768FF8961BA904D6(l_45)) {
 * v_13 = GRAPHICS::_0x2DE7EFA66B906036(l_45);
 * if (v_13 == 6) {
 * sub_73269(a_0);
 * }
 * }
 */
declare function N_0x2de7efa66b906036(funcData: number): number;

declare function N_0x2df9038c90ad5264(p0: number, p1: number, p2: number, p3: number, p4: number, interiorFlags: number, scale: number, duration: number): void;

declare function N_0x2e0bf682cc778d49(p0: number): number;

declare function N_0x2e22fefa0100275e(): number;

declare function N_0x2e65248609523599(p0: number, p1: number, p2: number): void;

declare function N_0x2e89990ddff670c3(p0: number, p1: number): number;

declare function N_0x2eac52b4019e2782(): number;

declare function N_0x2ed61456317b8178(): void;

/**
 * Appears to return whether the player is using the pause menu store. Can't be sure though.
 */
declare function N_0x2f057596f2bd0061(): number;

/**
 * only documented. to be continued...
 */
declare function N_0x2f09f7976c512404(xCoord: number, yCoord: number, zCoord: number, p3: number): number;

declare function N_0x2f137b508de238f2(p0: boolean): void;

declare function N_0x2f3c3d9f50681de4(p0: number, p1: boolean): void;

/**
 * Used with radios:
 * void sub_cf383(auto _a0) {
 * if ((a_0)==1) {
 * if (GAMEPLAY::IS_BIT_SET((g_240005._f1), 3)) {
 * PLAYER::_2F7CEB6520288061(0);
 * AUDIO::SET_AUDIO_FLAG("AllowRadioDuringSwitch", 0);
 * AUDIO::SET_MOBILE_PHONE_RADIO_STATE(0);
 * AUDIO::SET_AUDIO_FLAG("MobileRadioInGame", 0);
 * }
 * sub_cf3f6(1);
 * } else {
 * if (GAMEPLAY::IS_BIT_SET((g_240005._f1), 3)) {
 * PLAYER::_2F7CEB6520288061(1);
 * AUDIO::SET_AUDIO_FLAG("AllowRadioDuringSwitch", 1);
 * AUDIO::SET_MOBILE_PHONE_RADIO_STATE(1);
 * AUDIO::SET_AUDIO_FLAG("MobileRadioInGame", 1);
 * }
 * sub_cf3f6(0);
 * }
 * }
 * SET_PLAYER_S*
 */
declare function N_0x2f7ceb6520288061(p0: boolean): void;

declare function N_0x2f7f2b26dd3f18ee(p0: number, p1: number): void;

/**
 * NETWORK_IS_IN_???
 */
declare function N_0x2fc5650b0271cb57(): number;

declare function N_0x3001bef2feca3680(): number;

declare function N_0x302c91ab2d477f7e(): void;

declare function N_0x3044240d2e0fa842(): number;

declare function N_0x3054f114121c21ea(p0: number): number;

declare function N_0x308f96458b7087cc(p1: number, p2: number, p3: number, p5: boolean): [number, number, number];

declare function N_0x30a6614c1f7799b8(p0: number, p1: number, p2: number): void;

/**
 * possibly   ENABLE_VEHICLE_FOREVER_HYDRAULICS
 */
declare function N_0x30d779de7c4f6dd3(p0: number, p1: number): void;

declare function N_0x30ed88d5e0c56a37(p0: number): number;

declare function N_0x31125fd509d9043f(p0: number): void;

declare function N_0x311438a071dd9b1a(p0: number, p1: number, p2: number): void;

declare function N_0x3117d84efa60f77b(p0: number): void;

/**
 * p8 seems to always be false.
 */
declare function N_0x312342e1a4874f3f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;

declare function N_0x3133b907d8b32053(p0: number, p1: number): number;

declare function N_0x31727907b2c43c55(p0: number): void;

/**
 * From the decompiled scripts, called 61 times:
 * UI::_317EBA71D7543F52(&amp;v_13, &amp;v_13, &amp;v_3, &amp;v_3);
 */
declare function N_0x317eba71d7543f52(): [number, number, number, number];

declare function N_0x318516e02de3ece2(p0: number): void;

declare function N_0x3195f8dd0d531052(p0: number, p1: number): [number, number, number];

declare function N_0x31f924b53eaddf65(p0: boolean): void;

declare function N_0x3270f67eed31fbc1(p0: number): [number, number, number];

declare function N_0x32c7a7e8c43a1f80(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): number;

declare function N_0x32dd916f3f7c9672(p0: number): number;

declare function N_0x33506883545ac0df(vehicle: number, p1: boolean): void;

/**
 * calculates two distances
 */
declare function N_0x336511a34f2e5185(left: number, right: number): number;

declare function N_0x336b3d200ab007cb(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0x33a60d8bdd6e508c(ped: number, p1: boolean): void;

declare function N_0x33d47e85b476abcd(p0: boolean): number;

declare function N_0x33e3c6c6f2f0b506(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x33ee12743ccd6343(p0: number, p1: number, p2: number): number;

/**
 * 6,000+ calls from scripts, all with either 0 or 1 for p2, that's a boolean in my book
 * ---
 * ^ The last one is the componentId
 * iVar8 = dlc1::get_hash_name_for_component(iParam0, 8, ped::get_ped_drawable_variation(iParam0, 8), ped::get_ped_texture_variation(iParam0, 8));
 * if (dlc1::_0x341DE7ED1D2A1BFD(iVar8, 240476421, 8))
 */
declare function N_0x341de7ed1d2a1bfd(componentHash: string | number, drawableSlotHash: string | number, componentId: number): number;

declare function N_0x34318593248c8fb2(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): number;

declare function N_0x3441cad2f2231923(vehicle: number, p1: boolean): void;

declare function N_0x346ef3ecaaab149e(): void;

declare function N_0x34770b9ce0e03b91(p0: number, p1: number): number;

declare function N_0x350aa5ebc03d3bd2(): number;

declare function N_0x357b152ef96c30b6(): number;

declare function N_0x3599d741c9ac6310(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x359af31a4b52f5ed(): number;

declare function N_0x35a1b3e1d1315cfa(p0: boolean, p1: boolean): number;

declare function N_0x35e0654f4bad7971(p0: boolean): void;

declare function N_0x35edd5b2e3ff01c0(): void;

declare function N_0x35f0b98a8387274d(): number;

declare function N_0x35fb78dc42b7bd21(): number;

declare function N_0x36391f397731595d(p0: number): number;

/**
 * Returns a float value related to slipstream.
 */
declare function N_0x36492c2f0d134c56(p0: number): number;

declare function N_0x3669f1b198dcaa4f(): void;

declare function N_0x367ef5e2f439b4c6(p0: number): void;

/**
 * GET_TIME_SINCE_???
 */
declare function N_0x36b77bb84687c318(ped: number, p1: number): number;

declare function N_0x36c1451a88a09630(): [number, number];

/**
 * when player character is used plays remove scuba gear animation
 */
declare function N_0x36c6984c3ed0c911(p0: number): void;

declare function N_0x36ccb9be67b970fd(p0: number, p1: boolean): void;

declare function N_0x36f1b38855f2a8df(player: number): void;

declare function N_0x36f6626459d91457(p0: number): void;

declare function N_0x372ef6699146a1e4(p0: number, entity: number, p2: number, p3: number): number;

declare function N_0x374706271354cb18(vehicle: number, p1: number, p2: number): void;

/**
 * NETWORK_IS_TRANSITION_???
 */
declare function N_0x37a4494483b9f5c9(): number;

declare function N_0x37deb0aa183fb6d8(): void;

/**
 * Sets some values in a vehicle gadget (tow arm, digger arm, etc.). Don't know which one though.
 * I've tested on the towtruck 1 &amp; 2, Dock Lift (Crate Arm), Dozer, and such have no effect. However when used on a Forklift it sets the height of the forks. 0.0 = Lowest 1.0 = Highest. This is best to be used if you wanna pick-up a car since un-realistically on GTA V forklifts can't pick up much of anything due to vehicle mass. If you put this under a car then set it above 0.0 to a 'lifted-value' it will raise the car with no issue lol
 */
declare function N_0x37ebbf3117bd6a25(vehicle: number, height: number): void;

declare function N_0x38491439b6ba7f7d(p0: number, p1: number): number;

/**
 * Sets profile setting 934
 */
declare function N_0x38baaa5dd4c9d19f(value: number): void;

/**
 * Returns true if an unk value is greater than 0.0f
 */
declare function N_0x38d28da81e4e9bf9(player: number): number;

declare function N_0x397baa01068baa96(): number;

declare function N_0x39917e1b4cb0f911(p0: boolean): void;

/**
 * from extreme3.c4
 * PED::_39D55A620FCB6A3A(PLAYER::PLAYER_PED_ID(), 8, PED::GET_PED_DRAWABLE_VARIATION(PLAYER::PLAYER_PED_ID(), 8), PED::GET_PED_TEXTURE_VARIATION(PLAYER::PLAYER_PED_ID(), 8));
 * p1 is probably componentId
 */
declare function N_0x39d55a620fcb6a3a(ped: number, p1: number, drawableId: number, textureId: number): number;

declare function N_0x3a17a27d75c74887(): number;

declare function N_0x3a3d5568af297cd5(p0: number): number;

declare function N_0x3a48ab4445d499be(): number;

declare function N_0x3b39236746714134(p0: number): number;

declare function N_0x3bab9a4e4f2ff5c7(): number;

declare function N_0x3bbbd13e5041a79e(): number;

declare function N_0x3c4487461e9b0dcb(): number;

declare function N_0x3c5c1e2c2ff814b1(p0: boolean): void;

declare function N_0x3c67506996001f5e(): number;

declare function N_0x3c891a251567dfce(p0: number): number;

declare function N_0x3ca6050692bc61b0(p0: boolean): void;

declare function N_0x3d3d15af7bcaaf83(p0: number, p1: boolean, p2: boolean): void;

declare function N_0x3d3d8b3be5a83d35(): number;

/**
 * Used in carsteal3 script with p0 = "Carsteal4_spycar".
 */
declare function N_0x3d42b92563939375(p0: string): number;

declare function N_0x3d9acb1eb139e702(): number;

declare function N_0x3dbf2df0aeb7d289(p0: number): number;

declare function N_0x3dda37128dd1aca8(p0: boolean): void;

/**
 * 1 match in 1 script. cellphone_controller.
 * p0 is -1 in scripts.
 */
declare function N_0x3dec726c25a11bac(p0: number): number;

declare function N_0x3e200c2bcf4164eb(p0: number, p1: number): void;

declare function N_0x3e38e28a1d80ddf6(ped: number): number;

declare function N_0x3e802f11fbe27674(p0: number): number;

/**
 * p0 was always 2 in R* scripts.
 * Called before calling DISPLAY_ONSCREEN_KEYBOARD if the input needs to be saved.
 */
declare function N_0x3ed1438c1f5c6612(p0: number): void;

declare function N_0x3f52e880aaf6c8ca(p0: boolean): void;

declare function N_0x3f5cc444dcaaa8f2(p0: number, p1: number, p2: boolean): void;

declare function N_0x3f9990bf5f22759c(p0: number): number;

declare function N_0x3fa36981311fa4ff(netId: number, state: boolean): void;

declare function N_0x4008edf7d6e48175(p0: boolean): void;

declare function N_0x402f9ed62087e898(): void;

declare function N_0x405591ec8fd9096d(p0: number): void;

/**
 * Usage: INTERIOR::_0x405DC2AEF6AF95B9(INTERIOR::GET_KEY_FOR_ENTITY_IN_ROOM(PLAYER::PLAYER_PED_ID()));
 */
declare function N_0x405dc2aef6af95b9(roomHashKey: string | number): void;

/**
 * Console Hash: 0x9F82917F
 */
declare function N_0x407091cf6037118e(netID: number): void;

declare function N_0x40aefd1a244741f2(p0: boolean): void;

declare function N_0x40f7e66472df3e5c(p0: number, p1: number): number;

declare function N_0x41350b4fc28e3941(p0: boolean): void;

declare function N_0x4167efe0527d706e(): number;

declare function N_0x418dc16fae452c1c(p0: number): number;

declare function N_0x419594e137637120(p0: boolean, p1: number, p2: boolean): void;

declare function N_0x41faa8fb2ece8720(p0: boolean): void;

declare function N_0x42156508606de65e(p0: number): void;

declare function N_0x422d396f80a96547(): number;

declare function N_0x422f32cc7e56abad(p0: number): number;

declare function N_0x4237e822315d8ba9(): number;

declare function N_0x425aecf167663f48(ped: number, p1: boolean): void;

declare function N_0x4282e08174868be3(): number;

/**
 * if (!ENTITY::DOES_ENTITY_BELONG_TO_THIS_SCRIPT(g_10A5A._f8B[a_0 -- [[1]] ], 1)) {
 * sub_20af7("No longer needed: Vehicle owned by other script");
 * if ((((a_0 == 24) &amp;&amp; (!sub_3a04(g_10A5A._f8B[a_0 -- [[1]] ]))) &amp;&amp; (!sub_39c9(g_10A5A._f8B[a_0 -- [[1]] ]))) &amp;&amp; (ENTITY::GET_ENTITY_MODEL(g_10A5A._f8B[a_0 -- [[1]] ]) != ${monster})) {
 * VEHICLE::_428BACCDF5E26EAD(g_10A5A._f8B[a_0 -- [[1]] ], 1);
 * }
 * g_10A5A._f8B[a_0 -- [[1]] ] = 0;
 * g_10A5A[a_0 -- [[1]] ] = 1;
 * sub_20ada(a_0);
 * return ;
 * }
 */
declare function N_0x428baccdf5e26ead(vehicle: number, p1: boolean): void;

declare function N_0x428eaf89e24f6c36(p0: number, p1: number): void;

/**
 * LOD related
 */
declare function N_0x42a4beb35d372407(p0: number): number;

declare function N_0x437138b6a830166a(): void;

declare function N_0x43865688ae10f0d7(): number;

declare function N_0x43d1680c6d19a8e9(): void;

declare function N_0x43fa0dfc5df87815(vehicle: number, p1: boolean): void;

/**
 * sfink: related to: NETWORK_BAIL
 * NETWORK_BAIL_TRANSITION
 * NETWORK_JOIN_GROUP_ACTIVITY
 * NETWORK_JOIN_TRANSITION
 * NETWORK_LAUNCH_TRANSITION
 * NETWORK_SESSION_HOST
 * NETWORK_SESSION_HOST_CLOSED
 * NETWORK_SESSION_HOST_FRIENDS_ONLY
 * NETWORK_SESSION_HOST_SINGLE_PLAYER
 * NETWORK_SESSION_VOICE_LEAVE
 */
declare function N_0x444c4525ece0a4b9(): void;

declare function N_0x44a0bdc559b35f6e(): number;

declare function N_0x44aca259d67651db(p1: number): number;

declare function N_0x44b37cdcae765aae(p0: number, p1: number): number;

declare function N_0x451294e859ecc018(p0: number): number;

declare function N_0x459fd2c8d0ab78bc(): number;

declare function N_0x45a83257ed02d9bc(): void;

declare function N_0x45e816772e93a9db(): number;

declare function N_0x46326e13da4e0546(p0: number): void;

/**
 * NOTE: 'p2' might be some kind of array.
 */
declare function N_0x4645de9980999e93(p0: string, p1: string, p2: string, p3: string, _type: string): number;

declare function N_0x46494a2475701343(p0: number, p1: number, p2: number, p3: number, modelHash: string | number, p5: boolean): number;

declare function N_0x4668d80430d6c299(ped: number): void;

/**
 * This has been found in use in the decompiled files.
 */
declare function N_0x4669b3ed80f24b4e(player: number): number;

declare function N_0x466da42c89865553(p0: number): void;

declare function N_0x4683149ed1dde7a1(p0: string): number;

declare function N_0x469f2ecdec046337(p0: boolean): void;

/**
 * Checks if the specified unknown flag is set in the ped's model.
 * The engine itself seems to exclusively check for flags 1 and 4 (Might be inlined code of the check that checks for other flags).
 * Game scripts exclusively check for flags 1 and 4.
 */
declare function N_0x46b05bcae43856b0(ped: number, flag: number): number;

declare function N_0x46d1a61a21f566fc(p0: number): void;

declare function N_0x46fb3ed415c7641c(p0: number, p1: number, p2: number): number;

declare function N_0x472397322e92a856(): void;

/**
 * Returns an unknown value (dword_142317A08 in b944).
 * Used in appcamera.ysc and maintransition.ysc
 */
declare function N_0x473151ebc762c6da(): number;

declare function N_0x4737980e8a283806(p0: number, p1: number): number;

declare function N_0x4750fc27570311ec(): number;

declare function N_0x4759cc730f947c81(): void;

declare function N_0x4811bbac21c5fcd5(p0: number): void;

declare function N_0x4852fc386e2e1bb5(p0: number): [number, number, number];

declare function N_0x48621c9fca3ebd28(p0: boolean): void;

declare function N_0x4862437a486f91b0(p1: number, p2: number, p3: number): [number, number];

declare function N_0x487912fd248efddf(p0: number, p1: number): number;

declare function N_0x48adc8a773564670(): void;

/**
 * Only found 3 times in decompiled scripts. Not a whole lot to go off of.
 * GAMEPLAY::_48F069265A0E4BEC(a_0, "Movie_Name_For_This_Player");
 * GAMEPLAY::_48F069265A0E4BEC(&amp;a_0._fB, "Ringtone_For_This_Player");
 * GAMEPLAY::_48F069265A0E4BEC(&amp;a_0._f1EC4._f12[v_A -- [[6]] ], &amp;v_13); // where v_13 is "MPATMLOGSCRS0" thru "MPATMLOGSCRS15"
 */
declare function N_0x48f069265a0e4bec(name: string): number;

declare function N_0x49482f9fcd825aaa(entity: number): void;

declare function N_0x49e50bdb8ba4dab2(ped: number, p1: boolean): void;

declare function N_0x49ec8030f5015f8b(p0: number): void;

declare function N_0x4a0c7c9bb10abb36(p0: boolean): void;

declare function N_0x4a2d4e8bf4265b0f(p0: number): number;

declare function N_0x4a39db43e47cf3aa(p0: number): void;

declare function N_0x4a7d6e727f941747(p0: number): number;

/**
 * example:
 * if (!((v_7)==UI::_4A9923385BDB9DAD())) {
 * UI::SET_BLIP_SPRITE((v_6), (v_7));
 * }
 * This function is hard-coded to always return 1.
 */
declare function N_0x4a9923385bdb9dad(): number;

declare function N_0x4a9fde3a5a6d0437(p0: number): void;

declare function N_0x4af92acd3141d96c(): void;

/**
 * p0 - Scale? Looks to be a normalized value (0.0 - 1.0)
 * offroad_races.c4, line ~67407:
 * a_3._f7 = GRAPHICS::CREATE_CHECKPOINT(v_D, v_A, a_4, a_7, v_E, v_F, v_10, sub_62b2(v_A, 220, 255), 0);
 * UI::GET_HUD_COLOUR(134, &amp;v_E, &amp;v_F, &amp;v_10, &amp;v_11);
 * GRAPHICS::_SET_CHECKPOINT_ICON_RGBA(a_3._f7, v_E, v_F, v_10, sub_62b2(v_A, 70, 210));
 * GRAPHICS::_4B5B4DA5D79F1943(a_3._f7, 0.95);
 * GRAPHICS::SET_CHECKPOINT_CYLINDER_HEIGHT(a_3._f7, 4.0, 4.0, 100.0);
 */
declare function N_0x4b5b4da5d79f1943(checkpoint: number, p0: number): void;

declare function N_0x4b5cfc83122df602(): void;

/**
 * Seems to call GET_PAUSED_MAP_STREAMING_REQUEST lol wtf
 * seg001:000000000158C324 sub_158C324:                            # DATA XREF: OPD:stru_1C29978o
 * seg001:000000000158C324
 * seg001:000000000158C324 .set arg_10,  0x10
 * seg001:000000000158C324
 * seg001:000000000158C324                 mflr      r0
 * seg001:000000000158C328                 bl        sub_1803774
 * seg001:000000000158C32C                 stdu      r1, -0x80(r1)
 * seg001:000000000158C330                 std       r0, 0x80+arg_10(r1)
 * seg001:000000000158C334                 mr        r31, r3
 * seg001:000000000158C338                 lwz       r3, 8(r31)
 * seg001:000000000158C33C                 addic     r4, r3, 4
 * seg001:000000000158C340                 addic     r5, r3, 0x10
 * seg001:000000000158C344                 addic     r7, r3, 0x20
 * seg001:000000000158C348                 lwz       r6, 0(r3)
 * seg001:000000000158C34C                 lfs       f1, 0x1C(r3)
 * seg001:000000000158C350                 lwz       r8, 0x2C(r3)
 * seg001:000000000158C354                 extsw     r3, r6
 * seg001:000000000158C358                 extsw     r8, r8
 * seg001:000000000158C35C                 bl        GET_PAUSED_MAP_STREAMING_REQUEST
 * seg001:000000000158C360                 lwz       r4, 0(r31)
 * seg001:000000000158C364                 stw       r3, 0(r4)
 * seg001:000000000158C368                 addi      r1, r1, 0x80
 * seg001:000000000158C36C                 b         loc_18037D8
 * sorta makes sense though since the one above this native and GET_PAUSED_MAP_STREAMING_REQUEST are used together often in scripts
 */
declare function N_0x4ba92a18502bca61(player: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, flags: number): number;

declare function N_0x4bc2854478f3a749(doorHash: string | number): number;

/**
 * Only used once in the entire game scripts, probably useless. Always returns 0.
 */
declare function N_0x4c2330e61d3deb56(interiorID: number): number;

declare function N_0x4c61b39930d045da(p0: number): number;

declare function N_0x4c61c75bee8184c2(p0: string, p1: number, p2: number): void;

declare function N_0x4c89fe2bdeb3f169(): number;

/**
 * This function is hard-coded to always return 1.
 */
declare function N_0x4cebc1ed31e8925e(cutsceneName: string): number;

declare function N_0x4d02279c83be69fe(): number;

declare function N_0x4d89d607cb3dd1d2(object: number, toggle: boolean): void;

/**
 * Something like flush_all_scripts
 * Most of time comes after NETWORK_END_TUTORIAL_SESSION() or before TERMINATE_THIS_THREAD()
 */
declare function N_0x4d953df78ebf8158(): void;

declare function N_0x4d9d109f63fee1d4(p0: number, p1: boolean): void;

declare function N_0x4dcdf92bf64236cd(p0: number, p1: number): void;

declare function N_0x4df7cfff471a7fb1(p0: number): number;

declare function N_0x4dfdd9eb705f8140(): [number, any /* actually bool */];

declare function N_0x4e3cd0ef8a489541(): number;

/**
 * Examples:
 * AUDIO::_4E404A9361F75BB2("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_MICHAEL", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_01_CLASS_ROCK", "END_CREDITS_KILL_TREVOR", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_01_CLASS_ROCK", "END_CREDITS_SAVE_MICHAEL_TREVOR", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_06_COUNTRY", "MAGDEMO2_RADIO_DINGHY", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_16_SILVERLAKE", "SEA_RACE_RADIO_PLAYLIST", 1);
 * AUDIO::_4E404A9361F75BB2("RADIO_01_CLASS_ROCK", "OFF_ROAD_RADIO_ROCK_LIST", 1);
 */
declare function N_0x4e404a9361f75bb2(radioStation: string, p1: string, p2: boolean): void;

declare function N_0x4e52e752c76e7e7a(p0: number): void;

declare function N_0x4e548c0d7ae39ff9(p0: number, p1: number): number;

declare function N_0x4e74e62e0a97e901(vehicle: number, p1: boolean): void;

/**
 * The "disabled" variant of _0x5B84D09CEC5209C5.
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function N_0x4f8a26a890fd62fb(inputGroup: number, control: number): number;

declare function N_0x4fef53183c3c6414(): number;

/**
 * console hash: 0x004926A3
 */
declare function N_0x500873a45724c863(vehicle: number, p1: number): void;

declare function N_0x5009dfd741329729(p0: string, p1: number): void;

declare function N_0x503f5920162365b2(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x5068f488ddb54dd8(): number;

declare function N_0x5096fd9ccb49056d(p0: number): void;

declare function N_0x50f457823ce6eb5f(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0x511f1a683387c7e2(p0: number): number;

declare function N_0x51bb2d88d31a914b(vehicle: number, p1: boolean): void;

declare function N_0x51db102f4a3ba5e0(p0: boolean): void;

declare function N_0x51f1a8e48c3d2f6d(p0: number, p1: boolean, p2: number): number;

/**
 * Shows a hud element for reporting jobs
 */
declare function N_0x523a590c1a3cc0d3(): void;

declare function N_0x524ff0aeff9c3973(p0: number): void;

declare function N_0x52818819057f2b40(p0: number): number;

declare function N_0x52d59ab61ddc05dd(ped: number, p1: boolean): void;

declare function N_0x5324a0e3e4ce3570(p0: number, p1: number): [number, number, number];

/**
 * GET_VEHICLE_MODEL_*
 * 9.8 * thrust if air vehicle, else 0.38 + drive force?
 * For a full list, see here: pastebin.com/bJQeDqNd
 */
declare function N_0x53409b5163d5b846(modelHash: string | number): number;

/**
 * GET_VEHICLE_MAX_*
 * sfink: this returns the vehicle property "Assisted Steering" or at least, it returned 37.5 when i was in a car with that value as assisted steering.
 */
declare function N_0x53af99baa671ca47(vehicle: number): number;

declare function N_0x53afd64c6758f2f9(): number;

declare function N_0x53f4892d18ec90a4(p0: number): void;

declare function N_0x5407b7288d0478b7(p0: number): number;

declare function N_0x54318c915d27e4ce(p0: number, p1: boolean): void;

declare function N_0x544810ed9db6bbe6(): number;

declare function N_0x54b0f614960f4a5f(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x54e22ea2c1956a8d(p0: number): void;

/**
 * From the scripts:
 * GAMEPLAY::_54F157E0336A3822(sub_aa49(a_0), "ForcedStopDirection", v_E);
 */
declare function N_0x54f157e0336a3822(p0: number, p1: string, p2: number): void;

/**
 * DISABLE_*
 * p0 seems to be Player or int
 */
declare function N_0x5501b7a5cdb79d37(p0: number): void;

declare function N_0x551df99658db6ee8(p0: number, p1: number, p2: number): number;

/**
 * Sets profile setting 935
 */
declare function N_0x55384438fc55ad8e(value: number): void;

declare function N_0x5539c3ebf104a53a(p0: boolean): void;

/**
 * GET_PLAYER_*
 * Seems to do something with network (?)
 * PLAYER::_56105E599CAB0EFA(NETWORK::NETWORK_GET_PLAYER_INDEX_FROM_PED(ped))
 */
declare function N_0x56105e599cab0efa(p0: number): number;

/**
 * Returns the current AI BLIP for the specified ped
 */
declare function N_0x56176892826a4fe8(ped: number): number;

/**
 * NETWORK_PLAYER_???
 */
declare function N_0x565e430db3b05bec(p0: number): number;

declare function N_0x567384dfa67029e6(): number;

declare function N_0x5688585e6d563cd8(p0: number): void;

declare function N_0x56b94c6d7127dfba(p0: number, p1: number, p2: boolean): void;

declare function N_0x56c8b608cfd49854(): void;

/**
 * console hash = 0x30F43FE3
 */
declare function N_0x56eb5e94318d3fb6(vehicle: number, p1: boolean): void;

/**
 * Jenkins hash: 0x772DA539
 * p0 looks like Player or int (found in "am_pi_menu")
 */
declare function N_0x5702b917b99db1cd(p0: number): void;

declare function N_0x570389d1c3de3c6b(p0: number): void;

/**
 * consoel hash 0xAEB29F98
 */
declare function N_0x571feb383f629926(cargobob: number, p1: boolean): void;

declare function N_0x576594e8d64375e2(p0: number, p1: boolean): void;

/**
 * Not sure what it does but it's in a function called in the main of appbroadcast and is also called in freemode. Likely chat related.
 */
declare function N_0x57b192b4d4ad23d5(p0: boolean): void;

declare function N_0x57d760d55f54e071(p0: boolean): void;

declare function N_0x583049884a2eee3c(): void;

declare function N_0x5835d9cd92e83184(): [number, number, number];

declare function N_0x583df8e3d4afbd98(): number;

declare function N_0x5845066d8a1ea7f7(vehicle: number, x: number, y: number, z: number, p4: number): void;

declare function N_0x584770794d758c18(p0: number, p1: number): number;

declare function N_0x589f80b325cc82c5(p0: number, p1: number, p2: number, p3: number, p4: number): number;

/**
 * LEADERBOARDS_GET_CACHE_???
 */
declare function N_0x58a651cd201d89ad(p0: number): number;

declare function N_0x58bb377bec7cd5f4(p0: boolean, p1: boolean): void;

declare function N_0x58c21165f6545892(p0: number, p1: number): void;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x58cc181719256197(p0: number, p1: number, p2: number): number;

declare function N_0x59328eb08c5ceb2b(): number;

declare function N_0x593570c289a77688(): number;

declare function N_0x593feae1f73392d4(): number;

declare function N_0x59424bd75174c9b1(): void;

declare function N_0x595f028698072dd9(p0: number, p1: number, p2: boolean): number;

declare function N_0x597f8dba9b206fc7(): number;

/**
 * Same behavior as GET_LOCAL_PLAYER_AIM_STATE but only used on the PC version.
 */
declare function N_0x59b9a7af4c95133c(): number;

/**
 * may be 0x6CDAA7D2
 * sfink: related to: NETWORK_BAIL
 * NETWORK_BAIL_TRANSITION
 * NETWORK_JOIN_GROUP_ACTIVITY
 * NETWORK_JOIN_TRANSITION
 * NETWORK_LAUNCH_TRANSITION
 * NETWORK_SESSION_HOST
 * NETWORK_SESSION_HOST_CLOSED
 * NETWORK_SESSION_HOST_FRIENDS_ONLY
 * NETWORK_SESSION_HOST_SINGLE_PLAYER
 * NETWORK_SESSION_VOICE_LEAVE
 */
declare function N_0x59df79317f85a7e0(): number;

declare function N_0x59e7b488451f4d3a(p0: number, p1: number): void;

declare function N_0x5a0a3d1a186a5508(): number;

declare function N_0x5a34cd9c3c5bec44(p0: number): number;

declare function N_0x5a43c76f7fc7ba5f(): void;

declare function N_0x5a556b229a169402(): number;

/**
 * NETWORK_IS_TRANSITION_???
 */
declare function N_0x5a6aa44ff8e931e6(): number;

declare function N_0x5a6ffa2433e2f14c(player: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, flags: number): number;

declare function N_0x5a7f62fda59759bd(): void;

declare function N_0x5aa3befa29f03ad4(): number;

/**
 * GET_VEHICLE_MODEL_*
 * called if the vehicle is a boat -- returns vecMoveResistanceX?
 * For a full list, see here: pastebin.com/Pyb2RhZ9
 */
declare function N_0x5aa3f878a178c4fc(modelHash: string | number): number;

declare function N_0x5aab586ffec0fd96(p0: number): void;

/**
 * Disables some other rendering (internal)
 */
declare function N_0x5ad3932daeb1e5d3(): void;

declare function N_0x5ae17c6b0134b7f1(): number;

declare function N_0x5b0316762afd4a64(): number;

declare function N_0x5b1f2e327b6b6fe1(): number;

declare function N_0x5b48a06dd0e792a5(): number;

declare function N_0x5b50abb1fe3746f4(): number;

declare function N_0x5b6010b3cbc29095(p0: number, p1: boolean): void;

declare function N_0x5b73c77d9eb66e24(p0: boolean): void;

/**
 * Seems to return values between -1 and 1 for controls like gas and steering.
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function N_0x5b84d09cec5209c5(inputGroup: number, control: number): number;

declare function N_0x5b8ed3db018927b1(p0: number): void;

declare function N_0x5bd5f255321c4aaf(p0: number): number;

declare function N_0x5bff36d6ed83e0ae(): number[];

/**
 * Only called once in the scripts.
 * Related to weapon objects.
 */
declare function N_0x5c3b791d580e0bc2(entity: number, p1: number): void;

declare function N_0x5c41e6babc9e2112(p0: number): void;

declare function N_0x5c48a1d6e3b33179(p0: number): number;

declare function N_0x5c497525f803486b(): void;

declare function N_0x5c4ebffa98bdb41c(p0: number): number;

declare function N_0x5c707a667df8b9fa(p0: boolean, p1: number): void;

declare function N_0x5cae833b0ee0c500(p0: number): number;

/**
 * Only called in golf and golf_mp
 * parameters used are
 * GRAPHICS::_0x5CE62918F8D703C7(255, 0, 0, 64, 255, 255, 255, 5, 255, 255, 0, 64);
 */
declare function N_0x5ce62918f8d703c7(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number): void;

declare function N_0x5d10b3795f3fc886(): number;

declare function N_0x5d517b27cf6ecd04(p0: number): void;

declare function N_0x5d5caff661ddf6fc(p0: number, p1: number): void;

declare function N_0x5d7b620dae436138(p0: number): void;

/**
 * longest time being ilde?
 */
declare function N_0x5da3a8de8cb6226f(time: number): void;

declare function N_0x5db8010ee71fdef2(vehicle: number): number;

declare function N_0x5dc40a8869c22141(p0: boolean, p1: number): void;

/**
 * NETWORK_IS_TRANSITION_???
 */
declare function N_0x5dc577201723960a(): number;

declare function N_0x5debd9c4dc995692(): void;

declare function N_0x5e0165278f6339ee(p0: number): number;

declare function N_0x5e24341a7f92a74b(): number;

declare function N_0x5e3aa4ca2b6fb0ee(p0: number): void;

declare function N_0x5e569ec46ec21cae(vehicle: number, toggle: boolean): void;

declare function N_0x5e657ef1099edd65(p0: number): number;

declare function N_0x5e9daf5a20f15908(p0: number): void;

declare function N_0x5ea784d197556507(): number;

/**
 * returns pickup hash.
 */
declare function N_0x5eaad83f8cfb4575(pickupHash: number): number;

/**
 * example from completionpercentage_controller.ysc.c4
 * if (STATS::_5EAD2BF6484852E4()) {
 * GAMEPLAY::SET_BIT(g_17b95._f20df._ff10, 15);
 * STATS::_11FF1C80276097ED(0xe9ec4dd1, 200, 0);
 * }
 */
declare function N_0x5ead2bf6484852e4(): number;

declare function N_0x5edef0cf8c1dab3c(): number;

declare function N_0x5f0f3f56635809ef(p0: number): void;

/**
 * SET_PLAYERS_*
 */
declare function N_0x5f2013f8bc24ee69(p0: number): void;

declare function N_0x5f35f6732c3fbba0(p0: number): number;

declare function N_0x5fbd7095fe7ae57f(p0: number, p1: number): number;

/**
 * Appears once in "re_dealgonewrong"
 */
declare function N_0x5fc472c501ccadb3(player: number): number;

declare function N_0x600048c60d5c2c51(p0: number): void;

declare function N_0x600f8cb31c7aab6e(p0: number): void;

declare function N_0x606e4d3e3cccf3eb(): number;

/**
 * Console Hash: 0x37C388DB
 */
declare function N_0x6070104b699b2ef4(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x60734cc207c9833c(p0: boolean): void;

declare function N_0x609278246a29ca34(p0: number, p1: number, p2: number): void;

/**
 * Something with Social Club or online.
 */
declare function N_0x60e892ba4f5bdca4(): void;

declare function N_0x60edd13eb3ac1ff3(): number;

/**
 * Unknown. Called after creating a checkpoint (type: 51) in the creators.
 */
declare function N_0x615d3925e87a3b26(checkpoint: number): void;

/**
 * From the scripts:
 * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
 * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
 * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 1);
 * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_portable_package}, 0);
 * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 0);
 * OBJECT::_616093EC6B139DD9(PLAYER::PLAYER_ID(), ${pickup_armour_standard}, 1);
 * SET_PLAYER_P*
 */
declare function N_0x616093ec6b139dd9(player: number, pickupHash: string | number, p2: boolean): void;

declare function N_0x61631f5df50d1c34(p0: boolean): void;

declare function N_0x61767f73eaceed21(ped: number): number;

declare function N_0x61a885d3f7cfee9a(): void;

declare function N_0x61f95e5bb3e0a8c6(p0: number): void;

declare function N_0x6216b116083a7cb4(p0: number): void;

/**
 * Used only once (am_mp_property_int)
 * ped was PLAYER_PED_ID()
 */
declare function N_0x621c6e4729388e41(ped: number): number;

declare function N_0x6274c4712850841e(entity: number, p1: boolean): void;

declare function N_0x629526aba383bcaa(): void;

declare function N_0x62a0296c1bb1ceb3(): number;

declare function N_0x62b9fec9a11f10ef(): number;

declare function N_0x62ca17b74c435651(vehicle: number): number;

declare function N_0x62e849b7eb28e770(p0: boolean): void;

/**
 * returns sceneHandle
 */
declare function N_0x62ec273d00187dca(x: number, y: number, z: number, radius: number, object: string | number): number;

declare function N_0x62ecfcfdee7885d6(): void;

declare function N_0x631dc5dff4b110e3(p0: number): number;

declare function N_0x632b2940c67f4ea9(scaleformHandle: number): [number, number, number, number];

declare function N_0x634148744f385576(vehicle: number): number;

declare function N_0x638a3a81733086db(): number;

declare function N_0x639431e895b9aa57(ped: number, vehicle: number, p2: boolean, p3: boolean, p4: boolean): number;

declare function N_0x63b406d7884bfa95(): number;

declare function N_0x63eb2b972a218cac(): void;

declare function N_0x643ed62d5ea3bebd(): void;

declare function N_0x644546ec5287471b(): number;

declare function N_0x6483c25849031c4f(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x648e7a5434af7969(p0: string, p2: boolean, _type: string): [number, number, number, number, number];

declare function N_0x649c97d52332341a(p0: number): void;

declare function N_0x64f62afb081e260d(): void;

declare function N_0x6512765e3be78c50(): number;

/**
 * possibly called:
 * ADD_DOOR_EXPERIMENTAL_MATRIX
 */
declare function N_0x65499865fca6e5ec(doorHash: string | number): number;

/**
 * Something related to clearing the ped because always used with CLEAR_PED_WETNESS, CLEAR_PED_BLOOD_DAMAGE and RESET_PED_VISIBLE_DAMAGE.
 */
declare function N_0x6585d955a68452a5(ped: number): number;

declare function N_0x65d2ebb47e1cec21(p0: boolean): void;

/**
 * IS_PLAYER_*
 */
declare function N_0x65faee425de637b0(p0: number): number;

declare function N_0x661b5c8654add825(p0: number, p1: boolean): void;

declare function N_0x662635855957c411(p0: number): number;

/**
 * Something related to vehicle lean? (References CVehicleLeanHelper)
 */
declare function N_0x6636c535f6cc2725(vehicle: number): number;

declare function N_0x6647c5f6f5792496(ped: number, p1: boolean): void;

/**
 * Normally returns true. Returns false briefly whilst getting into a plane. This is probably a check to see if the ped model and all its components/drawables are properly loaded yet.
 */
declare function N_0x66680a92700f43df(p0: number): number;

declare function N_0x66972397e0757e7a(p0: number, p1: number, p2: number): void;

declare function N_0x66979acf5102fd2f(cargobob: number, p1: number): void;

declare function N_0x66a49d021870fe88(): void;

declare function N_0x66b59cffd78467af(): number;

declare function N_0x66e7cb63c97b7d20(): number;

declare function N_0x66f010a4b031a331(p0: number): void;

declare function N_0x673ed815d6e323b7(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;

declare function N_0x675721c9f644d161(): void;

declare function N_0x678bb03c1a3bd51e(p0: number, p1: number, p2: number): [number, number, number];

declare function N_0x67a5589628e0cff6(): number;

declare function N_0x67eedea1b9bafd94(): void;

declare function N_0x67f6413d3220e18d(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x67fc09bc554a75e5(): number;

declare function N_0x68103e2247887242(): void;

/**
 * example:
 * if (GAMEPLAY::_684A41975F077262()) {
 * (a_0) = GAMEPLAY::_ABB2FA71C83A1B72();
 * } else {
 * (a_0) = -1;
 * }
 */
declare function N_0x684a41975f077262(): number;

declare function N_0x6856ec3d35c81ea4(): number;

declare function N_0x685d5561680d088b(vehicle: number, p1: number): void;

declare function N_0x68772db2b2526f9f(ped: number, x: number, y: number, z: number, range: number): number;

declare function N_0x687c0b594907d2e8(ped: number): void;

/**
 * p0 seems to be Ped
 */
declare function N_0x690a61a6d13583f6(p0: number): number;

declare function N_0x692d58df40657e8c(p0: number, p1: number, p2: number, p4: number, p5: boolean): [number, number];

declare function N_0x692d808c34a82143(p0: string, p1: number, _type: string): number;

/**
 * what does it do?
 */
declare function N_0x694e00132f2823ed(entity: number, p1: boolean): void;

declare function N_0x699e4a5c8c893a18(p0: number, p1: string, p2: number): number;

declare function N_0x69fe6dc87bd2a5e9(p0: number): void;

declare function N_0x6a12d88881435dca(): void;

/**
 * Called in freemode related scripts but not freemode itself.
 */
declare function N_0x6a5d89d7769a40d8(p0: boolean): void;

declare function N_0x6a98c2ecf57fa5d4(vehicle: number, entity: number): void;

declare function N_0x6adaabd3068c5235(): number;

declare function N_0x6afd2cd753feef83(p0: string): number;

declare function N_0x6b0e6172c9a4d902(p0: boolean): void;

declare function N_0x6b1de27ee78e6a19(p0: number): void;

declare function N_0x6bfb12ce158e3dd4(p0: number): number;

declare function N_0x6bff5f84102df80a(p0: number): void;

declare function N_0x6c34f1208b8923fd(p0: number): number;

declare function N_0x6cc86e78358d5119(): void;

declare function N_0x6cd5a433374d4cfb(p0: number, p1: number): number;

declare function N_0x6cd79468a1e595c6(inputGroup: number): number;

declare function N_0x6d4cb481fac835e8(p0: number, p1: number, p3: number): [number, number];

/**
 * Possible values:
 * act_cinema
 * am_mp_carwash_launch
 * am_mp_carwash_control
 * am_mp_property_ext
 * chop
 * fairgroundHub
 * launcher_BasejumpHeli
 * launcher_BasejumpPack
 * launcher_CarWash
 * launcher_golf
 * launcher_Hunting_Ambient
 * launcher_MrsPhilips
 * launcher_OffroadRacing
 * launcher_pilotschool
 * launcher_Racing
 * launcher_rampage
 * launcher_rampage
 * launcher_range
 * launcher_stunts
 * launcher_stunts
 * launcher_tennis
 * launcher_Tonya
 * launcher_Triathlon
 * launcher_Yoga
 * ob_mp_bed_low
 * ob_mp_bed_med
 */
declare function N_0x6d6840cee8845831(action: string): void;

declare function N_0x6d6af961b72728ae(vehicle: number): void;

/**
 * Console Hash: 0x60E29B78
 */
declare function N_0x6d8eac07506291fb(cargobob: number, p1: number): void;

declare function N_0x6d955f6a9e0295b1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0x6dd8f5aa635eb4b2(p0: number, p1: number): [number, number];

declare function N_0x6ddbf9dffc4ac080(p0: boolean): void;

declare function N_0x6dee77aff8c21bd1(): [number, number, number];

declare function N_0x6e04f06094c87047(): number;

declare function N_0x6e0eb3eb47c8d7aa(): number;

/**
 * Looks like a cousin of above function _6D6840CEE8845831 as it was found among them. Must be similar
 * Here are possible values of argument -
 * "ob_tv"
 * "launcher_Darts"
 */
declare function N_0x6e91b04e08773030(action: string): void;

/**
 * sfink: sets bit in vehicle's structure, used by maintransition, fm_mission_controller, mission_race and a couple of other scripts. see dissassembly:
 * CVehicle *__fastcall sub_140CDAA10(signed int a1, char a2)
 * {
 * CVehicle *result; // rax@1
 * result = EntityAsCVehicle(a1);
 * if ( result )
 * {
 * result-&gt;field_886 &amp;= 0xEFu;
 * result-&gt;field_886 |= 16 * (a2 &amp; 1);
 * }
 * return result;
 * }
 */
declare function N_0x6ebfb22d646ffc18(vehicle: number, p1: boolean): void;

declare function N_0x6ef54ab721dc6242(): void;

declare function N_0x6f1554b0cc2089fa(p0: boolean): void;

declare function N_0x6f2135b6129620c1(p0: boolean): void;

declare function N_0x6f259f82d873b8b8(): number;

declare function N_0x6f361b8889a792a3(): void;

declare function N_0x6f44cbf56d79fac0(p0: number, p1: number): number;

declare function N_0x6f697a66ce78674e(team: number, toggle: boolean): void;

declare function N_0x6f72cd94f7b5b68c(): number;

/**
 * Seems to have the same functionality as REGISTER_TEXT_LABEL_TO_SAVE?
 * GAMEPLAY::_6F7794F28C6B2535(&amp;a_0._f1, "tlPlateText");
 * GAMEPLAY::_6F7794F28C6B2535(&amp;a_0._f1C, "tlPlateText_pending");
 * GAMEPLAY::_6F7794F28C6B2535(&amp;a_0._f10B, "tlCarAppPlateText");
 * "tl" prefix sounds like "Text Label"
 */
declare function N_0x6f7794f28c6b2535(name: string): number;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x6fb7bb3607d27fa2(): number;

/**
 * This function is hard-coded to always return 1.
 */
declare function N_0x6fcf8ddea146c45b(p0: number): number;

declare function N_0x6fddad856e36988a(p0: number, p1: boolean): void;

/**
 * - if (GAMEPLAY::_6FDDF453C0C756EC() || GAMEPLAY::IS_PC_VERSION()) {
 */
declare function N_0x6fddf453c0c756ec(): number;

declare function N_0x700569dba175a77c(p0: number): number;

declare function N_0x701fda1e82076ba4(): void;

declare function N_0x702bc4d605522539(p0: number): void;

declare function N_0x703cc7f60cbb2b57(p0: number): void;

declare function N_0x703f12425eca8bf5(p0: number): number;

declare function N_0x705a276ebff3133d(): number;

declare function N_0x70894bd0915c5bca(p0: number): number;

declare function N_0x708bdd8cd795b043(): number;

declare function N_0x70b8ec8fc108a634(p0: boolean, p1: number): void;

declare function N_0x70ea8da57840f9be(p0: number): number;

/**
 * Used in am_mp_property_ext and am_mp_property_int
 */
declare function N_0x715135f4b82ac90d(entity: number): void;

/**
 * If the function fails, returns "Unknown".
 * Could be task (sequence) name. Needs more research.
 */
declare function N_0x717e4d1f2048376d(ped: number): string;

declare function N_0x71862b1d855f32e1(p1: number, p2: number, p3: number): number;

declare function N_0x71b008056e5692d6(): void;

/**
 * It's 100% an IS_CUTSCENE_* native.
 */
declare function N_0x71b74d2ae19338d0(p0: number): number;

declare function N_0x71bdb63dbaf8da59(p0: number): void;

declare function N_0x71e7b2e657449aad(): number;

declare function N_0x722f5d28b61c5ea8(p0: number): number;

declare function N_0x723c1ce13fbfdb67(p0: number, p1: number): void;

declare function N_0x728c4cc7920cd102(p0: number): number;

/**
 * Appears to be a HIDE_* native.
 */
declare function N_0x72c1056d678bb7d8(weaponHash: string | number): void;

declare function N_0x72d0706cd6ccdb58(): void;

declare function N_0x72d918c99bcacc54(p0: number): number;

declare function N_0x72dd432f3cdfc0ee(posX: number, posY: number, posZ: number, radius: number, p4: number): void;

declare function N_0x72de52178c291cb5(): number;

declare function N_0x72eb7ba9b69bf6ab(): number;

/**
 * NETWORK_CAN_R??? or NETWORK_CAN_S???
 */
declare function N_0x7303e27cc6532080(p0: number, p1: boolean, p2: boolean, p3: boolean, p5: number): [number, number];

/**
 * AUDIO::_733ADF241531E5C2("inTunnel", 1.0);
 * AUDIO::_733ADF241531E5C2("inTunnel", 0.0);
 * I do not know as of yet what this does, but this was found in the scripts.
 */
declare function N_0x733adf241531e5c2(name: string, p1: number): void;

declare function N_0x733c87d4ce22bea2(p0: number): void;

declare function N_0x7350823473013c02(ped: number): number;

declare function N_0x741a3d8380319a81(): void;

declare function N_0x742b58f723233ed9(p0: number): number;

/**
 * NETWORK_IS_*
 */
declare function N_0x74698374c45701d2(): number;

declare function N_0x74a0fd0688f1ee45(p0: number): number;

declare function N_0x74bd83ea840f6bc9(): number;

declare function N_0x74c180030fde4b69(p0: boolean): void;

declare function N_0x74de2e8739086740(): void;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x74fb3e29e6d10fa9(): number;

/**
 * bufferSize is 35 in the scripts.
 */
declare function N_0x7543bb439f63792b(bufferSize: number): [number, number];

declare function N_0x75773e11ba459e90(p0: number, p1: boolean): void;

declare function N_0x759299c5bb31d2a9(p0: number, p1: number): number;

declare function N_0x759650634f07b6b4(p0: number): number;

declare function N_0x75a16c3da34f1245(p0: number, p1: boolean): void;

declare function N_0x75ba1cb3b7d40caf(ped: number, p1: boolean): void;

declare function N_0x75d3691713c3b05a(): void;

declare function N_0x762db2d380b48d04(p0: number): void;

declare function N_0x7669f9e39dc17063(): void;

declare function N_0x7679cc1bcebe3d4c(p0: number, p1: number, p2: number): void;

/**
 * Seems to take data that is returned from "_POP_SCALEFORM_MOVIE_FUNCTION" and checks to see if it's not null/empty.
 * "agency_heist3b.ysc", line 71836:
 * if (CONTROLS::IS_CONTROL_JUST_PRESSED(2, 201) || CONTROLS::IS_CONTROL_JUST_PRESSED(2, 237)) {
 * GRAPHICS::_PUSH_SCALEFORM_MOVIE_FUNCTION(l_46, "SET_INPUT_EVENT_SELECT");
 * l_45 = GRAPHICS::_POP_SCALEFORM_MOVIE_FUNCTION();
 * }
 * if (GRAPHICS::_0x768FF8961BA904D6(l_45)) {
 * v_13 = GRAPHICS::_0x2DE7EFA66B906036(l_45);
 * if (v_13 == 6) {
 * sub_73269(a_0);
 * }
 * }
 */
declare function N_0x768ff8961ba904d6(funcData: number): number;

declare function N_0x769951e2455e2eb5(): number;

declare function N_0x76bf03fadbf154f5(): number;

/**
 * 6 calls in the b617d scripts, removed identical lines:
 * AUDIO::_774BD811F656A122("RADIO_01_CLASS_ROCK", 1);
 * AUDIO::_774BD811F656A122(AUDIO::GET_RADIO_STATION_NAME(10), 0);
 * AUDIO::_774BD811F656A122(AUDIO::GET_RADIO_STATION_NAME(10), 1);
 */
declare function N_0x774bd811f656a122(radioStation: string, p1: boolean): void;

declare function N_0x77758139ec9b66c7(p0: boolean): void;

declare function N_0x7792424aa0eac32e(): void;

declare function N_0x77f16b447824da6c(p0: number): void;

declare function N_0x77f33f2ccf64b3aa(object: number, p1: boolean): void;

declare function N_0x77faddcbe3499df7(p0: number): void;

/**
 * MulleDK19: This function is hard-coded to always return 1.
 */
declare function N_0x7808619f31ff22db(): number;

/**
 * p1: "MP_FEMALE_ACTION" found multiple times in the b617d scripts.
 * Console Hash: 0x83BAE814
 */
declare function N_0x781de8fa214e87d2(ped: number, p1: string): void;

declare function N_0x78321bea235fd8cd(p0: number, p1: boolean): number;

/**
 * Normally returns true. Returns false briefly whilst putting on a helmet after getting onto a motorbike. Not sure what that's about.
 */
declare function N_0x784002a632822099(ped: number): number;

declare function N_0x784ba7e0eceb4178(p0: number, x: number, y: number, z: number): void;

declare function N_0x78857fc65cadb909(p0: boolean): void;

declare function N_0x788e7fd431bd67f1(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0x78c0d93253149435(): number;

declare function N_0x78c4e9961db3eb5b(p0: number, p1: number): void;

/**
 * Related to cutscene entities. Unsure about the use.
 */
declare function N_0x78e8e3a640178255(entity: number): void;

declare function N_0x793ff272d5b365f4(): number;

declare function N_0x796a877e459b99ea(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x796a87b3b68d1f3d(p0: number): number;

declare function N_0x79ab33f0fbfac40c(p0: number): void;

declare function N_0x79df7e806202ce01(p0: number, p1: number): void;

declare function N_0x7a42b2e236e71415(): void;

declare function N_0x7ac24eab6d74118d(p0: boolean): number;

declare function N_0x7ac752103856fb20(p0: boolean): void;

declare function N_0x7ae0589093a2e088(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function N_0x7b21e0bb01e8224a(p0: number): void;

declare function N_0x7b226c785a52a0a9(): number;

/**
 * Set's the string displayed when flag 3 (AudioSpeaker) active.
 */
declare function N_0x7b7723747ccb55b6(gamerTagId: number, _string: string): void;

declare function N_0x7bf1a54ae67ac070(p0: number, p1: number, p2: number): void;

declare function N_0x7c0043fdff6436bc(vehicle: number): void;

/**
 * Used for cash gifts
 * Console Hash
 */
declare function N_0x7c4fccd2e4deb394(): number;

declare function N_0x7c9c0b1eeb1f9072(p0: number): void;

declare function N_0x7cd934010e115c2c(ped: number): void;

/**
 * From the scripts:
 * AUDIO::_7CDC8C3B89F661B3(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("PAIGE_PVG"));
 * AUDIO::_7CDC8C3B89F661B3(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("TALINA_PVG"));
 * AUDIO::_7CDC8C3B89F661B3(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("FEMALE_LOST_BLACK_PVG"));
 * AUDIO::_7CDC8C3B89F661B3(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("FEMALE_LOST_WHITE_PVG"));
 */
declare function N_0x7cdc8c3b89f661b3(playerPed: number, p1: string | number): void;

declare function N_0x7d395ea61622e116(p0: boolean): void;

declare function N_0x7d41e9d2d17c5b2d(p0: number): number;

/**
 * what does this native do?
 * Here's some pseudocode of the internal setter function:
 * __int64 __fastcall sub_140CD86B4(signed int vehicle, char a2, char a3)
 * {
 * char v3; // di@1
 * char v4; // bl@1
 * __int64 result; // rax@1
 * __int16 v6; // cx@3
 * v3 = a3;
 * v4 = a2;
 * result = GetScriptHandleAddressVehicleCheck(vehicle);
 * if ( result )
 * {
 * if ( v3 || (v6 = *(_WORD *)(result + 0xDA), (v6 &amp; 0xFu) - 6 &lt;= 1) )
 * {
 * *(_BYTE *)(result + 0x89B) &amp;= 0xDFu;
 * *(_BYTE *)(result + 0x89B) |= 32 * (v4 &amp; 1);
 * }
 * }
 * return result;
 * }
 * Now it's time for you to find out :P
 */
declare function N_0x7d6f9a3ef26136a0(vehicle: number, p1: boolean, p2: boolean): void;

/**
 * i found this function just like VEHICLE::TRACK_VEHICLE_VISIBILITY
 * example:
 * PED::_0x7D7A2E43E74E2EB8(ped);// TRACK_PED_VISIBILITY
 * if (PED::IS_TRACKED_PED_VISIBLE(ped))
 * {
 * }
 */
declare function N_0x7d7a2e43e74e2eb8(p0: number): void;

declare function N_0x7db53b37a2f211a0(): number;

declare function N_0x7e17be53e1aaabaf(): [number, number, number];

declare function N_0x7e2bd3ef6c205f09(p0: number, p1: number): void;

declare function N_0x7e6946f68a38b74f(p0: number): number;

declare function N_0x7ec6f9a478a6a512(): void;

/**
 * _PLAYSTATS_ROB_ARMOURD_TRUCK
 */
declare function N_0x7eec2a316c250073(p0: number, p1: number, p2: number): void;

declare function N_0x7f2c4cdf2e82df4c(p0: number): number;

declare function N_0x7f2f4f13ac5257ef(p0: number): number;

declare function N_0x7f8f6405f4777af6(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean): number;

declare function N_0x7f96f23fa9b73327(modelHash: string | number): void;

declare function N_0x7fa5d82b8f58ec06(): number;

declare function N_0x7fcc39c46c3c03bd(p0: number): number;

declare function N_0x7fd2990af016795e(p2: number, p3: number, p4: number): [number, number, number];

declare function N_0x80054d7fcc70eec6(p0: number): void;

declare function N_0x806058bbdc136e06(): void;

declare function N_0x8098c8d6597aae18(p0: number): number;

/**
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function N_0x80c2fd58d720c801(inputGroup: number, control: number, p2: boolean): string;

/**
 * gets some camera fov
 */
declare function N_0x80ec114669daeff4(): number;

declare function N_0x80fe4f3ab4e1b62a(): void;

declare function N_0x8147fff6a718e1ad(p0: number): number;

/**
 * UI::_817B86108EB94E51(1, &amp;g_189F36._f10CD1[0 -- [[16]] ], &amp;g_189F36._f10CD1[1 -- [[16]] ], &amp;g_189F36._f10CD1[2 -- [[16]] ], &amp;g_189F36._f10CD1[3 -- [[16]] ], &amp;g_189F36._f10CD1[4 -- [[16]] ], &amp;g_189F36._f10CD1[5 -- [[16]] ], &amp;g_189F36._f10CD1[6 -- [[16]] ], &amp;g_189F36._f10CD1[7 -- [[16]] ]);
 */
declare function N_0x817b86108eb94e51(p0: boolean): [number, number, number, number, number, number, number, number];

declare function N_0x81cbae94390f9f89(): void;

/**
 * "GET_OBJ_ENTITY" seems highly unlikely.
 */
declare function N_0x82377b65e943f72d(p0: number): number;

/**
 * Only found 2 times in decompiled scripts. Not a whole lot to go off of.
 * GAMEPLAY::_8269816F6CFD40F8(&amp;a_0._f1F5A._f6[0 -- [[8]] ], "TEMPSTAT_LABEL"); // gets saved in a struct called "g_SaveData_STRING_ScriptSaves"
 * GAMEPLAY::_8269816F6CFD40F8(&amp;a_0._f4B4[v_1A -- [[8]] ], &amp;v_5); // where v_5 is "Name0" thru "Name9", gets saved in a struct called "OUTFIT_Name"
 */
declare function N_0x8269816f6cfd40f8(name: string): number;

/**
 * HUD_COLOUR_CONTROLLER_CHOP = 174;
 * UI::GET_HUD_COLOUR(174, &amp;v_6, &amp;v_7, &amp;v_8, &amp;v_9);
 * CONTROLS::_8290252FFF36ACB5(0, v_6, v_7, v_8);
 */
declare function N_0x8290252fff36acb5(p0: number, red: number, green: number, blue: number): void;

declare function N_0x82cedc33687e1f50(p0: boolean): void;

declare function N_0x82ebb79e258fa2b7(entity: number, interiorID: number): void;

/**
 * only documented to be continued...
 */
declare function N_0x82fde6a57ee4ee44(ped: number, weaponhash: string | number, p2: number, p3: number, p4: number, p5: boolean): number;

declare function N_0x83a169eabcdb10a2(p0: number, p1: number): void;

declare function N_0x83b8201ed82a9a2d(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Saves a JSON file? It might even be saving it to the Rockstar Cloud, but I have no way of verifying this
 * "shrinkletter.c4", line ~378:
 * DATAFILE::DATAFILE_CREATE();
 * v_5 = DATAFILE::_GET_ROOT_OBJECT();
 * DATAFILE::_OBJECT_VALUE_ADD_INTEGER(v_5, "in", a_2);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "st", &amp;a_2._f1);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "mp", &amp;a_2._f2);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "ms", &amp;a_2._f3);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "sc", &amp;a_2._f5);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "pr", &amp;a_2._f6);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "fa", &amp;a_2._f7);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "sm", &amp;a_2._f8);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "kp", &amp;a_2._f9);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "sv", &amp;a_2._fA);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "yo", &amp;a_2._fB);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "fi", &amp;a_2._fC);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "rc", &amp;a_2._fD);
 * DATAFILE::_OBJECT_VALUE_ADD_STRING(v_5, "co", &amp;a_2._fE);
 * DATAFILE::_OBJECT_VALUE_ADD_INTEGER(v_5, "su", a_2._fF);
 * DATAFILE::_83BCCE3224735F05("gta5/psych/index.json"); // saves the file?
 */
declare function N_0x83bcce3224735f05(filename: string): number;

declare function N_0x83f28ce49fbbffba(p0: number, p1: number, p2: boolean): number;

declare function N_0x83fe8d7229593017(): void;

/**
 * sfink: from scripts:
 * func_720(socialclub::_0x8416FE4E4629D7D7("bIgnoreCheaterOverride"));
 * func_719(socialclub::_0x8416FE4E4629D7D7("bIgnoreBadSportOverride"));
 */
declare function N_0x8416fe4e4629d7d7(p0: string): number;

declare function N_0x84698ab38d0c6636(hash: string | number): number;

declare function N_0x84de3b5fb3e666f0(p0: number): number;

declare function N_0x851cd923176eba7c(): void;

declare function N_0x85535acf97fc0969(p0: number): number;

declare function N_0x855bc38818f6f684(): number;

declare function N_0x85a0ef54a500882c(p0: number): number;

declare function N_0x85b6c850546fdde2(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;

declare function N_0x85f6c9aba1de2bcf(): number;

declare function N_0x869daacbbe9fa006(): number;

declare function N_0x86e0660e4f5c956d(): void;

declare function N_0x876928dddfccc9cd(): number;

declare function N_0x87e0052f08bd64e6(p0: number, p1: number): number;

declare function N_0x87e5c46c187fe0ae(p0: number, p1: number): number;

declare function N_0x8806cebfabd3ce05(p0: number): number;

declare function N_0x8817605c2ba76200(): void;

declare function N_0x883d79c4071e18b3(): number;

declare function N_0x88578f6ec36b4a3a(p0: number, p1: number): number;

declare function N_0x886913bbeaca68c1(p0: number): number;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x88b588b41ff7868e(): number;

declare function N_0x88bc673ca9e0ae99(vehicle: number, p1: boolean): void;

/**
 * SET_PED_PATH_*
 * Could be the move speed on the path. Needs testing.
 * Default is 1.0 and maximum is 10.0
 */
declare function N_0x88e32db8c1a4aa4b(ped: number, p1: number): void;

/**
 * SET_LOCAL_PLAYER_*
 */
declare function N_0x88eaec617cd26926(p0: string | number, p1: boolean): void;

/**
 * Something to do with time, used in context:
 * NETWORK::GET_TIME_DIFFERENCE(NETWORK::_89023FBBF9200E9F(), ... )
 * sfink: returns the same value as NETWORK::GET_NETWORK_TIME in freemode.
 */
declare function N_0x89023fbbf9200e9f(): number;

declare function N_0x89215ec747df244a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

declare function N_0x892b6ab8f33606f5(p0: number, p1: number): void;

declare function N_0x8951eb9c6906d3c8(): void;

declare function N_0x897433d292b44130(): [number, number, number];

declare function N_0x89d630cf5ea96d23(vehicle: number, entity: number): number;

declare function N_0x8a35c742130c6080(p0: number): [number, number];

/**
 * One call found in the b617d scripts:
 * AUDIO::_8A694D7A68F8DC38(NETWORK::NET_TO_PED(l_3989._f26F[0 -- [[1]] ]), "CONV_INTERRUPT_QUIT_IT", "LESTER");
 */
declare function N_0x8a694d7a68f8dc38(p0: number, p1: string, p2: string): void;

/**
 * REQUEST_*
 * Something to do with interiors that have been loaded.
 * STREAMING::_8A7A40100EDFEC58(l_13BC, "V_FIB01_cur_elev");
 * STREAMING::_8A7A40100EDFEC58(l_13BC, "limbo");
 * STREAMING::_8A7A40100EDFEC58(l_13BB, "V_Office_gnd_lifts");
 * STREAMING::_8A7A40100EDFEC58(l_13BB, "limbo");
 * STREAMING::_8A7A40100EDFEC58(l_13BC, "v_fib01_jan_elev");
 * STREAMING::_8A7A40100EDFEC58(l_13BC, "limbo");
 */
declare function N_0x8a7a40100edfec58(interiorID: number, roomName: string): void;

declare function N_0x8aa464d4e0f6accd(): number;

declare function N_0x8aa9180de2fedd45(vehicle: number, p1: boolean): void;

declare function N_0x8abe8608576d9ce3(p0: number, p1: number, p2: number, p3: number): number;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x8b0c2964ba471961(): number;

declare function N_0x8bbacbf51da047a8(p0: number): void;

declare function N_0x8bd6c6dea20e82c6(p0: number): number;

/**
 * only documented to be continued...
 * Vector3 func_164(Vector3 vParam0, Vector3 vParam1)
 * {
 * return vParam0.y * vParam1.z - vParam0.z * vParam1.y, vParam0.z * vParam1.x - vParam0.x * vParam1.z, vParam0.x * vParam1.y - vParam0.y * vParam1.x;
 * }
 * float func_67(vector3 vParam0, vector3 vParam1)
 * {
 * return vParam0.x * vParam1.x + vParam0.y * vParam1.y + vParam0.z * vParam1.z;
 * }
 * float p3; Vector3 p4;
 * _0x64D91CED(coords0to.x, coords0to.y, coords0to.z, &amp;p3, &amp;p4);
 */
declare function N_0x8bdc7bfc57a81e76(x: number, y: number, z: number): [number, number, number[]];

declare function N_0x8bf907833be275de(p0: number, p1: number): void;

declare function N_0x8bfceb5ea1b161b6(): number;

declare function N_0x8c4f3bf23b6237db(ped: number, p1: boolean, p2: boolean): number;

declare function N_0x8c8d2739ba44af0f(p0: number): number;

declare function N_0x8cc469ab4d349b7c(p0: number, p1: string, p2: number): number;

/**
 * console hash: 0x19EC0001
 */
declare function N_0x8cde909a0370bb3a(p0: boolean): void;

/**
 * Maybe NETWORK_IS_PSN_AVAILABLE as it only applies to the PS4 version.
 */
declare function N_0x8d11e61a4abf49cc(): number;

declare function N_0x8d30f648014a92b5(): number;

/**
 * GAMEPLAY::_8D74E26F54B4E5C3("");
 */
declare function N_0x8d74e26f54b4e5c3(p0: string): void;

declare function N_0x8d7a43ec6a5fea45(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): number;

/**
 * Example of usage:
 * v_2 = SCRIPT::_30B4FA1C82DD4B9F(); // int _GET_ID_OF_NEXT_SCRIPT_IN_ENUMERATION()
 * CUTSCENE::_8D9DF6ECA8768583(v_2);
 */
declare function N_0x8d9df6eca8768583(p0: number): void;

declare function N_0x8e2a065abdae6994(): void;

declare function N_0x8ec74ceb042e7cff(p0: number): void;

declare function N_0x8ef5573a1f801a5c(p0: number): [number, number, number];

/**
 * Example, only occurrence in the scripts:
 * UI::_8EFCCF6EC66D85E4(&amp;v_23, &amp;v_13, &amp;v_13, 1, v_34);
 */
declare function N_0x8efccf6ec66d85e4(p3: boolean, p4: boolean): [number, number, number, number];

declare function N_0x8f08017f9d7c47bd(p0: number, p2: number): [number, number];

declare function N_0x8f5ea1c01d65a100(p0: number): number;

/**
 * No observed effect.
 */
declare function N_0x8f719973e1445ba2(vehicle: number, p1: boolean): void;

declare function N_0x8fa9c42fc5d7c64b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;

/**
 * Appears only in fm_mission_controller and used only 3 times.
 * ped was always PLAYER_PED_ID()
 * p1 was always true
 * p2 was always true
 */
declare function N_0x8fd89a6240813fd0(ped: number, p1: boolean, p2: boolean): void;

/**
 * SET_GPS_???
 */
declare function N_0x900086f371220b6f(p0: boolean, p1: number, p2: number): void;

declare function N_0x9007a2f21dc108d4(p0: number, p1: number): void;

declare function N_0x9049fe339d5f6f6f(): number;

declare function N_0x90a6526cf0381030(p0: number, p2: number, p3: number): [number, number];

declare function N_0x90a78ecaa4e78453(): number;

declare function N_0x90d0622866e80445(p0: number, p1: string): void;

/**
 * return bool according to scripts
 */
declare function N_0x9135584d09a3437e(): number;

declare function N_0x918c7b2d2ff3928b(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function N_0x919b3c98ed8292f9(p0: number): number;

declare function N_0x91a0bd635321f145(vehicle: number, p1: boolean): void;

/**
 * bool?
 * am_crate_drop.c
 * &lt;...&gt;
 * if (network::_network_are_ros_available())
 * {
 * if (network::_0x91B87C55093DE351())
 * &lt;..&gt;
 */
declare function N_0x91b87c55093de351(): number;

declare function N_0x91d6dd290888cbab(): number;

declare function N_0x91ef6ee6419e5b97(p0: boolean): void;

declare function N_0x920d853f3e17f1da(interiorID: number, roomHashKey: string | number): void;

declare function N_0x921ce12c489c4c41(PlayerID: number): number;

declare function N_0x9237e334f6e43156(p0: number): number;

declare function N_0x9245e81072704b8a(p0: boolean): void;

declare function N_0x92523b76657a517d(p0: number, p1: number): number;

/**
 * I can 100% confirm this is some kind of START_* native.
 * Next character in the name is either C, D or E.
 * Used only once in the scripts (benchmark.ysc).
 */
declare function N_0x92790862e36c2ada(): void;

declare function N_0x92aefb5f6e294023(object: number, p1: boolean, p2: boolean): void;

declare function N_0x92ccc17a7a2285da(): void;

declare function N_0x92da6e70ef249bd1(p0: string, p1: number): number;

/**
 * Unknown.
 * Seems to return either 0, 1, or -1.
 */
declare function N_0x930de22f07b1cce3(p0: number): number;

declare function N_0x933bbeeb8c61b5f4(): number;

declare function N_0x941e5306bcd7c2c7(): number;

declare function N_0x94538037ee44f5cf(p0: boolean): void;

declare function N_0x9465e683b12d3f6b(): void;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0x9489659372a81585(): number;

declare function N_0x949f397a288b28b3(p0: number): void;

/**
 * NETWORK_IS_*
 */
declare function N_0x94a8394d150b013a(): number;

/**
 * Needs more research. Possibly used to calculate the "mask" when calling "STAT_SET_MASKED_INT"?
 */
declare function N_0x94f12abf9c79e339(p0: number): number;

declare function N_0x952f06beecd775cc(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x953563ce563143af(p0: number): number;

declare function N_0x95a7dabddbb78ae7(): [number, number];

/**
 * in the decompiled scripts, seems to be always called on the vehicle right after being attached to a trailer.
 */
declare function N_0x95cf53b3d687f9fa(vehicle: number): void;

declare function N_0x95cf81bd06ee1887(): void;

declare function N_0x9614b71f8adb982b(): number;

declare function N_0x966dd84fb6a46017(): void;

declare function N_0x967278682cb6967a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9689123e3f213aa5(): number;

/**
 * SET_VEHICLE_DOORS_LOCKED_FOR_*
 */
declare function N_0x9737a37136f07e75(vehicle: number, toggle: boolean): void;

declare function N_0x973d76aa760a6cb6(p0: boolean): void;

declare function N_0x975d66a0bc17064c(p0: number): void;

/**
 * p4 and p5 are always 0 in scripts
 */
declare function N_0x9769f811d1785b03(player: number, x: number, y: number, z: number, p4: boolean, p5: boolean): void;

/**
 * gets some camera far depth of field
 */
declare function N_0x9780f32bcaf72431(): number;

declare function N_0x97e7e2c04245115b(p0: number): void;

declare function N_0x98215325a695e78a(p0: boolean): void;

/**
 * It's called after 0xD3A10FC7FD8D98CD and 0xF1CEA8A4198D8E9A
 * p0 was always "CELEBRATION_WINNER"
 */
declare function N_0x98c4fe6ec34154ca(p0: string, ped: number, p2: number, posX: number, posY: number, posZ: number): number;

declare function N_0x98e2bc1ca26287c3(): void;

declare function N_0x98edf76a7271e4f2(): void;

declare function N_0x9911f4a24485f653(p0: boolean): void;

declare function N_0x993cbe59d350d225(p0: number): number;

declare function N_0x996dd1e1e02f1008(): number;

declare function N_0x99ac7f0d8b9c893d(p0: number): void;

declare function N_0x99ad4cccb128cbc9(vehicle: number): void;

/**
 * console hash: 0x99F58A07
 */
declare function N_0x99b72c7abde5c910(ped: number, player: number): number;

declare function N_0x99cad8e7afdb60fa(vehicle: number, p1: number, p2: number): void;

declare function N_0x9a62ec95ae10e011(): number;

/**
 * Example gotten from chinese2.c4
 * VEHICLE::_9A75585FB2E54FAD(2004.4471435546875, 3076.806640625, 46.60689926147461, 10.0);
 */
declare function N_0x9a75585fb2e54fad(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0x9a77dfd295e29b09(p0: number, p1: boolean): void;

declare function N_0x9aa47fff660cb932(p0: number, p1: number): void;

declare function N_0x9ac92eed5e4793ab(): void;

declare function N_0x9b079e5221d984d3(p0: boolean): void;

declare function N_0x9b2bd3773123ea2f(_type: number, toggle: boolean): void;

declare function N_0x9b4bd21d69b1e609(): void;

declare function N_0x9b6e70c5ceef4eeb(p0: number): number;

declare function N_0x9ba001cb45cbf627(doorHash: string | number, heading: number, p2: boolean, p3: boolean): void;

/**
 * Console Hash: 0x50CDB295
 */
declare function N_0x9bddc73cc6a115d4(vehicle: number, p1: boolean, p2: boolean): void;

declare function N_0x9becd4b9fef3f8a6(vehicle: number, p1: boolean): void;

/**
 * Gets some kind of data related to missions like the online player created races n stuff
 */
declare function N_0x9bf438815f5d96ea(p0: number, p1: number, p3: number, p4: number, p5: number): [number, number];

declare function N_0x9c6a6c19b6c0c496(p0: number, p1: number): number;

declare function N_0x9cb0bfa7a9342c3d(p0: number, p1: boolean): number;

/**
 * Only appeared in Golf &amp; Golf_mp. Parameters were all ptrs
 */
declare function N_0x9cfdd90b2b844bf7(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0x9d3af56e94c9ae98(p0: number, p1: number): void;

declare function N_0x9d728c1e12bf5518(p0: number): number;

declare function N_0x9d7afcbf21c51712(p0: boolean): void;

declare function N_0x9d8d44adbba61ef2(p0: boolean): void;

/**
 * Found in the b617d scripts:
 * PED::_9DBA107B4937F809(v_7, "trevor_heist_cover_2h");
 */
declare function N_0x9dba107b4937f809(p0: number, p1: string): void;

declare function N_0x9e30e91fb03a2caf(): [number, number, number];

declare function N_0x9e4cfff989258472(): void;

/**
 * Only found 4 times in Rockstar scripts.
 * Clearly has something to do with Cutscenes.
 */
declare function N_0x9e6542f0ce8e70a3(toggle: boolean): void;

/**
 * UI::0x7AD67C95("Gallery");
 * UI::0x7AD67C95("Missions");
 * UI::0x7AD67C95("General");
 * UI::0x7AD67C95("Playlists");
 */
declare function N_0x9e778248d6685fe0(p0: string): void;

/**
 * p2 - mainly set as false in scripts
 */
declare function N_0x9ebc85ed0fffe51c(entity: number, p1: boolean, p2: boolean): void;

declare function N_0x9edd76e87d5d51ba(player: number): void;

declare function N_0x9f3f689b814f2599(vehicle: number, p1: boolean): void;

declare function N_0x9f5e6bb6b34540da(p0: number): void;

declare function N_0x9f6e2821885caee2(p0: number, p1: number, p2: number): [number, number, number];

declare function N_0x9fedf86898f100e9(): number;

declare function N_0xa01bc64dd4bfbbac(vehicle: number, p1: number): number;

/**
 * gets some camera near depth of field
 */
declare function N_0xa03502fc581f7d9b(): number;

declare function N_0xa049a5be0f04f2f8(): number;

declare function N_0xa071e0ed98f91286(p0: number, p1: number): void;

declare function N_0xa08fe5e49bdc39dd(p0: number, p1: number, p2: boolean): void;

declare function N_0xa097ab275061fb21(): number;

declare function N_0xa09f896ce912481f(p0: boolean): number;

declare function N_0xa0cefcea390aab9b(p0: number): void;

declare function N_0xa0f93d5465b3094d(p0: number): number;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0xa0fa4ec6a05da44e(): number;

declare function N_0xa0fe76168a189ddb(): number;

declare function N_0xa134777ff7f33331(p0: number, p1: number): number;

declare function N_0xa13c11e1b5c06bfc(): void;

declare function N_0xa13e93403f26c812(p0: number): number;

declare function N_0xa1607996431332df(netId: number): number;

declare function N_0xa17bad153b51547e(cargobob: number, p1: number): void;

declare function N_0xa1c996c2a744262e(p0: number): number;

declare function N_0xa1e5e0204a6fcc70(): void;

/**
 * MulleDK19: This function is hard-coded to always return 1.
 */
declare function N_0xa213b11dff526300(): number;

declare function N_0xa21c118553bbdf02(p0: number): void;

declare function N_0xa238192f33110615(): [number, number, number, number];

declare function N_0xa2767257a320fc82(p0: number, p1: boolean): void;

declare function N_0xa277800a9eae340e(): number;

declare function N_0xa2c1f5e92afe49ed(): void;

/**
 * Needs more research. If the "phone_cam12" filter is applied, this function is called with "TRUE"; otherwise, "FALSE".
 * Example (XBOX 360):
 * // check current filter selection
 * if (GAMEPLAY::ARE_STRINGS_EQUAL(getElem(g_2471024, &amp;l_17, 4), "phone_cam12") != 0)
 * {
 * MOBILE::_0xC273BB4D(0); // FALSE
 * }
 * else
 * {
 * MOBILE::_0xC273BB4D(1); // TRUE
 * }
 */
declare function N_0xa2ccbe62cd4c91a4(toggle: number): void;

declare function N_0xa2e9c1ab8a92e8cd(p0: boolean): void;

declare function N_0xa2f952104fc6dd4b(p0: number): number;

declare function N_0xa306f470d1660581(): number;

declare function N_0xa31fd15197b192bd(): number;

declare function N_0xa356990e161c9e65(p0: boolean): void;

declare function N_0xa3a9299c4f2adb98(p0: number): void;

/**
 * Only called once in the scripts:
 * if (sub_1abd() &amp;&amp; (!PED::_A3F3564A5B3646C0(l_8C))) {
 * if (sub_52e3("RESNA_CELLR", 0)) {
 * PED::SET_PED_CAN_PLAY_GESTURE_ANIMS(l_8C, 1);
 * PED::SET_PED_CAN_PLAY_AMBIENT_ANIMS(l_8C, 1);
 * PED::SET_PED_CAN_PLAY_VISEME_ANIMS(l_8C, 1, 0);
 * l_184 += 1;
 * }
 * }
 */
declare function N_0xa3f3564a5b3646c0(ped: number): number;

declare function N_0xa41bcd7213805aac(p0: boolean): void;

declare function N_0xa44ff770dfbc5dae(): void;

declare function N_0xa4664972a9b8f8ba(p0: number): number;

declare function N_0xa46b73faa3460ae1(p0: boolean): void;

declare function N_0xa4819f5e23e2ffad(): number;

declare function N_0xa4822f1cf23f4810(p1: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): [number, number[], number[]];

declare function N_0xa48931185f0536fe(): number;

declare function N_0xa4a0065e39c9f25c(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xa4dede28b1814289(): void;

declare function N_0xa51c4b86b71652ae(p0: boolean): void;

declare function N_0xa52d5247a4227e14(p0: number): void;

declare function N_0xa5342d390cda41d6(p0: number, p1: boolean): void;

declare function N_0xa586fbeb32a53dbb(): number;

declare function N_0xa5c80d8e768a9e66(p0: number): number;

/**
 * NOTE: 'p1' might be some kind of array.
 */
declare function N_0xa5efc3e847d60507(p0: string, p1: string, p2: string, p3: string, p4: boolean): number;

declare function N_0xa5f377b175a699c5(p0: number): void;

declare function N_0xa635c11b8c44afc2(): number;

declare function N_0xa6385deb180f319f(p0: number, p1: number, p2: number): void;

declare function N_0xa660faf550eb37e5(p0: number, p1: boolean): void;

declare function N_0xa67c35c56eb1bd9d(): number;

/**
 * Displays a bunch of icons above the players name, and level, and their name twice
 */
declare function N_0xa67f9c46d612b6f1(headDisplayId: number, p1: boolean): void;

declare function N_0xa68d3d229f4f3b06(p0: string): void;

declare function N_0xa699957e60d80214(p0: number): number;

declare function N_0xa69ac4ade82b57a4(p0: number): number;

/**
 * Appears to remove stealth kill action from memory
 */
declare function N_0xa6a12939f16d85be(hash: string | number, p1: boolean): void;

declare function N_0xa72835064dd63e4c(): number;

declare function N_0xa735353c77334ea0(): [number, number];

declare function N_0xa736cf7fb7c5bff4(): [number, number, number, number];

/**
 * Called 4 times in the b617d scripts:
 * GAMEPLAY::_A74802FB8D0B7814("CONTRAILS", 0);
 */
declare function N_0xa74802fb8d0b7814(p0: string, p1: number): void;

declare function N_0xa75e2b6733da5142(): number;

declare function N_0xa76359fc80b2438e(p0: number): void;

declare function N_0xa7862bc5ed1dfd7e(p0: number, p1: number): [number, number, number];

/**
 * STATS::0xE3247582(0);
 * STATS::0xE3247582(1);
 * STATS::0xE3247582(2);
 * STATS::0xE3247582(3);
 * STATS::0xE3247582(4);
 * STATS::0xE3247582(5);
 * STATS::0xE3247582(6);
 */
declare function N_0xa78b8fa58200da56(p0: number): void;

declare function N_0xa7a1127490312c36(p0: number): void;

declare function N_0xa7dcdf4ded40a8f4(vehicle: number, p1: boolean): void;

/**
 * NETWORK_OVERRIDE_???
 */
declare function N_0xa7e30de9272b6d49(ped: number, x: number, y: number, z: number, p4: number): void;

/**
 * Found in scripts:
 * if (AI::_A7FFBA498E4AAF67(l_9BC, "Run")) {
 * if (AI::_A7FFBA498E4AAF67(l_9BC, "Escape")) {
 * p0 is probably Ped and this native checks if the ped is doing the AI task in p1. Just a guess though.
 */
declare function N_0xa7ffba498e4aaf67(p0: number, p1: string): number;

/**
 * p1 always false.
 */
declare function N_0xa80ae305e0a3044f(entity: number, p1: boolean): void;

declare function N_0xa8434f1dff41d6e7(p0: number): void;

declare function N_0xa85a21582451e951(doorHash: string | number, p1: boolean): void;

declare function N_0xa8733668d1047b51(p0: number): void;

declare function N_0xa8acb6459542a8c8(): number;

declare function N_0xa8fdb297a8d25fba(): void;

declare function N_0xa905192a6781c41b(x: number, y: number, z: number): void;

declare function N_0xa9240a96c74cca13(p0: number): number;

declare function N_0xa9b61a329bfdcbea(p0: number, p1: boolean): void;

declare function N_0xa9cbfd40b3fa3010(): number;

declare function N_0xa9f9c2e0fde11cbb(p0: number, p1: number, p2: number): number;

declare function N_0xaa19f5572c38b564(p0: number): number;

declare function N_0xaa76052dda9bfc3e(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

/**
 * console hash: 0xFD0F7EDD
 */
declare function N_0xaaa553e7dd28a457(p0: boolean): void;

declare function N_0xaaa6a3698a69e048(p0: number): number;

declare function N_0xab04325045427aae(vehicle: number, p1: boolean): void;

declare function N_0xab13a5565480b6d9(p0: number, p1: number): number;

declare function N_0xabb2fa71c83a1b72(): number;

/**
 * Only one occurence in the scripts:
 * auto sub_cb43(auto a_0, auto a_1) {
 * if (g_2594CB._f1) {
 * if (NETWORK::_855BC38818F6F684()) {
 * NETWORK::_ABD5E88B8A2D3DB2(&amp;a_0._fB93);
 * g_2594CB._f14 -- [[{13}]]  = a_0._fB93;
 * g_2594CB._f4 -- [["64"]]  = a_1;
 * return 1;
 * }
 * }
 * return 0;
 * }
 * other:
 * looks like it passes a player in the paramater
 * Contains string "NETWORK_VOICE_CONNECT_TO_PLAYER" in ida
 */
declare function N_0xabd5e88b8a2d3db2(globalPtr: number): void;

declare function N_0xac2890471901861c(p0: number): void;

/**
 * For planes only!
 * value can be 1.0 or lower (higher values will automatically result in 1.0).
 */
declare function N_0xad2d28a1afdff131(vehicle: number, value: number): void;

declare function N_0xad5fdf34b81bfe79(): void;

declare function N_0xad6875bbc0fc899c(p0: number): void;

/**
 * This has been found in use in the decompiled files.
 */
declare function N_0xad73ce5a09e42d12(player: number): number;

declare function N_0xadb57e5b663cca8b(p0: number): [number, number];

declare function N_0xaddd1c754e2e2914(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number): void;

declare function N_0xaded7f5748acafe6(): void;

declare function N_0xae3fee8709b39dcb(vehicle: number): number;

declare function N_0xae51bc858f32ba66(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xaeab987727c5a8a4(p0: number): number;

declare function N_0xaeef48cdf5b6ce7c(p0: number, p1: number): number;

/**
 * Possible p0 values:
 * "prologue"
 * "Prologue_Main"
 */
declare function N_0xaf12610c644a35c9(p0: string, p1: boolean): void;

/**
 * Exemple of use(carmod_shop.c4)
 * INTERIOR::_AF348AFCB575A441("V_CarModRoom");
 */
declare function N_0xaf348afcb575a441(roomName: string): void;

declare function N_0xaf42195a42c63bba(): number;

declare function N_0xaf66dcee6609b148(): void;

declare function N_0xafc976fd0580c7b3(ped: number, toggle: boolean): void;

declare function N_0xaff4710e2a0a6c12(ped: number): void;

declare function N_0xb055a34527cb8fd7(vehicle: number, p1: boolean): void;

declare function N_0xb07d3185e11657a5(p0: number): number;

declare function N_0xb088e9a47ae6edd5(vehicle: number, p1: boolean): void;

declare function N_0xb08b85d860e7ba3c(p0: number, p1: number, p2: number): void;

declare function N_0xb094bc1db4018240(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Examples:
 * AI::_B0A6CFD2C69C1088(PLAYER::PLAYER_PED_ID(), "isFirstPerson", 0);
 * AI::_B0A6CFD2C69C1088(PLAYER::PLAYER_PED_ID(), "isFirstPerson", 1);
 * AI::_B0A6CFD2C69C1088(PLAYER::PLAYER_PED_ID(), "isBlocked", sub_179027());
 */
declare function N_0xb0a6cfd2c69c1088(p0: number, p2: boolean): number;

declare function N_0xb0c56bd3d808d863(p0: boolean): void;
declare function GetBroadcastFinshedLosSound(p0: boolean): void;

/**
 * Has something to do with player switch.
 * Only possible values:
 * - "CSM_ST_BOX3x3"
 */
declare function N_0xb11d94bc55f41932(p0: string): void;

/**
 * p0 is the handle returned from _0xFDBF4CDBC07E1706
 * console hash: 0x7DBCEF6F
 * Most likely REMOVE_CURRENT_*
 */
declare function N_0xb1252e3e59a82aaf(p0: number): void;

declare function N_0xb129e447a2eda4bf(p0: number, p1: boolean): void;

declare function N_0xb13e88e655e5a3bc(): void;

declare function N_0xb1577667c3708f9b(): void;

declare function N_0xb1b6216ca2e7b55e(p0: number, p1: boolean, p2: boolean): void;

/**
 * 12 matches across 4 scripts. All 4 scripts were job creators.
 * type ranged from 0 - 2.
 * p4 was always 0.2f. Likely scale.
 * assuming p5 - p8 is RGBA, the graphic is always yellow (255, 255, 0, 255).
 * Tested but noticed nothing.
 */
declare function N_0xb1bb03742917a5d6(_type: number, xPos: number, yPos: number, zPos: number, p4: number, red: number, green: number, blue: number, alpha: number): void;

declare function N_0xb1d2bb1e1631f5b1(): number;

/**
 * This native doesn't seem to do anything, might be a debug-only native.
 * Confirmed, it is a debug native.
 */
declare function N_0xb264c4d2f2b0a78b(vehicle: number): void;

/**
 * No observed effect.
 */
declare function N_0xb28b1fe5bfadd7f5(vehicle: number, p1: boolean): void;

declare function N_0xb2a592b04648a9cb(): number;

declare function N_0xb2aff10216defa2f(x: number, y: number, z: number, p3: number, p4: number, p5: number, p6: number, interiorFlags: number, scale: number, duration: number): void;

declare function N_0xb2d0bde54f0e8e5a(object: number, toggle: boolean): void;

declare function N_0xb2ebe8cbc58b90e9(): number;

declare function N_0xb309ebea797e001f(p0: number): number;

/**
 * This line found 48 times in the scripts:
 * GAMEPLAY::_B335F761606DB47C(&amp;v_4, &amp;v_7, a_0, v_A);
 */
declare function N_0xb335f761606db47c(p2: number, p3: boolean): [number, number, number];

declare function N_0xb37e4e6a2388ca7b(): number;

declare function N_0xb3c641f3630bf6da(p0: number): void;

declare function N_0xb3cd58cca6cda852(): void;

/**
 * This function is hard-coded to always return 1.
 */
declare function N_0xb3da2606774a8e2d(): number;

declare function N_0xb3e6360dde733e82(p0: number): void;

declare function N_0xb4271092ca7edf48(p0: number): number;

/**
 * PLAYER::0xBF6993C7(rPtr((&amp;l_122) + 71)); // Found in decompilation
 * ***
 * In "am_hold_up.ysc" used once:
 * l_8d._f47 = GAMEPLAY::GET_RANDOM_FLOAT_IN_RANGE(18.0, 28.0);
 * PLAYER::_B45EFF719D8427A6((l_8d._f47));
 */
declare function N_0xb45eff719d8427a6(p0: number): void;

declare function N_0xb475f27c6a994d65(): void;

/**
 * Found in the b617d scripts, duplicates removed:
 * AUDIO::_B4BBFD9CD8B3922B("V_CARSHOWROOM_PS_WINDOW_UNBROKEN");
 * AUDIO::_B4BBFD9CD8B3922B("V_CIA_PS_WINDOW_UNBROKEN");
 * AUDIO::_B4BBFD9CD8B3922B("V_DLC_HEIST_APARTMENT_DOOR_CLOSED");
 * AUDIO::_B4BBFD9CD8B3922B("V_FINALEBANK_PS_VAULT_INTACT");
 * AUDIO::_B4BBFD9CD8B3922B("V_MICHAEL_PS_BATHROOM_WITH_WINDOW");
 */
declare function N_0xb4bbfd9cd8b3922b(p0: string): void;

/**
 * This does not take a weapon hash...
 */
declare function N_0xb4c8d77c80c0421e(ped: number, p1: number): number;

declare function N_0xb4f47213df45a64c(p0: number, p1: number): number;

declare function N_0xb50eb4ccb29704ac(p0: number): void;

declare function N_0xb51b9ab9ef81868c(toggle: boolean): void;

declare function N_0xb542de8c3d1cb210(p0: boolean): void;

/**
 * "Can request assets for cutscene entity"? (found in decompiled scripts)
 */
declare function N_0xb56bbbcc2955d9cb(): number;

declare function N_0xb57a49545ba53ce7(p0: number): number;

declare function N_0xb5a4db34fe89b88a(): void;

declare function N_0xb5d3453c98456528(): number;

declare function N_0xb606e6cc59664972(p0: number): void;

declare function N_0xb6871b0555b02996(p2: number, p5: number): [number, number, number, number, number];

declare function N_0xb695e2cd0a2da9ee(): void;

declare function N_0xb743f735c03d7810(p0: number, p1: number): void;

declare function N_0xb746d20b17f2a229(): [number, number, number];

declare function N_0xb782f8238512bad5(p0: number, p1: number): void;

declare function N_0xb7c7f6ad6424304b(): void;

declare function N_0xb7ed70c49521a61d(p0: number): void;

declare function N_0xb8721407ee9c3ff6(p0: number, p1: number, p2: number): void;

/**
 * Old Gen: 0x47D6004E
 * Disables something. Used only once in R* scripts (freemode.ysc).
 */
declare function N_0xb885852c39cc265d(): void;

/**
 * if (!$B8B52E498014F5B0(PLAYER::PLAYER_PED_ID())) {
 */
declare function N_0xb8b52e498014f5b0(ped: number): number;

declare function N_0xb8f87ead7533b176(p0: number): void;

declare function N_0xb9449845f73f5e9c(functionName: string): number;

declare function N_0xb9854dfde0d833d6(p0: number): void;

declare function N_0xb99c4e4d9499df29(p0: boolean): void;

/**
 * Seem to return bool
 */
declare function N_0xb9cf1f793a9f1bf1(): number;

/**
 * Every p2 - p5 occurrence was 0f.
 */
declare function N_0xba3d65906822bed5(p0: boolean, p1: boolean, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xba4b8d83bdc75551(p0: number): void;

declare function N_0xba63d9fe45412247(ped: number, p1: boolean): number;

declare function N_0xba751764f0821256(): void;

declare function N_0xba8d65c1c65702e5(p0: boolean): void;

declare function N_0xba96394a0eecfa65(): void;

declare function N_0xba9775570db788cf(): number;

declare function N_0xbae4f9b97cd43b30(p0: boolean): void;

declare function N_0xbaf6babf9e7ccc13(p0: number, p1: number): number;

declare function N_0xbb0527ec6341496d(): number;

declare function N_0xbb90e12cac1dab25(p0: number): void;

declare function N_0xbbb45c3cf5c8aa85(): number;

declare function N_0xbbdf066252829606(p0: number, p1: boolean): void;

declare function N_0xbbf327ded94e4deb(p0: string): void;

/**
 * var num3 = PLAYER::GET_PLAYER_PED(l_2171); // proof l_2171 is a player
 * var num17 = PLAYER::0x9DF75B2A(l_2171, 100, 0); // l_2171
 * .ysc:
 * if (PLAYER::GET_PLAYER_WANTED_LEVEL(l_6EF) &lt; v_4) { // l_6EF is a player
 * PLAYER::SET_PLAYER_WANTED_LEVEL(l_6EF, v_4, 0); // l_6EF
 * PLAYER::SET_PLAYER_WANTED_LEVEL_NOW(l_6EF, 0); // l_6EF
 * } else {
 * PLAYER::_4669B3ED80F24B4E(l_6EF); // l_6EF
 * UI::_BA8D65C1C65702E5(1);
 * a_0 = 1;
 * }
 * if (l_4B24[l_6F2 -- [[156]] ]._f8C != PLAYER::_BC0753C9CA14B506(l_6EF, 100, 0)) { // l_6EF
 * l_4B24[l_6F2 -- [[156]] ]._f8C = PLAYER::_BC0753C9CA14B506(l_6EF, 100, 0); // l_6EF
 * }
 * Both was taken from fm_mission_controller
 * GET_PLAYER_*
 */
declare function N_0xbc0753c9ca14b506(player: number, p1: number, p2: boolean): number;

/**
 * Most likely ROPE_ATTACH_*
 */
declare function N_0xbc0ce682d4d05650(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): void;

declare function N_0xbc1cc91205ec8d6e(): number;

declare function N_0xbc3cca5844452b06(p0: number): void;

/**
 * Seems to only appear in scripts used in Singleplayer.
 * AI_PHONE_ARGS is a hash collision!!!
 * Always used like this in scripts
 * PLAYER::_BC9490CA15AEA8FB(PLAYER::PLAYER_ID());
 */
declare function N_0xbc9490ca15aea8fb(player: number): void;

declare function N_0xbc9823ab80a3dcac(): number;

declare function N_0xbce595371a5fbaaf(p0: number, p1: boolean): void;

declare function N_0xbcedb009461da156(): number;

declare function N_0xbcfc632db7673bf0(p0: number, p1: number): void;

declare function N_0xbd0be0bfc927eac1(): void;

/**
 * MulleDK19: This function is hard-coded to always return 1.
 */
declare function N_0xbd545d44cce70597(): number;

declare function N_0xbd605b8e0e18b3bb(): void;

declare function N_0xbdb6f89c729cf388(): number;

declare function N_0xbdeb86f4d5809204(p0: number): void;

/**
 * This function is hard-coded to always return 0.
 */
declare function N_0xbe197eaa669238f4(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xbe5c1255a1830ff5(vehicle: number, toggle: boolean): void;

declare function N_0xbeb2d9a1d9a8f55a(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xbeb3d46bb7f043c0(p0: number): void;

declare function N_0xbed8ca5ff5e04113(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xbed9f5693f34ed17(statName: string | number, p1: number, outValue: number): number;

declare function N_0xbef34b1d9624d5dd(p0: boolean): void;

declare function N_0xbf09786a7fcab582(p0: number): number;

declare function N_0xbf22e0f32968e967(player: number, p1: boolean): void;

declare function N_0xbf4dc1784be94dfa(p0: number, p1: boolean, p2: number): void;

declare function N_0xbf4f34a85ca2970c(): void;

/**
 * Something to do with timecycles.
 */
declare function N_0xbf59707b3e5ed531(p0: string): void;

declare function N_0xbf72910d0f26f025(): number;

declare function N_0xbfa0a56a817c6c7d(p0: boolean): void;

/**
 * GET_VEHICLE_MODEL_MAX_*
 * max braking if air vehicle, else max braking + 0.1
 * -------------------
 * For a full list, see here: pastebin.com/Cb9L1Cn0
 */
declare function N_0xbfba3ba79cff7ebf(modelHash: string | number): number;

/**
 * Since latest patches has 18 parameters.
 * Console Hash: 0xCCDC33CC
 * only documented to be continued...
 */
declare function N_0xbfe5756e7407064a(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number, entity: number, p14: boolean, p15: boolean, p16: boolean, p17: boolean): void;

declare function N_0xc0416b061f2b7e5e(p0: boolean): void;

/**
 * Use _GET_VEHICLE_MOD_DATA for modData
 * Appears to be a GET_DLC_VEHICLE_MOD_* native.
 */
declare function N_0xc098810437312fff(modData: number): number;

declare function N_0xc0d2af00bcc234ca(): number;

declare function N_0xc0e0d686ddfc6eae(): number;

declare function N_0xc13c38e47ea5df31(p0: number): number;

declare function N_0xc141b8917e0017ec(): void;

declare function N_0xc15907d667f7cfb2(vehicle: number, toggle: boolean): void;

declare function N_0xc17ad0e5752becda(componentHash: string | number): number;

declare function N_0xc1805d05e6d4fe10(vehicle: number): void;

declare function N_0xc1f6ebf9a3d55538(p0: number, p1: number): void;

/**
 * same call as VEHICLE::_0x0F3B4D4E43177236
 */
declare function N_0xc1f981a6f74f0c23(p0: number, p1: boolean): void;

declare function N_0xc22912b1d85f26b1(p0: number): [number, number, number];

declare function N_0xc265df9fb44a9fbd(p0: number): number;

/**
 * This seems to be related to Steam achievements.
 * p0 and p1 are int (?)
 * ------
 * Can't say anything about the Steam version but it is hardcoded to always return false int the retail version.
 */
declare function N_0xc2afffdabbdc2c5c(p0: number, p1: number): number;

declare function N_0xc2d15bef167e27bc(): void;

/**
 * CAM::_C2EAE3FB8CDBED31("SHAKE_CAM_medium", "medium", "", 0.5f);
 */
declare function N_0xc2eae3fb8cdbed31(p0: string, p1: string, p2: string, p3: number): void;

declare function N_0xc2ee020f5fb4db53(ped: number): void;

declare function N_0xc32ea7a2f6ca7557(): number;

/**
 * - This is called after SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
 * hash collision
 */
declare function N_0xc3376f42b1faccc6(player: number): void;
/**
 * - This is called after SET_ALL_RANDOM_PEDS_FLEE_THIS_FRAME
 * hash collision
 */
declare function SetAreasGeneratorOrientation(player: number): void;

declare function N_0xc35a6d07c93802b2(): void;

declare function N_0xc361aa040d6637a8(vehicle: number, p1: boolean): void;

declare function N_0xc38dc1e90d22547c(): [number, number, number, number];

declare function N_0xc3c221addde31a11(p0: number): void;

declare function N_0xc3ead29ab273ece8(p0: number): void;

declare function N_0xc4278f70131baa6d(p0: number, p1: boolean): void;

declare function N_0xc42dd763159f3461(): number;

declare function N_0xc45c27ef50f36adc(vehicle: number, p1: boolean): void;

declare function N_0xc485e07e4f0b7958(doorHash: string | number, p1: boolean, p2: boolean, p3: boolean): void;

declare function N_0xc505036a35afd01b(p0: boolean): void;

declare function N_0xc50ce861b55eab8b(vehicle: number, p1: boolean): void;

/**
 * This seems to edit the water wave, intensity around your current location.
 * 0.0f = Normal
 * 1.0f = So Calm and Smooth, a boat will stay still.
 * 3.0f = Really Intense.
 */
declare function N_0xc54a08c85ae4d410(p0: number): void;

declare function N_0xc55854c7d7274882(): void;

declare function N_0xc55a0b40ffb1ed23(): number;

declare function N_0xc56fbf2f228e1dac(p0: number, p1: number, p2: number): number;

/**
 * NETWORK_IS_TRANSITION_???
 */
declare function N_0xc571d0e77d8bbc29(): number;

/**
 * Interesting fact: A hash collision for this is RESET_JETPACK_MODEL_SETTINGS
 */
declare function N_0xc594b315edf2d4af(ped: number): void;

declare function N_0xc5be134ec7ba96a0(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xc6033d32241f6fb5(p0: number, p1: boolean): void;

/**
 * Toggles a value (bool) for cutscenes.
 */
declare function N_0xc61b86c9f61eb404(toggle: boolean): void;

declare function N_0xc6372ecd45d73bcd(p0: boolean): void;

declare function N_0xc64ded7ef0d2fe37(p0: number): number;

/**
 * Often called after _REMOVE_LOADING_PROMPT. Unsure what exactly it does, but It references busy_spinner, I can only guess its freeing the busy_spinner scaleform from memory
 */
declare function N_0xc65ab383cd91df98(): void;

/**
 * GET_VEHICLE_MODEL_*
 * Function pertains only to aviation vehicles.
 * For a full list, see here: pastebin.com/JwuGNp2K
 */
declare function N_0xc6ad107ddc9054cc(modelHash: string | number): number;

declare function N_0xc6e0e2616a7576bb(): number;

declare function N_0xc70ddce56d0d3a99(): number;

declare function N_0xc7397a83f7a2a462(p1: number, p2: boolean): [number, number, number];

declare function N_0xc78e239ac5b2ddb9(p0: boolean, p1: number, p2: number): void;

declare function N_0xc79196dcb36f6121(p0: number): void;

declare function N_0xc79ae21974b01fb2(): void;

declare function N_0xc7abac5de675ee3b(): number;

declare function N_0xc7be335216b5ec7c(): number;

declare function N_0xc7db36c24634f52b(): void;

declare function N_0xc7e7181c09f33b69(p0: boolean): void;

declare function N_0xc7f29ca00f46350e(p0: boolean): void;

declare function N_0xc8391c309684595a(): void;

declare function N_0xc84527e235fca219(p0: string, p1: boolean, p2: string, _type: string, p6: boolean): [number, number, number];

declare function N_0xc847b43f369ac0b5(): void;

declare function N_0xc87e740d9f3872cc(): number;

declare function N_0xc8b1b2425604cdd0(): number;

declare function N_0xc8b5c4a79cc18b94(p0: number): void;

declare function N_0xc8e1071177a23be5(): [number, number, number, number];

declare function N_0xc8ede9bdbccba6d4(p1: number, p2: number, p3: number): number;

declare function N_0xc8f3aaf93d0600bf(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xc91c6c55199308ca(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xc92717ef615b6704(p0: number): void;

declare function N_0xc980e62e33df1d5c(): [number, number, number];

/**
 * Seems to be called before SPECIAL_ABILITY_DEACTIVATE. Needs more research.
 * SPECIAL_ABILITY_CHARGE_*
 */
declare function N_0xc9a763d8fe87436a(player: number): void;

declare function N_0xc9b18b4619f48f7b(p0: number): void;

declare function N_0xc9b43a33d09cada7(p0: number): void;

declare function N_0xca4ae345a153d573(p0: boolean): void;

declare function N_0xca575c391fea25cc(p0: number): void;

declare function N_0xca6b2f7ce32ab653(p0: number, p2: number): [number, number];

declare function N_0xca94551b50b4932c(p0: number): number;

declare function N_0xca9d2aa3e326d720(): number;

/**
 * Found in "director_mode", "fm_bj_race_controler", "fm_deathmatch_controler", "fm_impromptu_dm_controler", "fm_race_controler", "gb_deathmatch".
 */
declare function N_0xcac57395b151135f(player: number, p1: boolean): void;

declare function N_0xcac66558b944da67(vehicle: number, p1: boolean): void;

/**
 * Only call found in the b617d scripts:
 * AUDIO::_CADA5A0D0702381E("BACK", "HUD_FREEMODE_SOUNDSET");
 */
declare function N_0xcada5a0d0702381e(p0: string, soundset: string): void;

declare function N_0xcae55f48d3d7875c(p0: number): void;

declare function N_0xcb00196b31c39eb1(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xcb0360efefb2580d(p0: number): void;

declare function N_0xcb215c4b56a7fae7(p0: boolean): number;

declare function N_0xcb82a0bf0e3e3265(p0: number): number;

declare function N_0xcb968b53fc7f916d(p0: number, p1: boolean, p2: number, p3: number): void;

declare function N_0xcc3fdded67bcfc63(): void;

/**
 * RESET_*
 */
declare function N_0xcc6e963682533882(p0: number): void;

/**
 * p4 seems to vary from 0 to 3.
 */
declare function N_0xcc9682b8951c5229(ped: number, r: number, g: number, b: number, p4: number): void;

declare function N_0xcca4318e1ab03f1f(p0: number): number;

declare function N_0xccd078c2665d2973(p0: boolean): void;

declare function N_0xcd018c591f94cb43(p0: number, p1: boolean): void;

declare function N_0xcd71a4ecab22709e(entity: number): void;

declare function N_0xcdca26e80faecb8f(): void;

declare function N_0xce5aa445aba8dee0(p0: number): number;

declare function N_0xced08cbe8ebb97c7(p0: number, p1: number): void;

declare function N_0xceda60a74219d064(p0: number, p1: boolean): void;

declare function N_0xcef214315d276fd1(p0: boolean): void;

declare function N_0xcf1182f682f65307(p0: number, p1: number): void;

declare function N_0xcf38dafbb49ede5e(p0: number): number;

declare function N_0xcf61d4b4702ee9eb(): number;

declare function N_0xcfd115b373c0df63(p0: number, p1: number): void;

/**
 * what does this do?
 */
declare function N_0xcfd778e7904c255e(vehicle: number): void;

declare function N_0xcfeb46dcd7d8d5eb(p0: boolean): void;

declare function N_0xcfeb8af24fc1d0bb(p0: boolean): void;

/**
 * gets some camera near clip
 */
declare function N_0xd0082607100d7193(): number;

declare function N_0xd00d76a7dfc9d852(p0: number): void;

declare function N_0xd01005d2ba2eb778(p0: number): void;

declare function N_0xd01015c7316ae176(ped: number, p1: string): number;

declare function N_0xd05d1a6c74da3498(p1: boolean): [number, number, number];

/**
 * x360 Hash: 0xF637166E
 */
declare function N_0xd0a484cb2f829fbe(): number;

declare function N_0xd0bc1c6fb18ee154(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function N_0xd0ee05fe193646ea(): [number, number, number, number];

declare function N_0xd10282b6e3751ba0(): number;

declare function N_0xd1032e482629049e(p0: boolean): void;

declare function N_0xd10f442036302d50(p0: number, p1: number, p2: number): void;

declare function N_0xd1871251f3b5acd7(ped: number): number;

declare function N_0xd1b0f412f109ea5d(p0: number, p1: number): void;

/**
 * SET_TV_???
 */
declare function N_0xd1c55b110e4df534(p0: number): void;

declare function N_0xd1c7cb175e012964(scaleformHandle: number): number;

declare function N_0xd1f8363dfad03848(p0: number): void;

/**
 * returns a notification handle, prints out a notification like below:
 * type range: 0
 * if you set type to 1, image goes from 0 - 39 - Xbox you can add text to
 * example:
 * UI::_0xD202B92CBF1D816F(1, 20, "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");
 */
declare function N_0xd202b92cbf1d816f(_type: number, image: number, text: string): number;

declare function N_0xd2049635deb9c375(): void;

/**
 * "SwitchHUDFranklinOut",
 * "SwitchHUDMichaelOut",
 * "SwitchHUDOut",
 * "SwitchHUDTrevorOut",
 * "SwitchOpenFranklinOut",
 * "SwitchOpenMichaelIn",
 * "SwitchOpenNeutral"
 */
declare function N_0xd2209be128b5418c(graphicsName: string): void;

declare function N_0xd2300034310557e4(vehicle: number, p1: number): void;

declare function N_0xd261ba3e7e998072(p0: number, p1: number): void;

declare function N_0xd2936cab8b58fcbd(p0: number, p1: boolean, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number): void;

/**
 * 1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 */
declare function N_0xd2b315b6689d537d(player: number, p1: boolean): void;

declare function N_0xd2b32be3fc1626c6(): void;

declare function N_0xd2cc78cd3d0b50f9(p0: number, p1: boolean): void;

declare function N_0xd2dccd8e16e20997(p0: number): void;

declare function N_0xd302e99edf0449cf(p0: number): number;

declare function N_0xd313de83394af134(): number;

declare function N_0xd33daa36272177c4(ped: number): void;

declare function N_0xd38c4a6d047c019d(): number;

declare function N_0xd39b3fff8ffdd5bf(p0: number): number;

declare function N_0xd39d13c9febf0511(p0: boolean): void;

declare function N_0xd3a10fc7fd8d98cd(): number;

declare function N_0xd3a6a0ef48823a8c(): number;

declare function N_0xd3d15555431ab793(): number;

declare function N_0xd4438c0564490e63(): void;

declare function N_0xd4793dff3af2abcd(): void;

/**
 * SET_*_MULTIPLIER_THIS_FRAME
 */
declare function N_0xd4b8e3d1917bc86b(toggle: boolean): void;

/**
 * Only used like this:
 * if (VEHICLE::_D4C4642CB7F50B5D(ENTITY::GET_VEHICLE_INDEX_FROM_ENTITY_INDEX(v_3))) {                                                        sub_157e9c(g_40001._f1868, 0);
 * }
 */
declare function N_0xd4c4642cb7f50b5d(vehicle: number): number;

declare function N_0xd53acdbef24a46e8(): number;

declare function N_0xd57aaae0e2214d11(): void;

declare function N_0xd5a4b59980401588(p0: number, p1: number): [number, number, number];

/**
 * p0 - PLAYER::PLAYER_PED_ID();
 * p1 - "Phase", "Wobble", "x_axis","y_axis","introphase","speed".
 * p2 - From what i can see it goes up to 1f (maybe).
 * -LcGamingHD
 * Example: AI::_D5BB4025AE449A4E(PLAYER::PLAYER_PED_ID(), "Phase", 0.5);
 */
declare function N_0xd5bb4025ae449a4e(p0: number, p1: string, p2: number): void;

declare function N_0xd642319c54aadeb6(): number;

declare function N_0xd66c9e72b3cc4982(p1: number): [number, number];

declare function N_0xd68a5ff8a3a89874(r: number, g: number, b: number, a: number): void;

/**
 * Something related to the environmental effects natives.
 * In the "agency_heist3b" script, p1 - p3 are always under 100 - usually they are {87, 81, 68}. If SET_PED_ENVEFF_SCALE is set to 0.65 (instead of the usual 1.0), they use {74, 69, 60}
 */
declare function N_0xd69411aa0cebf9e9(ped: number, p1: number, p2: number, p3: number): void;

declare function N_0xd6ade981781fca09(p0: number): void;

/**
 * Only one match in the scripts:
 * GRAPHICS::_D7021272EB0A451E("int_carrier_hanger");
 */
declare function N_0xd7021272eb0a451e(p0: string): void;

declare function N_0xd79185689f8fd5df(p0: boolean): void;

declare function N_0xd7d0b00177485411(p0: number, p1: number): void;

declare function N_0xd7d22f5592aed8ba(p0: number): number;

/**
 * 4 matches across 2 scripts.
 * appcamera:
 * called after UI::HIDE_HUD_AND_RADAR_THIS_FRAME() and before GRAPHICS::0x108F36CC();
 * cellphone_controller:
 * called after GRAPHICS::0xE9F2B68F(0, 0) and before GRAPHICS::0x108F36CC();
 */
declare function N_0xd801cc02177fa3f1(): void;

declare function N_0xd8122c407663b995(): number;

declare function N_0xd8295af639fd9cb8(p0: number): void;

declare function N_0xd8c3be3ee94caf2d(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function N_0xd8e694757bcea8e9(): void;

declare function N_0xd9454b5752c857dc(): void;

declare function N_0xd972df67326f966e(): void;

declare function N_0xd9b71952f78a2640(doorHash: string | number, p1: boolean): void;

declare function N_0xd9f692d349249528(): void;

declare function N_0xda024bdbd600f44a(p0: number): void;

/**
 * Set profile setting 866
 */
declare function N_0xdac073c7901f9e15(p0: number): void;

declare function N_0xdaf87174be7454ff(p0: number): number;

declare function N_0xdb34e8d56fc13b08(p0: number, p1: boolean, p2: boolean): void;

declare function N_0xdb41d07a45a6d4b7(p0: number): number;

declare function N_0xdb90c6cca48940f1(p0: boolean): void;

/**
 * REQUEST_VEHICLE_*
 */
declare function N_0xdba3c090e3d74690(vehicle: number): void;

declare function N_0xdbaa5ec848ba2d46(p0: number, p1: number): void;

/**
 * Related to locking the vehicle or something similar.
 * In the decompiled scripts, its always called after
 * VEHICLE::_SET_EXCLUSIVE_DRIVER(a_0, 0, 0);
 * VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS(a_0, 1);
 * VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_PLAYER(a_0, PLAYER::PLAYER_ID(), 0);
 */
declare function N_0xdbc631f109350b8c(vehicle: number, p1: boolean): void;

/**
 * probably 0x3461981 on console
 */
declare function N_0xdc18531d7019a535(p0: number, p1: number): number;

declare function N_0xdc459cfa0cce245b(p0: boolean): void;

declare function N_0xdc48473142545431(): number;

declare function N_0xdc54a7af8b3a14ef(): number;

declare function N_0xdc57a637a20006ed(p0: number, p1: number): void;

/**
 * Has something to do with police.
 */
declare function N_0xdc64d2c53493ed12(player: number): void;

/**
 * SET_ENTITY_*
 * x360 Hash: 0xA0466A69
 * Only called within 1 script for x360. 'fm_mission_controller' and it used on an object.
 * Ran after these 2 natives,
 * set_object_targettable(uParam0, 0);
 * set_entity_invincible(uParam0, 1);
 */
declare function N_0xdc6f8601faf2e893(entity: number, p1: boolean): void;

declare function N_0xdc9274a7ef6b2867(): number;

declare function N_0xdc9da9e8789f5246(): void;

declare function N_0xdcca191df9980fd7(ped: number): number;

declare function N_0xdcfb5d4db8bf367e(p0: number, p1: boolean): void;

declare function N_0xdd2238f57b977751(p0: number): number;

/**
 * 2 occurrences in agency_heist3a. p1 was 0.7f then 0.4f.
 */
declare function N_0xdd2620b7b9d16ff1(player: number, p1: number): number;

/**
 * Tune Backwards... ?
 */
declare function N_0xdd6bcf9e94425df9(): void;

/**
 * returns a notification handle, prints out a notification like below:
 * type range: 0
 * if you set type to 1, button accepts "~INPUT_SOMETHING~"
 * example:
 * UI::_0xDD6CB2CCE7C2735C(1, "~INPUT_TALK~", "Who you trynna get crazy with, ese? Don't you know I'm LOCO?!");
 * - imgur.com/UPy0Ial
 * Examples from the scripts:
 * l_D1[1 -- [[1]] ]=UI::_DD6CB2CCE7C2735C(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");
 * l_D1[2 -- [[1]] ]=UI::_DD6CB2CCE7C2735C(1,"~INPUT_SAVE_REPLAY_CLIP~","");
 * l_D1[1 -- [[1]] ]=UI::_DD6CB2CCE7C2735C(1,"~INPUT_REPLAY_START_STOP_RECORDING~","");
 * l_D1[2 -- [[1]] ]=UI::_DD6CB2CCE7C2735C(1,"~INPUT_REPLAY_START_STOP_RECORDING_SECONDARY~","");
 */
declare function N_0xdd6cb2cce7c2735c(_type: number, button: string, text: string): number;

declare function N_0xdd79df9f4d26e1c9(): void;

declare function N_0xddc635d5b3262c56(p0: number): void;

declare function N_0xde03620f8703a9df(): number;

/**
 * No use in scripts.
 */
declare function N_0xde45d1a1ef45ee61(player: number, toggle: boolean): void;
/**
 * No use in scripts.
 */
declare function SetHudAnimStopLevel(player: number, toggle: boolean): void;

declare function N_0xde81239437e8c5a8(): void;

declare function N_0xdea36202fc3382df(p0: boolean): void;

declare function N_0xdeaaf77eb3687e97(p0: number, p1: number): number;

/**
 * Only found twice in decompiled scripts. Something to do with an entity/object?
 * On a side note, it's very interesting how the hash for this native is "DEADC0DE" - this is usually used as padding for initializing a buffer of some sort. I wonder if this native is actually "dead"?
 * "carmod_shop.ysc", line 9520:
 * if (ENTITY::DOES_ENTITY_EXIST(l_324._f6)) {
 * GRAPHICS::_0xDEADC0DEDEADC0DE(l_324._f6);
 * }
 * "fm_mission_controller.ysc", line 189641:
 * if (GAMEPLAY::IS_BIT_SET(g_1870E1._f7B64[a_0 -- [[104]] ]._f25, 28)) {
 * GRAPHICS::_0xDEADC0DEDEADC0DE(NETWORK::NET_TO_OBJ(l_4064._f26A._f87[a_0 -- [[1]] ]));
 * if (!GAMEPLAY::IS_BIT_SET(g_1870E1._f7B64[a_0 -- [[104]] ]._f25, 31)) {
 * if (!ENTITY::IS_ENTITY_DEAD(v_7)) {
 * AUDIO::PLAY_SOUND_FROM_ENTITY(-1, "EMP_Vehicle_Hum", v_7, "DLC_HEIST_BIOLAB_DELIVER_EMP_SOUNDS", 0, 0);
 * GAMEPLAY::SET_BIT(&amp;g_1870E1._f7B64[a_0 -- [[104]] ]._f25, 31);
 * }
 * }
 * }
 * Console Hash: 0xC12AC47A
 * ----------
 * It's most likely named UPDATE_* (like UPDATE_ENTITY_SHIT_OR_SOMETHING).
 */
declare function N_0xdeadc0dedeadc0de(object: number): void;

declare function N_0xdeb2b99a1af1a2a6(p0: number): number;

/**
 * Scripts use 0.2, 0.5 and 1.0.
 * SET_DRIVER_*
 */
declare function N_0xded5af5a0ea4b297(driver: number, p1: number): void;

declare function N_0xdf4b952f7d381b95(): number;

declare function N_0xdf649c4e9afdd788(): number;

/**
 * Outputs 2 Vector3's.
 * Scripts check if out2.x - out1.x &gt; someshit.x
 * Could be suspension related, as in max suspension height and min suspension height, considering the natives location.
 */
declare function N_0xdf7e3eeb29642c38(vehicle: number): [number[], number[]];

declare function N_0xdf97cdd4fc08fd34(p0: number): number;

declare function N_0xdfa80cb25d0a19b3(): number;

/**
 * From a quick disassembly I can say that this has something to do with weapons.
 * Added params according to what I could see in IDA.
 */
declare function N_0xdfb4138eefed7b81(ped: number, weaponHash: string | number, radius: number, p4: boolean): [number, number];

/**
 * gets some camera far clip
 */
declare function N_0xdfc8cbc606fdb0fc(): number;

declare function N_0xdffcef48e511db48(p0: number, p1: boolean): void;

declare function N_0xe0130b41d3cf4574(): number;

declare function N_0xe01903c47c7ac89e(): void;

declare function N_0xe058175f8eafe79a(p0: boolean): void;

declare function N_0xe05dd0e9707003a3(p0: number, p1: boolean): void;

declare function N_0xe0a6138401bcb837(): number;

declare function N_0xe111a7c0d200cbc5(p0: number, p1: number): void;

/**
 * p1 always false.
 */
declare function N_0xe12abe5e3a389a6c(entity: number, p1: boolean): void;

/**
 * This function is hard-coded to always return 1.
 */
declare function N_0xe154b48b68ef72bc(p0: number): number;

declare function N_0xe16142b94664defd(vehicle: number, p1: boolean): void;

/**
 * Used with IS_LOOK_INVERTED() and negates its affect.
 * --
 * Not sure how the person above got that description, but here's an actual example:
 * if (CONTROLS::_GET_LAST_INPUT_METHOD(2)) {
 * if (a_5) {
 * if (CONTROLS::IS_LOOK_INVERTED()) {
 * a_3 *= -1;
 * }
 * if (CONTROLS::_E1615EC03B3BB4FD()) {
 * a_3 *= -1;
 * }
 * }
 * }
 */
declare function N_0xe1615ec03b3bb4fd(): number;

declare function N_0xe1c8709406f2c41c(): void;

declare function N_0xe1ca84ebf72e691d(p0: number, p1: number): [number, number, number];

declare function N_0xe1cd1e48e025e661(): void;

declare function N_0xe260e0bb9cd995ac(p0: number): number;

declare function N_0xe266ed23311f24d4(p0: number, p3: number, p4: number, p5: boolean): [number, number];

declare function N_0xe2892e7e55d7073a(p0: number): void;

declare function N_0xe301bd63e9e13cf0(vehicle: number, cargobob: number): void;

/**
 * REMOTE_VEHICLE_*
 */
declare function N_0xe30524e1871f481d(p0: number): void;

/**
 * IS_*
 */
declare function N_0xe33ffa906ce74880(vehicle: number, p1: number): number;

declare function N_0xe36a98d8ab3d3c66(p0: boolean): void;

/**
 * only documented to be continued...
 */
declare function N_0xe3a7742e0b7a2f8b(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number, entity: number): void;

declare function N_0xe3b05614dce1d014(p0: number): number;

/**
 * sets something to 1
 */
declare function N_0xe3d969d2785ffb5e(): void;

declare function N_0xe3e2c1b4c59dbc77(p0: number): void;

declare function N_0xe3e5a7c64ca2c6ed(): number;

/**
 * No observed effect.
 */
declare function N_0xe3ebaae484798530(vehicle: number, p1: boolean): void;

declare function N_0xe43a13c9e4cccbcf(ped: number, p1: boolean): void;

declare function N_0xe44a982368a4af23(vehicle: number, vehicle2: number): void;

declare function N_0xe45087d85f468bc2(p0: boolean, p1: number): void;

declare function N_0xe4723db6e736ccff(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;

declare function N_0xe496a53ba5f50a56(p0: number): number;

declare function N_0xe4dcec7fd5b739a5(ped: number): void;

declare function N_0xe4e6dd5566d28c82(): void;

declare function N_0xe52b8e7f85d39a08(ped: number, unk: number): void;

declare function N_0xe532ec1a63231b4f(p0: number, p1: number): void;

declare function N_0xe5810ac70602f2f5(vehicle: number, p1: number): void;

declare function N_0xe59343e9e96529e7(): number;

declare function N_0xe599a503b3837e1b(): number;

declare function N_0xe620fd3512a04f18(p0: number): void;

declare function N_0xe63d7c6eececb66b(p0: boolean): void;

declare function N_0xe64a3ca08dfa37a9(p0: number): number;

declare function N_0xe66c690248f11150(p0: number, p1: number): void;

declare function N_0xe67c6dfd386ea5e7(p0: boolean): void;

declare function N_0xe6869becdd8f2403(p0: number, p1: boolean): void;

/**
 * Performs the same type of trace as START_SHAPE_TEST_CAPSULE, but with some different hardcoded parameters.
 */
declare function N_0xe6ac6c45fbe83004(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: number): number;

/**
 * GET_VEHICLE_*
 */
declare function N_0xe6b0e8cfc3633bf0(vehicle: number): number;

declare function N_0xe6c0c80b8c867537(p0: boolean): void;

declare function N_0xe6ca85e7259ce16b(p0: number): void;

declare function N_0xe6de0561d9232a64(): void;

declare function N_0xe6f13851780394da(vehicle: number, p1: number): void;

declare function N_0xe70ba7b90f8390dc(p0: number, p1: number, p2: boolean, p3: number): void;

declare function N_0xe73364db90778ffa(): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function N_0xe791df1f73ed2c8b(p0: number): number;

declare function N_0xe7e4c198b0185900(p0: number, p1: number, p2: boolean): void;

/**
 * This method is the equivalent to PUSH_SCALEFORM_MOVIE_FUNCTION_PARAMETER_STRING when using it to add a new button (like "INSTRUCTIONAL_BUTTONS").
 * When switching with a controller, the icons update and become the controller's icons.
 */
declare function N_0xe83a3e3557a56640(button: string): void;

/**
 * Vehicle must be a boat.
 */
declare function N_0xe842a9398079bd82(vehicle: number, p1: number): void;

declare function N_0xe851e480b814d4ba(vehicle: number, p1: boolean): void;

declare function N_0xe861d0b05c7662b8(p0: number, p1: boolean, p2: number): void;

declare function N_0xe8a169e666cbc541(): number;

declare function N_0xe8b9c0ec9e183f35(): number;

declare function N_0xe95b0c7d5ba3b96b(p0: number): number;

declare function N_0xe95c8a1875a02ca4(p0: number, p1: number, p2: number): void;

declare function N_0xe9b99b6853181409(): void;

declare function N_0xe9ea16d6e54cdca4(p0: number, p1: number): number;

declare function N_0xea14eef5b7cd2c30(): number;

declare function N_0xea2f2061875eed90(): number;

declare function N_0xea9960d07dadcf10(p0: number): number;

declare function N_0xeaf0fa793d05c592(): number;

declare function N_0xeb078ca2b5e82add(p0: number, p1: number): void;

declare function N_0xeb2104e905c6f2e9(): number;

declare function N_0xeb2d525b57f42b40(): void;

declare function N_0xeb3dac2c86001e5e(): number;

declare function N_0xeb6f1a9b5510a5d2(p0: number, p1: boolean): void;

declare function N_0xeb709a36958abe0d(gamerTagId: number): number;

declare function N_0xebb376779a760aa8(): number;

/**
 * MulleDK19: This function is hard-coded to always return 1.
 */
declare function N_0xebcab9e5048434f4(): number;

declare function N_0xebd0edba5be957cf(ped: number): number;

declare function N_0xebd3205a207939ed(p0: number): void;

/**
 * example from scripts:
 * unk_0xE0C28DB5(0,Global_2398291.imm_726,1);
 * that global is for ps3/xbox not pc
 * no idea what this does does
 */
declare function N_0xebefc2e77084f599(p0: number, p1: string, p2: boolean): void;

declare function N_0xebf8284d8cadeb53(): void;

declare function N_0xebfa8d50addc54c4(p0: number): number;

/**
 * SET_PED_*
 * Has most likely to do with some shooting attributes as it sets the float which is in the same range as shootRate.
 */
declare function N_0xec4b4b3b9908052a(ped: number, unk: number): void;

declare function N_0xec52c631a1831c03(p0: number): void;

declare function N_0xec6935ebe0847b90(p0: number, p1: number, p2: number, p3: number): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function N_0xec72c258667be5ea(p0: number): number;

declare function N_0xec9264727eec0f28(): void;

declare function N_0xecb41ac6ab754401(): number;

declare function N_0xecf128344e9ff9f1(p0: boolean): void;

declare function N_0xed3c76adfa6d07c4(p0: number): void;

declare function N_0xed6d8e27a43b8cde(p0: number): number;

declare function N_0xed8286f71a819baa(cargobob: number, p1: number): void;

declare function N_0xedf7f927136c224b(): number;

declare function N_0xee066c7006c49c0a(p0: number, p1: number, p2: number): void;

/**
 * Hides the hud element displayed by _0x523A590C1A3CC0D3
 */
declare function N_0xee4c0e6dbc6f2c6f(): void;

declare function N_0xee76ff7e6a0166b0(headDisplayId: number, p1: boolean): void;

/**
 * interprets the result of CAM::_0x19CAFA3C87F7C2FF()
 * example: // checks if you're currently in first person
 * if ((CAM::_EE778F8C7E1142E2(CAM::_19CAFA3C87F7C2FF()) == 4) &amp;&amp; (!__463_$28ED382849B17AFC())) {
 * UI::_FDEC055AB549E328();
 * UI::_SET_NOTIFICATION_TEXT_ENTRY("REC_FEED_WAR");
 * l_CE[0 -- [[1]] ] = UI::_DRAW_NOTIFICATION(0, 1);
 * }
 */
declare function N_0xee778f8c7e1142e2(p0: number): number;

/**
 * Some kind of flags.
 */
declare function N_0xeebfc7a7efdc35b4(vehicle: number): number;

declare function N_0xeeed8fafec331a70(p0: number, p1: number, p2: number, p3: number): number;

/**
 * dont know what this native does but im storing some documentation here
 * _NETWORK_VOICE_CONNECT_TO_PLAYER
 * _NETWORK_GET_GAMER_STATUS
 * _NETWORK_HAS_TRANSITION_INVITE_BEEN_ACKED
 * _NETWORK_SEND_PRESENCE_INVITE
 * _NETWORK_SEND_PRESENCE_TRANSITION_INVITE
 * _NETWORK_CHECK_DATA_MANAGER_SUCCEEDED_FOR_HANDLE
 * _NETWORK_CHECK_DATA_MANAGER_FOR_HANDLE
 * _NETWORK_CAN_COMMUNICATE_WITH_GAMER
 * _NETWORK_CRC_HASH_CHECK_EVENT
 */
declare function N_0xef0912ddf7c4cb4b(): number;

declare function N_0xef398beee4ef45f9(p0: boolean): void;

declare function N_0xef39ee20c537e98c(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function N_0xef49cf0270307cbe(): void;

declare function N_0xef7d17bc6c85264c(): number;

declare function N_0xefabc7722293da7c(): void;

declare function N_0xefb55e7c25d3b3be(): void;

declare function N_0xf033419d1b81fae8(p0: number): number;

declare function N_0xf03755696450470c(): void;

declare function N_0xf06ebb91a81e09e3(p0: boolean): void;

declare function N_0xf083835b70ba9bfe(): void;

declare function N_0xf086ad9354fac3a3(p0: number): void;

declare function N_0xf0daef2f545bee25(p0: number): number;

/**
 * Adds some kind of shadow to the vehicle.
 */
declare function N_0xf0e4ba16d1db546c(vehicle: number, p1: number, p2: number): void;

/**
 * IS_OBJECT_???
 */
declare function N_0xf0eed5a6bc7b237a(p0: number, entity: number, p2: number): number;

declare function N_0xf0f2103efaf8cba7(p0: number, p1: number): number[];

/**
 * Only 1 occurrence. p1 was 2.
 */
declare function N_0xf10b44fd479d69f3(player: number, p1: number): number;

declare function N_0xf13fe2a80c05c561(): number;

declare function N_0xf154b8d1775b2dec(p0: boolean): void;

/**
 * Sets profile setting 933
 */
declare function N_0xf1a1803d3476f215(value: number): void;

declare function N_0xf1a6c18b35bcade6(p0: boolean): void;

/**
 * LEADERBOARDS2_READ_BY_???
 */
declare function N_0xf1ae5dcdbfca2721(): [number, number, number, number];

declare function N_0xf1b84178f8674195(p0: number): void;

declare function N_0xf1c03a5352243a30(p0: number): void;

declare function N_0xf1cea8a4198d8e9a(p0: string): number;

declare function N_0xf1e22dc13f5eebad(p0: number): void;

declare function N_0xf1eea2dda9ffa69d(p0: number): void;

/**
 * 2 calls found in the b617d scripts:
 * AUDIO::_F1F8157B8C3F171C(l_A42, "Franklin_Bike_Rev", "BIG_SCORE_3A_SOUNDS");
 * AUDIO::_F1F8157B8C3F171C(l_166, "Trevor_Revs_Off", "PALETO_SCORE_SETUP_SOUNDS");
 */
declare function N_0xf1f8157b8c3f171c(p0: number, p1: string, p2: string): void;

declare function N_0xf22ca0fd74b80e7a(p0: number): number;

declare function N_0xf2385935bffd4d92(p0: number): number;

declare function N_0xf239400e16c23e08(p0: number, p1: number): void;

declare function N_0xf25e02cb9c5818f8(): void;

declare function N_0xf284ac67940c6812(): number;

/**
 * toggle was always 0 except in one instance (b678).
 * The one time this is set to true seems to do with when you fail the mission.
 */
declare function N_0xf2bebcdfafdaa19e(toggle: boolean): void;

/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function N_0xf2ca003f167e21d2(): number;
/**
 * MulleDK19: This function is hard-coded to always return 0.
 */
declare function ReturnZero(): number;

/**
 * MulleDK19: This function is hard-coded to always return 1.
 */
declare function N_0xf2e07819ef1a5289(): number;

declare function N_0xf2e1a7133dd356a6(hash: string | number, toggle: boolean): void;

declare function N_0xf2eac213d5ea0623(): number;

declare function N_0xf2f6a2fa49278625(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): [number, number, number, number];

declare function N_0xf3365489e0dd50f9(p0: number, p1: boolean): void;

/**
 * characters
 * 0: Michael
 * 1: Franklin
 * 2: Trevor
 * 3: MPMale
 * 4: MPFemale
 */
declare function N_0xf3fbe2d50a6a8c28(character: number, p1: boolean): number;

declare function N_0xf41b5d290c99a3d6(p0: number): number;

declare function N_0xf434a10ba01c37d0(p0: boolean): void;

declare function N_0xf445de8da80a1792(): number;

/**
 * Another function related to "HUD scaleforms"
 */
declare function N_0xf44a5456ac3f4f97(p0: number): void;

/**
 * bufferSize is 35 in the scripts.
 */
declare function N_0xf45352426ff3a4f0(bufferSize: number): [number, number];

declare function N_0xf46a1e03e8755980(p0: boolean): void;

declare function N_0xf488c566413b4232(p0: number, p1: number): void;

declare function N_0xf49abc20d8552257(p0: number): void;

declare function N_0xf4a0dadb70f57fa6(): void;

/**
 * Something to do with shake:
 * CAM::_F4C8CF9E353AFECA("HAND_SHAKE", 0.2);
 */
declare function N_0xf4c8cf9e353afeca(p0: string, p1: number): void;

/**
 * Needs more research. Possibly used to calculate the "mask" when calling "STAT_SET_BOOL_MASKED"?
 */
declare function N_0xf4d8e7ac2a27758c(p0: number): number;

declare function N_0xf4f2c0d4ee209e20(): void;

declare function N_0xf4ff020a08bc8863(p0: number, p1: number): void;

/**
 * This does not move an existing checkpoint... so wtf.
 */
declare function N_0xf51d36185993515d(checkpoint: number, posX: number, posY: number, posZ: number, unkX: number, unkY: number, unkZ: number): void;

declare function N_0xf53e48461b71eecb(p0: number): number;

declare function N_0xf55e4046f6f831dc(p0: number, p1: number): void;

declare function N_0xf56dfb7b61be7276(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number): number;

declare function N_0xf5846edb26a98a24(ped: number, p1: boolean): void;

declare function N_0xf5bb8dac426a52c0(): [number, number, number, number];

/**
 * 3 matches across 3 scripts. First 2 were 0, 3rd was 1. Possibly a bool.
 * appcamera, appmedia, and cellphone_controller.
 */
declare function N_0xf5bed327cea362b1(p0: number): number;

declare function N_0xf60165e1d2c5370b(ped: number): [number, number, number];

/**
 * Set profile setting 501
 */
declare function N_0xf6792800ac95350d(p0: number): void;

declare function N_0xf6baaaf762e1bf40(p0: string, p1: number): number;

declare function N_0xf70efa14fe091429(p0: number): number;

declare function N_0xf751b16fb32abc1d(p0: number): void;

declare function N_0xf78b803082d4386f(p0: number): void;

declare function N_0xf78f94d60248c737(p0: number, p1: boolean): number;

declare function N_0xf79f9def0aade61a(ped: number): void;

/**
 * SET_TV_???
 */
declare function N_0xf7b38b8305f1fe8b(p0: number, p1: string, p2: boolean): void;

/**
 * Only did a quick disassembly, but this function seems to load all path nodes in the given area. Parameters appear to be start x, start y, end x, end y.
 */
declare function N_0xf7b79a50b905a30d(p0: number, p1: number, p2: number, p3: number): number;

/**
 * IS_S*
 */
declare function N_0xf7f203e31f96f6a1(vehicle: number, flag: boolean): number;

declare function N_0xf814fec6a19fd6e0(): void;

declare function N_0xf8155a7f03ddfc8e(p0: number): void;

declare function N_0xf854439efbb3b583(): void;

declare function N_0xf87d9f2301f7d206(p0: number): void;

declare function N_0xf8bdbf3d573049a1(p0: number): void;

declare function N_0xf8c54a461c3e11dc(): [number, number, number, number];

declare function N_0xf8cc1ebe0b62e29f(p0: number): number;

declare function N_0xf8ebccc96adb9fb7(p0: number, p1: number, p2: boolean): void;

declare function N_0xf92099527db8e2a7(p0: number, p1: number): void;

declare function N_0xf98dde0a8ed09323(p0: boolean): void;

declare function N_0xf98e4b3e56afc7b1(p0: number, p1: number): void;

/**
 * p1 was always 1 (true).
 * Kicks the ped from the current vehicle and keeps the rendering-focus on this ped (also disables its collision). If doing this for your player ped, you'll still be able to drive the vehicle.
 */
declare function N_0xf9acf4a08098ea25(ped: number, p1: boolean): void;

declare function N_0xf9b83b77929d8863(): number;

declare function N_0xf9c1681347c8bd15(object: number): void;

declare function N_0xf9e1ccae8ba4c281(p0: number, p1: number): [number, number, number];

declare function N_0xfa1e0e893d915215(p0: boolean): void;

declare function N_0xfa2888e3833c8e96(): void;

/**
 * Another unknown label type...
 * GAMEPLAY::_FAA457EF263E8763(a_0, "Thumb_label");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f10, "Photo_label");
 * GAMEPLAY::_FAA457EF263E8763(a_0, "GXTlabel");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f21, "StringComp");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f43, "SecondStringComp");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f53, "ThirdStringComp");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f32, "SenderStringComp");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f726[v_1A -- [[16]] ], &amp;v_20); // where v_20 is "LastJobTL_0_1" thru "LastJobTL_2_1", gets saved in a struct called "LAST_JobGamer_TL"
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f4B, "PAID_PLAYER");
 * GAMEPLAY::_FAA457EF263E8763(&amp;a_0._f5B, "RADIO_STATION");
 */
declare function N_0xfaa457ef263e8763(name: string): number;

declare function N_0xfae628f1e9adb239(p0: number, p1: number, p2: number): void;

declare function N_0xfaf2a78061fd9ef4(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfb00ca71da386228(): void;

declare function N_0xfb199266061f820a(): number;

/**
 * p0 is always 0. p1 is pointing to a global.
 */
declare function N_0xfb1f9381e80fa13f(p0: number, p1: number): number;

declare function N_0xfb680d403909dc70(p0: number, p1: number): void;

declare function N_0xfb8f2a6f3df08cbe(): void;

declare function N_0xfbc5e768c7a77a6a(): number;

declare function N_0xfbe20329593dec9d(p0: number, p1: number, p2: number, p3: number): void;

declare function N_0xfc18db55ae19e046(p0: boolean): void;

declare function N_0xfc859e2374407556(): number;

declare function N_0xfccae5b92a830878(p0: number): number;

declare function N_0xfcf37a457cb96dc0(p0: number, p1: number, p2: number, p3: number, p4: number): number;

declare function N_0xfd3151cd37ea2245(p0: number): void;

declare function N_0xfd75dabc0957bf33(p0: boolean): void;

/**
 * NETWORK_IS_IN_???
 */
declare function N_0xfd8b834a8ba05048(): number;

declare function N_0xfdb423997fa30340(): void;

/**
 * console hash: 0x45268B6F
 * Most likely ADD_CURRENT_*
 */
declare function N_0xfdbf4cdbc07e1706(x: number, y: number, z: number, radius: number, unk: number): number;

declare function N_0xfdd85225b2dea55e(): void;

declare function N_0xfdec055ab549e328(): void;

declare function N_0xfe07ff6495d52e2a(p0: number, p1: number, p2: number, p3: number): number;

declare function N_0xfe26117a5841b2ff(vehicle: number, p1: number): number;

declare function N_0xfe4c1d0d3b9cc17e(p0: number, p1: number): number;

declare function N_0xfec9a3b1820f3331(p0: number): number;

declare function N_0xfee4a5459472a9f8(): void;

/**
 * Tune Forward... ?
 */
declare function N_0xff266d1d0eb1195d(): void;

/**
 * gets byte at offset 0x862 in the specified players data (ped data + 0xbd0) and stores the bool p1 in it.
 * lwz       r3, 0xBD0(r3) ;r3 is player data
 * lbz       r4, 0x862(r3) ;r4 is now the byte
 * insrwi    r4, r31, 1,28 ;stores p1 as a bit in place 28 idk
 * stb       r4, 0x862(r3) ; puts the newly modified one back in
 * SET_PLAYER_*
 */
declare function N_0xff300c7649724a0b(player: number, p1: boolean): void;

declare function N_0xff4803bc019852d9(p0: number, p1: number): void;

declare function N_0xff56381874f82086(p0: number, p1: number, outComponent: number): number;

/**
 * Actual name starts with START_SHAPE_TEST_??? and it returns a ShapeTest handle that can be used with GET_SHAPE_TEST_RESULT.
 * In its only usage in game scripts its called with flag set to 511, entity to player_ped_id and flag2 set to 7
 */
declare function N_0xff6be494c7987f34(flag: number, entity: number, flag2: number): [number, number[], number[]];

declare function N_0xff8f3a92b75ed67a(): number;

/**
 * may be 0xBF21818E
 * related to: NETWORK_BAIL
 * NETWORK_BAIL_TRANSITION
 * NETWORK_JOIN_GROUP_ACTIVITY
 * NETWORK_JOIN_TRANSITION
 * NETWORK_LAUNCH_TRANSITION
 * NETWORK_SESSION_HOST
 * NETWORK_SESSION_HOST_CLOSED
 * NETWORK_SESSION_HOST_FRIENDS_ONLY
 * NETWORK_SESSION_HOST_SINGLE_PLAYER
 * NETWORK_SESSION_VOICE_LEAVE
 */
declare function N_0xffe1e5b792d92b34(): number;

declare function N_0xffee8fa29ab9a18e(player: number): void;

declare function NetToEnt(netHandle: number): number;

declare function NetToObj(netHandle: number): number;

declare function NetToPed(netHandle: number): number;

declare function NetToVeh(netHandle: number): number;

declare function NetworkAcceptPresenceInvite(p0: number): number;

/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 * - "MULTIPLAYER_DISABLED"
 */
declare function NetworkAccessTunableBool(tunableContext: string, tunableName: string): number;
/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 * - "MULTIPLAYER_DISABLED"
 */
declare function N_0xaa6a47a573abb75a(tunableContext: string, tunableName: string): number;

/**
 * Console Hash - 0x18867C61 = NETWORK_ACCESS_TUNABLE_BOOL_HASH
 */
declare function NetworkAccessTunableBoolHash(tunableContext: string | number, tunableName: string | number): number;
/**
 * Console Hash - 0x18867C61 = NETWORK_ACCESS_TUNABLE_BOOL_HASH
 */
declare function N_0xea16b69d93d71a45(tunableContext: string | number, tunableName: string | number): number;

/**
 * Returns a default value if the tunable don't exist.
 * Console Hash
 */
declare function NetworkAccessTunableBoolHashFailVal(tunableContext: string | number, tunableName: string | number, defaultValue: boolean): number;
/**
 * Returns a default value if the tunable don't exist.
 * Console Hash
 */
declare function N_0xc7420099936ce286(tunableContext: string | number, tunableName: string | number, defaultValue: boolean): number;

/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * - "MP_CNC_TEAM_COP"
 * - "MP_CNC_TEAM_VAGOS"
 * - "MP_CNC_TEAM_LOST"
 * - "MP_FM_DM"
 * - "MP_FM_RACES"
 * - "MP_FM_RACES_CAR"
 * - "MP_FM_RACES_BIKE"
 * - "MP_FM_RACES_CYCLE"
 * - "MP_FM_RACES_AIR"
 * - "MP_FM_RACES_SEA"
 * - "MP_FM_MISSIONS"
 * - "MP_FM_SURVIVAL
 * - "MP_FM_BASEJUMP"
 * - "MP_FM_CAPTURE"
 * - "MP_FM_LTS"
 * -"MP_FM_GANG_ATTACK"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 */
declare function NetworkAccessTunableFloat(tunableContext: string, tunableName: string, value: number): number;
/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * - "MP_CNC_TEAM_COP"
 * - "MP_CNC_TEAM_VAGOS"
 * - "MP_CNC_TEAM_LOST"
 * - "MP_FM_DM"
 * - "MP_FM_RACES"
 * - "MP_FM_RACES_CAR"
 * - "MP_FM_RACES_BIKE"
 * - "MP_FM_RACES_CYCLE"
 * - "MP_FM_RACES_AIR"
 * - "MP_FM_RACES_SEA"
 * - "MP_FM_MISSIONS"
 * - "MP_FM_SURVIVAL
 * - "MP_FM_BASEJUMP"
 * - "MP_FM_CAPTURE"
 * - "MP_FM_LTS"
 * -"MP_FM_GANG_ATTACK"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 */
declare function N_0xe5608ca7bc163a5f(tunableContext: string, tunableName: string, value: number): number;

/**
 * Console Hash - 0x3972551F = NETWORK_ACCESS_TUNABLE_FLOAT_HASH
 */
declare function NetworkAccessTunableFloatHash(tunableContext: string | number, tunableName: string | number, value: number): number;
/**
 * Console Hash - 0x3972551F = NETWORK_ACCESS_TUNABLE_FLOAT_HASH
 */
declare function N_0x972bc203bbc4c4d5(tunableContext: string | number, tunableName: string | number, value: number): number;

/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 */
declare function NetworkAccessTunableInt(tunableContext: string, tunableName: string, value: number): number;
/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 */
declare function N_0x8be1146dfd5d4468(tunableContext: string, tunableName: string, value: number): number;

/**
 * Console Hash - 0xB2E83B75 = NETWORK_ACCESS_TUNABLE_INT_HASH
 */
declare function NetworkAccessTunableIntHash(tunableContext: string | number, tunableName: string | number, value: number): number;
/**
 * Console Hash - 0xB2E83B75 = NETWORK_ACCESS_TUNABLE_INT_HASH
 */
declare function N_0x40fce03e50e8dbe8(tunableContext: string | number, tunableName: string | number, value: number): number;

declare function NetworkActionFollowInvite(): number;
declare function N_0xc88156ebb786f8d5(): number;

/**
 * Console hash: 0xCD69BEA1
 */
declare function NetworkAddEntityAngledArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;
/**
 * Console hash: 0xCD69BEA1
 */
declare function N_0x376c6375ba60293a(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): number;

declare function NetworkAddEntityArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function NetworkAddEntityToSynchronisedScene(entity: number, netScene: number, animDict: string, animName: string, speed: number, speedMulitiplier: number, flag: number): void;

/**
 * ..
 */
declare function NetworkAddFollowers(p1: number): number;
/**
 * ..
 */
declare function N_0x236406f60cf216d6(p1: number): number;

declare function NetworkAddFriend(p1: string): [number, number];

declare function NetworkAddPedToSynchronisedScene(ped: number, netScene: number, animDict: string, animnName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: number): void;

declare function NetworkAmIBlockedByGamer(p0: number): number;

declare function NetworkAmIBlockedByPlayer(player: number): number;

declare function NetworkAmIMutedByGamer(p0: number): number;

declare function NetworkAmIMutedByPlayer(player: number): number;

declare function NetworkApplyTransitionParameter(p0: number, p1: number): void;
declare function N_0x521638ada1ba0d18(p0: number, p1: number): void;

declare function NetworkAreHandlesTheSame(): [number, number, number];

/**
 * Returns whether the Rockstar game services are available or not:
 * SCLB_NO_ROS = The Rockstar game services are unavailable right now. Please try again later.
 * prod.ros.rockstargames.com
 * prod.telemetry.ros.rockstargames.com
 * conductor-prod.ros.rockstargames.com
 */
declare function NetworkAreRosAvailable(): number;
/**
 * Returns whether the Rockstar game services are available or not:
 * SCLB_NO_ROS = The Rockstar game services are unavailable right now. Please try again later.
 * prod.ros.rockstargames.com
 * prod.telemetry.ros.rockstargames.com
 * conductor-prod.ros.rockstargames.com
 */
declare function N_0x85443ff4c328f53b(): number;

declare function NetworkAreTransitionDetailsValid(p0: number): number;
declare function N_0x2615aa2a695930c1(p0: number): number;

declare function NetworkAttachSynchronisedSceneToEntity(netScene: number, entity: number, bone: number): void;

declare function NetworkBail(): void;

declare function NetworkBailTransition(): void;

declare function NetworkBlockInvites(toggle: boolean): void;

declare function NetworkBlockKickedPlayers(p0: boolean): void;
declare function N_0x6b07b9ce4d390375(p0: boolean): void;

/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 */
declare function NetworkBuyAirstrike(cost: number, p1: boolean, p2: boolean): void;

/**
 * p1 is just an assumption. p2 was false and p3 was true.
 */
declare function NetworkBuyBounty(amount: number, victim: number, p2: boolean, p3: boolean): void;

/**
 * The first parameter is the amount spent which is store in a global when this native is called. The global returns 10. Which is the price for both rides.
 * The last 3 parameters are,
 * 2,0,1 in the am_ferriswheel.c
 * 1,0,1 in the am_rollercoaster.c
 */
declare function NetworkBuyFairgroundRide(amountSpent: number, p1: number, p2: boolean, p3: boolean): void;
/**
 * The first parameter is the amount spent which is store in a global when this native is called. The global returns 10. Which is the price for both rides.
 * The last 3 parameters are,
 * 2,0,1 in the am_ferriswheel.c
 * 1,0,1 in the am_rollercoaster.c
 */
declare function N_0x8a7b3952dd64d2b5(amountSpent: number, p1: number, p2: boolean, p3: boolean): void;

declare function NetworkBuyHealthcare(cost: number, p1: boolean, p2: boolean): void;

/**
 * p1 = 0 (always)
 * p2 = 1 (always)
 */
declare function NetworkBuyHeliStrike(cost: number, p1: boolean, p2: boolean): void;

declare function NetworkBuyItem(player: number, item: string | number, p2: number, p3: number, p4: boolean, item_name: string, p6: number, p7: number, p8: number, p9: boolean): void;

declare function NetworkBuyProperty(propertyCost: number, propertyName: string | number, p2: boolean, p3: boolean): void;

/**
 * 11 - Need to download tunables.
 * 12 - Need to download background script.
 * Returns 1 if the multiplayer is loaded, otherwhise 0.
 */
declare function NetworkCanAccessMultiplayer(loadingState: number): number;
/**
 * 11 - Need to download tunables.
 * 12 - Need to download background script.
 * Returns 1 if the multiplayer is loaded, otherwhise 0.
 */
declare function N_0xaf50da1a3f8b1ba4(loadingState: number): number;

declare function NetworkCanBail(): number;

declare function NetworkCanBet(p0: number): number;
declare function N_0x3a54e33660ded67f(p0: number): number;

declare function NetworkCanCommunicateWithGamer(player: number): number;

declare function NetworkCanEnterMultiplayer(): number;

declare function NetworkCanReceivePlayerCash(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkCanSessionEnd(): number;

declare function NetworkCanSetWaypoint(): number;

declare function NetworkCanSpendMoney(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;
declare function N_0xab3caa6b422164da(p0: number, p1: boolean, p2: boolean, p3: boolean, p4: number): number;

declare function NetworkChangeTransitionSlots(p0: number, p1: number): void;
declare function N_0xeeeda5e6d7080987(p0: number, p1: number): void;

/**
 * Only documented...
 */
declare function NetworkClanAnimation(animDict: string, animName: string): number;
/**
 * Only documented...
 */
declare function N_0x729e3401f0430686(animDict: string, animName: string): number;

declare function NetworkClanDownloadMembership(networkHandle: number): number;

declare function NetworkClanDownloadMembershipPending(p0: number): number;

/**
 * BOOL DEBUG_MEMBRESHIP(int Param)
 * {
 * int membership;
 * networkHandleMgr handle;
 * NETWORK_HANDLE_FROM_PLAYER(iSelectedPlayer, &amp;handle.netHandle, 13);
 * if (!_NETWORK_IS_CLAN_MEMBERSHIP_FINISHED_DOWNLOADING())
 * {
 * if (NETWORK_CLAN_REMOTE_MEMBERSHIPS_ARE_IN_CACHE(&amp;Param))
 * {
 * if (NETWORK_CLAN_GET_MEMBERSHIP_COUNT(&amp;Param) &gt; 0)
 * {
 * if (NETWORK_CLAN_GET_MEMBERSHIP_VALID(&amp;Param, 0))
 * {
 * if (NETWORK_CLAN_GET_MEMBERSHIP(&amp;Param, &amp;membership, -1))
 * {
 * _0xF633805A(&amp;membership, 35, &amp;handle.netHandle);
 * }
 * }
 * }
 * }
 * }
 * else
 * {
 * NETWORK_CLAN_DOWNLOAD_MEMBERSHIP(&amp;handle.netHandle);
 * }
 * }
 */
declare function NetworkClanGetMembership(p2: number): [number, number, number];

declare function NetworkClanGetMembershipCount(p0: number): number;

/**
 * networkMembershipMgr memShip;
 * int maxMemship = _GET_NUM_MEMBERSHIP_DESC();
 * for (int i = 0; i &lt; maxMemship; i++)
 * {
 * NETWORK_CLAN_GET_MEMBERSHIP_DESC(&amp;memShip.memHandle, i);
 * }
 */
declare function NetworkClanGetMembershipDesc(p1: number): [number, number];

declare function NetworkClanGetMembershipValid(p1: number): [number, number];

declare function NetworkClanJoin(clanDesc: number): number;

/**
 * bufferSize is 35 in the scripts.
 * bufferSize is the elementCount of p0(desc), sizeof(p0) == 280 == p1*8 == 35 * 8, p2(netHandle) is obtained from NETWORK::NETWORK_HANDLE_FROM_PLAYER.  And no, I can't explain why 35 * sizeof(int) == 280 and not 140, but I'll get back to you on that.
 * the answer is: because p0 an int64_t* / int64_t[35].  and FYI p2 is an int64_t[13]
 * pastebin.com/cSZniHak
 */
declare function NetworkClanPlayerGetDesc(bufferSize: number): [number, number, number];

declare function NetworkClanPlayerIsActive(networkHandle: number): number;

declare function NetworkClanRemoteMembershipsAreInCache(p0: number): number;

declare function NetworkClearCharacterWallet(p0: number): void;
declare function N_0xa921ded15fdf28f5(p0: number): void;

declare function NetworkClearFollowInvite(): number;
declare function N_0x439bfde3cd0610f6(): number;

declare function NetworkClearFollowers(): void;
declare function N_0x058f43ec59a8631a(): void;

declare function NetworkClearFoundGamers(): void;

declare function NetworkClearPropertyId(): void;
declare function N_0xc2b82527ca77053e(): void;

declare function NetworkClearTransitionCreatorHandle(): void;

declare function NetworkClearVoiceChannel(): void;
declare function N_0xe036a705f989e049(): void;

declare function NetworkCloseTransitionMatchmaking(): void;
declare function N_0x43f4dba69710e01e(): void;

/**
 * returns netScene
 * this native is missing 2 params
 * float p10, float p11
 */
declare function NetworkCreateSynchronisedScene(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p6: number, p7: number, p8: number, p9: number): number;

/**
 * Note the 2nd parameters are always 1, 0. I have a feeling it deals with your money, wallet, bank. So when you delete the character it of course wipes the wallet cash at that time. So if that was the case, it would be eg, NETWORK_DELETE_CHARACTER(characterIndex, deleteWalletCash, deleteBankCash);
 */
declare function NetworkDeleteCharacter(characterIndex: number, p1: boolean, p2: boolean): void;

/**
 * hash collision???
 */
declare function NetworkDisableInvincibleFlashing(player: number, p1: boolean): void;
/**
 * hash collision???
 */
declare function N_0x9dd368bf06983221(player: number, p1: boolean): void;

declare function NetworkDoTransitionQuickmatch(p0: number, p1: number, p2: number, p3: number): number;
declare function N_0x71fb0ebcd4915d56(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkDoTransitionQuickmatchAsync(p0: number, p1: number, p2: number, p3: number): number;
declare function N_0xa091a5e44f0072e5(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkDoTransitionQuickmatchWithGroup(p0: number, p1: number, p2: number, p3: number, p5: number): [number, number];

/**
 * p2 is true 3/4 of the occurrences I found.
 * 'players' is the number of players for a session. On PS3/360 it's always 18. On PC it's 32.
 */
declare function NetworkDoTransitionToFreemode(p1: number, p2: boolean, players: number, p4: boolean): [number, number];

declare function NetworkDoTransitionToGame(p0: boolean, maxPlayers: number): number;

declare function NetworkDoTransitionToNewFreemode(players: number, p3: boolean, p4: boolean, p5: boolean): [number, number, number];

declare function NetworkDoTransitionToNewGame(p0: boolean, maxPlayers: number, p2: boolean): number;

declare function NetworkDoesEntityExistWithNetworkId(entity: number): number;

declare function NetworkDoesNetworkIdExist(netID: number): number;

/**
 * Some of the tunable contexts used in the PC scripts:
 * - "CONTENT_MODIFIER_MP_FM_RACES"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_SEA"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CAR"
 * - "CONTENT_MODIFIER_MP_FM_RACES_AIR"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "CONTENT_MODIFIER_MP_FM_RACES_CYCLE"
 * - "CONTENT_MODIFIER_MP_FM_RACES_BIKE"
 * - "CONTENT_MODIFIER_MP_FM_MISSIONS"
 * - "CONTENT_MODIFIER_MP_FM_CONTACT"
 * - "CONTENT_MODIFIER_MP_FM_RANDOM"
 * - "CONTENT_MODIFIER_MP_FM_VERSUS"
 * - "CONTENT_MODIFIER_MP_FM_LTS"
 * - "CONTENT_MODIFIER_MP_FM_CAPTURE"
 * - "CONTENT_MODIFIER_MP_FM_DM"
 * - "CONTENT_MODIFIER_MP_FM_SURVIVAL"
 * - "CONTENT_MODIFIER_MP_FM_GANG_ATTACK"
 * - "CONTENT_MODIFIER_MP_FM_BASEJUMP"
 * - "BASE_GLOBALS"
 * - "MP_GLOBAL"
 * and some of the tunable names used in the PC scripts:
 * - "XP_MULTIPLIER"
 * - "CASH_MULTIPLIER"
 * - "ARMOUR_REWARD_GIFT"
 * - "TOGGLE_CREATORS_OFF"
 */
declare function NetworkDoesTunableExist(tunableContext: string, tunableName: string): number;

/**
 * Console Hash - 0x25915CB9 = NETWORK_DOES_TUNABLE_EXIST_HASH
 */
declare function NetworkDoesTunableExistHash(tunbaleContext: string | number, tunableName: string | number): number;
/**
 * Console Hash - 0x25915CB9 = NETWORK_DOES_TUNABLE_EXIST_HASH
 */
declare function N_0xe4e53e1419d81127(tunbaleContext: string | number, tunableName: string | number): number;

/**
 * DSPORT
 */
declare function NetworkEarnFromAiTargetKill(p0: number, p1: number): void;
/**
 * DSPORT
 */
declare function N_0x515b4a22e4d3c6d7(p0: number, p1: number): void;

/**
 * Console Hash - 0xA14CC95D = NETWORK_EARN_FROM_AMBIENT_JOB
 * Example for p1: "AM_DISTRACT_COPS"
 */
declare function NetworkEarnFromAmbientJob(p0: number, p1: string, p2: number): void;
/**
 * Console Hash - 0xA14CC95D = NETWORK_EARN_FROM_AMBIENT_JOB
 * Example for p1: "AM_DISTRACT_COPS"
 */
declare function N_0xfb6db092fbae29e6(p0: number, p1: string, p2: number): void;

/**
 * For the money bags that drop a max of $40,000. Often called 40k bags.
 * Most likely NETWORK_EARN_FROM_ROB***
 */
declare function NetworkEarnFromArmourTruck(amount: number): void;
/**
 * For the money bags that drop a max of $40,000. Often called 40k bags.
 * Most likely NETWORK_EARN_FROM_ROB***
 */
declare function N_0xf514621e8ea463d0(amount: number): void;

declare function NetworkEarnFromBetting(amount: number, p1: string): void;

declare function NetworkEarnFromBounty(amount: number, p3: number): [number, number];

declare function NetworkEarnFromChallengeWin(p0: number, p2: boolean): number;
declare function N_0x2b171e6b2f64d8df(p0: number, p2: boolean): number;

declare function NetworkEarnFromCrateDrop(amount: number): void;
declare function N_0xb1cc1b9ec3007a2a(amount: number): void;

/**
 * Console Hash - 0xAB6BD72F = NETWORK_EARN_FROM_DAILY_OBJECTIVE
 */
declare function NetworkEarnFromDailyObjective(p0: number, p1: string, p2: number): void;
/**
 * Console Hash - 0xAB6BD72F = NETWORK_EARN_FROM_DAILY_OBJECTIVE
 */
declare function N_0x6ea318c91c1a8786(p0: number, p1: string, p2: number): void;

declare function NetworkEarnFromGangPickup(amount: number): void;
declare function N_0xa03d4ace0a3284ce(amount: number): void;

declare function NetworkEarnFromHoldups(amount: number): void;

declare function NetworkEarnFromImportExport(p0: number, p1: number): void;

declare function NetworkEarnFromJob(amount: number, p1: string): void;

/**
 * Console Hash - 0xBEE23713 = NETWORK_EARN_FROM_JOB_BONUS
 */
declare function NetworkEarnFromJobBonus(p0: number): [number, number];
/**
 * Console Hash - 0xBEE23713 = NETWORK_EARN_FROM_JOB_BONUS
 */
declare function N_0x6816fb4416760775(p0: number): [number, number];

/**
 * Pretty sure this is actually a hash collision.
 * It should be NETWORK_EARN_FROM_A*** or NETWORK_EARN_FROM_B***
 * =============================================================
 * Not a hash collision, test it for yourself when finishing heist.
 * lackos; 2017.03.12
 */
declare function NetworkEarnFromMissionH(amount: number, heistHash: string): void;
/**
 * Pretty sure this is actually a hash collision.
 * It should be NETWORK_EARN_FROM_A*** or NETWORK_EARN_FROM_B***
 * =============================================================
 * Not a hash collision, test it for yourself when finishing heist.
 * lackos; 2017.03.12
 */
declare function N_0x61326ee6df15b0ca(amount: number, heistHash: string): void;

declare function NetworkEarnFromNotBadsport(amount: number): void;
declare function N_0x4337511fa8221d36(amount: number): void;

/**
 * Now has 9 parameters.
 */
declare function NetworkEarnFromPersonalVehicle(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
/**
 * Now has 9 parameters.
 */
declare function N_0x3f4d00167e41e0ad(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

declare function NetworkEarnFromPickup(amount: number): number;

declare function NetworkEarnFromProperty(amount: number, propertyName: string | number): void;

/**
 * This merely adds an entry in the Network Transaction Log;
 * it does not grant cash to the player (on PC).
 * Max value for amount is 9999999.
 */
declare function NetworkEarnFromRockstar(amount: number): void;

/**
 * Now has 8 params.
 */
declare function NetworkEarnFromVehicle(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

/**
 * Pretty sure this is a hash collision
 */
declare function NetworkEnableMotionDrugged(): number;
/**
 * Pretty sure this is a hash collision
 */
declare function N_0x0b0cc10720653f3b(): number;

declare function NetworkEndTutorialSession(): void;

/**
 * In the console script dumps, this is only referenced once.
 * NETWORK::NETWORK_EXPLODE_VEHICLE(vehicle, 1, 0, 0);
 * ^^^^^ That must be PC script dumps? In X360 Script Dumps it is reference a few times with 2 differences in the parameters.
 * Which as you see below is 1, 0, 0 + 1, 1, 0 + 1, 0, and a *param?
 * am_plane_takedown.c
 * network_explode_vehicle(net_to_veh(Local_40.imm_2), 1, 1, 0);
 * armenian2.c
 * network_explode_vehicle(Local_80[6 &lt;2&gt;], 1, 0, 0);
 * fm_horde_controler.c
 * network_explode_vehicle(net_to_veh(*uParam0), 1, 0, *uParam0);
 * fm_mission_controller.c, has 6 hits so not going to list them.
 * Side note, setting the first parameter to 0 seems to mute sound or so?
 * Seems it's like ADD_EXPLOSION, etc. the first 2 params. The 3rd atm no need to worry since it always seems to be 0.
 */
declare function NetworkExplodeVehicle(vehicle: number, isAudible: boolean, isInvisible: boolean, p3: boolean): number;

/**
 * state - 0 does 5 fades
 * state - 1 does 6 fades
 * native is missing third argument, also boolean, setting to 1 made vehicle fade in slower, probably "slow" as per NETWORK_FADE_OUT_ENTITY
 */
declare function NetworkFadeInEntity(entity: number, state: boolean): void;

/**
 * normal - transition like when your coming out of LSC
 * slow - transition like when you walk into a mission
 */
declare function NetworkFadeOutEntity(entity: number, normal: boolean, slow: boolean): void;

declare function NetworkFindMatchedGamers(p0: number, p1: number, p2: number, p3: number): number;
declare function N_0xf7b2cfde5c9f700d(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkForceLocalUseOfSyncedSceneCamera(netScene: number, animDict: string, animName: string): void;
declare function N_0xcf8bd3b0bd6d42d7(netScene: number, animDict: string, animName: string): void;

declare function NetworkGamerHasHeadset(p0: number): number;

declare function NetworkGamertagFromHandlePending(): number;

declare function NetworkGamertagFromHandleStart(networkHandle: number): number;

declare function NetworkGamertagFromHandleSucceeded(): number;

declare function NetworkGetActivityPlayerNum(p0: boolean): number;

declare function NetworkGetBackgroundLoadingRecipients(p0: number, p1: number): [number, number, number];
declare function N_0x97a770beef227e2b(p0: number, p1: number): [number, number, number];

/**
 * Console Hash: Probably 0xAA7EA3BD
 */
declare function NetworkGetBankBalanceString(): string;
/**
 * Console Hash: Probably 0xAA7EA3BD
 */
declare function N_0xa6fa3979bed01b81(): string;

declare function NetworkGetCurrentlySelectedGamerHandleFromInviteMenu(p0: number): number;

declare function NetworkGetDesroyerOfEntity(p0: number, p1: number, p2: number): number;
declare function N_0x4caca84440fa26f6(p0: number, p1: number, p2: number): number;

declare function NetworkGetDestroyerOfNetworkId(netId: number, weaponHash: number): number;

declare function NetworkGetEntityFromNetworkId(netId: number): number;

declare function NetworkGetEntityIsLocal(entity: number): number;

declare function NetworkGetEntityIsNetworked(entity: number): number;
declare function N_0xc7827959479dcc78(entity: number): number;

declare function NetworkGetEntityKillerOfPlayer(player: number, weaponHash: number): number;

declare function NetworkGetFoundGamer(p1: number): [number, number];

declare function NetworkGetFriendCount(): number;

declare function NetworkGetFriendName(player: number): string;

declare function NetworkGetFriendNameFromIndex(friendIndex: number): string;
declare function NetworkGetFriendName(friendIndex: number): string;

declare function NetworkGetGamertagFromHandle(networkHandle: number): string;

/**
 * scriptName examples:
 * "freemode", "AM_CR_SecurityVan", ...
 * Most of the time, these values are used:
 * p1 = -1
 * p2 = 0
 */
declare function NetworkGetHostOfScript(scriptName: string, p1: number, p2: number): number;

declare function NetworkGetHostOfThisScript(): number;

/**
 * Retrieves the local player's NetworkHandle* and stores it in the given buffer.
 * * Currently unknown struct
 */
declare function NetworkGetLocalHandle(bufferSize: number): number;

declare function NetworkGetMaxFriends(): number;

declare function NetworkGetNetworkIdFromEntity(entity: number): number;

/**
 * Returns the amount of players connected in the current session. Only works when connected to a session/server.
 */
declare function NetworkGetNumConnectedPlayers(): number;

declare function NetworkGetNumFoundGamers(): number;

declare function NetworkGetNumParticipants(): number;

/**
 * Seems to always return 0, but it's used in quite a few loops.
 * for (num3 = 0; num3 &lt; NETWORK::0xCCD8C02D(); num3++)
 * {
 * if (NETWORK::NETWORK_IS_PARTICIPANT_ACTIVE(PLAYER::0x98F3B274(num3)) != 0)
 * {
 * var num5 = NETWORK::NETWORK_GET_PLAYER_INDEX(PLAYER::0x98F3B274(num3));
 */
declare function NetworkGetNumParticipantsHost(): number;

declare function NetworkGetNumPresenceInvites(): number;
declare function N_0xcefa968912d0f78d(): number;

declare function NetworkGetNumScriptParticipants(p1: number, p2: number): [number, number];
declare function N_0x3658e8cd94fc121a(p1: number, p2: number): [number, number];

declare function NetworkGetParticipantIndex(index: number): number;

declare function NetworkGetPlayerFromGamerHandle(networkHandle: number): number;

declare function NetworkGetPlayerIndex(player: number): number;

/**
 * Returns the Player associated to a given Ped when in an online session.
 */
declare function NetworkGetPlayerIndexFromPed(ped: number): number;
/**
 * Returns the Player associated to a given Ped when in an online session.
 */
declare function N_0x6c0e2e0125610278(ped: number): number;

declare function NetworkGetPlayerLoudness(p0: number): number;

declare function NetworkGetPresenceInviteHandle(p0: number, p1: number): number;

declare function NetworkGetPresenceInviteId(p0: number): number;
declare function N_0xdff09646e12ec386(p0: number): number;

declare function NetworkGetPresenceInviteInviter(p0: number): number;
declare function N_0x4962cc4aa2f345b7(p0: number): number;

declare function NetworkGetPresenceInviteSessionId(p0: number): number;
declare function N_0x26e1cd96b0903d60(p0: number): number;

declare function NetworkGetPrimaryClanDataCancel(): void;
declare function N_0x042e4b70b93e6054(): void;

declare function NetworkGetPrimaryClanDataClear(): number;
declare function N_0x9aa46badad0e27ed(): number;

declare function NetworkGetPrimaryClanDataNew(): [number, number, number];

declare function NetworkGetPrimaryClanDataPending(): number;
declare function N_0xb5074db804e28ce7(): number;

declare function NetworkGetPrimaryClanDataStart(p1: number): [number, number];

declare function NetworkGetPrimaryClanDataSuccess(): number;
declare function N_0x5b4f04f19376a0ba(): number;

declare function NetworkGetRandomInt(): number;
declare function N_0x599e4fa1f87eb5ff(): number;

/**
 * Same as GAMEPLAY::GET_RANDOM_INT_IN_RANGE
 */
declare function NetworkGetRandomIntInRange(rangeStart: number, rangeEnd: number): number;
/**
 * Same as GAMEPLAY::GET_RANDOM_INT_IN_RANGE
 */
declare function N_0xe30cf56f1efa5f43(rangeStart: number, rangeEnd: number): number;

/**
 * Based on scripts such as in freemode.c how they call their vars vVar and fVar the 2nd and 3rd param it a Vector3 and Float, but the first is based on get_random_int_in_range..
 */
declare function NetworkGetRespawnResult(randomInt: number): [number[], number];

declare function NetworkGetScriptStatus(): number;

declare function NetworkGetServerTime(): [number, number, number];
declare function N_0x6d03bfbd643b2a02(): [number, number, number];

declare function NetworkGetTalkerProximity(): number;

declare function NetworkGetThisScriptIsNetworkScript(): number;

declare function NetworkGetTimeoutTime(): number;
declare function N_0x5ed0356a0ce3a34f(): number;

declare function NetworkGetTransitionHost(networkHandle: number): number;

declare function NetworkGetTransitionMembers(p1: number): [number, number];

declare function NetworkGetVcBalance(): number;
declare function N_0x5cbad97e059e1b94(): number;

/**
 * From what I can see in ida, I believe it retrieves the players online bank balance.
 */
declare function NetworkGetVcBankBalance(): number;
/**
 * From what I can see in ida, I believe it retrieves the players online bank balance.
 */
declare function N_0x76ef28da05ea395a(): number;

/**
 * From what I understand, it retrieves STAT_WALLET_BALANCE for the specified character (-1 means use MPPLY_LAST_MP_CHAR)
 */
declare function NetworkGetVcWalletBalance(character: number): number;
/**
 * From what I understand, it retrieves STAT_WALLET_BALANCE for the specified character (-1 means use MPPLY_LAST_MP_CHAR)
 */
declare function N_0xa40f9c2623f6a8b5(character: number): number;

declare function NetworkGivePlayerJobshareCash(amount: number, networkHandle: number): void;

declare function NetworkHandleFromFriend(friendIndex: number, bufferSize: number): number;

/**
 * Returns a NetworkHandle* from the specified member ID and stores it in a given buffer.
 * * Currently unknown struct
 */
declare function NetworkHandleFromMemberId(memberId: string, bufferSize: number): number;

/**
 * Returns a handle to networkHandle* from the specified player handle and stores it in a given buffer.
 * * Currently unknown struct
 * Example:
 * std::vector&lt;UINT64&gt; GetPlayerNetworkHandle(Player player) {
 * const int size = 13;
 * uint64_t *buffer = std::make_unique&lt;uint64_t[]&gt;(size).get();
 * NETWORK::NETWORK_HANDLE_FROM_PLAYER(player, reinterpret_cast&lt;int *&gt;(buffer), 13);
 * for (int i = 0; i &lt; size; i++) {
 * Log::Msg("networkhandle[%i]: %llx", i, buffer[i]);
 * }
 * std::vector&lt;UINT64&gt; result(buffer, buffer + sizeof(buffer));
 * return result;
 * }
 */
declare function NetworkHandleFromPlayer(player: number, bufferSize: number): number;

/**
 * Returns a NetworkHandle* from the specified user ID and stores it in a given buffer.
 * * Currently unknown struct
 */
declare function NetworkHandleFromUserId(userId: string, bufferSize: number): number;

declare function NetworkHasControlOfDoor(doorID: number): number;

declare function NetworkHasControlOfEntity(entity: number): number;

declare function NetworkHasControlOfNetworkId(netId: number): number;

declare function NetworkHasControlOfPavementStats(hash: string | number): number;
declare function N_0xc01e93fac20c3346(hash: string | number): number;

declare function NetworkHasControlOfPickup(pickup: number): number;

declare function NetworkHasFollowInvite(): number;
declare function N_0x76d9b976c4c09fde(): number;

declare function NetworkHasHeadset(): number;

declare function NetworkHasInvitedGamer(p0: number): number;

declare function NetworkHasInvitedGamerToTransition(p0: number): number;

declare function NetworkHasPendingInvite(): number;

declare function NetworkHasPlayerStartedTransition(player: number): number;

/**
 * console hash: 0x5AC9F04D = network_hash_from_gamer_handle
 */
declare function NetworkHashFromGamerHandle(networkHandle: number): number;
/**
 * console hash: 0x5AC9F04D = network_hash_from_gamer_handle
 */
declare function N_0x58575ac3cf2ca8ec(networkHandle: number): number;

/**
 * console hash: 0xF8D7AF3B = NETWORK_HASH_FROM_PLAYER_HANDLE
 */
declare function NetworkHashFromPlayerHandle(player: number): number;
/**
 * console hash: 0xF8D7AF3B = NETWORK_HASH_FROM_PLAYER_HANDLE
 */
declare function N_0xbc1d768f2f5d6c05(player: number): number;

declare function NetworkHaveOnlinePrivileges(): number;

declare function NetworkHostTransition(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

declare function NetworkInitializeCash(p0: number, p1: number): void;
declare function N_0x3da5ecd1a56cba6d(p0: number, p1: number): void;

declare function NetworkInviteGamers(p1: number): [number, number, number, number];

declare function NetworkInviteGamersToTransition(p1: number): [number, number];

declare function NetworkIsActivitySession(): number;

declare function NetworkIsActivitySpectator(): number;

declare function NetworkIsActivitySpectatorFromHandle(networkHandle: number): number;

declare function NetworkIsAddingFriend(): number;

declare function NetworkIsCableConnected(): number;
declare function N_0xeffb25453d8600f9(): number;

/**
 * This would be nice to see if someone is in party chat, but 2 sad notes.
 * 1) It only becomes true if said person is speaking in that party at the time.
 * 2) It will never, become true unless you are in that party with said person.
 */
declare function NetworkIsChattingInPlatformParty(networkHandle: number): number;

declare function NetworkIsClanMembershipFinishedDownloading(): number;
declare function N_0xb3f64a6a91432477(): number;

declare function NetworkIsClockTimeOverridden(): number;
declare function N_0xd7c95d322ff57522(): number;

declare function NetworkIsCloudAvailable(): number;

declare function NetworkIsFindingGamers(): number;

declare function NetworkIsFriend(networkHandle: number): number;

declare function NetworkIsFriendInMultiplayer(friendName: string): number;

/**
 * In scripts R* calls 'NETWORK_GET_FRIEND_NAME' in this param.
 */
declare function NetworkIsFriendInSameTitle(friendName: string): number;

declare function NetworkIsFriendIndexOnline(friendIndex: number): number;
declare function N_0xbad8f2a42b844821(friendIndex: number): number;

declare function NetworkIsFriendOnline(name: string): number;

declare function NetworkIsFriendOnline_2(networkHandle: number): number;
declare function N_0x87eb7a3ffcb314db(networkHandle: number): number;

declare function NetworkIsGameInProgress(): number;

declare function NetworkIsGamerBlockedByMe(p0: number): number;

declare function NetworkIsGamerInMySession(networkHandle: number): number;

declare function NetworkIsGamerMutedByMe(p0: number): number;

declare function NetworkIsGamerTalking(p0: number): number;

declare function NetworkIsHandleValid(bufferSize: number): [number, number];

/**
 * If you are host, returns true else returns false.
 * anyone know how to use this to find correct host? is possible?
 */
declare function NetworkIsHost(): number;

declare function NetworkIsHostOfThisScript(): number;

declare function NetworkIsInMpCutscene(): number;

/**
 * Note according to IDA TU27 X360(Console),
 * This native &amp; 'NETWORK_IS_PARTY_MEMBER' both jump to the same location.
 * Side note: This location just stops where it's at once jumped to.
 * Screenshot for side note,
 * h t t p ://i.imgur.com/m2ci1mF.png
 * h t t p://i.imgur.com/Z0Wx2B6.png
 */
declare function NetworkIsInParty(): number;

declare function NetworkIsInSession(): number;

declare function NetworkIsInSpectatorMode(): number;

declare function NetworkIsInTransition(): number;

declare function NetworkIsInTutorialSession(): number;

declare function NetworkIsInactiveProfile(p0: number): number;

declare function NetworkIsLocalPlayerInvincible(): number;

declare function NetworkIsMultiplayerDisabled(): number;
declare function N_0x9747292807126eda(): number;

declare function NetworkIsParticipantActive(p0: number): number;

/**
 * Note according to IDA TU27 X360(Console),
 * This native &amp; 'NETWORK_IS_PARTY_MEMBER' both jump to the same location.
 * Side note: This location just stops where it's at once jumped to.
 * Screenshot for side note,
 * h t t p ://i.imgur.com/m2ci1mF.png
 * h t t p://i.imgur.com/Z0Wx2B6.png
 */
declare function NetworkIsPartyMember(networkHandle: number): number;

/**
 * This function is hard-coded to always return 0.
 */
declare function NetworkIsPendingFriend(p0: number): number;

declare function NetworkIsPlayerAParticipant(p0: number): number;

declare function NetworkIsPlayerActive(player: number): number;

/**
 * hash collision
 */
declare function NetworkIsPlayerAnimationDrawingSynchronized(): void;

declare function NetworkIsPlayerBlockedByMe(player: number): number;

declare function NetworkIsPlayerConnected(player: number): number;

/**
 * NETWORK_ARE_*
 */
declare function NetworkIsPlayerEqualToIndex(player: number, index: number): number;
/**
 * NETWORK_ARE_*
 */
declare function N_0x9de986fc9a87c474(player: number, index: number): number;

declare function NetworkIsPlayerInMpCutscene(player: number): number;

declare function NetworkIsPlayerMutedByMe(player: number): number;

declare function NetworkIsPlayerTalking(player: number): number;

declare function NetworkIsScriptActive(scriptName: string, p1: number, p2: boolean, p3: number): number;

declare function NetworkIsSessionActive(): number;

declare function NetworkIsSessionBusy(): number;

/**
 * This checks if player is playing on gta online or not.
 * Please add an if and block your mod if this is "true".
 */
declare function NetworkIsSessionStarted(): number;

/**
 * Returns whether the player is signed into Social Club.
 */
declare function NetworkIsSignedIn(): number;

/**
 * Returns whether the game is not in offline mode.
 * seemed not to work for some ppl
 */
declare function NetworkIsSignedOnline(): number;

/**
 * Same as _IS_TEXT_CHAT_ACTIVE, except it does not check if the text chat HUD component is initialized, and therefore may crash.
 */
declare function NetworkIsTextChatActive(): number;

declare function NetworkIsTransitionBusy(): number;

declare function NetworkIsTransitionHost(): number;

declare function NetworkIsTransitionHostFromHandle(networkHandle: number): number;

declare function NetworkIsTransitionMatchmaking(): number;
declare function N_0x292564c735375edf(): number;

declare function NetworkIsTransitionStarted(): number;

declare function NetworkIsTransitionToGame(): number;

declare function NetworkJoinGroupActivity(): number;
declare function N_0xa06509a691d12be4(): number;

/**
 * int handle[76];
 * NETWORK_HANDLE_FROM_FRIEND(iSelectedPlayer, &amp;handle[0], 13);
 * Player uVar2 = NETWORK_GET_PLAYER_FROM_GAMER_HANDLE(&amp;handle[0]);
 * NETWORK_JOIN_TRANSITION(uVar2);
 * nothing doin.
 */
declare function NetworkJoinTransition(player: number): number;

declare function NetworkLaunchTransition(): number;

declare function NetworkLeaveTransition(): number;

declare function NetworkMarkTransitionGamerAsFullyJoined(p0: number): number;

declare function NetworkMemberIdFromGamerHandle(networkHandle: number): string;

declare function NetworkMoneyCanBet(p0: number, p1: boolean, p2: boolean): number;
declare function N_0x81404f3dc124fe5b(p0: number, p1: boolean, p2: boolean): number;

declare function NetworkOpenTransitionMatchmaking(): void;
declare function N_0x2b3a8f7ca3a38fde(): void;

/**
 * Could possibly bypass being muted or automatically muted? Who knows.
 */
declare function NetworkOverrideChatRestrictions(player: number, toggle: boolean): void;
/**
 * Could possibly bypass being muted or automatically muted? Who knows.
 */
declare function N_0x3039ae5ad2c9c0c4(player: number, toggle: boolean): void;

/**
 * Works in Singleplayer too.
 * Actually has a 4th param (BOOL) that sets byte_14273C46C (in b944) to whatever was passed to p3.
 */
declare function NetworkOverrideClockTime(Hours: number, Minutes: number, Seconds: number): void;

/**
 * R* uses this to hear all player when spectating.
 * It allows you to hear other online players when their chat is on none, crew and or friends
 */
declare function NetworkOverrideReceiveRestrictions(player: number, toggle: boolean): void;
/**
 * R* uses this to hear all player when spectating.
 * It allows you to hear other online players when their chat is on none, crew and or friends
 */
declare function N_0xddf73e2b1fec5ab4(player: number, toggle: boolean): void;

/**
 * Console Hash: 0x6C344AE3
 * "NETWORK_OVERRIDE_SEND_RESTRICTIONS" is right, but dev-c put a _ by default.
 * This is used alongside the native,
 * 'NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS'. Read it's description for more info.
 */
declare function NetworkOverrideSendRestrictions(player: number, toggle: boolean): void;
/**
 * Console Hash: 0x6C344AE3
 * "NETWORK_OVERRIDE_SEND_RESTRICTIONS" is right, but dev-c put a _ by default.
 * This is used alongside the native,
 * 'NETWORK_OVERRIDE_RECEIVE_RESTRICTIONS'. Read it's description for more info.
 */
declare function N_0x97dd4c5944cc2e6a(player: number, toggle: boolean): void;

declare function NetworkOverrideTransitionChat(p0: boolean): void;
declare function N_0xaf66059a131aa269(p0: boolean): void;

declare function NetworkPayEmployeeWage(p0: number, p1: boolean, p2: boolean): void;
declare function N_0x5fd5ed82cbbe9989(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkPayMatchEntryFee(value: number, p2: boolean, p3: boolean): number;
declare function N_0x9346e14f2af74d46(value: number, p2: boolean, p3: boolean): number;

declare function NetworkPayUtilityBill(p0: number, p1: boolean, p2: boolean): void;
declare function N_0xafe08b35ec0c9eae(p0: number, p1: boolean, p2: boolean): void;

/**
 * Returns the name of a given player. Returns "**Invalid**" if CPlayerInfo of the given player cannot be retrieved or the player doesn't exist.
 */
declare function NetworkPlayerGetName(player: number): string;

/**
 * Returns the user id of a given player. Returns "**Invalid**" if CPlayerInfo of the given player cannot be retrieved or the player doesn't exist.
 */
declare function NetworkPlayerGetUserid(player: number, userID: number): string;
/**
 * Returns the user id of a given player. Returns "**Invalid**" if CPlayerInfo of the given player cannot be retrieved or the player doesn't exist.
 */
declare function NetworkPlayerGetUserId(player: number, userID: number): string;

declare function NetworkPlayerHasHeadset(player: number): number;

/**
 * Does exactly the same thing as PLAYER_ID()
 */
declare function NetworkPlayerIdToInt(): number;

/**
 * Returns whether the player has been reported too often or not.
 * Example : griefing.
 */
declare function NetworkPlayerIsBadsport(): number;

declare function NetworkPlayerIsCheater(): number;

declare function NetworkPlayerIsInClan(): number;

/**
 * Checks if a specific value (BYTE) in CPlayerInfo is nonzero.
 * Returns always false in Singleplayer.
 * No longer used for dev checks since first mods were released on PS3 &amp; 360.
 * R* now checks with the is_dlc_present native for the dlc hash 2532323046,
 * if that is present it will unlock dev stuff.
 */
declare function NetworkPlayerIsRockstarDev(player: number): number;

declare function NetworkReceivePlayerJobshareCash(value: number, networkHandle: number): void;

/**
 * index
 * -------
 * See function sub_1005 in am_boat_taxi.ysc
 * context
 * ----------
 * "BACKUP_VAGOS"
 * "BACKUP_LOST"
 * "BACKUP_FAMILIES"
 * "HIRE_MUGGER"
 * "HIRE_MERCENARY"
 * "BUY_CARDROPOFF"
 * "HELI_PICKUP"
 * "BOAT_PICKUP"
 * "CLEAR_WANTED"
 * "HEAD_2_HEAD"
 * "CHALLENGE"
 * "SHARE_LAST_JOB"
 * "DEFAULT"
 * reason
 * ---------
 * "NOTREACHTARGET"
 * "TARGET_ESCAPE"
 * "DELIVERY_FAIL"
 * "NOT_USED"
 * "TEAM_QUIT"
 * "SERVER_ERROR"
 * "RECEIVE_LJ_L"
 * "CHALLENGE_PLAYER_LEFT"
 * "DEFAULT"
 * unk
 * -----
 * Unknown bool value
 */
declare function NetworkRefundCash(index: number, context: string, reason: string, unk: boolean): void;
/**
 * index
 * -------
 * See function sub_1005 in am_boat_taxi.ysc
 * context
 * ----------
 * "BACKUP_VAGOS"
 * "BACKUP_LOST"
 * "BACKUP_FAMILIES"
 * "HIRE_MUGGER"
 * "HIRE_MERCENARY"
 * "BUY_CARDROPOFF"
 * "HELI_PICKUP"
 * "BOAT_PICKUP"
 * "CLEAR_WANTED"
 * "HEAD_2_HEAD"
 * "CHALLENGE"
 * "SHARE_LAST_JOB"
 * "DEFAULT"
 * reason
 * ---------
 * "NOTREACHTARGET"
 * "TARGET_ESCAPE"
 * "DELIVERY_FAIL"
 * "NOT_USED"
 * "TEAM_QUIT"
 * "SERVER_ERROR"
 * "RECEIVE_LJ_L"
 * "CHALLENGE_PLAYER_LEFT"
 * "DEFAULT"
 * unk
 * -----
 * Unknown bool value
 */
declare function N_0xf9c812cd7c46e817(index: number, context: string, reason: string, unk: boolean): void;

declare function NetworkRegisterEntityAsNetworked(entity: number): void;
declare function N_0x06faacd625d80caa(entity: number): void;

declare function NetworkRegisterHostBroadcastVariables(numVars: number): number;

declare function NetworkRegisterPlayerBroadcastVariables(numVars: number): number;

declare function NetworkRemoveAllTransitionInvite(): void;
declare function N_0x726e0375c7a26368(): void;

declare function NetworkRemoveEntityArea(p0: number): number;

declare function NetworkRemovePresenceInvite(p0: number): number;
declare function N_0xf0210268db0974b1(p0: number): number;

declare function NetworkRemoveTransitionInvite(p0: number): void;

/**
 * NETWORK_REQUEST_CLOUD_BACKGROUND_SCRIPTS - Correct console hash is 0x98EFB921
 * Start the downloading of BG_NG.RPF from R* Cloud which contains hotfix.
 * The console hash given is incorrect for Xbox360 that is. I searched in IDA and found 0x98EFB921 which came right after 0x155465EE. Then I searched it in TU27 X360 scripts and found it was the same results same scripts as the PC Hash for this which is obviously correct. I found the correct one as I noticed TU27 X360 script search pulled no results for 0x29532731 when it should have.
 * As you can see here you will see the 155465EE first then the correct hash for this native. Then the current 29532731 one which could be the native below or the native below's hash could be the has below the 29532731
 * puu.sh/nhdQI/e0ca5567b4.png
 * 0x98EFB921 is the correct console hash for "_DOWNLOAD_BG_SCRIPT_RPF". 0x29532731 is "_HAS_BG_SCRIPT_BEEN_DOWNLOADED"
 */
declare function NetworkRequestCloudBackgroundScripts(): number;
/**
 * NETWORK_REQUEST_CLOUD_BACKGROUND_SCRIPTS - Correct console hash is 0x98EFB921
 * Start the downloading of BG_NG.RPF from R* Cloud which contains hotfix.
 * The console hash given is incorrect for Xbox360 that is. I searched in IDA and found 0x98EFB921 which came right after 0x155465EE. Then I searched it in TU27 X360 scripts and found it was the same results same scripts as the PC Hash for this which is obviously correct. I found the correct one as I noticed TU27 X360 script search pulled no results for 0x29532731 when it should have.
 * As you can see here you will see the 155465EE first then the correct hash for this native. Then the current 29532731 one which could be the native below or the native below's hash could be the has below the 29532731
 * puu.sh/nhdQI/e0ca5567b4.png
 * 0x98EFB921 is the correct console hash for "_DOWNLOAD_BG_SCRIPT_RPF". 0x29532731 is "_HAS_BG_SCRIPT_BEEN_DOWNLOADED"
 */
declare function N_0x924426bffd82e915(): number;

/**
 * This native start the download of tunables from R* cloud
 */
declare function NetworkRequestCloudTunables(): void;
/**
 * This native start the download of tunables from R* cloud
 */
declare function N_0x42fb3b532d526e6c(): void;

declare function NetworkRequestControlOfDoor(doorID: number): number;

declare function NetworkRequestControlOfEntity(entity: number): number;

declare function NetworkRequestControlOfNetworkId(netId: number): number;

/**
 * hash collision?? - Not sure, but fits alphabetically
 */
declare function NetworkResetBodyTracker(): void;

declare function NetworkResurrectLocalPlayer(x: number, y: number, z: number, heading: number, unk: boolean, changetime: boolean): void;

declare function NetworkSendPresenceInvite(p2: number, p3: number): [number, number, number];
declare function N_0xc3c7a6afdb244624(p2: number, p3: number): [number, number, number];

/**
 * String "NETWORK_SEND_PRESENCE_TRANSITION_INVITE" is contained in the function in ida so this one is correct.
 */
declare function NetworkSendPresenceTransitionInvite(p2: number, p3: number): [number, number, number];
/**
 * String "NETWORK_SEND_PRESENCE_TRANSITION_INVITE" is contained in the function in ida so this one is correct.
 */
declare function N_0xc116ff9b4d488291(p2: number, p3: number): [number, number, number];

/**
 * how can I increase the character limit on this native?
 * --------------------------------
 * return - it's possible for it to have an error and return a value. One error is if it cannot find space to create the event it doesn't send the text and returns zero. It also returns 0 is the strlen is 0 or the strlen &gt; 0x100 (I thought it was 64 so idk why it's checking 265. I may just be dumb :P ) There are other ways it could return 0 also but who the hell cares cuz it's very unlikely, but it returns a bool.
 * to the top guy, idk if it is possible. It is probably read a max of 64 characters on the recieving end so even if we did modify it to send more it probably wouldn't work. One of the other problems is that in part of the function it copies the string to the local stack which means we would have to change that to make it work.
 */
declare function NetworkSendTextMessage(message: string, networkHandle: number): number;

/**
 * the first arg seems to be the network player handle (&amp;handle) and the second var is pretty much always "" and the third seems to be a number between 0 and ~10 and the 4th is is something like 0 to 5 and I guess the 5th is a bool cuz it is always 0 or 1
 * does this send an invite to a player?
 */
declare function NetworkSendTransitionGamerInstruction(p1: string, p2: number, p3: number, p4: boolean): [number, number];

declare function NetworkSessionActivityQuickmatch(p0: number, p1: number, p2: number, p3: number): number;
declare function N_0xbe3e347a87aceb82(p0: number, p1: number, p2: number, p3: number): number;

declare function NetworkSessionBlockJoinRequests(p0: boolean): void;
declare function N_0xa73667484d7037c3(p0: boolean): void;

declare function NetworkSessionCancelInvite(): void;

declare function NetworkSessionChangeSlots(p0: number, p1: boolean): void;
declare function N_0xb4ab419e0d86acae(p0: number, p1: boolean): void;

declare function NetworkSessionCrewMatchmaking(p0: number, p1: number, p2: number, maxPlayers: number, p4: boolean): number;
declare function N_0x94bc51e9449d917f(p0: number, p1: number, p2: number, maxPlayers: number, p4: boolean): number;

/**
 * p0 is always false and p1 varies.
 * NETWORK_SESSION_END(0, 1)
 * NETWORK_SESSION_END(0, 0)
 * Results in: "Connection to session lost due to an unknown network error. Please return to Grand Theft Auto V and try again later."
 */
declare function NetworkSessionEnd(p0: boolean, p1: boolean): number;

/**
 * unknown params
 * p0 = 0, 2, or 999 (The global is 999 by default.)
 * p1 = 0 (Always in every script it's found in atleast.)
 * p2 = 0, 3, or 4 (Based on a var that is determined by a function.)
 * p3 = maxPlayers (It's obvious in x360 scripts it's always 18)
 * p4 = 0 (Always in every script it's found in atleast.)
 * p5 = 0 or 1. (1 if network_can_enter_multiplayer, but set to 0 if other checks after that are passed.)
 * p5 is reset to 0 if,
 * Global_1315318 = 0 or Global_1315323 = 9 or 12 or (Global_1312629 = 0 &amp;&amp; Global_1312631 = true/1) those are passed.
 */
declare function NetworkSessionEnter(p0: number, p1: number, p2: number, maxPlayers: number, p4: number, p5: number): number;

declare function NetworkSessionForceCancelInvite(): void;
declare function N_0xa29177f7703b5644(): void;

declare function NetworkSessionFriendMatchmaking(p0: number, p1: number, maxPlayers: number, p3: boolean): number;
declare function N_0x2cfc76e0d087c994(p0: number, p1: number, maxPlayers: number, p3: boolean): number;

declare function NetworkSessionGetInviter(networkHandle: number): void;

declare function NetworkSessionGetUnk(p0: number): number;
declare function N_0x56ce820830ef040b(p0: number): number;

/**
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 */
declare function NetworkSessionHost(p0: number, maxPlayers: number, p2: boolean): number;

declare function NetworkSessionHostClosed(p0: number, maxPlayers: number): number;
declare function N_0xed34c0c02c098bb7(p0: number, maxPlayers: number): number;

/**
 * Does nothing in online but in offline it will cause the screen to fade to black. Nothing happens past then, the screen will sit at black until you restart GTA. Other stuff must be needed to actually host a session.
 */
declare function NetworkSessionHostFriendsOnly(p0: number, maxPlayers: number): number;

/**
 * Loads up the map that is loaded when beeing in mission creator
 * Player gets placed in a mix between online/offline mode
 * p0 is always 2 in R* scripts.
 * Appears to be patched in gtav b757 (game gets terminated) alonside with most other network natives to prevent online modding ~ghost30812
 */
declare function NetworkSessionHostSinglePlayer(p0: number): void;

declare function NetworkSessionHosted(p0: boolean): void;
declare function N_0xc19f6c8e7865a6ff(p0: boolean): void;

declare function NetworkSessionIsClosedCrew(): number;
declare function N_0x74732c6ca90da2b4(): number;

declare function NetworkSessionIsClosedFriends(): number;
declare function N_0xfbcfa2ea2e206890(): number;

declare function NetworkSessionIsPlayerVotedToKick(player: number): number;
declare function NetworkSessionArePlayersVotingToKick(player: number): number;

declare function NetworkSessionIsPrivate(): number;
declare function N_0xcef70aa5b3f89ba1(): number;

declare function NetworkSessionIsSolo(): number;
declare function N_0xf3929c2379b60cce(): number;

declare function NetworkSessionIsVisible(): number;
declare function N_0xba416d68c631496a(): number;

/**
 * Only works when you are host.
 */
declare function NetworkSessionKickPlayer(player: number): void;

declare function NetworkSessionLeaveSinglePlayer(): void;

declare function NetworkSessionMarkVisible(p0: boolean): void;
declare function N_0x271cc6ab59ebf9a5(p0: boolean): void;

/**
 * playerTypes:
 * 0 = regular joiner
 * 4 = spectator
 * 8 = unknown
 */
declare function NetworkSessionSetMaxPlayers(playerType: number, playerCount: number): void;
/**
 * playerTypes:
 * 0 = regular joiner
 * 4 = spectator
 * 8 = unknown
 */
declare function N_0x8b6a4dd0af9ce215(playerType: number, playerCount: number): void;

declare function NetworkSessionVoiceHost(): void;

declare function NetworkSessionVoiceLeave(): void;

declare function NetworkSessionWasInvited(): number;
declare function N_0x23dfb504655d0ce4(): number;

declare function NetworkSetActivitySpectator(toggle: boolean): void;

declare function NetworkSetActivitySpectatorMax(maxSpectators: number): void;

declare function NetworkSetCurrentlySelectedGamerHandleFromInviteMenu(p0: number): number;

declare function NetworkSetEntityCanBlend(entity: number, toggle: boolean): void;

/**
 * if set to true other network players can't see it
 * if set to false other network player can see it
 * =========================================
 * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
 * pc or last gen?
 * ^^ last-gen
 */
declare function NetworkSetEntityVisibleToNetwork(entity: number, toggle: boolean): void;
/**
 * if set to true other network players can't see it
 * if set to false other network player can see it
 * =========================================
 * ^^ I attempted this by grabbing an object with GET_ENTITY_PLAYER_IS_FREE_AIMING_AT and setting this naive no matter the toggle he could still see it.
 * pc or last gen?
 * ^^ last-gen
 */
declare function N_0xf1ca12b18aef5298(entity: number, toggle: boolean): void;

/**
 * //friendly fire toggle
 */
declare function NetworkSetFriendlyFireOption(toggle: boolean): void;

declare function NetworkSetGamerInvitedToTransition(networkHandle: number): void;

declare function NetworkSetInMpCutscene(p0: boolean, p1: boolean): void;

declare function NetworkSetInSpectatorMode(toggle: boolean, playerPed: number): void;

/**
 * hash collision???
 */
declare function NetworkSetKeepFocuspoint(p0: boolean, p1: number): void;

declare function NetworkSetLocalPlayerInvincibleTime(time: number): void;

declare function NetworkSetMissionFinished(): void;

declare function NetworkSetNetworkIdDynamic(netID: number, toggle: boolean): void;
declare function N_0x2b1813aba29016c5(netID: number, toggle: boolean): void;

declare function NetworkSetOverrideSpectatorMode(toggle: boolean): void;

declare function NetworkSetPropertyId(p0: number): void;

declare function NetworkSetRichPresence(p0: number, p1: number, p2: number, p3: number): void;

declare function NetworkSetScriptIsSafeForNetworkGame(): void;

declare function NetworkSetTalkerProximity(p0: number): void;

declare function NetworkSetTeamOnlyChat(toggle: boolean): void;

/**
 * p1 is always 0
 */
declare function NetworkSetThisScriptIsNetworkScript(lobbySize: number, p1: boolean, playerId: number): void;

declare function NetworkSetThisScriptMarked(p0: number, p1: boolean, p2: number): number;
declare function N_0xd1110739eeadb592(p0: number, p1: boolean, p2: number): number;

declare function NetworkSetTransitionActivityId(p0: number): void;
declare function N_0x30de938b516f0ad2(p0: number): void;

declare function NetworkSetTransitionCreatorHandle(p0: number): void;

declare function NetworkSetVoiceActive(toggle: boolean): void;

declare function NetworkSetVoiceChannel(p0: number): void;

/**
 * p0 is pointer to a script array
 */
declare function NetworkShopBasketAddItem(p1: number): [number, number];
/**
 * p0 is pointer to a script array
 */
declare function N_0xf30980718c8ed876(p1: number): [number, number];

/**
 * p0 =&gt; unk3::_network_shop_basket_apply_server_data(Global_2590199[iParam0  -- [[76]] ], &amp;uVar6); =&gt; script array
 */
declare function NetworkShopBasketApplyServerData(p0: number, p1: number): number;
/**
 * p0 =&gt; unk3::_network_shop_basket_apply_server_data(Global_2590199[iParam0  -- [[76]] ], &amp;uVar6); =&gt; script array
 */
declare function N_0xe1a0450ed46a7812(p0: number, p1: number): number;

declare function NetworkShopBasketEnd(): number;
declare function N_0xa65568121df2ea26(): number;

declare function NetworkShopBasketIsFull(): number;
declare function N_0x27f76cc6c55ad30e(): number;

declare function NetworkShopBasketStart(p1: number, p2: number, p3: number): [number, number];

/**
 * int netShop = 2147483647;
 * UNK3::_NETWORK_SHOP_BEGIN_SERVICE(&amp;netShop, 1474183246, 1982688246, 1445302971, 90000000, 4);
 * if (!UNK3::_NETWORK_SHOP_CHECKOUT_START(netShop)) {
 * showNotification("Transaction failed!");
 * }
 */
declare function NetworkShopBeginService(p1: number, p2: number, p3: number, p4: number, p5: number): [number, number];
/**
 * int netShop = 2147483647;
 * UNK3::_NETWORK_SHOP_BEGIN_SERVICE(&amp;netShop, 1474183246, 1982688246, 1445302971, 90000000, 4);
 * if (!UNK3::_NETWORK_SHOP_CHECKOUT_START(netShop)) {
 * showNotification("Transaction failed!");
 * }
 */
declare function N_0x3c5fd37b5499582e(p1: number, p2: number, p3: number, p4: number, p5: number): [number, number];

declare function NetworkShopCashTransferSetTelemetryNonceSeed(): number;
declare function N_0x498c1e05ce5f7877(): number;

declare function NetworkShopCheckoutStart(p0: number): number;
declare function N_0x39be7cea8d9cc8e6(p0: number): number;

declare function NetworkShopDeleteSetTelemetryNonceSeed(): number;
declare function N_0x112cef1615a1139f(): number;

/**
 * Belongs in UNK3, non-hashed version of 0x247F0F73A182EA0B
 */
declare function NetworkShopDoesItemExist(name: string): number;
/**
 * Belongs in UNK3, non-hashed version of 0x247F0F73A182EA0B
 */
declare function N_0xbd4d7eaf8a30f637(name: string): number;
/**
 * Belongs in UNK3, non-hashed version of 0x247F0F73A182EA0B
 */
declare function NetworkShopIsItemUnlocked(name: string): number;

/**
 * ex.:
 * v_15 = sub_10cc8(VEHICLE::GET_VEHICLE_WHEEL_TYPE(a_2));
 * if (!MOBILE::_247F0F73A182EA0B(v_15)) {
 * return 1;
 * }
 * Belongs in UNK3, hashed version of 0xBD4D7EAF8A30F637
 */
declare function NetworkShopDoesItemExistHash(hash: string | number): number;
/**
 * ex.:
 * v_15 = sub_10cc8(VEHICLE::GET_VEHICLE_WHEEL_TYPE(a_2));
 * if (!MOBILE::_247F0F73A182EA0B(v_15)) {
 * return 1;
 * }
 * Belongs in UNK3, hashed version of 0xBD4D7EAF8A30F637
 */
declare function N_0x247f0f73a182ea0b(hash: string | number): number;
/**
 * ex.:
 * v_15 = sub_10cc8(VEHICLE::GET_VEHICLE_WHEEL_TYPE(a_2));
 * if (!MOBILE::_247F0F73A182EA0B(v_15)) {
 * return 1;
 * }
 * Belongs in UNK3, hashed version of 0xBD4D7EAF8A30F637
 */
declare function NetworkShopIsItemUnlockedHash(hash: string | number): number;

declare function NetworkShopEndService(p0: number): number;
declare function N_0xe2a99a9b524befff(p0: number): number;

/**
 * bool is always true in game scripts
 */
declare function NetworkShopGetPrice(hash: string | number, hash2: string | number, p2: boolean): number;

declare function NetworkShopGetTransactionsDisabled(): number;
declare function N_0x810e8431c0614bf9(): number;

declare function NetworkShopGetTransactionsEnabledForCharacter(mpChar: number): number;
declare function N_0xb24f0944da203d9e(mpChar: number): number;

declare function NetworkShopSessionApplyReceivedData(p0: number): number;
declare function N_0x2f41d51ba3bcd1f1(p0: number): number;

declare function NetworkShopSetTelemetryNonceSeed(p0: number): number;
declare function N_0x9507d4271988e1ae(p0: number): number;

declare function NetworkShopStartSession(p0: number): number;
declare function N_0xa135ac892a58fc07(p0: number): number;

/**
 * Example:
 * int playerHandle;
 * NETWORK_HANDLE_FROM_PLAYER(selectedPlayer, &amp;playerHandle, 13);
 * NETWORK_SHOW_PROFILE_UI(&amp;playerHandle);
 */
declare function NetworkShowProfileUi(networkHandle: number): void;

declare function NetworkSpentAmmoDrop(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentArrestBail(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBetting(p0: number, p1: number, p3: boolean, p4: boolean): number;

declare function NetworkSpentBoatPickup(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBounty(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBullShark(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyOfftheradar(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyPassiveMode(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyRevealPlayers(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentBuyWantedlevel(p0: number, p2: boolean, p3: boolean): number;

declare function NetworkSpentCallPlayer(p0: number, p2: boolean, p3: boolean): number;

declare function NetworkSpentCarwash(p0: number, p1: number, p2: number, p3: boolean, p4: boolean): void;

declare function NetworkSpentCashDrop(amount: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentCinema(p0: number, p1: number, p2: boolean, p3: boolean): void;

declare function NetworkSpentFromRockstar(bank: number, p1: boolean, p2: boolean): void;
declare function N_0x6a445b64ed7abeb5(bank: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHeliPickup(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHireMercenary(p0: number, p1: boolean, p2: boolean): void;

/**
 * Only used once in a script (am_contact_requests)
 * p1 = 0
 * p2 = 1
 */
declare function NetworkSpentHireMugger(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentHoldups(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentInStripclub(p0: number, p1: boolean, p2: number, p3: boolean): void;
declare function N_0xee99784e4467689c(p0: number, p1: boolean, p2: number, p3: boolean): void;

declare function NetworkSpentNoCops(p0: number, p1: boolean, p2: boolean): void;
declare function N_0xd5bb406f4e04019f(p0: number, p1: boolean, p2: boolean): void;

/**
 * According to how I understood this in the freemode script alone,
 * The first parameter is determined by a function named, func_5749 within the freemode script which has a list of all the vehicles and a set price to return which some vehicles deals with globals as well. So the first parameter is basically the set in stone insurance cost it's gonna charge you for that specific vehicle model.
 * The second parameter whoever put it was right, they call GET_ENTITY_MODEL with the vehicle as the paremeter.
 * The third parameter is the network handle as they call their little struct&lt;13&gt; func or atleast how the script decompiled it to look which in lamens terms just returns the network handle of the previous owner based on DECOR_GET_INT(vehicle, "Previous_Owner").
 * The fourth parameter is a bool that returns true/false depending on if your bank balance is greater then 0.
 * The fifth and last parameter is a bool that returns true/false depending on if you have the money for the car based on the cost returned by func_5749. In the freemode script eg,
 * bool hasTheMoney = NETWORKCASH::_GET_BANK_BALANCE() &lt; carCost.
 */
declare function NetworkSpentPayVehicleInsurancePremium(amount: number, vehicleModel: string | number, notBankrupt: boolean, hasTheMoney: boolean): number;

declare function NetworkSpentPlayerHealthcare(p0: number, p1: number, p2: boolean, p3: boolean): void;
declare function N_0x7c99101f7fce2ee5(p0: number, p1: number, p2: boolean, p3: boolean): void;

declare function NetworkSpentProstitutes(p0: number, p1: boolean, p2: boolean): void;

/**
 * Console Hash 0xF4287778 = NETWORK_SPENT_REQUEST_HEIST
 */
declare function NetworkSpentRequestHeist(p0: number, p1: boolean, p2: boolean): void;
/**
 * Console Hash 0xF4287778 = NETWORK_SPENT_REQUEST_HEIST
 */
declare function N_0x9d26502bb97bfe62(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentRequestJob(p0: number, p1: boolean, p2: boolean): void;
declare function N_0x8204da7934df3155(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentRobbedByMugger(amount: number, p1: boolean, p2: boolean): void;
declare function N_0x995a65f15f581359(amount: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentTaxi(amount: number, p1: boolean, p2: boolean): void;

declare function NetworkSpentTelescope(p0: number, p1: boolean, p2: boolean): void;

declare function NetworkStartSynchronisedScene(netScene: number): void;

declare function NetworkStopLoadScene(): void;

declare function NetworkStopSynchronisedScene(netScene: number): void;

declare function NetworkSuppressInvite(toggle: boolean): void;

/**
 * used in atm_trigger script.
 * usage:
 * int iVar0;		STATS::STAT_GET_INT(GAMEPLAY::GET_HASH_KEY("mpply_last_mp_char"), &amp;iVar0, -1);
 * UNK3::_NETWORK_TRANSFER_WALLET_TO_BANK(iVar0, amount);
 * used to deposit money into bank from wallet, shows up in transaction log.
 */
declare function NetworkTransferBankToWallet(charStatInt: number, amount: number): number;
/**
 * used in atm_trigger script.
 * usage:
 * int iVar0;		STATS::STAT_GET_INT(GAMEPLAY::GET_HASH_KEY("mpply_last_mp_char"), &amp;iVar0, -1);
 * UNK3::_NETWORK_TRANSFER_WALLET_TO_BANK(iVar0, amount);
 * used to deposit money into bank from wallet, shows up in transaction log.
 */
declare function N_0xd47a2c1ba117471d(charStatInt: number, amount: number): number;

/**
 * used in atm_trigger script.
 * usage:
 * int iVar0; 		STATS::STAT_GET_INT(GAMEPLAY::GET_HASH_KEY("mpply_last_mp_char"), &amp;iVar0, -1);
 * UNK3::_NETWORK_TRANSFER_BANK_TO_WALLET(iVar0, amount);
 * used to withdraw money from bank into wallet, shows up in transaction log.
 */
declare function NetworkTransferWalletToBank(charStatInt: number, amount: number): number;
/**
 * used in atm_trigger script.
 * usage:
 * int iVar0; 		STATS::STAT_GET_INT(GAMEPLAY::GET_HASH_KEY("mpply_last_mp_char"), &amp;iVar0, -1);
 * UNK3::_NETWORK_TRANSFER_BANK_TO_WALLET(iVar0, amount);
 * used to withdraw money from bank into wallet, shows up in transaction log.
 */
declare function N_0xc2f7fe5309181c7d(charStatInt: number, amount: number): number;

/**
 * netScene to scene
 */
declare function NetworkUnlinkNetworkedSynchronisedScene(netScene: number): number;
/**
 * netScene to scene
 */
declare function N_0x02c40bf885c567b6(netScene: number): number;

declare function NetworkUnregisterNetworkedEntity(entity: number): void;
declare function N_0x7368e683bb9038d6(entity: number): void;

declare function NetworkUpdateLoadScene(): number;

declare function NetworkXAffectsGamers(p0: number): number;
declare function N_0xe532d6811b3a4d2a(p0: number): number;

declare function NewLoadSceneStart(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

/**
 * if (!sub_8f12("START LOAD SCENE SAFE")) {
 * if (CUTSCENE::GET_CUTSCENE_TIME() &gt; 4178) {
 * STREAMING::_ACCFB4ACF53551B0(1973.845458984375, 3818.447265625, 32.43629837036133, 15.0, 2);
 * sub_8e9e("START LOAD SCENE SAFE", 1);
 * }
 * }
 * (Previously known as STREAMING::_NEW_LOAD_SCENE_START_SAFE)
 */
declare function NewLoadSceneStartSphere(x: number, y: number, z: number, radius: number, p4: number): number;
/**
 * if (!sub_8f12("START LOAD SCENE SAFE")) {
 * if (CUTSCENE::GET_CUTSCENE_TIME() &gt; 4178) {
 * STREAMING::_ACCFB4ACF53551B0(1973.845458984375, 3818.447265625, 32.43629837036133, 15.0, 2);
 * sub_8e9e("START LOAD SCENE SAFE", 1);
 * }
 * }
 * (Previously known as STREAMING::_NEW_LOAD_SCENE_START_SAFE)
 */
declare function N_0xaccfb4acf53551b0(x: number, y: number, z: number, radius: number, p4: number): number;

declare function NewLoadSceneStop(): void;

/**
 * This function and the one below it are for after you receive an invite, not sending it.
 * p0 = 1 or 0
 * nothin doin.
 * int invite(Player player)
 * {
 * int iVar2, iVar3;
 * networkHandleMgr handle;
 * NETWORK_HANDLE_FROM_PLAYER(player, &amp;handle.netHandle, 13);
 * networkClanMgr clan;
 * char *playerName = GET_PLAYER_NAME(player);
 * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * _SET_NOTIFACTION_COLOR_NEXT(0);
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(playerName);
 * if (NETWORK_CLAN_PLAYER_GET_DESC(&amp;clan, 35, &amp;handle.netHandle))
 * {
 * iVar2 = 0;
 * if (ARE_STRINGS_EQUAL(clan.unk22, "Leader") &amp;&amp; clan.unk30 == 0)
 * {
 * iVar2 = 1;
 * }
 * if (clan.unk21 &gt; 0)
 * {
 * iVar3 = 0;
 * }
 * else
 * {
 * iVar3 = 1;
 * }
 * BOOL unused = _0x54E79E9C(&amp;clan.clanHandle, 35);
 * return _NOTIFICATION_SEND_APARTMENT_INVITE(iVar3, 0  -- [[unused]] , &amp;clan.unk17, clan.unk30, iVar2, 0, clan.clanHandle, 0, 0, 0);
 * }
 * }
 */
declare function NotificationSendApartmentInvite(p0: boolean, p1: boolean, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, R: number, G: number, B: number): [number, number];
/**
 * This function and the one below it are for after you receive an invite, not sending it.
 * p0 = 1 or 0
 * nothin doin.
 * int invite(Player player)
 * {
 * int iVar2, iVar3;
 * networkHandleMgr handle;
 * NETWORK_HANDLE_FROM_PLAYER(player, &amp;handle.netHandle, 13);
 * networkClanMgr clan;
 * char *playerName = GET_PLAYER_NAME(player);
 * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * _SET_NOTIFACTION_COLOR_NEXT(0);
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(playerName);
 * if (NETWORK_CLAN_PLAYER_GET_DESC(&amp;clan, 35, &amp;handle.netHandle))
 * {
 * iVar2 = 0;
 * if (ARE_STRINGS_EQUAL(clan.unk22, "Leader") &amp;&amp; clan.unk30 == 0)
 * {
 * iVar2 = 1;
 * }
 * if (clan.unk21 &gt; 0)
 * {
 * iVar3 = 0;
 * }
 * else
 * {
 * iVar3 = 1;
 * }
 * BOOL unused = _0x54E79E9C(&amp;clan.clanHandle, 35);
 * return _NOTIFICATION_SEND_APARTMENT_INVITE(iVar3, 0  -- [[unused]] , &amp;clan.unk17, clan.unk30, iVar2, 0, clan.clanHandle, 0, 0, 0);
 * }
 * }
 */
declare function N_0x97c9e4e7024a8f2c(p0: boolean, p1: boolean, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, R: number, G: number, B: number): [number, number];

/**
 * p0 = 1 or 0
 * crashes my game...
 * this is for sending invites to network players - jobs/apartment/ect...
 * return notification handle
 * int invite(Player player)
 * {
 * networkHandleMgr netHandle;
 * networkClanMgr clan;
 * char *playerName = GET_PLAYER_NAME(player);
 * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * _SET_NOTIFACTION_COLOR_NEXT(1);
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(playerName);
 * NETWORK_HANDLE_FROM_PLAYER(player, &amp;netHandle.netHandle, 13);
 * if (NETWORK_CLAN_PLAYER_IS_ACTIVE(&amp;netHandle.netHandle))
 * {
 * NETWORK_CLAN_PLAYER_GET_DESC(&amp;clan.clanHandle, 35, &amp;netHandle.netHandle);
 * _NOTIFICATION_SEND_CLAN_INVITE(0, _0x54E79E9C(&amp;clan.clanHandle, 35), &amp;clan.unk17, clan.isLeader, 0, 0, clan.clanHandle, playerName, 0, 0, 0);
 * }
 * }
 */
declare function NotificationSendClanInvite(p0: boolean, p1: boolean, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, playerName: string, R: number, G: number, B: number): [number, number];
/**
 * p0 = 1 or 0
 * crashes my game...
 * this is for sending invites to network players - jobs/apartment/ect...
 * return notification handle
 * int invite(Player player)
 * {
 * networkHandleMgr netHandle;
 * networkClanMgr clan;
 * char *playerName = GET_PLAYER_NAME(player);
 * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * _SET_NOTIFACTION_COLOR_NEXT(1);
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(playerName);
 * NETWORK_HANDLE_FROM_PLAYER(player, &amp;netHandle.netHandle, 13);
 * if (NETWORK_CLAN_PLAYER_IS_ACTIVE(&amp;netHandle.netHandle))
 * {
 * NETWORK_CLAN_PLAYER_GET_DESC(&amp;clan.clanHandle, 35, &amp;netHandle.netHandle);
 * _NOTIFICATION_SEND_CLAN_INVITE(0, _0x54E79E9C(&amp;clan.clanHandle, 35), &amp;clan.unk17, clan.isLeader, 0, 0, clan.clanHandle, playerName, 0, 0, 0);
 * }
 * }
 */
declare function N_0x137bc35589e34e1e(p0: boolean, p1: boolean, p3: number, isLeader: boolean, unk0: boolean, clanDesc: number, playerName: string, R: number, G: number, B: number): [number, number];

/**
 * Sets the value of the specified variable to 0.
 * Always returns true.
 * bool _NULLIFY(void* variable, int unused)
 * {
 * *variable = NULL;
 * return true;
 * }
 */
declare function Nullify(unused: number): [number, number];

/**
 * Lets objects spawn online simply do it like this:
 * int createdObject = OBJ_TO_NET(CREATE_OBJECT_NO_OFFSET(oball, pCoords.x, pCoords.y, pCoords.z, 1, 0, 0));
 */
declare function ObjToNet(object: number): number;

/**
 * Please change back to _0x444D8CF241EC25C5 (hash collision)
 */
declare function ObjectDecalToggle(hash: string | number): void;

declare function ObjectValueAddArray(key: string): [number, number];

declare function ObjectValueAddBoolean(key: string, value: boolean): number;

declare function ObjectValueAddFloat(key: string, value: number): number;

declare function ObjectValueAddInteger(key: string, value: number): number;

declare function ObjectValueAddObject(key: string): [number, number];

declare function ObjectValueAddString(key: string, value: string): number;

declare function ObjectValueAddVector3(key: string, valueX: number, valueY: number, valueZ: number): number;

declare function ObjectValueGetArray(key: string): [number, number];

declare function ObjectValueGetBoolean(key: string): [number, number];

declare function ObjectValueGetFloat(key: string): [number, number];

declare function ObjectValueGetInteger(key: string): [number, number];

declare function ObjectValueGetObject(key: string): [number, number];

declare function ObjectValueGetString(key: string): [string, number];

/**
 * Types:
 * 1 = Boolean
 * 2 = Integer
 * 3 = Float
 * 4 = String
 * 5 = Vector3
 * 6 = Object
 * 7 = Array
 */
declare function ObjectValueGetType(key: string): [number, number];

declare function ObjectValueGetVector3(key: string): [number[], number];

declare function OpenBombBayDoors(vehicle: number): void;
declare function OpenVehicleBombBay(vehicle: number): void;

/**
 * patrolRoutes found in the b617d scripts:
 * "miss_Ass0",
 * "miss_Ass1",
 * "miss_Ass2",
 * "miss_Ass3",
 * "miss_Ass4",
 * "miss_Ass5",
 * "miss_Ass6",
 * "MISS_PATROL_6",
 * "MISS_PATROL_7",
 * "MISS_PATROL_8",
 * "MISS_PATROL_9",
 * "miss_Tower_01",
 * "miss_Tower_02",
 * "miss_Tower_03",
 * "miss_Tower_04",
 * "miss_Tower_05",
 * "miss_Tower_06",
 * "miss_Tower_07",
 * "miss_Tower_08",
 * "miss_Tower_10"
 */
declare function OpenPatrolRoute(patrolRoute: string): void;

declare function OpenSequenceTask(taskSequence: number): number;

/**
 * Max value for p1 is 15.
 */
declare function OverrideCamSplineMotionBlur(cam: number, p1: number, p2: number, p3: number): void;

declare function OverrideCamSplineVelocity(cam: number, p1: number, p2: number, p3: number): void;

/**
 * Only used once in the decompiled scripts. Seems to be related to scripted vehicle generators.
 * Modified example from "am_imp_exp.c4", line 6406:
 *  -- [[ popSchedules[0] = ZONE::GET_ZONE_POPSCHEDULE(ZONE::GET_ZONE_AT_COORDS(891.3, 807.9, 188.1));
 * etc.
 * ]] 
 * ZONE::OVERRIDE_POPSCHEDULE_VEHICLE_MODEL(popSchedules[index], vehicleHash);
 * STREAMING::REQUEST_MODEL(vehicleHash);
 */
declare function OverridePopscheduleVehicleModel(scheduleId: number, vehicleHash: string | number): void;

declare function OverrideSaveHouse(p0: boolean, p1: number, p2: number, p3: number, p4: number, p5: boolean, p6: number, p7: number): number;

declare function OverrideTrevorRage(p0: number): void;

declare function OverrideUnderwaterStream(p1: boolean): number;

/**
 * vehicle - the vehicle whose horn should be overwritten
 * mute - p1 seems to be an option for muting the horn
 * p2 - maybe a horn id, since the function AUDIO::GET_VEHICLE_DEFAULT_HORN(veh) exists?
 */
declare function OverrideVehHorn(vehicle: number, mute: boolean, p2: number): void;

/**
 * Return the local Participant ID
 */
declare function ParticipantId(): number;

/**
 * Return the local Participant ID.
 * This native is exactly the same as 'PARTICIPANT_ID' native.
 */
declare function ParticipantIdToInt(): number;

declare function PauseClock(toggle: boolean): void;

declare function PausePlaybackRecordedVehicle(p0: number): void;

declare function PauseScriptedConversation(p0: boolean): void;

declare function PedHasUseScenarioTask(ped: number): number;

/**
 * [23.03.2017 19:08] by ins1de :
 * "_IS_PED_RELOADING" is totally a wrong name...
 * This native actually disables the reloading animation and script for the specified ped. Native renamed.
 */
declare function PedSkipNextReloading(ped: number): number;
/**
 * [23.03.2017 19:08] by ins1de :
 * "_IS_PED_RELOADING" is totally a wrong name...
 * This native actually disables the reloading animation and script for the specified ped. Native renamed.
 */
declare function IsPedReloading(ped: number): number;

declare function PedToNet(ped: number): number;

declare function PinRopeVertex(rope: number, vertex: number, x: number, y: number, z: number): void;

declare function PlaceObjectOnGroundProperly(object: number): number;

/**
 * Plays ambient speech. See also _0x444180DB.
 * ped: The ped to play the ambient speech.
 * speechName: Name of the speech to play, eg. "GENERIC_HI".
 * speechParam: Can be one of the following:
 * SPEECH_PARAMS_STANDARD
 * SPEECH_PARAMS_ALLOW_REPEAT
 * SPEECH_PARAMS_BEAT
 * SPEECH_PARAMS_FORCE
 * SPEECH_PARAMS_FORCE_FRONTEND
 * SPEECH_PARAMS_FORCE_NO_REPEAT_FRONTEND
 * SPEECH_PARAMS_FORCE_NORMAL
 * SPEECH_PARAMS_FORCE_NORMAL_CLEAR
 * SPEECH_PARAMS_FORCE_NORMAL_CRITICAL
 * SPEECH_PARAMS_FORCE_SHOUTED
 * SPEECH_PARAMS_FORCE_SHOUTED_CLEAR
 * SPEECH_PARAMS_FORCE_SHOUTED_CRITICAL
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY
 * SPEECH_PARAMS_MEGAPHONE
 * SPEECH_PARAMS_HELI
 * SPEECH_PARAMS_FORCE_MEGAPHONE
 * SPEECH_PARAMS_FORCE_HELI
 * SPEECH_PARAMS_INTERRUPT
 * SPEECH_PARAMS_INTERRUPT_SHOUTED
 * SPEECH_PARAMS_INTERRUPT_SHOUTED_CLEAR
 * SPEECH_PARAMS_INTERRUPT_SHOUTED_CRITICAL
 * SPEECH_PARAMS_INTERRUPT_NO_FORCE
 * SPEECH_PARAMS_INTERRUPT_FRONTEND
 * SPEECH_PARAMS_INTERRUPT_NO_FORCE_FRONTEND
 * SPEECH_PARAMS_ADD_BLIP
 * SPEECH_PARAMS_ADD_BLIP_ALLOW_REPEAT
 * SPEECH_PARAMS_ADD_BLIP_FORCE
 * SPEECH_PARAMS_ADD_BLIP_SHOUTED
 * SPEECH_PARAMS_ADD_BLIP_SHOUTED_FORCE
 * SPEECH_PARAMS_ADD_BLIP_INTERRUPT
 * SPEECH_PARAMS_ADD_BLIP_INTERRUPT_FORCE
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CLEAR
 * SPEECH_PARAMS_FORCE_PRELOAD_ONLY_SHOUTED_CRITICAL
 * SPEECH_PARAMS_SHOUTED
 * SPEECH_PARAMS_SHOUTED_CLEAR
 * SPEECH_PARAMS_SHOUTED_CRITICAL
 * Note: A list of Name and Parameters can be found here pastebin.com/1GZS5dCL
 * Full list of speeches and voices names by alexguirre: gist.github.com/alexguirre/0af600eb3d4c91ad4f900120a63b8992
 */
declare function PlayAmbientSpeech1(ped: number, speechName: string, speechParam: string): void;

/**
 * Plays ambient speech. See also _0x5C57B85D.
 * See _PLAY_AMBIENT_SPEECH1 for parameter specifications.
 * Full list of speeches and voices names by alexguirre: gist.github.com/alexguirre/0af600eb3d4c91ad4f900120a63b8992
 */
declare function PlayAmbientSpeech2(ped: number, speechName: string, speechParam: string): void;

declare function PlayAmbientSpeechAtCoords(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string): void;
declare function N_0xed640017ed337e45(p0: string, p1: string, p2: number, p3: number, p4: number, p5: string): void;

/**
 * This is the same as _PLAY_AMBIENT_SPEECH1 and _PLAY_AMBIENT_SPEECH2 but it will allow you to play a speech file from a specific voice file. It works on players and all peds, even animals.
 * EX (C#):
 * GTA.Native.Function.Call(Hash._0x3523634255FC3318, Game.Player.Character, "GENERIC_INSULT_HIGH", "s_m_y_sheriff_01_white_full_01", "SPEECH_PARAMS_FORCE_SHOUTED", 0);
 * The first param is the ped you want to play it on, the second is the speech name, the third is the voice name, the fourth is the speech param, and the last param is usually always 0.
 * Full list of speeches and voices names by alexguirre: gist.github.com/alexguirre/0af600eb3d4c91ad4f900120a63b8992
 */
declare function PlayAmbientSpeechWithVoice(p0: number, speechName: string, voiceName: string, speechParam: string, p4: boolean): void;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function PlayAnimOnRunningScenario(ped: number, animDict: string, animName: string): void;

/**
 * Atleast one time in a script for the zRot Rockstar uses GET_ENTITY_HEADING to help fill the parameter.
 * p9 is unknown at this time.
 * p10 throughout all the X360 Scripts is always 2.
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function PlayCamAnim(cam: number, animName: string, animDictionary: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, p9: boolean, p10: number): number;

declare function PlayEndCreditsMusic(play: boolean): void;

/**
 * delta and bitset are guessed fields. They are based on the fact that most of the calls have 0 or nil field types passed in.
 * The only time bitset has a value is 0x4000 and the only time delta has a value is during stealth with usually &lt;1.0f values.
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function PlayEntityAnim(entity: number, animName: string, animDict: string, p3: number, loop: boolean, stayInAnim: boolean, p6: boolean, delta: number, bitset: number): number;

declare function PlayEntityScriptedAnim(p0: number, p4: number, p5: number): [number, number, number];

declare function PlayFacialAnim(ped: number, animName: string, animDict: string): void;

/**
 * Called 38 times in the scripts. There are 5 different audioNames used.
 * One unknown removed below.
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("DEAD");
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("FRANKLIN_BIG_01");
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("GENERIC_FAILED");
 * AUDIO::PLAY_MISSION_COMPLETE_AUDIO("TREVOR_SMALL_01");
 */
declare function PlayMissionCompleteAudio(audioName: string): void;

/**
 * Needs another parameter [int p2]. The signature is PED::PLAY_PAIN(Ped ped, int painID, int p1, int p2);
 * Last 2 parameters always seem to be 0.
 * EX: Function.Call(Hash.PLAY_PAIN, TestPed, 6, 0, 0);
 * Known Pain IDs
 * ________________________
 * 1 - Doesn't seem to do anything. Does NOT crash the game like previously said. (Latest patch)
 * 6 - Scream (Short)
 * 7 - Scared Scream (Kinda Long)
 * 8 - On Fire
 */
declare function PlayPain(ped: number, painID: number, p1: number): void;

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/RFb4GTny
 * AUDIO::PLAY_PED_RINGTONE("Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);
 * AUDIO::PLAY_PED_RINGTONE("Dial_and_Remote_Ring", PLAYER::PLAYER_PED_ID(), 1);
 */
declare function PlayPedRingtone(ringtoneName: string, ped: number, p2: boolean): void;

/**
 * Please change to void. (Does not return anything!)
 * Plays the given police radio message.
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/GBnsQ5hr
 */
declare function PlayPoliceReport(name: string, p1: number): number;

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/A8Ny8AHZ
 */
declare function PlaySound(soundId: number, audioName: string, audioRef: string, p3: boolean, p4: number, p5: boolean): void;

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/eeFc5DiW
 * gtaforums.com/topic/795622-audio-for-mods
 */
declare function PlaySoundFromCoord(soundId: number, audioName: string, x: number, y: number, z: number, audioRef: string, p6: boolean, range: number, p8: boolean): void;

/**
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/f2A7vTj0
 * No changes made in b678d.
 * gtaforums.com/topic/795622-audio-for-mods
 */
declare function PlaySoundFromEntity(soundId: number, audioName: string, entity: number, audioRef: string, p4: boolean, p5: number): void;

/**
 * list: pastebin.com/DCeRiaLJ
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/0neZdsZ5
 */
declare function PlaySoundFrontend(soundId: number, audioName: string, audioRef: string, p3: boolean): void;

/**
 * Used with AUDIO::LOAD_STREAM
 * Example from finale_heist2b.c4:
 * AI::TASK_SYNCHRONIZED_SCENE(l_4C8[2 -- [[14]] ], l_4C8[2 -- [[14]] ]._f7, l_30A, "push_out_vault_l", 4.0, -1.5, 5, 713, 4.0, 0);
 * PED::SET_SYNCHRONIZED_SCENE_PHASE(l_4C8[2 -- [[14]] ]._f7, 0.0);
 * PED::_2208438012482A1A(l_4C8[2 -- [[14]] ], 0, 0);
 * PED::SET_PED_COMBAT_ATTRIBUTES(l_4C8[2 -- [[14]] ], 38, 1);
 * PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(l_4C8[2 -- [[14]] ], 1);
 * if (AUDIO::LOAD_STREAM("Gold_Cart_Push_Anim_01", "BIG_SCORE_3B_SOUNDS")) {
 * AUDIO::PLAY_STREAM_FROM_OBJECT(l_36F[0 -- [[1]] ]);
 * }
 */
declare function PlayStreamFromObject(object: number): void;

declare function PlayStreamFromPed(ped: number): void;
declare function N_0x89049dd63c08b5d1(ped: number): void;

declare function PlayStreamFromVehicle(vehicle: number): void;

declare function PlayStreamFrontend(): void;

declare function PlaySynchronizedAudioEvent(p0: number): number;

/**
 * Examples:
 * CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_2734, NETWORK::_02C40BF885C567B6(l_2739), "PLAYER_EXIT_L_CAM", "mp_doorbell");
 * CAM::PLAY_SYNCHRONIZED_CAM_ANIM(l_F0D[7 -- [[1]] ], l_F4D[15 -- [[1]] ], "ah3b_attackheli_cam2", "missheistfbi3b_helicrash");
 */
declare function PlaySynchronizedCamAnim(p0: number, p1: number, animName: string, animDictionary: string): number;

/**
 * p4 and p7 are usually 1000.0f.
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function PlaySynchronizedEntityAnim(entity: number, syncedScene: number, animation: string, propName: string, p4: number, p5: number, p6: number, p7: number): number;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function PlaySynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p8: number, p9: number, p10: number, p11: number): [number, number, number];

/**
 * This native only comes up once. And in that one instance, p1 is "1".
 */
declare function PlayVehicleDoorCloseSound(vehicle: number, p1: number): void;

/**
 * p1 appears to only be "0" or "3". I personally use "0" as p1.
 */
declare function PlayVehicleDoorOpenSound(vehicle: number, p1: number): void;

/**
 * Only 1 match. ob_sofa_michael.
 * PLAYER::PLAYER_ATTACH_VIRTUAL_BOUND(-804.5928f, 173.1801f, 71.68436f, 0f, 0f, 0.590625f, 1f, 0.7f);1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 */
declare function PlayerAttachVirtualBound(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

/**
 * 1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 */
declare function PlayerDetachVirtualBound(): void;

/**
 * This returns YOUR 'identity' as a Player type.
 * Always returns 0 in story mode.
 */
declare function PlayerId(): number;

/**
 * Returns current player ped
 */
declare function PlayerPedId(): number;

declare function PlaystatsAmbientMissionCrateCreated(p0: number, p1: number, p2: number): void;
declare function N_0xafc7e5e075a96f46(p0: number, p1: number, p2: number): void;

declare function PlaystatsAwardXp(p0: number, p1: number, p2: number): void;

declare function PlaystatsCheatApplied(cheat: string): void;

declare function PlaystatsClothChange(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PlaystatsFriendActivity(p0: number, p1: number): void;

declare function PlaystatsMatchStarted(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

declare function PlaystatsMissionCheckpoint(p1: number, p2: number, p3: number): number;

declare function PlaystatsMissionOver(p1: number, p2: number, p3: boolean, p4: boolean, p5: boolean): number;

declare function PlaystatsMissionStarted(p1: number, p2: number, p3: boolean): number;

declare function PlaystatsNpcInvite(p0: number): void;

declare function PlaystatsOddjobDone(p0: number, p1: number, p2: number): void;

declare function PlaystatsPropChange(p0: number, p1: number, p2: number, p3: number): void;

declare function PlaystatsRaceCheckpoint(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PlaystatsRankUp(p0: number): void;

declare function PlaystatsShopItem(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function PlaystatsWebsiteVisited(scaleformHash: string | number, p1: number): void;
declare function N_0xddf24d535060f811(scaleformHash: string | number, p1: number): void;

declare function PointCamAtCoord(cam: number, x: number, y: number, z: number): void;

/**
 * p5 always seems to be 1 i.e TRUE
 */
declare function PointCamAtEntity(cam: number, entity: number, p2: number, p3: number, p4: number, p5: boolean): void;

/**
 * Parameters p0-p5 seems correct. The bool p6 is unknown, but through every X360 script it's always 1. Please correct p0-p5 if any prove to be wrong.
 */
declare function PointCamAtPedBone(cam: number, ped: number, boneIndex: number, x: number, y: number, z: number, p6: boolean): void;

/**
 * Pops and calls the Scaleform movie on the stack. Returns data from the function (not sure if this is a string).
 */
declare function PopScaleformMovieFunction(): number;

/**
 * Pops and calls the Scaleform function on the stack
 */
declare function PopScaleformMovieFunctionVoid(): void;

declare function PopTimecycleModifier(): void;

/**
 * spawns a few distant/out-of-sight peds, vehicles, animals etc each time it is called
 */
declare function PopulateNow(): void;

declare function Pow(base: number, exponent: number): number;

declare function PrefetchSrl(srl: string): void;

declare function PreloadScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

declare function PreloadScriptPhoneConversation(p0: boolean, p1: boolean): void;

declare function PreloadVehicleMod(p0: number, p1: number, p2: number): void;

/**
 * Example:
 * bool prepareAlarm = AUDIO::PREPARE_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS");
 */
declare function PrepareAlarm(alarmName: string): number;

/**
 * All music event names found in the b617d scripts: pastebin.com/GnYt0R3P
 */
declare function PrepareMusicEvent(eventName: string): number;

declare function PrepareSynchronizedAudioEvent(p0: string, p1: number): number;

declare function PrepareSynchronizedAudioEventForScene(p0: number, p1: number): number;

/**
 * This isn't a hash collision. It is used to give the player cash via the CASH_GIFT stats.
 */
declare function ProcessCashGift(p2: string): [string, number, number];
/**
 * This isn't a hash collision. It is used to give the player cash via the CASH_GIFT stats.
 */
declare function N_0x20194d48eaec9a41(p2: string): [string, number, number];

/**
 * Called to update entity attachments.
 */
declare function ProcessEntityAttachments(entity: number): void;

declare function PulseBlip(blip: number): void;

/**
 * Push a function from the Scaleform onto the stack
 */
declare function PushScaleformMovieFunction(scaleform: number, functionName: string): number;

/**
 * Pushes a function from the Hud component Scaleform onto the stack. Same behavior as GRAPHICS::_PUSH_SCALEFORM_MOVIE_FUNCTION, just a hud component id instead of a Scaleform.
 * Known components:
 * 19
 * 20
 * This native requires more research - all information can be found inside of 'hud.gfx'. Using a decompiler, the different components are located under "scripts\__Packages\com\rockstargames\gtav\hud\hudComponents" and "scripts\__Packages\com\rockstargames\gtav\Multiplayer".
 */
declare function PushScaleformMovieFunctionFromHudComponent(hudComponent: number, functionName: string): number;

/**
 * Possibly calls "global" Scaleform functions - needs more research!
 */
declare function PushScaleformMovieFunctionN(functionName: string): number;
/**
 * Possibly calls "global" Scaleform functions - needs more research!
 */
declare function N_0xab58c27c2e6123c6(functionName: string): number;

/**
 * Pushes a boolean for the Scaleform function onto the stack.
 */
declare function PushScaleformMovieFunctionParameterBool(value: boolean): void;

/**
 * Pushes a float for the Scaleform function onto the stack.
 */
declare function PushScaleformMovieFunctionParameterFloat(value: number): void;

/**
 * Pushes an integer for the Scaleform function onto the stack.
 */
declare function PushScaleformMovieFunctionParameterInt(value: number): void;

declare function PushScaleformMovieFunctionParameterString(value: string): void;

declare function PushTimecycleModifier(): void;

declare function RaiseConvertibleRoof(vehicle: number, instantlyRaise: boolean): void;

declare function RefreshInterior(interiorID: number): void;

declare function RefreshWaypoint(): void;

declare function RegisterBoolToSave(name: string): number;

declare function RegisterCommand(commandName: string, handler: Function, restricted: boolean): void;

declare function RegisterEntityForCutscene(cutscenePed: number, cutsceneEntName: string, p2: number, modelHash: string | number, p4: number): void;

declare function RegisterEnumToSave(name: string): number;

declare function RegisterFloatToSave(name: string): number;

/**
 * Registers a specified .gfx file as GFx font library.
 * The .gfx file has to be registered with the streamer already.
 * @param fileName The name of the .gfx file, without extension.
 */
declare function RegisterFontFile(fileName: string): void;

/**
 * Registers a specified font name for use with text draw commands.
 * @param fontName The name of the font in the GFx font library.
 * @return An index to use with [SET\_TEXT\_FONT](#_0x66E0276CC5F6B9DA) and similar natives.
 */
declare function RegisterFontId(fontName: string): number;

/**
 * Based on TASK_COMBAT_HATED_TARGETS_AROUND_PED, the parameters are likely similar (PedHandle, and area to attack in).
 */
declare function RegisterHatedTargetsAroundPed(ped: number, radius: number): void;

declare function RegisterIntToSave(name: string): number;

declare function RegisterNamedRendertarget(p0: string, p1: boolean): number;

declare function RegisterNuiCallbackType(callbackType: string): void;

/**
 * Registers a script for any object with a specific model hash.
 * BRAIN::REGISTER_OBJECT_SCRIPT_BRAIN("ob_telescope", ${prop_telescope_01}, 100, 4.0, -1, 9);
 */
declare function RegisterObjectScriptBrain(scriptName: string, objectName: string | number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 */
declare function RegisterPedheadshot(ped: number): number;

declare function RegisterSaveHouse(p0: number, p1: number, p2: number, p3: number, p5: number, p6: number): [number, number];

declare function RegisterScriptWithAudio(p0: number): void;

declare function RegisterSynchronisedScriptSpeech(): void;

/**
 * PED::REGISTER_TARGET(l_216, PLAYER::PLAYER_PED_ID()); from re_prisonbreak.txt.
 * l_216 = RECSBRobber1
 */
declare function RegisterTarget(ped: number, target: number): void;

declare function RegisterTextLabelToSave(name: string): number;

declare function RegisterWorldPointScriptBrain(p1: number, p2: number): number;

declare function ReleaseAmbientAudioBank(): void;

declare function ReleaseMissionAudioBank(): void;

declare function ReleaseMovieMeshSet(movieMeshSet: number): void;

declare function ReleaseNamedRendertarget(p0: number): number;

declare function ReleaseNamedScriptAudioBank(audioBank: string): void;

declare function ReleasePreloadMods(vehicle: number): void;

declare function ReleaseScriptAudioBank(): void;

declare function ReleaseSoundId(soundId: number): void;

declare function RemoveActionModeAsset(asset: string): void;

declare function RemoveAllCoverBlockingAreas(): void;

/**
 * setting the last params to false it does that same so I would suggest its not a toggle
 */
declare function RemoveAllPedWeapons(ped: number, p1: boolean): void;

/**
 * Pickup hashes: pastebin.com/8EuSv2r1
 */
declare function RemoveAllPickupsOfType(pickupHash: string | number): void;

/**
 * p1 seems always to be 0
 */
declare function RemoveAllProjectilesOfType(weaponHash: string | number, p1: boolean): void;

declare function RemoveAllShockingEvents(p0: boolean): void;

declare function RemoveAnimDict(animDict: string): void;

/**
 * Unloads the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 * Animation set and clip set are synonymous.
 */
declare function RemoveAnimSet(animSet: string): void;

/**
 * In the C++ SDK, this seems not to work-- the blip isn't removed immediately. I use it for saving cars.
 * E.g.:
 * Ped pped = PLAYER::PLAYER_PED_ID();
 * Vehicle v = PED::GET_VEHICLE_PED_IS_USING(pped);
 * Blip b = UI::ADD_BLIP_FOR_ENTITY(v);
 * works fine.
 * But later attempting to delete it with:
 * Blip b = UI::GET_BLIP_FROM_ENTITY(v);
 * if (UI::DOES_BLIP_EXIST(b)) UI::REMOVE_BLIP(&amp;b);
 * doesn't work. And yes, doesn't work without the DOES_BLIP_EXIST check either. Also, if you attach multiple blips to the same thing (say, a vehicle), and that thing disappears, the blips randomly attach to other things (in my case, a vehicle).
 * Thus for me, UI::REMOVE_BLIP(&amp;b) only works if there's one blip, (in my case) the vehicle is marked as no longer needed, you drive away from it and it eventually despawns, AND there is only one blip attached to it. I never intentionally attach multiple blips but if the user saves the car, this adds a blip. Then if they delete it, it is supposed to remove the blip, but it doesn't. Then they can immediately save it again, causing another blip to re-appear.
 * -------------
 * Passing the address of the variable instead of the value works for me.
 * e.g.
 * int blip = UI::ADD_BLIP_FOR_ENTITY(ped);
 * UI::REMOVE_BLIP(&amp;blip);
 * Remove blip will currently crash your game, just artificially remove the blip by setting the sprite to a id that is 'invisible'.
 * --
 * It crashes my game.
 */
declare function RemoveBlip(blip: number): void;

/**
 * Alias for REMOVE_ANIM_SET.
 */
declare function RemoveClipSet(clipSet: string): void;

declare function RemoveCoverPoint(coverpoint: number): void;

declare function RemoveCutscene(): void;

declare function RemoveDecal(decal: number): void;

declare function RemoveDecalsFromObject(obj: number): void;

declare function RemoveDecalsFromObjectFacing(obj: number, x: number, y: number, z: number): void;

declare function RemoveDecalsFromVehicle(vehicle: number): void;

/**
 * Removes all decals in range from a position, it includes the bullet holes, blood pools, petrol...
 */
declare function RemoveDecalsInRange(x: number, y: number, z: number, range: number): void;

declare function RemoveDispatchSpawnBlockingArea(p0: number): void;

declare function RemoveDoorFromSystem(doorHash: string | number): void;

declare function RemoveForcedObject(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function RemoveFromItemset(p0: number, p1: number): void;

declare function RemoveGroup(groupId: number): void;

/**
 * Removes an IPL from the map.
 * IPL List: pastebin.com/pwkh0uRP
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_IPL, "trevorstrailertidy");
 * C++:
 * STREAMING::REMOVE_IPL("trevorstrailertidy");
 * iplName = Name of IPL you want to remove.
 */
declare function RemoveIpl(iplName: string): void;

/**
 * Removes the loading prompt at the bottom right of the screen, created by the UI::_SHOW_LOADING_PROMPT native.
 */
declare function RemoveLoadingPrompt(): void;
/**
 * Removes the loading prompt at the bottom right of the screen, created by the UI::_SHOW_LOADING_PROMPT native.
 */
declare function N_0x10d373323e5b9c0d(): void;

declare function RemoveModelHide(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function RemoveModelSwap(x: number, y: number, z: number, radius: number, originalModel: string | number, newModel: string | number, p6: boolean): void;

declare function RemoveMpGamerTag(gamerTagId: number): void;
declare function N_0x31698aa80e0223f8(gamerTagId: number): void;

declare function RemoveMultiplayerBankCash(): void;

/**
 * Removes multiplayer cash hud each frame
 */
declare function RemoveMultiplayerHudCash(): void;

/**
 * console hash: 0xC44762A1
 */
declare function RemoveNamedPtfxAsset(fxName: string): void;

declare function RemoveNavmeshBlockingObject(p0: number): void;

declare function RemoveNavmeshRequiredRegions(): void;

/**
 * Removes a notification instantly instead of waiting for it to disappear
 */
declare function RemoveNotification(notificationId: number): void;

declare function RemoveParticleFx(ptfxHandle: number, p1: boolean): void;

declare function RemoveParticleFxFromEntity(entity: number): void;

declare function RemoveParticleFxInRange(X: number, Y: number, Z: number, radius: number): void;

/**
 * Ped will no longer get angry when you stay near him.
 */
declare function RemovePedDefensiveArea(ped: number, toggle: boolean): void;

/**
 * Judging purely from a quick disassembly, if the ped is in a vehicle, the ped will be deleted immediately. If not, it'll be marked as no longer needed.
 */
declare function RemovePedElegantly(ped: number): void;

declare function RemovePedFromGroup(ped: number): void;

declare function RemovePedHelmet(ped: number, instantly: boolean): void;

declare function RemovePedPreferredCoverSet(ped: number): void;
declare function N_0xfddb234cf74073d9(ped: number): void;

/**
 * Retracts the hook on the cargobob.
 * Note: after you retract it the natives for dropping the hook no longer work
 */
declare function RemovePickUpRopeForCargobob(cargobob: number): void;
/**
 * Retracts the hook on the cargobob.
 * Note: after you retract it the natives for dropping the hook no longer work
 */
declare function RetractCargobobHook(cargobob: number): void;

declare function RemovePickup(pickup: number): void;

declare function RemovePlayerHelmet(player: number, p2: boolean): number;

declare function RemovePtfxAsset(): void;

declare function RemoveRelationshipGroup(groupHash: string | number): void;

declare function RemoveScenarioBlockingArea(p0: number, p1: boolean): void;

declare function RemoveScenarioBlockingAreas(): void;

declare function RemoveScriptFire(fireHandle: number): void;

declare function RemoveShockingEvent(event: number): number;

declare function RemoveShockingEventSpawnBlockingAreas(): void;

declare function RemoveStealthModeAsset(asset: string): void;

declare function RemoveVehicleAsset(vehicleAsset: number): void;

declare function RemoveVehicleHighDetailModel(vehicle: number): void;

declare function RemoveVehicleMod(vehicle: number, modType: number): void;

declare function RemoveVehicleRecording(p0: number, p1: number): void;

declare function RemoveVehicleStuckCheck(vehicle: number): void;

declare function RemoveVehicleUpsidedownCheck(vehicle: number): void;

/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 */
declare function RemoveVehicleWindow(vehicle: number, windowIndex: number): void;

declare function RemoveVehiclesFromGeneratorsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unk: number): void;

/**
 * For a full list, see here: pastebin.com/Tp0XpBMN
 */
declare function RemoveWaypointRecording(name: string): void;

declare function RemoveWeaponAsset(weaponHash: string | number): void;

declare function RemoveWeaponComponentFromPed(ped: number, weaponHash: string | number, componentHash: string | number): void;

declare function RemoveWeaponComponentFromWeaponObject(p0: number, p1: number): void;

/**
 * This native removes a specified weapon from your selected ped.
 * Weapon Hashes: pastebin.com/0wwDZgkF
 * Example:
 * C#:
 * Function.Call(Hash.REMOVE_WEAPON_FROM_PED, Game.Player.Character, 0x99B507EA);
 * C++:
 * WEAPON::REMOVE_WEAPON_FROM_PED(PLAYER::PLAYER_PED_ID(), 0x99B507EA);
 * The code above removes the knife from the player.
 */
declare function RemoveWeaponFromPed(ped: number, weaponHash: string | number): void;

/**
 * This native makes the gameplay camera zoom into first person/third person with a special effect.
 * For example, if you were first person in a mission and after the cutscene ends, the camera would then zoom into the first person camera view.
 * if (CAM::GET_FOLLOW_PED_CAM_VIEW_MODE() != 4)
 * CAM::_C819F3CBB62BF692(1, 0, 3, 0)
 * This makes the camera zoom in to first person.
 * --------------------------------------------
 * 1st Param Options: 0 or 1 (Changes quit often, toggle?)
 * 2nd Param Options: 0, 0f, 1f, 3.8f, 10f, 20f (Mostly 0)
 * 3rd Param Options: 3, 2, 1 (Mostly 3);
 * Note for the 2nd param 10f (offroad_race.c) and 3rd param 20f (range_modern.c) are the only times those 2 high floats are called.
 * Note for the 3rd param 2 is only ever set in (franklin0.c), but it also sets it as 3. (0, 0, 3) ||(0, 0f, 2) || (0, 0, 3)
 */
declare function RenderFirstPersonCam(render: boolean, p1: number, p2: number): void;
/**
 * This native makes the gameplay camera zoom into first person/third person with a special effect.
 * For example, if you were first person in a mission and after the cutscene ends, the camera would then zoom into the first person camera view.
 * if (CAM::GET_FOLLOW_PED_CAM_VIEW_MODE() != 4)
 * CAM::_C819F3CBB62BF692(1, 0, 3, 0)
 * This makes the camera zoom in to first person.
 * --------------------------------------------
 * 1st Param Options: 0 or 1 (Changes quit often, toggle?)
 * 2nd Param Options: 0, 0f, 1f, 3.8f, 10f, 20f (Mostly 0)
 * 3rd Param Options: 3, 2, 1 (Mostly 3);
 * Note for the 2nd param 10f (offroad_race.c) and 3rd param 20f (range_modern.c) are the only times those 2 high floats are called.
 * Note for the 3rd param 2 is only ever set in (franklin0.c), but it also sets it as 3. (0, 0, 3) ||(0, 0f, 2) || (0, 0, 3)
 */
declare function N_0xc819f3cbb62bf692(render: boolean, p1: number, p2: number): void;

/**
 * ease - smooth transition between the camera's positions
 * easeTime - Time in milliseconds for the transition to happen
 * If you have created a script (rendering) camera, and want to go back to the
 * character (gameplay) camera, call this native with render set to 0.
 * Setting ease to 1 will smooth the transition.
 */
declare function RenderScriptCams(render: boolean, ease: boolean, easeTime: number, p3: boolean, p4: boolean): void;

/**
 * PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(), 37, PLAYER::GET_WANTED_LEVEL_THRESHOLD(1));
 * From am_armybase.ysc.c4:
 * PLAYER::REPORT_CRIME(PLAYER::PLAYER_ID(4), 36, PLAYER::GET_WANTED_LEVEL_THRESHOLD(4));
 * -----
 * This was taken from the GTAV.exe v1.334. The function is called sub_140592CE8. For a full decompilation of the function, see here: pastebin.com/09qSMsN7
 * -----
 * crimeType:
 * 1: Firearms possession
 * 2: Person running a red light ("5-0-5")
 * 3: Reckless driver
 * 4: Speeding vehicle (a "5-10")
 * 5: Traffic violation (a "5-0-5")
 * 6: Motorcycle rider without a helmet
 * 7: Vehicle theft (a "5-0-3")
 * 8: Grand Theft Auto
 * 9: ???
 * 10: ???
 * 11: Assault on a civilian (a "2-40")
 * 12: Assault on an officer
 * 13: Assault with a deadly weapon (a "2-45")
 * 14: Officer shot (a "2-45")
 * 15: Pedestrian struck by a vehicle
 * 16: Officer struck by a vehicle
 * 17: Helicopter down (an "AC"?)
 * 18: Civilian on fire (a "2-40")
 * 19: Officer set on fire (a "10-99")
 * 20: Car on fire
 * 21: Air unit down (an "AC"?)
 * 22: An explosion (a "9-96")
 * 23: A stabbing (a "2-45") (also something else I couldn't understand)
 * 24: Officer stabbed (also something else I couldn't understand)
 * 25: Attack on a vehicle ("MDV"?)
 * 26: Damage to property
 * 27: Suspect threatening officer with a firearm
 * 28: Shots fired
 * 29: ???
 * 30: ???
 * 31: ???
 * 32: ???
 * 33: ???
 * 34: A "2-45"
 * 35: ???
 * 36: A "9-25"
 * 37: ???
 * 38: ???
 * 39: ???
 * 40: ???
 * 41: ???
 * 42: ???
 * 43: Possible disturbance
 * 44: Civilian in need of assistance
 * 45: ???
 * 46: ???
 */
declare function ReportCrime(player: number, crimeType: number, wantedLvlThresh: number): void;

declare function RequestActionModeAsset(asset: string): void;

/**
 * MulleDK19: Alias of REQUEST_COLLISION_AT_COORD.
 */
declare function RequestAdditionalCollisionAtCoord(p0: number, p1: number, p2: number): void;

/**
 * Request a gxt into the passed slot.
 */
declare function RequestAdditionalText(gxt: string, slot: number): void;

declare function RequestAdditionalText_2(gxt: string, slot: number): void;

/**
 * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: pastebin.com/XZ1tmGEz
 */
declare function RequestAmbientAudioBank(p0: string, p1: boolean): number;

declare function RequestAnimDict(animDict: string): void;

/**
 * Starts loading the specified animation set. An animation set provides movement animations for a ped. See SET_PED_MOVEMENT_CLIPSET.
 */
declare function RequestAnimSet(animSet: string): void;

declare function RequestClipSet(clipSet: string): void;

declare function RequestCollisionAtCoord(x: number, y: number, z: number): number;

declare function RequestCollisionForModel(model: string | number): void;

/**
 * p1: usually 8
 */
declare function RequestCutscene(cutsceneName: string, p1: number): void;

/**
 * Example:
 * CUTSCENE::_0xC23DE0E91C30B58C("JOSH_1_INT_CONCAT", 13, 8);
 */
declare function RequestCutsceneEx(cutsceneName: string, p1: number, p2: number): void;
/**
 * Example:
 * CUTSCENE::_0xC23DE0E91C30B58C("JOSH_1_INT_CONCAT", 13, 8);
 */
declare function N_0xc23de0e91c30b58c(cutsceneName: string, p1: number, p2: number): void;

/**
 * http://gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/?p=1068285912
 */
declare function RequestHudScaleform(hudComponent: number): void;
/**
 * http://gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/?p=1068285912
 */
declare function N_0x9304881d6f6537ea(hudComponent: number): void;

/**
 * Exemple: REQUEST_IPL("TrevorsTrailerTrash");
 * IPL + Coords: http://pastebin.com/FyV5mMma
 */
declare function RequestIpl(iplName: string): void;

declare function RequestMenuPedModel(model: string | number): void;
declare function N_0xa0261aef7acfc51e(model: string | number): void;

/**
 * All occurrences and usages found in b617d: pastebin.com/NzZZ2Tmm
 */
declare function RequestMissionAudioBank(p0: string, p1: boolean): number;

/**
 * Request a model to be loaded into memory
 * Looking it the disassembly, it seems like it actually returns the model if it's already loaded.
 */
declare function RequestModel(model: string | number): void;

/**
 * From the b678d decompiled scripts:
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("core_snow");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("fm_mission_controler");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("proj_xmas_firework");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_apartment_mp");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_biolab_heist");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_fireworks");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_parachute");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_indep_wheelsmoke");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_cig_plane");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_creator");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_mp_tankbattle");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_ornate_heist");
 * STREAMING::REQUEST_NAMED_PTFX_ASSET("scr_prison_break_heist_station");
 */
declare function RequestNamedPtfxAsset(fxName: string): void;

/**
 * maps script name (thread + 0xD0) by lookup via scriptfx.dat - does nothing when script name is empty
 */
declare function RequestPtfxAsset(): number;

/**
 * Gets a new native after almost every update.
 * Update 1.0.393.2
 * 0x67D02A194A2FC2BD
 * Update 1.0.463.1
 * 0xC97D787CE7726A2F
 * Update 1.0.505.2
 * 0x36ECDA4DD9A3F08D
 * Update 1.0.573.1
 * 0xE3C796DC28BC3254
 * Update 1.0.678.1
 * 0x2F14983962462691
 */
declare function RequestScaleformMovie(scaleformName: string): number;

/**
 * Also used by 0x67D02A194A2FC2BD
 */
declare function RequestScaleformMovieInstance(scaleformName: string): number;

/**
 * Similar to REQUEST_SCALEFORM_MOVIE, but seems to be some kind of "interactive" scaleform movie?
 * These seem to be the only scaleforms ever requested by this native:
 * "breaking_news"
 * "desktop_pc"
 * "ECG_MONITOR"
 * "Hacking_PC"
 * "TEETH_PULLING"
 * Note: Unless this hash is out-of-order, this native is next-gen only.
 */
declare function RequestScaleformMovieInteractive(scaleformName: string): number;
/**
 * Similar to REQUEST_SCALEFORM_MOVIE, but seems to be some kind of "interactive" scaleform movie?
 * These seem to be the only scaleforms ever requested by this native:
 * "breaking_news"
 * "desktop_pc"
 * "ECG_MONITOR"
 * "Hacking_PC"
 * "TEETH_PULLING"
 * Note: Unless this hash is out-of-order, this native is next-gen only.
 */
declare function RequestScaleformMovie3(scaleformName: string): number;

/**
 * For a full list, see here: pastebin.com/yLNWicUi
 */
declare function RequestScript(scriptName: string): void;

/**
 * All occurrences and usages found in b617d, sorted alphabetically and identical lines removed: pastebin.com/AkmDAVn6
 */
declare function RequestScriptAudioBank(p0: string, p1: boolean): number;

/**
 * formerly _REQUEST_STREAMED_SCRIPT
 */
declare function RequestScriptWithNameHash(scriptHash: string | number): void;
/**
 * formerly _REQUEST_STREAMED_SCRIPT
 */
declare function RequestStreamedScript(scriptHash: string | number): void;

declare function RequestStealthModeAsset(asset: string): void;

/**
 * last param isnt a toggle
 */
declare function RequestStreamedTextureDict(textureDict: string, p1: boolean): void;

/**
 * REQUEST_VEHICLE_ASSET(GET_HASH_KEY(cargobob3), 3);
 * vehicle found that have asset's:
 * cargobob3
 * submersible
 * blazer
 */
declare function RequestVehicleAsset(vehicleHash: string | number, vehicleAsset: number): void;

declare function RequestVehicleHighDetailModel(vehicle: number): void;

declare function RequestVehicleRecording(p0: number, p1: number): void;

/**
 * For a full list, see here: pastebin.com/Tp0XpBMN
 * For a full list of the points, see here: goo.gl/wIH0vn
 * Max number of loaded recordings is 32.
 */
declare function RequestWaypointRecording(name: string): void;

/**
 * Nearly every instance of p1 I found was 31. Nearly every instance of p2 I found was 0.
 * REQUEST_WEAPON_ASSET(iLocal_1888, 31, 26);
 */
declare function RequestWeaponAsset(weaponHash: string | number, p1: number, p2: number): void;

declare function RequestWeaponHighDetailModel(weaponObject: number): void;

declare function ReserveNetworkMissionObjects(p0: number): void;

declare function ReserveNetworkMissionPeds(p0: number): void;

declare function ReserveNetworkMissionVehicles(p0: number): void;

declare function ResetAiMeleeWeaponDamageModifier(): void;

declare function ResetAiWeaponDamageModifier(): void;

declare function ResetDispatchIdealSpawnDistance(): void;

declare function ResetDispatchSpawnBlockingAreas(): void;

/**
 * Sets (almost, not sure) all Rockstar Editor values (bIsRecording etc) to 0.
 */
declare function ResetEditorValues(): void;
/**
 * Sets (almost, not sure) all Rockstar Editor values (bIsRecording etc) to 0.
 */
declare function N_0x3353d13f09307691(): void;

declare function ResetEntityAlpha(entity: number): number;

declare function ResetExclusiveScenarioGroup(): void;

declare function ResetGroupFormationDefaultSpacing(groupHandle: number): void;

declare function ResetHudComponentValues(id: number): void;

/**
 * Sets the localplayer playerinfo state back to playing (State 0)
 * States are:
 * -1: "Invalid"
 * 0: "Playing"
 * 1: "Died"
 * 2: "Arrested"
 * 3: "Failed Mission"
 * 4: "Left Game"
 * 5: "Respawn"
 * 6: "In MP Cutscene"
 */
declare function ResetLocalplayerState(): void;

/**
 * console hash: 0x9E8D8B72
 * Resets the effect of _SET_PARTICLE_FX_ASSET_OLD_TO_NEW
 */
declare function ResetParticleFxAssetOldToNew(name: string): void;
/**
 * console hash: 0x9E8D8B72
 * Resets the effect of _SET_PARTICLE_FX_ASSET_OLD_TO_NEW
 */
declare function N_0x89c8553dd3274aae(name: string): void;

declare function ResetPedAudioFlags(p0: number): void;

declare function ResetPedInVehicleContext(ped: number): void;

/**
 * Resets the value for the last vehicle driven by the Ped.
 */
declare function ResetPedLastVehicle(ped: number): void;

/**
 * If p1 is 0.0, I believe you are back to normal.
 * If p1 is 1.0, it looks like you can only rotate the ped, not walk.
 * Using the following code to reset back to normal
 * PED::RESET_PED_MOVEMENT_CLIPSET(PLAYER::PLAYER_PED_ID(), 0.0);
 */
declare function ResetPedMovementClipset(ped: number, p1: number): void;

/**
 * There seem to be 26 flags
 */
declare function ResetPedRagdollBlockingFlags(ped: number, flags: number): void;
/**
 * There seem to be 26 flags
 */
declare function N_0xd86d101fcfd00a4b(ped: number, flags: number): void;

declare function ResetPedRagdollTimer(ped: number): void;

declare function ResetPedStrafeClipset(ped: number): void;

declare function ResetPedVisibleDamage(ped: number): number;

declare function ResetPedWeaponMovementClipset(ped: number): void;

declare function ResetPlayerArrestState(player: number): void;

declare function ResetPlayerInputGait(player: number): void;

declare function ResetPlayerStamina(player: number): void;

declare function ResetReticuleValues(): void;

declare function ResetScenarioGroupsEnabled(): void;

declare function ResetScenarioTypesEnabled(): void;

declare function ResetTrevorRage(): void;

/**
 * The inner function has a switch on the second parameter. It's the stuck timer index.
 * Here's some pseudo code I wrote for the inner function:
 * void __fastcall NATIVE_RESET_VEHICLE_STUCK_TIMER_INNER(CUnknown* unknownClassInVehicle, int timerIndex)
 * {
 * switch (timerIndex)
 * {
 * case 0:
 * unknownClassInVehicle-&gt;FirstStuckTimer = (WORD)0u;
 * case 1:
 * unknownClassInVehicle-&gt;SecondStuckTimer = (WORD)0u;
 * case 2:
 * unknownClassInVehicle-&gt;ThirdStuckTimer = (WORD)0u;
 * case 3:
 * unknownClassInVehicle-&gt;FourthStuckTimer = (WORD)0u;
 * case 4:
 * unknownClassInVehicle-&gt;FirstStuckTimer = (WORD)0u;
 * unknownClassInVehicle-&gt;SecondStuckTimer = (WORD)0u;
 * unknownClassInVehicle-&gt;ThirdStuckTimer = (WORD)0u;
 * unknownClassInVehicle-&gt;FourthStuckTimer = (WORD)0u;
 * break;
 * };
 * }
 */
declare function ResetVehicleStuckTimer(vehicle: number, nullAttributes: number): void;

declare function ResetVehicleWheels(vehicle: number, toggle: boolean): void;

declare function ResetWantedLevelDifficulty(player: number): void;

/**
 * Sets the waves intensity back to original (1.0 in most cases).
 * console hash: 0x4AD23212
 * Most likely RESET_CURRENT_*
 */
declare function ResetWavesIntensity(): void;
/**
 * Sets the waves intensity back to original (1.0 in most cases).
 * console hash: 0x4AD23212
 * Most likely RESET_CURRENT_*
 */
declare function N_0x5e5e99285ae812db(): void;

/**
 * Please change back to _0xBD12C5EEE184C33 (hash collision)
 * actual native starts with SET_RADAR_ZOOM_...
 */
declare function RespondingAsTemp(p0: number): void;

/**
 * Before using this native click the native above and look at the decription.
 * Example:
 * int GetHash = Function.Call&lt;int&gt;(Hash.GET_HASH_KEY, "fe_menu_version_corona_lobby");
 * Function.Call(Hash.ACTIVATE_FRONTEND_MENU, GetHash, 0, -1);
 * Function.Call(Hash.RESTART_FRONTEND_MENU(GetHash, -1);
 * This native refreshes the frontend menu.
 * p1 = Hash of Menu
 * p2 = Unknown but always works with -1.
 */
declare function RestartFrontendMenu(menuHash: string | number, p1: number): void;

declare function RestartScriptedConversation(): void;

declare function RestorePlayerStamina(player: number, p1: number): void;

/**
 * This function will simply bring the dead person back to life.
 * Try not to use it alone, since using this function alone, will make peds fall through ground in hell(well for the most of the times).
 * Instead, before calling this function, you may want to declare the position, where your Resurrected ped to be spawn at.(For instance, Around 2 floats of Player's current position.)
 * Also, disabling any assigned task immediately helped in the number of scenarios, where If you want peds to perform certain decided tasks.
 */
declare function ResurrectPed(ped: number): void;

/**
 * It returns two lol
 * li r3, 2
 * blr
 * thats all it does.
 * mov dword ptr [rax], 2
 */
declare function ReturnTwo(p0: number): number;
/**
 * It returns two lol
 * li r3, 2
 * blr
 * thats all it does.
 * mov dword ptr [rax], 2
 */
declare function N_0x40afb081f8add4ee(p0: number): number;

/**
 * It will revive/cure the injured ped. The condition is ped must not be dead.
 * Upon setting and converting the health int, found, if health falls below 5, the ped will lay on the ground in pain(Maximum default health is 100).
 * This function is well suited there.
 */
declare function ReviveInjuredPed(ped: number): void;

/**
 * windowIndex:
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 */
declare function RollDownWindow(vehicle: number, windowIndex: number): number;

/**
 * Roll down all the windows of the vehicle passed through the first parameter.
 */
declare function RollDownWindows(vehicle: number): void;

/**
 * 0 = Front Right Window
 * 1 = Front Left Window
 * 2 = Back Right Window
 * 3 = Back Left Window
 */
declare function RollUpWindow(vehicle: number, windowIndex: number): number;

declare function RopeAreTexturesLoaded(): number;

declare function RopeConvertToSimple(rope: number): void;

declare function RopeDrawShadowEnabled(toggle: boolean): number;

/**
 * Forces a rope to a certain length.
 */
declare function RopeForceLength(rope: number, length: number): number;

/**
 * Loads rope textures for all ropes in the current scene.
 */
declare function RopeLoadTextures(): number;

/**
 * Reset a rope to a certain length.
 */
declare function RopeResetLength(rope: number, length: boolean): number;

declare function RopeSetUpdatePinverts(rope: number): void;

/**
 * Unloads rope textures for all ropes in the current scene.
 */
declare function RopeUnloadTextures(): number;

declare function Round(value: number): number;

declare function ScEmailMessageClearRecipList(): void;
declare function N_0x55df6db45179236e(): void;

declare function ScEmailMessagePushGamerToRecipList(player: number): void;

/**
 * Returns the status of a _SC_START_CHECK_STRING_TASK task.
 * Possible return values:
 * 0: not a profane string
 * 1: a profane string
 * 3: server error occurred
 */
declare function ScGetCheckStringStatus(taskHandle: number): number;
/**
 * Returns the status of a _SC_START_CHECK_STRING_TASK task.
 * Possible return values:
 * 0: not a profane string
 * 1: a profane string
 * 3: server error occurred
 */
declare function N_0x82e4a58babc15ae7(taskHandle: number): number;

/**
 * Returns the nickname of the logged-in Rockstar Social Club account.
 */
declare function ScGetNickname(): string;

/**
 * Returns whether or not a task started with _SC_START_CHECK_STRING_TASK has completed.
 */
declare function ScHasCheckStringTaskCompleted(taskHandle: number): number;
/**
 * Returns whether or not a task started with _SC_START_CHECK_STRING_TASK has completed.
 */
declare function N_0x1753344c770358ae(taskHandle: number): number;

declare function ScInboxGetEmails(offset: number, limit: number): void;
declare function N_0x040addcbafa1018a(offset: number, limit: number): void;

declare function ScInboxMessageGetDataBool(p0: number, p1: string): number;
declare function N_0xffe5c16f402d851d(p0: number, p1: string): number;

declare function ScInboxMessageGetDataInt(p0: number, context: string, out: number): number;

declare function ScInboxMessageGetDataString(p0: number, context: string, out: string): number;

declare function ScInboxMessageGetString(p0: number): string;
declare function N_0xf3e31d16cbdcb304(p0: number): string;

declare function ScInboxMessageGetUgcdata(p0: number, p1: number): number;

declare function ScInboxMessageInit(p0: number): number;
declare function N_0xbb8ea16ecbc976c4(p0: number): number;

declare function ScInboxMessagePop(p0: number): number;
declare function N_0x2c015348cf19ca1d(p0: number): number;

declare function ScInboxMessagePush(p0: number): number;
declare function N_0x9a2c8064b6c1e41a(p0: number): number;

/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 * See also: 1753344C770358AE, 82E4A58BABC15AE7.
 */
declare function ScStartCheckStringTask(_string: string, taskHandle: number): number;
/**
 * Starts a task to check an entered string for profanity on the ROS/Social Club services.
 * See also: 1753344C770358AE, 82E4A58BABC15AE7.
 */
declare function N_0x75632c5ecd7ed843(_string: string, taskHandle: number): number;

/**
 * Seems to move all the drawn text on the screen to given coordinates.
 * It also removed all the drawn sprites of my screen so not to sure what the exact function is.
 */
declare function ScreenDrawPositionBegin(x: number, y: number): void;
/**
 * Seems to move all the drawn text on the screen to given coordinates.
 * It also removed all the drawn sprites of my screen so not to sure what the exact function is.
 */
declare function SetScreenDrawPosition(x: number, y: number): void;

declare function ScreenDrawPositionEnd(): void;
declare function N_0xe3a3db414a373dab(): void;

declare function ScreenDrawPositionRatio(x: number, y: number, p2: number, p3: number): void;
declare function N_0xf5a2c681787e579d(x: number, y: number, p2: number, p3: number): void;

/**
 * If bool Toggle = true so the mobile is hide to screen.
 * If bool Toggle = false so the mobile is show to screen.
 */
declare function ScriptIsMovingMobilePhoneOffscreen(toggle: boolean): void;

/**
 * Sends a message to the `loadingScreen` NUI frame, which contains the HTML page referenced in `loadscreen` resources.
 * @param jsonString The JSON-encoded message.
 * @return A success value.
 */
declare function SendLoadingScreenMessage(jsonString: string): number;

declare function SendNuiMessage(jsonString: string): number;

declare function SetAbilityBarValue(p0: number, p1: number): void;

declare function SetActivateObjectPhysicsAsSoonAsItIsUnfrozen(object: number, toggle: boolean): void;

/**
 * Makes pedestrians sound their horn longer, faster and more agressive when they use their horn.
 */
declare function SetAggressiveHorns(toggle: boolean): void;

/**
 * Previously named _0x97C65887D4B37FA9.
 * Sets the maximum view distance for the AI BIP
 */
declare function SetAiBlipMaxDistance(ped: number, distance: number): void;
/**
 * Previously named _0x97C65887D4B37FA9.
 * Sets the maximum view distance for the AI BIP
 */
declare function N_0x97c65887d4b37fa9(ped: number, distance: number): void;

declare function SetAiMeleeWeaponDamageModifier(modifier: number): void;

declare function SetAiWeaponDamageModifier(value: number): void;

/**
 * This can be between 1.0f - 14.9f
 * You can change the max in IDA from 15.0. I say 15.0 as the function blrs if what you input is greater than or equal to 15.0 hence why it's 14.9 max default.
 */
declare function SetAirDragMultiplierForPlayersVehicle(player: number, multiplier: number): void;

declare function SetAllLowPriorityVehicleGeneratorsActive(active: boolean): void;

declare function SetAllRandomPedsFlee(player: number, toggle: boolean): void;

declare function SetAllRandomPedsFleeThisFrame(player: number): void;

declare function SetAllVehicleGeneratorsActive(): void;

declare function SetAllVehicleGeneratorsActiveInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: boolean, p7: boolean): void;

/**
 * Most likely a hash collision
 */
declare function SetAllVehiclesSpawn(p0: number, p1: boolean, p2: boolean, p3: boolean): number;

/**
 * Audio List
 * gtaforums.com/topic/795622-audio-for-mods/
 * All found occurrences in b617d, sorted alphabetically and identical lines removed: pastebin.com/FTeAj4yZ
 * Yes
 */
declare function SetAmbientVoiceName(ped: number, name: string): void;

declare function SetAmbientZoneListState(p1: boolean, p2: boolean): number;

/**
 * All occurrences found in b617d, sorted alphabetically and identical lines removed: pastebin.com/WkXDGgQL
 */
declare function SetAmbientZoneListStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

declare function SetAmbientZoneState(p1: boolean, p2: boolean): number;

/**
 * All occurrences found in b617d, sorted alphabetically and identical lines removed: pastebin.com/jYvw7N1S
 */
declare function SetAmbientZoneStatePersistent(ambientZone: string, p1: boolean, p2: boolean): void;

declare function SetAmmoInClip(ped: number, weaponHash: string | number, ammo: number): number;

declare function SetAnimLooped(p0: number, p1: boolean, p2: number, p3: boolean): void;

declare function SetAnimRate(p0: number, p1: number, p2: number, p3: boolean): void;

declare function SetAnimWeight(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;

/**
 * mood can be 0 or 1 (it's not a boolean value!). Effects audio of the animal.
 */
declare function SetAnimalMood(animal: number, mood: number): void;

/**
 * Possible flag names:
 * "ActivateSwitchWheelAudio"
 * "AllowAmbientSpeechInSlowMo"
 * "AllowCutsceneOverScreenFade"
 * "AllowForceRadioAfterRetune"
 * "AllowPainAndAmbientSpeechToPlayDuringCutscene"
 * "AllowPlayerAIOnMission"
 * "AllowPoliceScannerWhenPlayerHasNoControl"
 * "AllowRadioDuringSwitch"
 * "AllowRadioOverScreenFade"
 * "AllowScoreAndRadio"
 * "AllowScriptedSpeechInSlowMo"
 * "AvoidMissionCompleteDelay"
 * "DisableAbortConversationForDeathAndInjury"
 * "DisableAbortConversationForRagdoll"
 * "DisableBarks"
 * "DisableFlightMusic"
 * "DisableReplayScriptStreamRecording"
 * "EnableHeadsetBeep"
 * "ForceConversationInterrupt"
 * "ForceSeamlessRadioSwitch"
 * "ForceSniperAudio"
 * "FrontendRadioDisabled"
 * "HoldMissionCompleteWhenPrepared"
 * "IsDirectorModeActive"
 * "IsPlayerOnMissionForSpeech"
 * "ListenerReverbDisabled"
 * "LoadMPData"
 * "MobileRadioInGame"
 * "OnlyAllowScriptTriggerPoliceScanner"
 * "PlayMenuMusic"
 * "PoliceScannerDisabled"
 * "ScriptedConvListenerMaySpeak"
 * "SpeechDucksScore"
 * "SuppressPlayerScubaBreathing"
 * "WantedMusicDisabled"
 * "WantedMusicOnMission"
 * -------------------------------
 * No added flag names between b393d and b573d, including b573d.
 * #######################################################################
 * "IsDirectorModeActive" is an audio flag which will allow you to play speech infinitely without any pauses like in Director Mode.
 * -----------------------------------------------------------------------
 * All flag IDs and hashes:
 * ID: 01 | Hash: 0x20A7858F
 * ID: 02 | Hash: 0xA11C2259
 * ID: 03 | Hash: 0x08DE4700
 * ID: 04 | Hash: 0x989F652F
 * ID: 05 | Hash: 0x3C9E76BA
 * ID: 06 | Hash: 0xA805FEB0
 * ID: 07 | Hash: 0x4B94EA26
 * ID: 08 | Hash: 0x803ACD34
 * ID: 09 | Hash: 0x7C741226
 * ID: 10 | Hash: 0x31DB9EBD
 * ID: 11 | Hash: 0xDF386F18
 * ID: 12 | Hash: 0x669CED42
 * ID: 13 | Hash: 0x51F22743
 * ID: 14 | Hash: 0x2052B35C
 * ID: 15 | Hash: 0x071472DC
 * ID: 16 | Hash: 0xF9928BCC
 * ID: 17 | Hash: 0x7ADBDD48
 * ID: 18 | Hash: 0xA959BA1A
 * ID: 19 | Hash: 0xBBE89B60
 * ID: 20 | Hash: 0x87A08871
 * ID: 21 | Hash: 0xED1057CE
 * ID: 22 | Hash: 0x1584AD7A
 * ID: 23 | Hash: 0x8582CFCB
 * ID: 24 | Hash: 0x7E5E2FB0
 * ID: 25 | Hash: 0xAE4F72DB
 * ID: 26 | Hash: 0x5D16D1FA
 * ID: 27 | Hash: 0x06B2F4B8
 * ID: 28 | Hash: 0x5D4CDC96
 * ID: 29 | Hash: 0x8B5A48BA
 * ID: 30 | Hash: 0x98FBD539
 * ID: 31 | Hash: 0xD8CB0473
 * ID: 32 | Hash: 0x5CBB4874
 * ID: 33 | Hash: 0x2E9F93A9
 * ID: 34 | Hash: 0xD93BEA86
 * ID: 35 | Hash: 0x92109B7D
 * ID: 36 | Hash: 0xB7EC9E4D
 * ID: 37 | Hash: 0xCABDBB1D
 * ID: 38 | Hash: 0xB3FD4A52
 * ID: 39 | Hash: 0x370D94E5
 * ID: 40 | Hash: 0xA0F7938F
 * ID: 41 | Hash: 0xCBE1CE81
 * ID: 42 | Hash: 0xC27F1271
 * ID: 43 | Hash: 0x9E3258EB
 * ID: 44 | Hash: 0x551CDA5B
 * ID: 45 | Hash: 0xCB6D663C
 * ID: 46 | Hash: 0x7DACE87F
 * ID: 47 | Hash: 0xF9DE416F
 * ID: 48 | Hash: 0x882E6E9E
 * ID: 49 | Hash: 0x16B447E7
 * ID: 50 | Hash: 0xBD867739
 * ID: 51 | Hash: 0xA3A58604
 * ID: 52 | Hash: 0x7E046BBC
 * ID: 53 | Hash: 0xD95FDB98
 * ID: 54 | Hash: 0x5842C0ED
 * ID: 55 | Hash: 0x285FECC6
 * ID: 56 | Hash: 0x9351AC43
 * ID: 57 | Hash: 0x50032E75
 * ID: 58 | Hash: 0xAE6D0D59
 * ID: 59 | Hash: 0xD6351785
 * ID: 60 | Hash: 0xD25D71BC
 * ID: 61 | Hash: 0x1F7F6423
 * ID: 62 | Hash: 0xE24C3AA6
 * ID: 63 | Hash: 0xBFFDD2B7
 */
declare function SetAudioFlag(flagName: string, toggle: boolean): void;

declare function SetAudioSceneVariable(scene: string, variable: string, value: number): void;

declare function SetAudioVehiclePriority(vehicle: number, p1: number): void;

declare function SetAutoGiveParachuteWhenEnterPlane(player: number, toggle: boolean): void;

declare function SetBalanceAddMachine(): [number, number, number];

declare function SetBalanceAddMachines(p1: number): [number, number, number];

/**
 * Only works on bikes, both X and Y work in the -1 - 1 range.
 * X forces the bike to turn left or right (-1, 1)
 * Y forces the bike to lean to the left or to the right (-1, 1)
 * Example with X -1/Y 1
 * http://i.imgur.com/TgIuAPJ.jpg
 */
declare function SetBikeLeanAngle(vehicle: number, x: number, y: number): void;

/**
 * This sets bit [offset] of [address] to on.
 * The offsets used are different bits to be toggled on and off, typically there is only one address used in a script.
 * Example:
 * GAMEPLAY::SET_BIT(&amp;bitAddress, 1);
 * To check if this bit has been enabled:
 * GAMEPLAY::IS_BIT_SET(bitAddress, 1); // will return 1 afterwards
 * Please note, this method may assign a value to [address] when used.
 */
declare function SetBit(offset: number): number;

declare function SetBitsInRange(rangeStart: number, rangeEnd: number, p3: number): number;

/**
 * Disables all emissive textures and lights like city lights, car lights, cop car lights. Particles still emit light
 * Used in Humane Labs Heist for EMP.
 */
declare function SetBlackout(enable: boolean): void;

/**
 * Sets alpha-channel for blip color.
 * Example:
 * Blip blip = UI::ADD_BLIP_FOR_ENTITY(entity);
 * UI::SET_BLIP_COLOUR(blip , 3);
 * UI::SET_BLIP_ALPHA(blip , 64);
 */
declare function SetBlipAlpha(blip: number, alpha: number): void;

/**
 * false for enemy
 * true for friendly
 */
declare function SetBlipAsFriendly(blip: number, toggle: boolean): void;

declare function SetBlipAsMissionCreatorBlip(blip: number, toggle: boolean): void;

declare function SetBlipAsShortRange(blip: number, toggle: boolean): void;

declare function SetBlipBright(blip: number, toggle: boolean): void;

/**
 * int index:
 * 1 = No Text on blip or Distance
 * 2 = Text on blip
 * 3 = No text, just distance
 * 4+ No Text on blip or distance
 */
declare function SetBlipCategory(blip: number, index: number): void;

/**
 * Adds a green checkmark on top of a blip.
 */
declare function SetBlipChecked(blip: number, toggle: boolean): void;
/**
 * Adds a green checkmark on top of a blip.
 */
declare function N_0x74513ea3e505181e(blip: number, toggle: boolean): void;

/**
 * Color:
 * 0: white
 * 1: red
 * 2: green
 * 3: blue
 * 17: orange
 * 19: purple
 * 20: grey
 * 21: brown
 * 23: pink
 * 25: dark green
 * 27: dark purple
 * 29: dark blue
 * Default (Function not used): yellow
 * Those are not the only ones. i.e: 17 is Trevor's orange.
 */
declare function SetBlipColour(blip: number, color: number): void;

declare function SetBlipCoords(blip: number, posX: number, posY: number, posZ: number): void;

/**
 * displayId = 8 : shows on radar
 * displayId:
 * 3 = Shows on Main map but not Radar (not selectable on map)
 * displayId = 2 (Shows on Main map + Radar + selectable)
 */
declare function SetBlipDisplay(blip: number, displayId: number): void;

declare function SetBlipFade(blip: number, opacity: number, duration: number): void;

declare function SetBlipFlashInterval(blip: number, p1: number): void;

/**
 * Adds up after viewing multiple R* scripts. I believe that the duration is in miliseconds.
 */
declare function SetBlipFlashTimer(blip: number, duration: number): void;

declare function SetBlipFlashes(blip: number, toggle: boolean): void;

declare function SetBlipFlashesAlternate(blip: number, toggle: boolean): void;

/**
 * Highlights a blip by a half cyan circle.
 */
declare function SetBlipFriend(blip: number, toggle: boolean): void;
/**
 * Highlights a blip by a half cyan circle.
 */
declare function N_0x23c3eb807312f01a(blip: number, toggle: boolean): void;

/**
 * Highlights a blip by a cyan color circle.
 * Color can be changed with SET_BLIP_SECONDARY_COLOUR
 */
declare function SetBlipFriendly(blip: number, toggle: boolean): void;
/**
 * Highlights a blip by a cyan color circle.
 * Color can be changed with SET_BLIP_SECONDARY_COLOUR
 */
declare function N_0xb81656bc81fe24d1(blip: number, toggle: boolean): void;

declare function SetBlipHighDetail(blip: number, toggle: boolean): void;

/**
 * Doesn't work if the label text of gxtEntry is &gt;= 80.
 */
declare function SetBlipNameFromTextFile(blip: number, gxtEntry: string): void;

declare function SetBlipNameToPlayerName(blip: number, player: number): void;

/**
 * See this topic for more details : gtaforums.com/topic/717612-v-scriptnative-documentation-and-research/page-35?p=1069477935
 */
declare function SetBlipPriority(blip: number, priority: number): void;

/**
 * After some testing, looks like you need to use UI:CEIL() on the rotation (vehicle/ped heading) before using it there.
 */
declare function SetBlipRotation(blip: number, rotation: number): void;

/**
 * Enable / disable showing route for the Blip-object.
 */
declare function SetBlipRoute(blip: number, enabled: boolean): void;

declare function SetBlipRouteColour(blip: number, colour: number): void;

declare function SetBlipScale(blip: number, scale: number): void;

declare function SetBlipSecondaryColour(blip: number, r: number, g: number, b: number): void;

declare function SetBlipShowCone(blip: number, toggle: boolean): void;

/**
 * Makes a blip go small when off the minimap.
 */
declare function SetBlipShrink(blip: number, toggle: boolean): void;
/**
 * Makes a blip go small when off the minimap.
 */
declare function N_0x2b6d467dab714e8d(blip: number, toggle: boolean): void;

/**
 * Takes a blip object and adds a sprite to it on the map.
 * You may have your own list, but since dev-c didn't show it I was bored and started looking through scripts and functions to get a presumable almost positive list of a majority of blip IDs
 * h t t p://pastebin.com/Bpj9Sfft
 * Blips Images + IDs:
 * gtaxscripting.blogspot.com/2016/05/gta-v-blips-id-and-image.html
 */
declare function SetBlipSprite(blip: number, spriteId: number): void;

/**
 * works with AI::TASK_SET_BLOCKING_OF_NON_TEMPORARY_EVENTS to make a ped completely oblivious to all events going on around him
 */
declare function SetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

declare function SetBoatAnchor(vehicle: number, toggle: boolean): void;

/**
 * Set camera as active/inactive.
 */
declare function SetCamActive(cam: number, active: boolean): void;

/**
 * Previous declaration void SET_CAM_ACTIVE_WITH_INTERP(Cam camTo, Cam camFrom, int duration, BOOL easeLocation, BOOL easeRotation) is completely wrong. The last two params are integers not BOOLs...
 */
declare function SetCamActiveWithInterp(camTo: number, camFrom: number, duration: number, easeLocation: number, easeRotation: number): void;

/**
 * Allows you to aim and shoot at the direction the camera is facing.
 */
declare function SetCamAffectsAiming(cam: number, toggle: boolean): void;

declare function SetCamAnimCurrentPhase(cam: number, phase: number): void;

/**
 * Sets the position of the cam.
 */
declare function SetCamCoord(cam: number, posX: number, posY: number, posZ: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function SetCamDebugName(camera: number, name: string): void;

/**
 * This native has its name defined inside its codE
 */
declare function SetCamDofFnumberOfLens(camera: number, p1: number): void;
/**
 * This native has its name defined inside its codE
 */
declare function N_0x7dd234d6f3914c5b(camera: number, p1: number): void;

/**
 * This native has a name defined inside its code
 */
declare function SetCamDofFocusDistanceBias(camera: number, p1: number): void;
/**
 * This native has a name defined inside its code
 */
declare function N_0xc669eea5d031b7de(camera: number, p1: number): void;

/**
 * This native has a name defined inside its code
 */
declare function SetCamDofMaxNearInFocusDistance(camera: number, p1: number): void;
/**
 * This native has a name defined inside its code
 */
declare function N_0xc3654a441402562d(camera: number, p1: number): void;

/**
 * This native has a name defined inside its code
 */
declare function SetCamDofMaxNearInFocusDistanceBlendLevel(camera: number, p1: number): void;
/**
 * This native has a name defined inside its code
 */
declare function N_0x2c654b4943bddf7c(camera: number, p1: number): void;

declare function SetCamDofPlanes(cam: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetCamDofStrength(cam: number, dofStrength: number): void;

/**
 * if p0 is 0, effect is cancelled
 * if p0 is 1, effect zooms in, gradually tilts cam clockwise apx 30 degrees, wobbles slowly. Motion blur is active until cancelled.
 * if p0 is 2, effect immediately tilts cam clockwise apx 30 degrees, begins to wobble slowly, then gradually tilts cam back to normal. The wobbling will continue until the effect is cancelled.
 */
declare function SetCamEffect(p0: number): void;

declare function SetCamFarClip(cam: number, farClip: number): void;

declare function SetCamFarDof(cam: number, farDOF: number): void;

/**
 * Sets the field of view of the cam.
 * ---------------------------------------------
 * Min: 1.0f
 * Max: 130.0f
 */
declare function SetCamFov(cam: number, fieldOfView: number): void;

/**
 * The native seems to only be called once.
 * The native is used as so,
 * CAM::SET_CAM_INHERIT_ROLL_VEHICLE(l_544, getElem(2, &amp;l_525, 4));
 * In the exile1 script.
 */
declare function SetCamInheritRollVehicle(cam: number, p1: boolean): void;

declare function SetCamMotionBlurStrength(cam: number, strength: number): void;

declare function SetCamNearClip(cam: number, nearClip: number): void;

declare function SetCamNearDof(cam: number, nearDOF: number): void;

declare function SetCamParams(cam: number, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, fieldOfView: number, p8: number, p9: number, p10: number, p11: number): void;

/**
 * Sets the rotation of the cam.
 * Last parameter unknown.
 * Last parameter seems to always be set to 2.
 */
declare function SetCamRot(cam: number, rotX: number, rotY: number, rotZ: number, rotationOrder: number): void;

declare function SetCamShakeAmplitude(cam: number, amplitude: number): void;

/**
 * I named p1 as timeDuration as it is obvious. I'm assuming tho it is ran in ms(Milliseconds) as usual.
 */
declare function SetCamSplineDuration(cam: number, timeDuration: number): void;

declare function SetCamSplinePhase(cam: number, p1: number): void;

declare function SetCamUseShallowDofMode(cam: number, toggle: boolean): void;

declare function SetCameraRange(cam: number, range: number): void;
declare function N_0xf9d02130ecdd1d77(cam: number, range: number): void;

/**
 * Setting ped to true allows the ped to shoot "friendlies".
 * p2 set to true when toggle is also true seams to make peds permanently unable to aim at, even if you set p2 back to false.
 * p1 = false &amp; p2 = false for unable to aim at.
 * p1 = true &amp; p2 = false for able to aim at.
 */
declare function SetCanAttackFriendly(ped: number, toggle: boolean, p2: boolean): void;

/**
 * Hardcoded to not work in multiplayer.
 */
declare function SetCanResprayVehicle(vehicle: number, state: boolean): void;

/**
 * Something to do with "high speed bump severity"?
 * if (!sub_87a46("SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER")) {
 * VEHICLE::_84FD40F56075E816(0.0);
 * sub_8795b("SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER", 1);
 * }
 */
declare function SetCarHighSpeedBumpSeverityMultiplier(multiplier: number): void;
/**
 * Something to do with "high speed bump severity"?
 * if (!sub_87a46("SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER")) {
 * VEHICLE::_84FD40F56075E816(0.0);
 * sub_8795b("SET_CAR_HIGH_SPEED_BUMP_SEVERITY_MULTIPLIER", 1);
 * }
 */
declare function N_0x84fd40f56075e816(multiplier: number): void;

/**
 * For now, I changed the last one from bool to int.
 * According to scripts specifically 'fm_mission_controller' this last parameter is 'false/0' when its called after the create rope native above is called for the magnet and 'true/1' after the create rope native above is called for the hook.
 */
declare function SetCargobobHookPosition(p0: number, p1: number, p2: number, state: number): void;
/**
 * For now, I changed the last one from bool to int.
 * According to scripts specifically 'fm_mission_controller' this last parameter is 'false/0' when its called after the create rope native above is called for the magnet and 'true/1' after the create rope native above is called for the hook.
 */
declare function N_0x877c1eaeac531023(p0: number, p1: number, p2: number, state: number): void;

/**
 * Console Hash: 0xF57066DA
 * Won't attract or magnetize to any helicopters or planes of course, but that's common sense.
 */
declare function SetCargobobPickupMagnetActive(cargobob: number, isActive: boolean): void;
/**
 * Console Hash: 0xF57066DA
 * Won't attract or magnetize to any helicopters or planes of course, but that's common sense.
 */
declare function CargobobMagnetGrabVehicle(cargobob: number, isActive: boolean): void;

/**
 * console hash 0xCC3CF97D
 */
declare function SetCargobobPickupMagnetStrength(cargobob: number, strength: number): void;
/**
 * console hash 0xCC3CF97D
 */
declare function N_0xbcbfcd9d1dac19e2(cargobob: number, strength: number): void;

declare function SetCgAtBoundcenter(rope: number): void;

declare function SetCgoffset(rope: number, x: number, y: number, z: number): void;

/**
 * Sets the cylinder height of the checkpoint.
 * Parameters:
 * * nearHeight - The height of the checkpoint when inside of the radius.
 * * farHeight - The height of the checkpoint when outside of the radius.
 * * radius - The radius of the checkpoint.
 */
declare function SetCheckpointCylinderHeight(checkpoint: number, nearHeight: number, farHeight: number, radius: number): void;

/**
 * Sets the checkpoint icon color.
 */
declare function SetCheckpointIconRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

/**
 * Sets the checkpoint color.
 */
declare function SetCheckpointRgba(checkpoint: number, red: number, green: number, blue: number, alpha: number): void;

declare function SetCinematicButtonActive(p0: boolean): void;

declare function SetCinematicCamShakeAmplitude(p0: number): void;

/**
 * p0 = 0/1 or true/false
 * It doesn't seems to work
 */
declare function SetCinematicModeActive(p0: boolean): void;

declare function SetClockDate(day: number, month: number, year: number): void;

/**
 * SET_CLOCK_TIME(12, 34, 56);
 */
declare function SetClockTime(hour: number, minute: number, second: number): void;

declare function SetCloudHatOpacity(opacity: number): void;
declare function N_0xf36199225d6d8c86(opacity: number): void;

declare function SetCloudHatTransition(_type: string, transitionTime: number): void;

/**
 * combatType can be between 0-14. See GET_COMBAT_FLOAT below for a list of possible parameters.
 */
declare function SetCombatFloat(ped: number, combatType: number, p2: number): void;

/**
 * This is for simulating player input.
 * amount is a float value from 0
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function SetControlNormal(inputGroup: number, control: number, amount: number): number;
/**
 * This is for simulating player input.
 * amount is a float value from 0
 * 0, 1 and 2 used in the scripts. 0 is by far the most common of them.
 */
declare function N_0xe8a25867fba3b05e(inputGroup: number, control: number, amount: number): number;

declare function SetConvertibleRoof(vehicle: number, p1: boolean): void;

declare function SetCreateRandomCops(toggle: boolean): void;

declare function SetCreateRandomCopsNotOnScenarios(toggle: boolean): void;

declare function SetCreateRandomCopsOnScenarios(toggle: boolean): void;

declare function SetCreditsActive(toggle: boolean): void;

declare function SetCurrentPedVehicleWeapon(ped: number, weaponHash: string | number): number;

declare function SetCurrentPedWeapon(ped: number, weaponHash: string | number, equipNow: boolean): void;

/**
 * Renamed to SET_CURSOR_LOCATION (I previously named it _SET_CURSOR_POSTION) which is the correct name as far as I can tell.
 */
declare function SetCursorLocation(x: number, y: number): number;
/**
 * Renamed to SET_CURSOR_LOCATION (I previously named it _SET_CURSOR_POSTION) which is the correct name as far as I can tell.
 */
declare function N_0xfc695459d4d0e219(x: number, y: number): number;

/**
 * Changes the mouse cursor's sprite.
 * 1 = Normal
 * 6 = Left Arrow
 * 7 = Right Arrow
 */
declare function SetCursorSprite(spriteId: number): void;
/**
 * Changes the mouse cursor's sprite.
 * 1 = Normal
 * 6 = Left Arrow
 * 7 = Right Arrow
 */
declare function N_0x8db8cffd58b62552(spriteId: number): void;

/**
 * Specifies a custom respawn position to be used in conjunction with _SET_NEXT_RESPAWN_TO_CUSTOM
 */
declare function SetCustomRespawnPosition(x: number, y: number, z: number, heading: number): void;
/**
 * Specifies a custom respawn position to be used in conjunction with _SET_NEXT_RESPAWN_TO_CUSTOM
 */
declare function N_0x706b5edcaa7fa663(x: number, y: number, z: number, heading: number): void;

/**
 * All occurrences found in b617d, sorted alphabetically and identical lines removed:
 * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_AK");
 * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_CUSTOM");
 * AUDIO::SET_CUTSCENE_AUDIO_OVERRIDE("_TOOTHLESS");
 */
declare function SetCutsceneAudioOverride(p0: string): void;

declare function SetCutsceneFadeValues(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

/**
 * p3 could be heading. Needs more research.
 */
declare function SetCutsceneOrigin(x: number, y: number, z: number, p3: number, p4: number): void;

declare function SetCutscenePedComponentVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number): void;

/**
 * Thanks R*! ;)
 * if ((l_161 == 0) || (l_161 == 2)) {
 * sub_2ea27("Trying to set Jimmy prop variation");
 * CUTSCENE::_0546524ADE2E9723("Jimmy_Boston", 1, 0, 0, 0);
 * }
 */
declare function SetCutscenePedPropVariation(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number): void;
/**
 * Thanks R*! ;)
 * if ((l_161 == 0) || (l_161 == 2)) {
 * sub_2ea27("Trying to set Jimmy prop variation");
 * CUTSCENE::_0546524ADE2E9723("Jimmy_Boston", 1, 0, 0, 0);
 * }
 */
declare function N_0x0546524ade2e9723(cutsceneEntName: string, p1: number, p2: number, p3: number, modelHash: string | number): void;

/**
 * Only used twice in R* scripts
 */
declare function SetCutsceneTriggerArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetDamping(rope: number, vertex: number, value: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function SetDebugLinesAndSpheresDrawingActive(enabled: boolean): void;

declare function SetDecisionMaker(ped: number, name: string | number): void;

/**
 * Defines the state of a destructible object.
 * Use the "0xB48FCED898292E52" native to find an object's handle with its name / coords
 * State 2 == object just spawned
 * State 4 == Beginning of the animation
 * State 6 == Start animation
 * State 9 == End of the animation
 */
declare function SetDesObjectState(handle: number, state: number): void;
/**
 * Defines the state of a destructible object.
 * Use the "0xB48FCED898292E52" native to find an object's handle with its name / coords
 * State 2 == object just spawned
 * State 4 == Beginning of the animation
 * State 6 == Start animation
 * State 9 == End of the animation
 */
declare function N_0x5c29f698d404c5e1(handle: number, state: number): void;

/**
 * If toggle is true, hides special ability bar / character name in the pause menu
 * If toggle is false, shows special ability bar / character name in the pause menu
 */
declare function SetDirectorMode(toggle: boolean): void;
/**
 * If toggle is true, hides special ability bar / character name in the pause menu
 * If toggle is false, shows special ability bar / character name in the pause menu
 */
declare function N_0x808519373fd336a3(toggle: boolean): void;

declare function SetDisableAmbientMeleeMove(player: number, toggle: boolean): void;

declare function SetDisableBreaking(rope: number, enabled: boolean): number;

/**
 * sometimes used used with NET_TO_OBJ
 * hash collision last 2 words
 */
declare function SetDisableFragDamage(object: number, toggle: boolean): void;

declare function SetDisableVehiclePetrolTankDamage(vehicle: number, toggle: boolean): void;

declare function SetDisableVehiclePetrolTankFires(vehicle: number, toggle: boolean): void;
declare function N_0x465bf26ab9684352(vehicle: number, toggle: boolean): void;

declare function SetDispatchCopsForPlayer(player: number, toggle: boolean): void;

declare function SetDispatchIdealSpawnDistance(p0: number): void;

declare function SetDispatchTimeBetweenSpawnAttempts(p0: number, p1: number): void;

declare function SetDispatchTimeBetweenSpawnAttemptsMultiplier(p0: number, p1: number): void;

/**
 * This is a NOP function. It does nothing at all.
 */
declare function SetDitchPoliceModels(toggle: boolean): void;

/**
 * Sets the acceleration limit of a door.
 * How fast it can open, or the inverse hinge resistance.
 * A limit of 0 seems to lock doors.
 * p2 is always 0, p3 is always 1.
 */
declare function SetDoorAccelerationLimit(doorHash: string | number, limit: number, p2: boolean, p3: boolean): void;
/**
 * Sets the acceleration limit of a door.
 * How fast it can open, or the inverse hinge resistance.
 * A limit of 0 seems to lock doors.
 * p2 is always 0, p3 is always 1.
 */
declare function N_0x6bab9442830c7f53(doorHash: string | number, limit: number, p2: boolean, p3: boolean): void;

/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 * p2 is always 0, p3 is always 1.
 */
declare function SetDoorAjarAngle(doorHash: string | number, ajar: number, p2: boolean, p3: boolean): void;
/**
 * Sets the ajar angle of a door.
 * Ranges from -1.0 to 1.0, and 0.0 is closed / default.
 * p2 is always 0, p3 is always 1.
 */
declare function N_0xb6e6fba95c7324ac(doorHash: string | number, ajar: number, p2: boolean, p3: boolean): void;

/**
 * Sets the on-screen drawing origin for draw-functions (which is normally x=0,y=0 in the upper left corner of the screen) to a world coordinate.
 * From now on, the screen coordinate which displays the given world coordinate on the screen is seen as x=0,y=0.
 * Example in C#:
 * Vector3 boneCoord = somePed.GetBoneCoord(Bone.SKEL_Head);
 * Function.Call(Hash.SET_DRAW_ORIGIN, boneCoord.X, boneCoord.Y, boneCoord.Z, 0);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, -0.015, 0.013, 0.013, 0.0, 255, 0, 0, 200);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, -0.015, 0.013, 0.013, 90.0, 255, 0, 0, 200);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", -0.01, 0.015, 0.013, 0.013, 270.0, 255, 0, 0, 200);
 * Function.Call(Hash.DRAW_SPRITE, "helicopterhud", "hud_corner", 0.01, 0.015, 0.013, 0.013, 180.0, 255, 0, 0, 200);
 * Function.Call(Hash.CLEAR_DRAW_ORIGIN);
 * Result: www11.pic-upload.de/19.06.15/bkqohvil2uao.jpg
 * If the pedestrian starts walking around now, the sprites are always around her head, no matter where the head is displayed on the screen.
 * This function also effects the drawing of texts and other UI-elements.
 * The effect can be reset by calling GRAPHICS::CLEAR_DRAW_ORIGIN().
 */
declare function SetDrawOrigin(x: number, y: number, z: number, p3: number): void;

declare function SetDriveTaskCruiseSpeed(driver: number, cruiseSpeed: number): void;

/**
 * This native is used to set the driving style for specific ped.
 * Driving styles id seems to be:
 * 786468
 * 262144
 * 786469
 * http://gtaforums.com/topic/822314-guide-driving-styles/
 */
declare function SetDriveTaskDrivingStyle(ped: number, drivingStyle: number): void;

declare function SetDriveTaskMaxCruiseSpeed(p0: number, p1: number): void;

/**
 * For p1 &amp; p2 (Ped, Vehicle). I could be wrong, as the only time this native is called in scripts is once and both are 0, but I assume this native will work like SET_MOUNTED_WEAPON_TARGET in which has the same exact amount of parameters and the 1st and last 3 parameters are right and the same for both natives.
 */
declare function SetDrivebyTaskTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;

/**
 * The function specifically verifies the value is equal to, or less than 1.0f. If it is greater than 1.0f, the function does nothing at all.
 */
declare function SetDriverAbility(driver: number, ability: number): void;

/**
 * range 0.0f - 1.0f
 */
declare function SetDriverAggressiveness(driver: number, aggressiveness: number): void;

declare function SetEmitterRadioStation(emitterName: string, radioStation: string): void;

declare function SetEnableBoundAnkles(ped: number, toggle: boolean): void;

/**
 * ped can not pull out a weapon when true
 */
declare function SetEnableHandcuffs(ped: number, toggle: boolean): void;

declare function SetEnablePedEnveffScale(ped: number, toggle: boolean): void;

/**
 * Enables diving motion when underwater.
 */
declare function SetEnableScuba(ped: number, toggle: boolean): void;

/**
 * skin - everything alpha except skin
 * Set entity alpha level. Ranging from 0 to 255 but chnages occur after every 20 percent (after every 51).
 */
declare function SetEntityAlpha(entity: number, alphaLevel: number, skin: boolean): void;

declare function SetEntityAlwaysPrerender(entity: number, toggle: boolean): void;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function SetEntityAnimCurrentTime(entity: number, animDictionary: string, animName: string, time: number): void;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function SetEntityAnimSpeed(entity: number, animDictionary: string, animName: string, speedMultiplier: number): void;

/**
 * Makes the specified entity (ped, vehicle or object) persistent. Persistent entities will not automatically be removed by the engine.
 * p1 has no effect when either its on or off
 * maybe a quick disassembly will tell us what it does
 * p2 has no effect when either its on or off
 * maybe a quick disassembly will tell us what it does
 */
declare function SetEntityAsMissionEntity(entity: number, p1: boolean, p2: boolean): void;

/**
 * Marks the specified entity (ped, vehicle or object) as no longer needed.
 * Entities marked as no longer needed, will be deleted as the engine sees fit.
 */
declare function SetEntityAsNoLongerNeeded(entity: number): void;

declare function SetEntityCanBeDamaged(entity: number, toggle: boolean): void;

declare function SetEntityCanBeDamagedByRelationshipGroup(entity: number, bCanBeDamaged: boolean, relGroup: number): void;

/**
 * Sets whether the entity can be targeted without being in line-of-sight.
 */
declare function SetEntityCanBeTargetedWithoutLos(entity: number, toggle: boolean): void;

declare function SetEntityCollision(entity: number, toggle: boolean, keepPhysics: boolean): void;

/**
 * p7 is always 1 in the scripts. Set to 1, an area around the destination coords for the moved entity is cleared from other entities.
 * Often ends with 1, 0, 0, 1); in the scripts. It works.
 * Axis - Invert Axis Flags
 */
declare function SetEntityCoords(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;

/**
 * Axis - Invert Axis Flags
 */
declare function SetEntityCoordsNoOffset(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): void;

/**
 * does the same as SET_ENTITY_COORDS.
 * Console Hash: 0x749B282E
 */
declare function SetEntityCoords_2(entity: number, xPos: number, yPos: number, zPos: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, clearArea: boolean): void;

declare function SetEntityDynamic(entity: number, toggle: boolean): void;

declare function SetEntityHasGravity(entity: number, toggle: boolean): void;

declare function SetEntityHeading(entity: number, heading: number): void;

/**
 * health &gt;= 0
 */
declare function SetEntityHealth(entity: number, health: number): void;

declare function SetEntityIconColor(entity: number, red: number, green: number, blue: number, alpha: number): void;

declare function SetEntityIconVisibility(entity: number, toggle: boolean): void;

/**
 * Sets a ped or an object totally invincible. It doesn't take any kind of damage. Peds will not ragdoll on explosions and the tazer animation won't apply either.
 * If you use this for a ped and you want Ragdoll to stay enabled, then do:
 * *(DWORD *)(pedAddress + 0x188) |= (1 &lt;&lt; 9);
 * Use this if you want to get the invincibility status:
 * bool IsPedInvincible(Ped ped)
 * {
 * auto addr = getScriptHandleBaseAddress(ped);
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x188);
 * return ((flag &amp; (1 &lt;&lt; 8)) != 0) || ((flag &amp; (1 &lt;&lt; 9)) != 0);
 * }
 * return false;
 * }
 */
declare function SetEntityInvincible(entity: number, toggle: boolean): void;

declare function SetEntityIsTargetPriority(entity: number, p1: boolean, p2: number): void;

declare function SetEntityLights(entity: number, toggle: boolean): void;

declare function SetEntityLoadCollisionFlag(entity: number, toggle: boolean): void;

declare function SetEntityLocallyInvisible(entity: number): void;

declare function SetEntityLocallyVisible(entity: number): void;

/**
 * LOD distance can be 0 to 0xFFFF (higher values will result in 0xFFFF) as it is actually stored as a 16-bit value (aka uint16_t).
 */
declare function SetEntityLodDist(entity: number, value: number): void;

/**
 * For instance: ENTITY::SET_ENTITY_MAX_HEALTH(PLAYER::PLAYER_PED_ID(), 200); // director_mode.c4: 67849
 */
declare function SetEntityMaxHealth(entity: number, value: number): void;

declare function SetEntityMaxSpeed(entity: number, speed: number): void;

declare function SetEntityMotionBlur(entity: number, toggle: boolean): void;

/**
 * Calling this function, regardless of the "unknown" value, disabled collision between two entities.
 * Importance of entity1 and 2 order is unclear.
 */
declare function SetEntityNoCollisionEntity(entity1: number, entity2: number, unknown: boolean): void;

declare function SetEntityOnlyDamagedByPlayer(entity: number, toggle: boolean): void;

declare function SetEntityOnlyDamagedByRelationshipGroup(entity: number, p1: boolean, p2: number): void;

/**
 * Enable / disable each type of damage.
 * Can't get drownProof to work.
 * --------------
 * p7 is to to '1' in am_mp_property_ext/int: entity::set_entity_proofs(uParam0-&gt;f_19, true, true, true, true, true, true, 1, true);
 */
declare function SetEntityProofs(entity: number, bulletProof: boolean, fireProof: boolean, explosionProof: boolean, collisionProof: boolean, meleeProof: boolean, p6: boolean, p7: boolean, drownProof: boolean): void;

/**
 * w is the correct parameter name!
 */
declare function SetEntityQuaternion(entity: number, x: number, y: number, z: number, w: number): void;

declare function SetEntityRecordsCollisions(entity: number, toggle: boolean): void;

declare function SetEntityRenderScorched(entity: number, toggle: boolean): void;

/**
 * rotationOrder refers to the order yaw pitch roll is applied
 * value ranges from 0 to 5. What you use for rotationOrder when setting must be the same as rotationOrder when getting the rotation.
 * Unsure what value corresponds to what rotation order, more testing will be needed for that.
 * For the most part R* uses 1 or 2 as the order.
 * p5 is usually set as true
 */
declare function SetEntityRotation(entity: number, pitch: number, roll: number, yaw: number, rotationOrder: number, p5: boolean): void;

/**
 * what does this native do?
 * bool IsEntitySomething(Entity entity)
 * {
 * auto addr = getScriptHandleBaseAddress(entity);
 * printf("addr: 0x%X \n", addr);
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x48D);
 * printf("flag: 0x%X \n", flag);
 * return ((flag &amp; (1 &lt;&lt; 3)) != 0) || ((flag &amp; (1 &lt;&lt; 30)) != 0);
 * }
 * return false;
 * }
 * wot ?
 */
declare function SetEntitySomething(entity: number, toggle: boolean): void;
/**
 * what does this native do?
 * bool IsEntitySomething(Entity entity)
 * {
 * auto addr = getScriptHandleBaseAddress(entity);
 * printf("addr: 0x%X \n", addr);
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x48D);
 * printf("flag: 0x%X \n", flag);
 * return ((flag &amp; (1 &lt;&lt; 3)) != 0) || ((flag &amp; (1 &lt;&lt; 30)) != 0);
 * }
 * return false;
 * }
 * wot ?
 */
declare function N_0x3910051ccecdb00c(entity: number, toggle: boolean): void;
/**
 * what does this native do?
 * bool IsEntitySomething(Entity entity)
 * {
 * auto addr = getScriptHandleBaseAddress(entity);
 * printf("addr: 0x%X \n", addr);
 * if (addr)
 * {
 * DWORD flag = *(DWORD *)(addr + 0x48D);
 * printf("flag: 0x%X \n", flag);
 * return ((flag &amp; (1 &lt;&lt; 3)) != 0) || ((flag &amp; (1 &lt;&lt; 30)) != 0);
 * }
 * return false;
 * }
 * wot ?
 */
declare function SetEntityRegister(entity: number, toggle: boolean): void;

/**
 * Example here: www.gtaforums.com/topic/830463-help-with-turning-lights-green-and-causing-peds-to-crash-into-each-other/#entry1068211340
 * 0 = green
 * 1 = red
 * 2 = yellow
 * changing lights may not change the behavior of vehicles
 */
declare function SetEntityTrafficlightOverride(entity: number, state: number): void;

/**
 * Note that the third parameter(denoted as z) is "up and down" with positive numbers encouraging upwards movement.
 */
declare function SetEntityVelocity(entity: number, x: number, y: number, z: number): void;

/**
 * unk was always 0.
 */
declare function SetEntityVisible(entity: number, toggle: boolean, unk: boolean): void;

declare function SetEntityVisibleInCutscene(p0: number, p1: boolean, p2: boolean): void;

declare function SetEveryoneIgnorePlayer(player: number, toggle: boolean): void;

/**
 * In appcamera.c4, Line 106:
 * if (VEHICLE::IS_VEHICLE_DRIVEABLE(PED::SET_EXCLUSIVE_PHONE_RELATIONSHIPS(PLAYER::PLAYER_PED_ID()), 0))
 * So return type could be a vehicle?
 * !Hash collision - gets the vehicle handle from ped which is about entering the vehicle!
 * sfink: agreed, 100%
 * Proper name is GET_VEHICLE_PED_IS_ENTERING
 */
declare function SetExclusivePhoneRelationships(ped: number): number;

/**
 * Groups found in the scripts used with this native:
 * "AMMUNATION",
 * "QUARRY",
 * "Triathlon_1",
 * "Triathlon_2",
 * "Triathlon_3"
 */
declare function SetExclusiveScenarioGroup(scenarioGroup: string): void;

declare function SetExplosiveAmmoThisFrame(player: number): number;

declare function SetExplosiveMeleeThisFrame(player: number): number;

declare function SetFacialIdleAnimOverride(ped: number, animName: string, animDict: string): void;

/**
 * Sets whether the game should fade in after the player dies or is arrested.
 */
declare function SetFadeInAfterDeathArrest(toggle: boolean): void;

declare function SetFadeInAfterLoad(toggle: boolean): void;

/**
 * Sets whether the game should fade out after the player is arrested.
 */
declare function SetFadeOutAfterArrest(toggle: boolean): void;

/**
 * Sets whether the game should fade out after the player dies.
 */
declare function SetFadeOutAfterDeath(toggle: boolean): void;

/**
 * Sets a visually fake wanted level on the user interface. Used by Rockstar's scripts to "override" regular wanted levels and make custom ones while the real wanted level and multipliers are ignored.
 * Max is 5, anything above this makes it just 5. Also the mini-map gets the red &amp; blue flashing effect. I wish I could use this to fake I had 6 stars like a few of the old GTAs'
 */
declare function SetFakeWantedLevel(fakeWantedLevel: number): void;

declare function SetFarDrawVehicles(toggle: boolean): void;

/**
 * When this is set to ON, shadows only draw as you get nearer.
 * When OFF, they draw from a further distance.
 */
declare function SetFarShadowsSuppressed(toggle: boolean): void;

declare function SetFireAmmoThisFrame(player: number): number;

/**
 * Purpose of p0 and p1 unknown.
 */
declare function SetFlash(p0: number, p1: number, fadeIn: number, duration: number, fadeOut: number): void;

declare function SetFlashLightFadeDistance(distance: number): number;

/**
 * Override the area where the camera will render the terrain.
 * p3, p4 and p5 are usually set to 0.0
 */
declare function SetFocusArea(x: number, y: number, z: number, offsetX: number, offsetY: number, offsetZ: number): void;

/**
 * It seems to make the entity's coords mark the point from which LOD-distances are measured. In my testing, setting a vehicle as the focus entity and moving that vehicle more than 300 distance units away from the player will make the level of detail around the player go down drastically (shadows disappear, textures go extremely low res, etc). The player seems to be the default focus entity.
 */
declare function SetFocusEntity(entity: number): void;

/**
 * From the b617d scripts:
 * CAM::SET_FOLLOW_PED_CAM_CUTSCENE_CHAT("FOLLOW_PED_ATTACHED_TO_ROPE_CAMERA", 0);
 * CAM::SET_FOLLOW_PED_CAM_CUTSCENE_CHAT("FOLLOW_PED_ON_EXILE1_LADDER_CAMERA", 1500);
 * CAM::SET_FOLLOW_PED_CAM_CUTSCENE_CHAT("FOLLOW_PED_SKY_DIVING_CAMERA", 0);
 * CAM::SET_FOLLOW_PED_CAM_CUTSCENE_CHAT("FOLLOW_PED_SKY_DIVING_CAMERA", 3000);
 * CAM::SET_FOLLOW_PED_CAM_CUTSCENE_CHAT("FOLLOW_PED_SKY_DIVING_FAMILY5_CAMERA", 0);
 * CAM::SET_FOLLOW_PED_CAM_CUTSCENE_CHAT("FOLLOW_PED_SKY_DIVING_CAMERA", 0);
 */
declare function SetFollowPedCamCutsceneChat(p0: string, p1: number): number;

/**
 * Sets the type of Player camera:
 * 0 - Third Person Close
 * 1 - Third Person Mid
 * 2 - Third Person Far
 * 4 - First Person
 */
declare function SetFollowPedCamViewMode(viewMode: number): void;

/**
 * Sets the type of Player camera in vehicles:
 * 0 - Third Person Close
 * 1 - Third Person Mid
 * 2 - Third Person Far
 * 4 - First Person
 */
declare function SetFollowVehicleCamViewMode(viewMode: number): void;

declare function SetFollowVehicleCamZoomLevel(zoomLevel: number): void;

declare function SetForceHdVehicle(vehicle: number, toggle: boolean): void;
declare function N_0x97ce68cb032583f0(vehicle: number, toggle: boolean): void;

declare function SetForceObjectThisFrame(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Forces footstep tracks on all surfaces.
 */
declare function SetForcePedFootstepsTracks(toggle: boolean): void;

/**
 * Forces vehicle trails on all surfaces.
 */
declare function SetForceVehicleTrails(toggle: boolean): void;

declare function SetFrontendActive(active: boolean): void;

declare function SetFrontendRadioActive(active: boolean): void;

declare function SetFrozenRenderingDisabled(enabled: boolean): void;
declare function EnableGameplayCam(enabled: boolean): void;

/**
 * Make sure to call this from the correct thread if you're using multiple threads because all other threads except the one which is calling SET_GAME_PAUSED will be paused which means you will lose control and the game remains in paused mode until you exit GTA5.exe
 */
declare function SetGamePaused(toggle: boolean): void;

declare function SetGamePausesForStreaming(toggle: boolean): void;

declare function SetGameplayCamRawPitch(pitch: number): void;

/**
 * Does nothing
 */
declare function SetGameplayCamRawYaw(yaw: number): void;

/**
 * Sets the camera position relative to heading in float from -360 to +360.
 * Heading is alwyas 0 in aiming camera.
 */
declare function SetGameplayCamRelativeHeading(heading: number): void;

/**
 * Sets the camera pitch.
 * Parameters:
 * x = pitches the camera on the x axis.
 * Value2 = always seems to be hex 0x3F800000 (1.000000 float).
 */
declare function SetGameplayCamRelativePitch(x: number, Value2: number): number;

/**
 * Sets the amplitude for the gameplay (i.e. 3rd or 1st) camera to shake. Used in script "drunk_controller.ysc.c4" to simulate making the player drunk.
 */
declare function SetGameplayCamShakeAmplitude(amplitude: number): void;

declare function SetGameplayCoordHint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

/**
 * p6 &amp; p7 - possibly length or time
 */
declare function SetGameplayEntityHint(entity: number, xOffset: number, yOffset: number, zOffset: number, p4: boolean, p5: number, p6: number, p7: number, p8: number): void;

declare function SetGameplayHintFov(FOV: number): void;

declare function SetGameplayObjectHint(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number, p6: number, p7: number): void;

declare function SetGameplayPedHint(p0: number, x1: number, y1: number, z1: number, p4: boolean, p5: number, p6: number, p7: number): void;

declare function SetGameplayVehicleHint(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number, p6: number, p7: number): void;

declare function SetGarbageTrucks(toggle: boolean): number;

/**
 * Needs to be looped! And yes, it does work and is not a hash collision.
 * Birds will try to reach the given height.
 */
declare function SetGlobalMinBirdFlightHeight(height: number): void;

declare function SetGpsActive(active: boolean): void;

declare function SetGpsDisabledZone(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * Only the script that originally called SET_GPS_FLAGS can set them again. Another script cannot set the flags, until the first script that called it has called CLEAR_GPS_FLAGS.
 * Doesn't seem like the flags are actually read by the game at all.
 */
declare function SetGpsFlags(p0: number, p1: number): void;

declare function SetGpsFlashes(toggle: boolean): void;

/**
 * level can be from 0 to 3
 * 0: 9.8
 * 1: 2.4
 * 2: 0.1 - very low
 * 3: 0.0
 * //SuckMyCoke
 */
declare function SetGravityLevel(level: number): void;

/**
 * 0: Default
 * 1: Circle Around Leader
 * 2: Alternative Circle Around Leader
 * 3: Line, with Leader at center
 */
declare function SetGroupFormation(groupId: number, formationType: number): void;

declare function SetGroupFormationSpacing(groupId: number, p1: number, p2: number, p3: number): void;

/**
 * Sets the range at which members will automatically leave the group.
 */
declare function SetGroupSeparationRange(groupHandle: number, separationRange: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingField('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingField(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingFloat('AIRTUG', 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingFloat(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingInt(vehicle: string, _class: string, fieldName: string, value: number): void;

/**
 * Sets a global handling override for a specific vehicle class. The name is supposed to match the `handlingName` field from handling.meta.
 * Example: `SetHandlingVector('AIRTUG', 'CHandlingData', 'vecCentreOfMassOffset', vector3(0.0, 0.0, -5.0))`
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 * @param vehicle The vehicle class to set data for.
 */
declare function SetHandlingVector(vehicle: string, _class: string, fieldName: string): void;

declare function SetHdArea(x: number, y: number, z: number, ground: number): void;

/**
 * Equivalent of SET_HELI_BLADES_SPEED(vehicleHandle, 1.0f);
 */
declare function SetHeliBladesFullSpeed(vehicle: number): void;

/**
 * Sets the speed of the helicopter blades in percentage of the full speed.
 * vehicleHandle: The helicopter.
 * speed: The speed in percentage, 0.0f being 0% and 1.0f being 100%.
 */
declare function SetHeliBladesSpeed(vehicle: number, speed: number): void;

/**
 * value between 0.0 and 1.0
 */
declare function SetHelicopterRollPitchYawMult(helicopter: number, multiplier: number): void;

/**
 * Makes the ped ragdoll like when falling from a great height
 */
declare function SetHighFallTask(ped: number, p1: number, p2: number, p3: number): void;

declare function SetHornEnabled(vehicle: number, toggle: boolean): void;

/**
 * HUD colors and their values: pastebin.com/d9aHPbXN
 */
declare function SetHudColour(hudColorIndex: number, r: number, g: number, b: number, a: number): void;
/**
 * HUD colors and their values: pastebin.com/d9aHPbXN
 */
declare function N_0xf314cf4f0211894e(hudColorIndex: number, r: number, g: number, b: number, a: number): void;

/**
 * HUD colors and their values: pastebin.com/d9aHPbXN
 * --------------------------------------------------
 * makes hudColorIndex2 color into hudColorIndex color
 */
declare function SetHudColoursSwitch(hudColorIndex: number, hudColorIndex2: number): void;
/**
 * HUD colors and their values: pastebin.com/d9aHPbXN
 * --------------------------------------------------
 * makes hudColorIndex2 color into hudColorIndex color
 */
declare function N_0x1ccc708f0f850613(hudColorIndex: number, hudColorIndex2: number): void;

declare function SetHudComponentPosition(id: number, x: number, y: number): void;

declare function SetIgnoreLowPriorityShockingEvents(player: number, toggle: boolean): void;

declare function SetIgnoreNoGpsFlag(ignore: boolean): void;

declare function SetIkTarget(ped: number, p1: number, targetPed: number, boneLookAt: number, x: number, y: number, z: number, p7: number, duration: number, duration1: number): void;

declare function SetInitialPlayerStation(radioStation: string): void;

declare function SetInputExclusive(inputGroup: number, control: number): void;

declare function SetInteriorActive(interiorID: number, toggle: boolean): void;

declare function SetLastDrivenVehicle(vehicle: number): void;
declare function N_0xacfb2463cc22bed2(vehicle: number): void;

/**
 * Initializes the text entry for the the text next to a loading prompt. All natives for for building UI texts can be used here
 * e.g
 * void StartLoadingMessage(char *text, int spinnerType = 3)
 * {
 * _SET_LOADING_PROMPT_TEXT_ENTRY("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _SHOW_LOADING_PROMPT(spinnerType);
 * }
 *  -- [[OR]] 
 * void ShowLoadingMessage(char *text, int spinnerType = 3, int timeMs = 10000)
 * {
 * _SET_LOADING_PROMPT_TEXT_ENTRY("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _SHOW_LOADING_PROMPT(spinnerType);
 * WAIT(timeMs);
 * _REMOVE_LOADING_PROMPT();
 * }
 * These are some localized strings used in the loading spinner.
 * "PM_WAIT"                   = Please Wait
 * "CELEB_WPLYRS"              = Waiting For Players.
 * "CELL_SPINNER2"             = Scanning storage.
 * "ERROR_CHECKYACHTNAME" = Registering your yacht's name. Please wait.
 * "ERROR_CHECKPROFANITY"   = Checking your text for profanity. Please wait.
 * "FM_COR_AUTOD"                        = Just spinner no text
 * "FM_IHELP_WAT2"                        = Waiting for other players
 * "FM_JIP_WAITO"                            = Game options are being set
 * "FMMC_DOWNLOAD"                    = Downloading
 * "FMMC_PLYLOAD"                         = Loading
 * "FMMC_STARTTRAN"                    = Launching session
 * "HUD_QUITTING"                           =  Quiting session
 * "KILL_STRIP_IDM"                         = Waiting for to accept
 * "MP_SPINLOADING"                      = Loading
 */
declare function SetLoadingPromptTextEntry(_string: string): void;
/**
 * Initializes the text entry for the the text next to a loading prompt. All natives for for building UI texts can be used here
 * e.g
 * void StartLoadingMessage(char *text, int spinnerType = 3)
 * {
 * _SET_LOADING_PROMPT_TEXT_ENTRY("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _SHOW_LOADING_PROMPT(spinnerType);
 * }
 *  -- [[OR]] 
 * void ShowLoadingMessage(char *text, int spinnerType = 3, int timeMs = 10000)
 * {
 * _SET_LOADING_PROMPT_TEXT_ENTRY("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _SHOW_LOADING_PROMPT(spinnerType);
 * WAIT(timeMs);
 * _REMOVE_LOADING_PROMPT();
 * }
 * These are some localized strings used in the loading spinner.
 * "PM_WAIT"                   = Please Wait
 * "CELEB_WPLYRS"              = Waiting For Players.
 * "CELL_SPINNER2"             = Scanning storage.
 * "ERROR_CHECKYACHTNAME" = Registering your yacht's name. Please wait.
 * "ERROR_CHECKPROFANITY"   = Checking your text for profanity. Please wait.
 * "FM_COR_AUTOD"                        = Just spinner no text
 * "FM_IHELP_WAT2"                        = Waiting for other players
 * "FM_JIP_WAITO"                            = Game options are being set
 * "FMMC_DOWNLOAD"                    = Downloading
 * "FMMC_PLYLOAD"                         = Loading
 * "FMMC_STARTTRAN"                    = Launching session
 * "HUD_QUITTING"                           =  Quiting session
 * "KILL_STRIP_IDM"                         = Waiting for to accept
 * "MP_SPINLOADING"                      = Loading
 */
declare function N_0xaba17d7ce615adbf(_string: string): void;

declare function SetLocalPlayerInvisibleLocally(p0: boolean): void;

declare function SetLocalPlayerVisibleInCutscene(p0: boolean, p1: boolean): void;

declare function SetLocalPlayerVisibleLocally(p0: boolean): void;

/**
 * Sets whether or not `SHUTDOWN_LOADING_SCREEN` automatically shuts down the NUI frame for the loading screen. If this is enabled,
 * you will have to manually invoke `SHUTDOWN_LOADING_SCREEN_NUI` whenever you want to hide the NUI loading screen.
 * @param manualShutdown TRUE to manually shut down the loading screen NUI.
 */
declare function SetManualShutdownLoadingScreenNui(manualShutdown: boolean): void;

/**
 * If toggle is true, the map is shown in full screen
 * If toggle is false, the map is shown in normal mode
 */
declare function SetMapFullScreen(toggle: boolean): void;
/**
 * If toggle is true, the map is shown in full screen
 * If toggle is false, the map is shown in normal mode
 */
declare function N_0x5354c5ba2ea868a4(toggle: boolean): void;

declare function SetMaxWantedLevel(maxWantedLevel: number): void;

/**
 * If this is the correct name, what microphone? I know your TV isn't going to reach out and adjust your headset so..
 */
declare function SetMicrophonePosition(p0: boolean, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;

declare function SetMinigameInProgress(toggle: boolean): void;

/**
 * Argument must be 0.0f or above 38.0f, or it will be ignored.
 */
declare function SetMinimapAttitudeIndicatorLevel(altitude: number, p1: boolean): void;

declare function SetMinimapBlockWaypoint(toggle: boolean): void;

/**
 * Please change to void.
 * p2 appears to be always -1.
 */
declare function SetMinimapComponent(p0: number, p1: boolean, p2: number): number;

/**
 * Sets the display info for a minimap overlay.
 * @param xScale The X scale for the overlay. This is equivalent to the Flash _xscale property, therefore 100 = 100%.
 * @param yScale The Y scale for the overlay. This is equivalent to the Flash _yscale property.
 * @param y The Y position for the overlay. This is equivalent to a game coordinate Y, except that it's inverted (gfxY = -gameY).
 * @param alpha The alpha value for the overlay. This is equivalent to the Flash _alpha property, therefore 100 = 100%.
 * @param miniMap The minimap overlay ID.
 * @param x The X position for the overlay. This is equivalent to a game coordinate X.
 */
declare function SetMinimapOverlayDisplay(miniMap: number, x: number, y: number, xScale: number, yScale: number, alpha: number): void;

/**
 * If true, the entire map will be revealed.
 */
declare function SetMinimapRevealed(toggle: boolean): void;
/**
 * If true, the entire map will be revealed.
 */
declare function N_0xf8dee0a5600cbb93(toggle: boolean): void;

/**
 * If true, the player can't save the game.
 * If the parameter is true, sets the mission flag to true, if the parameter is false, the function does nothing at all.
 * ^ also, if the mission flag is already set, the function does nothing at all
 */
declare function SetMissionFlag(toggle: boolean): void;

declare function SetMissionName(p0: boolean, name: string): void;

/**
 * p1 is always 0
 */
declare function SetMissionTrainAsNoLongerNeeded(p1: boolean): number;

declare function SetMissionTrainCoords(train: number, x: number, y: number, z: number): void;

declare function SetMobilePhonePosition(posX: number, posY: number, posZ: number): void;

declare function SetMobilePhoneRadioState(state: boolean): void;

/**
 * Last parameter is unknown and always zero.
 */
declare function SetMobilePhoneRotation(rotX: number, rotY: number, rotZ: number, p3: number): void;

/**
 * The minimum/default is 500.0f. If you plan to make it bigger set it's position as well. Also this seems to need to be called in a loop as when you close the phone the scale is reset. If not in a loop you'd need to call it everytime before you re-open the phone.
 */
declare function SetMobilePhoneScale(scale: number): void;

/**
 * Enables Radio on phone.
 */
declare function SetMobileRadioEnabledDuringGameplay(Toggle: boolean): void;

/**
 * Unloads model from memory
 */
declare function SetModelAsNoLongerNeeded(model: string | number): void;

declare function SetModelHeadlightConfiguration(modelHash: string | number, ratePerSecond: number, headlightRotation: number, invertRotation: boolean): void;

/**
 * Note: Look in decompiled scripts and the times that p1 and p2 aren't 0. They are filled with vars. If you look through out that script what other natives those vars are used in, you can tell p1 is a ped and p2 is a vehicle. Which most likely means if you want the mounted weapon to target a ped set targetVehicle to 0 or vice-versa.
 */
declare function SetMountedWeaponTarget(shootingPed: number, targetPed: number, targetVehicle: number, x: number, y: number, z: number): void;

/**
 * Sets flag's sprite transparency. 0-255.
 */
declare function SetMpGamerTagAlpha(gamerTagId: number, component: number, alpha: number): void;
/**
 * Sets flag's sprite transparency. 0-255.
 */
declare function N_0xd48fe545cd46f857(gamerTagId: number, component: number, alpha: number): void;

/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 */
declare function SetMpGamerTagColour(gamerTagId: number, flag: number, color: number): void;
/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 */
declare function N_0x613ed644950626ae(gamerTagId: number, flag: number, color: number): void;

/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * Should be enabled as flag (2). Has 0 opacity by default.
 * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
 */
declare function SetMpGamerTagHealthBarColour(headDisplayId: number, color: number): void;
/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * Should be enabled as flag (2). Has 0 opacity by default.
 * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
 */
declare function N_0x3158c77a7e888ab4(headDisplayId: number, color: number): void;
/**
 * Ranges from 0 to 255. 0 is grey health bar, ~50 yellow, 200 purple.
 * Should be enabled as flag (2). Has 0 opacity by default.
 * - This was _SET_MP_GAMER_TAG_HEALTH_BAR_COLOR,
 */
declare function SetMpGamerTagHealthBarColor(headDisplayId: number, color: number): void;

declare function SetMpGamerTagName(gamerTagId: number, _string: string): void;
declare function N_0xdea2b8283baa3944(gamerTagId: number, _string: string): void;

/**
 * enum MpGamerTagComponent
 * {
 * GAMER_NAME = 0,
 * CREW_TAG,
 * healthArmour,
 * BIG_TEXT,
 * AUDIO_ICON,
 * MP_USING_MENU,
 * MP_PASSIVE_MODE,
 * WANTED_STARS,
 * MP_DRIVER,
 * MP_CO_DRIVER,
 * MP_TAGGED,
 * GAMER_NAME_NEARBY,
 * ARROW,
 * MP_PACKAGES,
 * INV_IF_PED_FOLLOWING,
 * RANK_TEXT,
 * MP_TYPING
 * };
 */
declare function SetMpGamerTagVisibility(gamerTagId: number, component: number, toggle: boolean): void;
/**
 * enum MpGamerTagComponent
 * {
 * GAMER_NAME = 0,
 * CREW_TAG,
 * healthArmour,
 * BIG_TEXT,
 * AUDIO_ICON,
 * MP_USING_MENU,
 * MP_PASSIVE_MODE,
 * WANTED_STARS,
 * MP_DRIVER,
 * MP_CO_DRIVER,
 * MP_TAGGED,
 * GAMER_NAME_NEARBY,
 * ARROW,
 * MP_PACKAGES,
 * INV_IF_PED_FOLLOWING,
 * RANK_TEXT,
 * MP_TYPING
 * };
 */
declare function N_0x63bb75abedc1f6a0(gamerTagId: number, component: number, toggle: boolean): void;

/**
 * displays wanted star above head
 */
declare function SetMpGamerTagWantedLevel(gamerTagId: number, wantedlvl: number): void;
/**
 * displays wanted star above head
 */
declare function N_0xcf228e2aa03099c3(gamerTagId: number, wantedlvl: number): void;

declare function SetMultiplayerBankCash(): void;

declare function SetMultiplayerHudCash(p0: number, p1: number): void;

/**
 * Whether or not another player is allowed to take control of the entity
 */
declare function SetNetworkIdCanMigrate(netId: number, toggle: boolean): void;

declare function SetNetworkIdExistsOnAllMachines(netId: number, toggle: boolean): void;

/**
 * not tested....
 */
declare function SetNetworkIdSyncToPlayer(netId: number, player: number, toggle: boolean): void;
/**
 * not tested....
 */
declare function N_0xa8a024587329f36a(netId: number, player: number, toggle: boolean): void;

declare function SetNetworkIdVisibleInCutscene(netId: number, p1: boolean, p2: boolean): void;

declare function SetNetworkVehicleRespotTimer(netId: number, p1: number): void;

declare function SetNewWaypoint(x: number, y: number): void;

/**
 * Not used in the scripts.
 * Bullshit! It's used in spawn_activities
 */
declare function SetNextDesiredMoveState(p0: number): void;

/**
 * Sets the next spawn location to the position supplied to _SET_CUSTOM_RESPAWN_POSITION.
 */
declare function SetNextRespawnToCustom(): void;
/**
 * Sets the next spawn location to the position supplied to _SET_CUSTOM_RESPAWN_POSITION.
 */
declare function N_0xa2716d40842eaf79(): void;

/**
 * Enables Night Vision.
 * Example:
 * C#: Function.Call(Hash.SET_NIGHTVISION, true);
 * C++: GRAPHICS::SET_NIGHTVISION(true);
 * BOOL toggle:
 * true = turns night vision on for your player.
 * false = turns night vision off for your player.
 */
declare function SetNightvision(toggle: boolean): void;

declare function SetNoLoadingScreen(toggle: boolean): void;

declare function SetNoiseoveride(toggle: boolean): void;

declare function SetNoisinessoveride(value: number): void;

/**
 * Toggles the North Yankton map
 */
declare function SetNorthYanktonMap(toggle: boolean): void;
/**
 * Toggles the North Yankton map
 */
declare function SetDrawMapVisible(toggle: boolean): void;

/**
 * From the decompiled scripts:
 * UI::_92F0DA1E27DB96DC(6);
 * UI::_92F0DA1E27DB96DC(184);
 * UI::_92F0DA1E27DB96DC(190);
 * sets background color for the next notification
 * 6 = red
 * 184 = green
 * 190 = yellow
 * this seems to set the alpha to 255 automatically, if you have a work around let me know
 */
declare function SetNotificationBackgroundColor(hudIndex: number): void;
/**
 * From the decompiled scripts:
 * UI::_92F0DA1E27DB96DC(6);
 * UI::_92F0DA1E27DB96DC(184);
 * UI::_92F0DA1E27DB96DC(190);
 * sets background color for the next notification
 * 6 = red
 * 184 = green
 * 190 = yellow
 * this seems to set the alpha to 255 automatically, if you have a work around let me know
 */
declare function N_0x92f0da1e27db96dc(hudIndex: number): void;

/**
 * sets font color for the next notification
 */
declare function SetNotificationColorNext(p0: number): void;
/**
 * sets font color for the next notification
 */
declare function N_0x39bbf623fc803eac(p0: number): void;

/**
 * sets color for notification flash
 */
declare function SetNotificationFlashColor(red: number, green: number, blue: number, alpha: number): void;
/**
 * sets color for notification flash
 */
declare function N_0x17430b918701c342(red: number, green: number, blue: number, alpha: number): void;

/**
 * List of picNames: pastebin.com/XdpJVbHz
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 */
declare function SetNotificationMessage(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string): number;

/**
 * List of picNames pastebin.com/XdpJVbHz
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 * "duration" is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * "clanTag" shows a crew tag in the "sender" header, after the text. You need to use 3 underscores as padding. Maximum length of this field seems to be 7. (e.g. "MK" becomes "___MK", "ACE" becomes "___ACE", etc.)
 */
declare function SetNotificationMessageClanTag(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number, clanTag: string): number;

/**
 * List of picNames: pastebin.com/XdpJVbHz
 * flash is a bool for fading in.
 * iconTypes:
 * 1 : Chat Box
 * 2 : Email
 * 3 : Add Friend Request
 * 4 : Nothing
 * 5 : Nothing
 * 6 : Nothing
 * 7 : Right Jumping Arrow
 * 8 : RP Icon
 * 9 : $ Icon
 * "sender" is the very top header. This can be any old string.
 * "subject" is the header under the sender.
 * "duration" is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * "clanTag" shows a crew tag in the "sender" header, after the text. You need to use 3 underscores as padding. Maximum length of this field seems to be 7. (e.g. "MK" becomes "___MK", "ACE" becomes "___ACE", etc.)
 * iconType2 is a mirror of iconType. It shows in the "subject" line, right under the original iconType.
 * int IconNotification(char *text, char *text2, char *Subject)
 * {
 * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * _SET_NOTIFICATION_MESSAGE_CLAN_TAG_2("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 1, 7, text2, Subject, 1.0f, "__EXAMPLE", 7);
 * return _DRAW_NOTIFICATION(1, 1);
 * }
 */
declare function SetNotificationMessageClanTag_2(picName1: string, picName2: string, flash: boolean, iconType1: number, sender: string, subject: string, duration: number, clanTag: string, iconType2: number, p9: number): number;

/**
 * List of picNames: pastebin.com/XdpJVbHz
 */
declare function SetNotificationMessage_2(p0: string, p1: number, p2: number, p3: number, p4: boolean, picName1: string, picName2: string): number;
/**
 * List of picNames: pastebin.com/XdpJVbHz
 */
declare function N_0x2b7e9a4eaaa93c89(p0: string, p1: number, p2: number, p3: number, p4: boolean, picName1: string, picName2: string): number;

/**
 * Needs more research.
 * Only one type of usage in the scripts:
 * UI::_C6F580E4C94926AC("CHAR_ACTING_UP", "CHAR_ACTING_UP", 0, 0, "DI_FEED_CHAR", a_0);
 */
declare function SetNotificationMessage_3(picName1: string, picName2: string, p2: boolean, p3: number, p4: string, p5: string): number;
/**
 * Needs more research.
 * Only one type of usage in the scripts:
 * UI::_C6F580E4C94926AC("CHAR_ACTING_UP", "CHAR_ACTING_UP", 0, 0, "DI_FEED_CHAR", a_0);
 */
declare function N_0xc6f580e4c94926ac(picName1: string, picName2: string, p2: boolean, p3: number, p4: string, p5: string): number;

/**
 * NOTE: 'duration' is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * Example, only occurrence in the scripts:
 * v_8 = UI::_1E6611149DB3DB6B("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 0, 0, &amp;v_9, "", a_5);
 */
declare function SetNotificationMessage_4(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number): number;
/**
 * NOTE: 'duration' is a multiplier, so 1.0 is normal, 2.0 is twice as long (very slow), and 0.5 is half as long.
 * Example, only occurrence in the scripts:
 * v_8 = UI::_1E6611149DB3DB6B("CHAR_SOCIAL_CLUB", "CHAR_SOCIAL_CLUB", 0, 0, &amp;v_9, "", a_5);
 */
declare function N_0x1e6611149db3db6b(picName1: string, picName2: string, flash: boolean, iconType: number, sender: string, subject: string, duration: number): number;

/**
 * Declares the entry type of a notification, for example "STRING".
 * int ShowNotification(char *text)
 * {
 * _SET_NOTIFICATION_TEXT_ENTRY("STRING");
 * ADD_TEXT_COMPONENT_SUBSTRING_PLAYER_NAME(text);
 * return _DRAW_NOTIFICATION(1, 1);
 * }
 */
declare function SetNotificationTextEntry(_type: string): void;

declare function SetNuiFocus(hasFocus: boolean, hasCursor: boolean): void;

declare function SetNumberOfParkedVehicles(value: number): number;

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 */
declare function SetObjectAsNoLongerNeeded(object: number): void;

/**
 * Adjust the physics parameters of a prop, or otherwise known as "object". This is useful for simulated gravity.
 * Other parameters seem to be unknown.
 * p2: seems to be weight and gravity related. Higher value makes the obj fall faster. Very sensitive?
 * p3: seems similar to p2
 * p4: makes obj fall slower the higher the value
 * p5: similar to p4
 */
declare function SetObjectPhysicsParams(object: number, weight: number, p2: number, p3: number, p4: number, p5: number, gravity: number, p7: number, p8: number, p9: number, p10: number, buoyancy: number): void;

declare function SetObjectTargettable(object: number, targettable: boolean): number;

/**
 * enum ObjectPaintVariants
 * {
 * Pacific = 0,
 * Azure = 1,
 * Nautical = 2,
 * Continental = 3,
 * Battleship = 4,
 * Intrepid = 5,
 * Uniform = 6,
 * Classico = 7,
 * Mediterranean = 8,
 * Command = 9,
 * Mariner = 10,
 * Ruby = 11,
 * Vintage = 12,
 * Pristine = 13,
 * Merchant = 14,
 * Voyager = 15
 * };
 */
declare function SetObjectTextureVariant(object: number, paintIndex: number): void;
/**
 * enum ObjectPaintVariants
 * {
 * Pacific = 0,
 * Azure = 1,
 * Nautical = 2,
 * Continental = 3,
 * Battleship = 4,
 * Intrepid = 5,
 * Uniform = 6,
 * Classico = 7,
 * Mediterranean = 8,
 * Command = 9,
 * Mariner = 10,
 * Ruby = 11,
 * Vintage = 12,
 * Pristine = 13,
 * Merchant = 14,
 * Voyager = 15
 * };
 */
declare function N_0x971da0055324d033(object: number, paintIndex: number): void;

/**
 * Appears to have an optional bool parameter that is unused in the scripts.
 * If you pass true, something will be set to zero.
 */
declare function SetOverrideWeather(weatherType: string): void;

/**
 * p0 always seems to be 0
 * duration in milliseconds
 * frequency should range from about 10 (slow vibration) to 255 (very fast)
 * appears to be a hash collision, though it does do what it says
 * example:
 * SET_PAD_SHAKE(0, 100, 200);
 */
declare function SetPadShake(p0: number, duration: number, frequency: number): void;

declare function SetParachuteTaskTarget(ped: number, x: number, y: number, z: number): void;

declare function SetParachuteTaskThrust(ped: number, thrust: number): void;

declare function SetParkedVehicleDensityMultiplierThisFrame(multiplier: number): void;

/**
 * console hash: 0xC92719A7
 */
declare function SetParticleFxAssetOldToNew(oldAsset: string, newAsset: string): void;
/**
 * console hash: 0xC92719A7
 */
declare function SetPtfxAssetOld_2New(oldAsset: string, newAsset: string): void;

/**
 * hash collision
 */
declare function SetParticleFxBloodScale(p0: boolean): void;

declare function SetParticleFxCamInsideNonplayerVehicle(p0: number, p1: boolean): void;

declare function SetParticleFxCamInsideVehicle(p0: boolean): void;

declare function SetParticleFxLoopedAlpha(ptfxHandle: number, alpha: number): void;

/**
 * only works on some fx's
 * p4 = 0
 */
declare function SetParticleFxLoopedColour(ptfxHandle: number, r: number, g: number, b: number, p4: boolean): void;

declare function SetParticleFxLoopedEvolution(ptfxHandle: number, propertyName: string, amount: number, Id: boolean): void;

declare function SetParticleFxLoopedOffsets(ptfxHandle: number, x: number, y: number, z: number, rotX: number, rotY: number, rotZ: number): void;

declare function SetParticleFxLoopedRange(ptfxHandle: number, range: number): void;

declare function SetParticleFxLoopedScale(ptfxHandle: number, scale: number): void;

/**
 * Usage example for C#:
 * Function.Call(Hash.SET_PARTICLE_FX_NON_LOOPED_ALPHA, new InputArgument[] { 0.1f });
 * Note: the argument alpha ranges from 0.0f-1.0f !
 */
declare function SetParticleFxNonLoopedAlpha(alpha: number): void;

/**
 * only works on some fx's
 */
declare function SetParticleFxNonLoopedColour(r: number, g: number, b: number): void;

declare function SetParticleFxShootoutBoat(p0: number): void;

declare function SetPauseMenuActive(toggle: boolean): void;

/**
 * accuracy = 0-100, 100 being perfectly accurate
 */
declare function SetPedAccuracy(ped: number, accuracy: number): number;

/**
 * value ranges from 0 to 3.
 */
declare function SetPedAlertness(ped: number, value: number): void;

declare function SetPedAllowVehiclesOverride(ped: number, toggle: boolean): void;

declare function SetPedAllowedToDuck(ped: number, toggle: boolean): void;

/**
 * stance:
 * 0 = idle
 * 1 = walk
 * 2 = running
 * p5 = usually set to true
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function SetPedAlternateMovementAnim(ped: number, stance: number, animDictionary: string, animationName: string, p4: number, p5: boolean): void;

declare function SetPedAlternateWalkAnim(ped: number, animDict: string, animName: string, p3: number, p4: boolean): void;

declare function SetPedAmmo(ped: number, weaponHash: string | number, ammo: number): void;

declare function SetPedAmmoByType(ped: number, ammoType: number, ammo: number): void;

declare function SetPedAmmoToDrop(p0: number, p1: number): void;

declare function SetPedAngledDefensiveArea(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: boolean): void;

/**
 * Sets the armor of the specified ped.
 * ped: The Ped to set the armor of.
 * amount: A value between 0 and 100 indicating the value to set the Ped's armor to.
 */
declare function SetPedArmour(ped: number, amount: number): void;

/**
 * Turns the desired ped into a cop. If you use this on the player ped, you will become almost invisible to cops dispatched for you. You will also report your own crimes, get a generic cop voice, get a cop-vision-cone on the radar, and you will be unable to shoot at other cops. SWAT and Army will still shoot at you. Toggling ped as "false" has no effect; you must change p0's ped model to disable the effect.
 */
declare function SetPedAsCop(ped: number, toggle: boolean): void;

declare function SetPedAsEnemy(ped: number, toggle: boolean): void;

declare function SetPedAsGroupLeader(ped: number, groupId: number): void;

declare function SetPedAsGroupMember(ped: number, groupId: number): void;

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 */
declare function SetPedAsNoLongerNeeded(ped: number): void;

declare function SetPedBlendFromParents(ped: number, p1: number, p2: number, p3: number, p4: number): void;

declare function SetPedBoundsOrientation(ped: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetPedCanArmIk(ped: number, toggle: boolean): void;

declare function SetPedCanBeDraggedOut(ped: number, toggle: boolean): void;

/**
 * 0 = can (bike)
 * 1 = can't (bike)
 * 2 = unk
 * 3 = unk
 */
declare function SetPedCanBeKnockedOffVehicle(ped: number, state: number): void;

declare function SetPedCanBeShotInVehicle(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargetedWhenInjured(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargetedWithoutLos(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargetted(ped: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByPlayer(ped: number, player: number, toggle: boolean): void;

declare function SetPedCanBeTargettedByTeam(ped: number, team: number, toggle: boolean): void;

/**
 * It simply makes the said ped to cower behind cover object(wall, desk, car)
 * Peds flee attributes must be set to not to flee, first. Else, most of the peds, will just flee from gunshot sounds or any other panic situations.
 */
declare function SetPedCanCowerInCover(ped: number, toggle: boolean): void;

declare function SetPedCanEvasiveDive(ped: number, toggle: boolean): void;

declare function SetPedCanHeadIk(ped: number, toggle: boolean): void;

declare function SetPedCanLegIk(ped: number, toggle: boolean): void;

declare function SetPedCanPeekInCover(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayAmbientBaseAnims(ped: number, toggle: boolean): void;

declare function SetPedCanPlayGestureAnims(ped: number, toggle: boolean): void;

/**
 * p2 usually 0
 */
declare function SetPedCanPlayVisemeAnims(ped: number, toggle: boolean, p2: boolean): void;

declare function SetPedCanRagdoll(ped: number, toggle: boolean): void;

declare function SetPedCanRagdollFromPlayerImpact(ped: number, toggle: boolean): void;

declare function SetPedCanSmashGlass(ped: number, p1: boolean, p2: boolean): void;

declare function SetPedCanSwitchWeapon(ped: number, toggle: boolean): void;

/**
 * This only will teleport the ped to the group leader if the group leader teleports (sets coords).
 * Only works in singleplayer
 */
declare function SetPedCanTeleportToGroupLeader(pedHandle: number, groupHandle: number, toggle: boolean): void;

declare function SetPedCanTorsoIk(ped: number, toggle: boolean): void;

declare function SetPedCanUseAutoConversationLookat(ped: number, toggle: boolean): void;

/**
 * Overrides the ped's collision capsule radius for the current tick.
 * Must be called every tick to be effective.
 * Setting this to 0.001 will allow warping through some objects.
 */
declare function SetPedCapsule(ped: number, value: number): void;

declare function SetPedChanceOfFiringBlanks(ped: number, xBias: number, yBias: number): void;

declare function SetPedClothProne(p0: number, p1: number): void;
declare function N_0x82a3d6d9cc2cb8e3(p0: number, p1: number): void;

/**
 * 100 would equal attack
 * less then 50ish would mean run away
 * Only the values 0, 1 and 2 occur in the decompiled scripts. Most likely refers directly to the values also described in combatbehaviour.meta:
 * 0: CA_Poor
 * 1: CA_Average
 * 2: CA_Professional
 * Tested this and got the same results as the first explanation here. Could not find any difference between 0, 1 and 2.
 */
declare function SetPedCombatAbility(ped: number, p1: number): void;

/**
 * These combat attributes seem to be the same as the BehaviourFlags from combatbehaviour.meta.
 * So far, these are the equivalents found:
 * enum CombatAttributes
 * {
 * BF_CanUseCover = 0,
 * BF_CanUseVehicles = 1,
 * BF_CanDoDrivebys = 2,
 * BF_CanLeaveVehicle = 3,
 * BF_CanFightArmedPedsWhenNotArmed = 5,
 * BF_CanTauntInVehicle = 20,
 * BF_AlwaysFight = 46,
 * BF_IgnoreTrafficWhenDriving = 52,
 * BF_FreezeMovement = 292,
 * BF_PlayerCanUseFiringWeapons = 1424
 * };
 * 8 = ?
 * 9 = ?
 * 13 = ?
 * 14 ?
 * Research thread: gtaforums.com/topic/833391-researchguide-combat-behaviour-flags/
 */
declare function SetPedCombatAttributes(ped: number, attributeIndex: number, enabled: boolean): void;

/**
 * 0 - Stationary (Will just stand in place)
 * 1 - Defensive (Will try to find cover and very likely to blind fire)
 * 2 - Offensive (Will attempt to charge at enemy but take cover as well)
 * 3 - Suicidal Offensive (Will try to flank enemy in a suicidal attack)
 */
declare function SetPedCombatMovement(ped: number, combatMovement: number): void;

/**
 * Only the values 0, 1 and 2 occur in the decompiled scripts. Most likely refers directly to the values also described as AttackRange in combatbehaviour.meta:
 * 0: CR_Near
 * 1: CR_Medium
 * 2: CR_Far
 */
declare function SetPedCombatRange(ped: number, p1: number): void;

/**
 * paletteId/palletColor -  0 to 3.
 * enum PedVariationData
 * {
 * PED_VARIATION_FACE = 0,
 * PED_VARIATION_HEAD = 1,
 * PED_VARIATION_HAIR = 2,
 * PED_VARIATION_TORSO = 3,
 * PED_VARIATION_LEGS = 4,
 * PED_VARIATION_HANDS = 5,
 * PED_VARIATION_FEET = 6,
 * PED_VARIATION_EYES = 7,
 * PED_VARIATION_ACCESSORIES = 8,
 * PED_VARIATION_TASKS = 9,
 * PED_VARIATION_TEXTURES = 10,
 * PED_VARIATION_TORSO2 = 11
 * };
 * Usage:
 * SET_PED_COMPONENT_VARIATION(playerPed, PED_VARIATION_FACE, GET_NUMBER_OF_PED_DRAWABLE_VARIATIONS(playerPed, PED_VARIATION_FACE), GET_NUMBER_OF_PED_TEXTURE_VARIATIONS(playerPed, PED_VARIATION_FACE, 0), 2);
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function SetPedComponentVariation(ped: number, componentId: number, drawableId: number, textureId: number, paletteId: number): void;

/**
 * Research help : pastebin.com/fPL1cSwB
 * New items added with underscore as first char
 * -----------------------------------------------------------------------
 * enum PedConfigFlags
 * {
 * PED_FLAG_CAN_FLY_THRU_WINDSCREEN = 32,
 * PED_FLAG_DIES_BY_RAGDOLL = 33,
 * PED_FLAG_NO_COLLISION = 52,
 * _PED_FLAG_IS_SHOOTING = 58,
 * _PED_FLAG_IS_ON_GROUND = 60,
 * PED_FLAG_NO_COLLIDE = 62,
 * PED_FLAG_DEAD = 71,
 * PED_FLAG_IS_SNIPER_SCOPE_ACTIVE = 72,
 * PED_FLAG_SUPER_DEAD = 73,
 * _PED_FLAG_IS_IN_AIR = 76,
 * PED_FLAG_IS_AIMING = 78,
 * PED_FLAG_DRUNK = 100,
 * _PED_FLAG_IS_NOT_RAGDOLL_AND_NOT_PLAYING_ANIM = 104,
 * PED_FLAG_NO_PLAYER_MELEE = 122,
 * PED_FLAG_NM_MESSAGE_466 = 125,
 * PED_FLAG_INJURED_LIMP = 166,
 * PED_FLAG_INJURED_LIMP_2 = 170,
 * PED_FLAG_INJURED_DOWN = 187,
 * PED_FLAG_SHRINK = 223,
 * PED_FLAG_MELEE_COMBAT = 224,
 * _PED_FLAG_IS_ON_STAIRS = 253,
 * _PED_FLAG_HAS_ONE_LEG_ON_GROUND = 276,
 * PED_FLAG_NO_WRITHE = 281,
 * PED_FLAG_FREEZE = 292,
 * PED_FLAG_IS_STILL = 301,
 * PED_FLAG_NO_PED_MELEE = 314,
 * _PED_SWITCHING_WEAPON = 331,
 * PED_FLAG_ALPHA = 410,
 * };
 * (*) When flagId is set to 33 and the bool value to true, peds will die by starting ragdoll, so you should set this flag to false when you resurrect a ped.
 * When flagId is set to 62 and the boolvalue to false this happens: Ped is taken out of vehicle and can't get back in when jacking their empty vehicle. If in a plane it falls from the sky and crashes. Sometimes peds vehicle continue to drive the route without its driver who's running after.
 * (*)
 * JUMPING CHANGES  60,61,104 TO FALSE
 * BEING ON WATER CHANGES 60,61 TO FALSE AND 65,66,168 TO TRUE
 * FALLING CHANGES 60,61,104,276 TO FALSE AND TO 76 TRUE
 * DYING CHANGES 60,61,104,276* TO FALSE AND (NONE) TO TRUE
 * DYING MAKES 60,61,104 TO FALSE
 * BEING IN A CAR CHANGES 60,79,104 TO FALSE AND 62 TO TRUE
 * (*)Maximum value for flagId is 0x1AA (426) in b944.
 * ID 0xF0 (240) appears to be a special flag which is handled different compared to the others IDs.
 */
declare function SetPedConfigFlag(ped: number, flagId: number, value: boolean): void;

/**
 * teleports ped to coords along with the vehicle ped is in
 */
declare function SetPedCoordsKeepVehicle(ped: number, posX: number, posY: number, posZ: number): void;

declare function SetPedCoordsNoGang(ped: number, posX: number, posY: number, posZ: number): void;

/**
 * p1: Only "CODE_HUMAN_STAND_COWER" found in the b617d scripts.
 */
declare function SetPedCowerHash(ped: number, p1: string): void;

/**
 * Has 5 parameters since latest patches.
 */
declare function SetPedCurrentWeaponVisible(ped: number, visible: boolean, deselectWeapon: boolean, p3: boolean, p4: boolean): void;

/**
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * &lt;Item&gt;
 * &lt;uvPos x="0.500000" y="0.500000" /&gt;
 * &lt;scale x="0.600000" y="0.500000" /&gt;
 * &lt;rotation value="0.000000" /&gt;
 * &lt;nameHash&gt;FM_Hair_Fuzz&lt;/nameHash&gt;
 * &lt;txdHash&gt;mp_hair_fuzz&lt;/txdHash&gt;
 * &lt;txtHash&gt;mp_hair_fuzz&lt;/txtHash&gt;
 * &lt;zone&gt;ZONE_HEAD&lt;/zone&gt;
 * &lt;type&gt;TYPE_TATTOO&lt;/type&gt;
 * &lt;faction&gt;FM&lt;/faction&gt;
 * &lt;garment&gt;All&lt;/garment&gt;
 * &lt;gender&gt;GENDER_DONTCARE&lt;/gender&gt;
 * &lt;award /&gt;
 * &lt;awardLevel /&gt;
 * &lt;/Item&gt;
 * Code:
 * PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("mpbeach_overlays"), GAMEPLAY::GET_HASH_KEY("fm_hair_fuzz"))
 */
declare function SetPedDecoration(ped: number, collection: string | number, overlay: string | number): void;
/**
 * Applies an Item from a PedDecorationCollection to a ped. These include tattoos and shirt decals.
 * collection - PedDecorationCollection filename hash
 * overlay - Item name hash
 * Example:
 * Entry inside "mpbeach_overlays.xml" -
 * &lt;Item&gt;
 * &lt;uvPos x="0.500000" y="0.500000" /&gt;
 * &lt;scale x="0.600000" y="0.500000" /&gt;
 * &lt;rotation value="0.000000" /&gt;
 * &lt;nameHash&gt;FM_Hair_Fuzz&lt;/nameHash&gt;
 * &lt;txdHash&gt;mp_hair_fuzz&lt;/txdHash&gt;
 * &lt;txtHash&gt;mp_hair_fuzz&lt;/txtHash&gt;
 * &lt;zone&gt;ZONE_HEAD&lt;/zone&gt;
 * &lt;type&gt;TYPE_TATTOO&lt;/type&gt;
 * &lt;faction&gt;FM&lt;/faction&gt;
 * &lt;garment&gt;All&lt;/garment&gt;
 * &lt;gender&gt;GENDER_DONTCARE&lt;/gender&gt;
 * &lt;award /&gt;
 * &lt;awardLevel /&gt;
 * &lt;/Item&gt;
 * Code:
 * PED::_0x5F5D1665E352A839(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("mpbeach_overlays"), GAMEPLAY::GET_HASH_KEY("fm_hair_fuzz"))
 */
declare function ApplyPedOverlay(ped: number, collection: string | number, overlay: string | number): void;

/**
 * Sets Ped Default Clothes
 */
declare function SetPedDefaultComponentVariation(ped: number): void;

declare function SetPedDefensiveAreaAttachedToPed(ped: number, attachPed: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: boolean, p10: boolean): void;

declare function SetPedDefensiveAreaDirection(ped: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function SetPedDefensiveSphereAttachedToPed(ped: number, target: number, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;
declare function N_0xf9b8f91aad3b953e(ped: number, target: number, xOffset: number, yOffset: number, zOffset: number, radius: number, p6: boolean): void;

/**
 * ??? Usage
 * ??? Use this native inside a looped function.
 * ??? Values:
 * ??? 0.0 = no peds on streets
 * ??? 1.0 = normal peds on streets
 */
declare function SetPedDensityMultiplierThisFrame(multiplier: number): void;

declare function SetPedDesiredHeading(ped: number, heading: number): void;

declare function SetPedDesiredMoveBlendRatio(ped: number, p1: number): void;

declare function SetPedDiesInSinkingVehicle(ped: number, toggle: boolean): void;

declare function SetPedDiesInVehicle(ped: number, toggle: boolean): void;

declare function SetPedDiesInWater(ped: number, toggle: boolean): void;

declare function SetPedDiesInstantlyInWater(ped: number, toggle: boolean): void;

declare function SetPedDiesWhenInjured(ped: number, toggle: boolean): number;

declare function SetPedDriveByClipsetOverride(ped: number, clipset: string): void;

declare function SetPedDropsInventoryWeapon(ped: number, weaponHash: string | number, xOffset: number, yOffset: number, zOffset: number, p5: number): void;

declare function SetPedDropsWeapon(ped: number): void;

declare function SetPedDropsWeaponsWhenDead(ped: number, toggle: boolean): void;

/**
 * This is the SET_CHAR_DUCKING from GTA IV, that makes Peds duck. This function does nothing in GTA V. It cannot set the ped as ducking in vehicles, and IS_PED_DUCKING will always return false.
 */
declare function SetPedDucking(ped: number, toggle: boolean): void;

declare function SetPedEnableWeaponBlocking(ped: number, toggle: boolean): number;

/**
 * This is a hash collision...
 * _IS_VEHICLE_NEAR_ENTITY
 */
declare function SetPedEnabledBikeRingtone(vehicle: number, entity: number): number;

/**
 * Previously named _0xD30C50DF888D58B5, this native turns on the AI blip on the specified ped. It also disappears automatically when the ped is too far or if the ped is dead. You don't need to control it with other natives.
 * See gtaforums.com/topic/884370-native-research-ai-blips for further information.
 */
declare function SetPedEnemyAiBlip(pedHandle: number, showViewCones: boolean): void;
/**
 * Previously named _0xD30C50DF888D58B5, this native turns on the AI blip on the specified ped. It also disappears automatically when the ped is too far or if the ped is dead. You don't need to control it with other natives.
 * See gtaforums.com/topic/884370-native-research-ai-blips for further information.
 */
declare function N_0xd30c50df888d58b5(pedHandle: number, showViewCones: boolean): void;

/**
 * Values look to be between 0.0 and 1.0
 * From decompiled scripts: 0.0, 0.6, 0.65, 0.8, 1.0
 * You are correct, just looked in IDA it breaks from the function if it's less than 0.0f or greater than 1.0f.
 */
declare function SetPedEnveffScale(ped: number, value: number): void;

/**
 * Used for freemode (online) characters.
 * For some reason, the scripts use a rounded float for the index.
 */
declare function SetPedEyeColor(ped: number, index: number): void;

/**
 * Sets the various freemode face features, e.g. nose length, chin shape. Scale ranges from -1.0 to 1.0.
 * Index can be 0
 */
declare function SetPedFaceFeature(ped: number, index: number, scale: number): void;

/**
 * Console Hash: 0x8CD3E487
 */
declare function SetPedFacialDecoration(ped: number, collection: string | number, overlay: string | number): void;
/**
 * Console Hash: 0x8CD3E487
 */
declare function N_0x5619bfa07cfd7833(ped: number, collection: string | number, overlay: string | number): void;

/**
 * FIRING_PATTERN_BURST_FIRE = 0xD6FF6D61 ( 1073727030 )
 * FIRING_PATTERN_BURST_FIRE_IN_COVER = 0x026321F1 ( 40051185 )
 * FIRING_PATTERN_BURST_FIRE_DRIVEBY = 0xD31265F2 ( -753768974 )
 * FIRING_PATTERN_FROM_GROUND = 0x2264E5D6 ( 577037782 )
 * FIRING_PATTERN_DELAY_FIRE_BY_ONE_SEC = 0x7A845691 ( 2055493265 )
 * FIRING_PATTERN_FULL_AUTO = 0xC6EE6B4C ( -957453492 )
 * FIRING_PATTERN_SINGLE_SHOT = 0x5D60E4E0 ( 1566631136 )
 * FIRING_PATTERN_BURST_FIRE_PISTOL = 0xA018DB8A ( -1608983670 )
 * FIRING_PATTERN_BURST_FIRE_SMG = 0xD10DADEE ( 1863348768 )
 * FIRING_PATTERN_BURST_FIRE_RIFLE = 0x9C74B406 ( -1670073338 )
 * FIRING_PATTERN_BURST_FIRE_MG = 0xB573C5B4 ( -1250703948 )
 * FIRING_PATTERN_BURST_FIRE_PUMPSHOTGUN = 0x00BAC39B ( 12239771 )
 * FIRING_PATTERN_BURST_FIRE_HELI = 0x914E786F ( -1857128337 )
 * FIRING_PATTERN_BURST_FIRE_MICRO = 0x42EF03FD ( 1122960381 )
 * FIRING_PATTERN_SHORT_BURSTS = 0x1A92D7DF ( 445831135 )
 * FIRING_PATTERN_SLOW_FIRE_TANK = 0xE2CA3A71 ( -490063247 )
 * if anyone is interested firing pattern info: pastebin.com/Px036isB
 */
declare function SetPedFiringPattern(ped: number, patternHash: string | number): void;

/**
 * Bool probably has something to do with vehicles, maybe if the ped can use vehicle to flee?
 * Values used as attributes are those in sequence of powers of two, 1, 2, 4, 8, 16, 32, 64.... 65536.
 */
declare function SetPedFleeAttributes(ped: number, attributes: number, p2: boolean): void;

/**
 * p1/gadgetHash was always 0xFBAB5776 ("GADGET_PARACHUTE").
 * p2 is always true.
 */
declare function SetPedGadget(ped: number, gadgetHash: string | number, p2: boolean): void;

declare function SetPedGeneratesDeadBodyEvents(ped: number, toggle: boolean): void;

/**
 * From the scripts:
 * PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),
 * "ANIM_GROUP_GESTURE_MISS_FRA0");
 * PED::SET_PED_GESTURE_GROUP(PLAYER::PLAYER_PED_ID(),
 * "ANIM_GROUP_GESTURE_MISS_DocksSetup1");
 */
declare function SetPedGestureGroup(ped: number, animGroupGesture: string): void;

declare function SetPedGetOutUpsideDownVehicle(ped: number, toggle: boolean): void;

declare function SetPedGravity(ped: number, toggle: boolean): void;

declare function SetPedGroupMemberPassengerIndex(ped: number, index: number): void;

/**
 * Used for freemode (online) characters.
 */
declare function SetPedHairColor(ped: number, colorID: number, highlightColorID: number): void;

/**
 * The "shape" parameters control the shape of the ped's face. The "skin" parameters control the skin tone. ShapeMix and skinMix control how much the first and second IDs contribute,(typically mother and father.) ThirdMix overrides the others in favor of the third IDs. IsParent is set for "children" of the player character's grandparents during old-gen character creation. It has unknown effect otherwise.
 * The IDs start at zero and go Male Non-DLC, Female Non-DLC, Male DLC, and Female DLC.
 * !!!Can someone add working example for this???
 * try this:
 * headBlendData headData;
 * _GET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), &amp;headData);
 * SET_PED_HEAD_BLEND_DATA(PLAYER_PED_ID(), headData.shapeFirst, headData.shapeSecond, headData.shapeThird, headData.skinFirst, headData.skinSecond
 * , headData.skinThird, headData.shapeMix, headData.skinMix, headData.skinThird, 0);
 * For more info please refer to this topic.
 * gtaforums.com/topic/858970-all-gtao-face-ids-pedset-ped-head-blend-data-explained
 */
declare function SetPedHeadBlendData(ped: number, shapeFirstID: number, shapeSecondID: number, shapeThirdID: number, skinFirstID: number, skinSecondID: number, skinThirdID: number, shapeMix: number, skinMix: number, thirdMix: number, isParent: boolean): void;

/**
 * OverlayID ranges from 0 to 12, index from 0 to _GET_NUM_OVERLAY_VALUES(overlayID)-1, and opacity from 0.0 to 1.0.
 * overlayID       Part                  Index, to disable
 * 0               Blemishes             0 - 23, 255
 * 1               Facial Hair           0 - 28, 255
 * 2               Eyebrows              0 - 33, 255
 * 3               Ageing                0 - 14, 255
 * 4               Makeup                0 - 74, 255
 * 5               Blush                 0 - 6, 255
 * 6               Complexion            0 - 11, 255
 * 7               Sun Damage            0 - 10, 255
 * 8               Lipstick              0 - 9, 255
 * 9               Moles/Freckles        0 - 17, 255
 * 10              Chest Hair            0 - 16, 255
 * 11              Body Blemishes        0 - 11, 255
 * 12              Add Body Blemishes    0 - 1, 255
 */
declare function SetPedHeadOverlay(ped: number, overlayID: number, index: number, opacity: number): void;

/**
 * Used for freemode (online) characters.
 * ColorType is 1 for eyebrows, beards, and chest hair; 2 for blush and lipstick; and 0 otherwise, though not called in those cases.
 * Called after SET_PED_HEAD_OVERLAY().
 */
declare function SetPedHeadOverlayColor(ped: number, overlayID: number, colorType: number, colorID: number, secondColorID: number): void;

declare function SetPedHearingRange(ped: number, value: number): void;

declare function SetPedHelmet(ped: number, canWearHelmet: boolean): void;

declare function SetPedHelmetFlag(ped: number, helmetFlag: number): void;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function SetPedHelmetPropIndex(ped: number, propIndex: number): void;

declare function SetPedHelmetTextureIndex(ped: number, textureIndex: number): void;

declare function SetPedIdRange(ped: number, value: number): void;

/**
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, GAMEPLAY::GET_HASH_KEY("MINI_PROSTITUTE_LOW_PASSENGER"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_128, GAMEPLAY::GET_HASH_KEY("MINI_PROSTITUTE_LOW_RESTRICTED_PASSENGER"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, GAMEPLAY::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_3212, GAMEPLAY::GET_HASH_KEY("MISS_FAMILY1_JIMMY_SIT_REAR"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(l_95, GAMEPLAY::GET_HASH_KEY("MISS_FAMILY2_JIMMY_BICYCLE"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(num3, GAMEPLAY::GET_HASH_KEY("MISSFBI2_MICHAEL_DRIVEBY"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("MISS_ARMENIAN3_FRANKLIN_TENSE"));
 * PED::SET_PED_IN_VEHICLE_CONTEXT(PLAYER::PLAYER_PED_ID(), GAMEPLAY::GET_HASH_KEY("MISSFBI5_TREVOR_DRIVING"));
 */
declare function SetPedInVehicleContext(ped: number, context: string | number): void;

declare function SetPedInfiniteAmmo(ped: number, toggle: boolean, weaponHash: string | number): void;

declare function SetPedInfiniteAmmoClip(ped: number, toggle: boolean): void;

/**
 * Ped: The ped to warp.
 * vehicle: The vehicle to warp the ped into.
 * Seat_Index: [-1 is driver seat, -2 first free passenger seat]
 * Moreinfo of Seat Index
 * DriverSeat = -1
 * Passenger = 0
 * Left Rear = 1
 * RightRear = 2
 */
declare function SetPedIntoVehicle(ped: number, vehicle: number, seatIndex: number): void;

/**
 * Sets the ped drunk sounds.  Only works with PLAYER_PED_ID
 * ====================================================
 * As mentioned above, this only sets the drunk sound to ped/player.
 * To give the Ped a drunk effect with drunk walking animation try using SET_PED_MOVEMENT_CLIPSET
 * Below is an example
 * if (!Function.Call&lt;bool&gt;(Hash.HAS_ANIM_SET_LOADED, "move_m@drunk@verydrunk"))
 * {
 * Function.Call(Hash.REQUEST_ANIM_SET, "move_m@drunk@verydrunk");
 * }
 * Function.Call(Hash.SET_PED_MOVEMENT_CLIPSET, Ped.Handle, "move_m@drunk@verydrunk", 0x3E800000);
 * And to stop the effect use
 * RESET_PED_MOVEMENT_CLIPSET
 */
declare function SetPedIsDrunk(ped: number, toggle: boolean): void;

declare function SetPedKeepTask(ped: number, toggle: boolean): void;

/**
 * "IK" stands for "Inverse kinematics." I assume this has something to do with how the ped uses his legs to balance. In the scripts, the second parameter is always an int with a value of 2, 0, or sometimes 1
 */
declare function SetPedLegIkMode(ped: number, mode: number): void;

declare function SetPedLodMultiplier(ped: number, multiplier: number): void;

declare function SetPedMaxHealth(ped: number, value: number): void;

declare function SetPedMaxMoveBlendRatio(ped: number, value: number): void;

declare function SetPedMaxTimeInWater(ped: number, value: number): void;

declare function SetPedMaxTimeUnderwater(ped: number, value: number): void;

/**
 * Ped will stay on the ground after being stunned for at lest ms time. (in milliseconds)
 */
declare function SetPedMinGroundTimeForStungun(ped: number, ms: number): void;

declare function SetPedMinMoveBlendRatio(ped: number, value: number): void;

declare function SetPedModelIsSuppressed(ped: number, toggle: boolean): void;

/**
 * Maximum possible amount of money on MP is 2000. ~JX
 * -----------------------------------------------------------------------------
 * Maximum amount that a ped can theoretically have is 65535 (0xFFFF) since the amount is stored as an unsigned short (uint16_t) value.
 */
declare function SetPedMoney(ped: number, amount: number): void;

declare function SetPedMotionBlur(ped: number, toggle: boolean): void;

declare function SetPedMoveAnimsBlendOut(ped: number): void;

/**
 * Min: 0.00
 * Max: 10.00
 * Can be used in combo with fast run cheat.
 * When value is set to 10.00:
 * Sprinting without fast run cheat: 66 m/s
 * Sprinting with fast run cheat: 77 m/s
 * Does not need to be looped!
 * Note: According to IDA for the Xbox360 xex, when they check bgt they seem to have the min to 0.0f, but the max set to 1.15f not 10.0f.
 */
declare function SetPedMoveRateOverride(ped: number, value: number): void;

/**
 * p2 is usually 1.0f
 * EDIT 12/24/16:
 * p2 does absolutely nothing no matter what the value is.
 * List of movement clipsets:
 * Thanks to elsewhat for list.
 * "ANIM_GROUP_MOVE_BALLISTIC"
 * "ANIM_GROUP_MOVE_LEMAR_ALLEY"
 * "clipset@move@trash_fast_turn"
 * "FEMALE_FAST_RUNNER"
 * "missfbi4prepp1_garbageman"
 * "move_characters@franklin@fire"
 * "move_characters@Jimmy@slow@"
 * "move_characters@michael@fire"
 * "move_f@flee@a"
 * "move_f@scared"
 * "move_f@sexy@a"
 * "move_heist_lester"
 * "move_injured_generic"
 * "move_lester_CaneUp"
 * "move_m@bag"
 * "MOVE_M@BAIL_BOND_NOT_TAZERED"
 * "MOVE_M@BAIL_BOND_TAZERED"
 * "move_m@brave"
 * "move_m@casual@d"
 * "move_m@drunk@moderatedrunk"
 * "MOVE_M@DRUNK@MODERATEDRUNK"
 * "MOVE_M@DRUNK@MODERATEDRUNK_HEAD_UP"
 * "MOVE_M@DRUNK@SLIGHTLYDRUNK"
 * "MOVE_M@DRUNK@VERYDRUNK"
 * "move_m@fire"
 * "move_m@gangster@var_e"
 * "move_m@gangster@var_f"
 * "move_m@gangster@var_i"
 * "move_m@JOG@"
 * "MOVE_M@PRISON_GAURD"
 * "MOVE_P_M_ONE"
 * "MOVE_P_M_ONE_BRIEFCASE"
 * "move_p_m_zero_janitor"
 * "move_p_m_zero_slow"
 * "move_ped_bucket"
 * "move_ped_crouched"
 * "move_ped_mop"
 * "MOVE_M@FEMME@"
 * "MOVE_F@FEMME@"
 * "MOVE_M@GANGSTER@NG"
 * "MOVE_F@GANGSTER@NG"
 * "MOVE_M@POSH@"
 * "MOVE_F@POSH@"
 * "MOVE_M@TOUGH_GUY@"
 * "MOVE_F@TOUGH_GUY@"
 * ~ NotCrunchyTaco
 */
declare function SetPedMovementClipset(ped: number, clipSet: string, p2: number): void;

/**
 * Stops speech.
 */
declare function SetPedMute(ped: number): void;
/**
 * Stops speech.
 */
declare function N_0x7a73d05a607734c7(ped: number): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 * *untested but char *name could also be a hash for a localized string
 */
declare function SetPedNameDebug(ped: number, name: string): void;

declare function SetPedNeverLeavesGroup(ped: number, toggle: boolean): void;

/**
 * The distance between these points, is the diagonal of a box (remember it's 3D).
 */
declare function SetPedNonCreationArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

declare function SetPedParachuteTintIndex(ped: number, tintIndex: number): void;

declare function SetPedPathAvoidFire(ped: number, avoidFire: boolean): void;

declare function SetPedPathCanDropFromHeight(ped: number, Toggle: boolean): void;

declare function SetPedPathCanUseClimbovers(ped: number, Toggle: boolean): number;

declare function SetPedPathCanUseLadders(ped: number, Toggle: boolean): number;

declare function SetPedPathPreferToAvoidWater(ped: number, avoidWater: boolean): void;

declare function SetPedPathsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function SetPedPathsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown: boolean): void;

/**
 * Hash collision!!! Actual name: SET_PED_PATH_MAY_ENTER_WATER
 */
declare function SetPedPathsWidthPlant(ped: number, mayEnterWater: boolean): void;

/**
 * i could be time. Only example in the decompiled scripts uses it as -1.
 */
declare function SetPedPinnedDown(ped: number, pinned: boolean, i: number): number;

/**
 * Points to the same function as for example GET_RANDOM_VEHICLE_MODEL_IN_MEMORY and it does absolutely nothing.
 */
declare function SetPedPlaysHeadOnHornAnimWhenDiesInVehicle(ped: number, toggle: boolean): void;

declare function SetPedPopulationBudget(p0: number): void;

declare function SetPedPreferredCoverSet(ped: number, itemSet: number): void;
declare function N_0x8421eb4da7e391b9(ped: number, itemSet: number): void;

/**
 * This is only called once in the scripts.
 * sub_1CD9(&amp;l_49, 0, getElem(3, &amp;l_34, 4), "MICHAEL", 0, 1);
 * sub_1CA8("WORLD_HUMAN_SMOKING", 2);
 * PED::SET_PED_PRIMARY_LOOKAT(getElem(3, &amp;l_34, 4), PLAYER::PLAYER_PED_ID());
 */
declare function SetPedPrimaryLookat(ped: number, lookAt: number): void;

/**
 * ComponentId can be set to various things based on what category you're wanting to set
 * enum PedPropsData
 * {
 * PED_PROP_HATS = 0,
 * PED_PROP_GLASSES = 1,
 * PED_PROP_EARS = 2,
 * PED_PROP_WATCHES = 3,
 * };
 * Usage: SET_PED_PROP_INDEX(playerPed, PED_PROP_HATS, GET_NUMBER_OF_PED_PROP_DRAWABLE_VARIATIONS(playerPed, PED_PROP_HATS), GET_NUMBER_OF_PED_PROP_TEXTURE_VARIATIONS(playerPed, PED_PROP_HATS, 0), TRUE);
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function SetPedPropIndex(ped: number, componentId: number, drawableId: number, TextureId: number, attach: boolean): void;

/**
 * Works for both player and peds, but some flags don't seem to work for the player (1, for example)
 * 1 - Blocks ragdolling when shot.
 * 2 - Blocks ragdolling when hit by a vehicle. The ped still might play a falling animation.
 * 4 - Blocks ragdolling when set on fire.
 * -----------------------------------------------------------------------
 * There seem to be 26 flags
 */
declare function SetPedRagdollBlockingFlags(ped: number, flags: number): void;
/**
 * Works for both player and peds, but some flags don't seem to work for the player (1, for example)
 * 1 - Blocks ragdolling when shot.
 * 2 - Blocks ragdolling when hit by a vehicle. The ped still might play a falling animation.
 * 4 - Blocks ragdolling when set on fire.
 * -----------------------------------------------------------------------
 * There seem to be 26 flags
 */
declare function N_0x26695ec767728d84(ped: number, flags: number): void;

declare function SetPedRagdollForceFall(ped: number): number;

/**
 * Causes Ped to ragdoll on collision with any object (e.g Running into trashcan). If applied to player you will sometimes trip on the sidewalk.
 */
declare function SetPedRagdollOnCollision(ped: number, toggle: boolean): void;

/**
 * p1 is always false in R* scripts.
 * Quick disassembly seems to indicate that p1 is unused.
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function SetPedRandomComponentVariation(ped: number, p1: boolean): void;

/**
 * List of component/props ID
 * gtaxscripting.blogspot.com/2016/04/gta-v-peds-component-and-props.html
 */
declare function SetPedRandomProps(ped: number): void;

declare function SetPedRelationshipGroupDefaultHash(ped: number, hash: string | number): void;

declare function SetPedRelationshipGroupHash(ped: number, hash: string | number): void;

declare function SetPedReserveParachuteTintIndex(ped: number, p1: number): void;

/**
 * PED::SET_PED_RESET_FLAG(PLAYER::PLAYER_PED_ID(), 240, 1);
 */
declare function SetPedResetFlag(ped: number, flagId: number, doReset: boolean): void;

/**
 * Assigns some ambient voice to the ped.
 */
declare function SetPedScream(ped: number): void;
/**
 * Assigns some ambient voice to the ped.
 */
declare function N_0x40cf0d12d142a9e8(ped: number): void;

declare function SetPedSeeingRange(ped: number, value: number): void;

/**
 * shootRate 0-1000
 */
declare function SetPedShootRate(ped: number, shootRate: number): void;

declare function SetPedShootsAtCoord(ped: number, x: number, y: number, z: number, toggle: boolean): void;

declare function SetPedSphereDefensiveArea(ped: number, x: number, y: number, z: number, radius: number, p5: boolean, p6: boolean): void;

declare function SetPedStayInVehicleWhenJacked(ped: number, toggle: boolean): void;

/**
 * p1 is usually 0 in the scripts. action is either 0 or a pointer to "DEFAULT_ACTION".
 */
declare function SetPedStealthMovement(ped: number, p1: boolean, action: string): void;

declare function SetPedSteersAroundObjects(ped: number, toggle: boolean): void;

declare function SetPedSteersAroundPeds(ped: number, toggle: boolean): void;

declare function SetPedSteersAroundVehicles(ped: number, toggle: boolean): void;

declare function SetPedStrafeClipset(ped: number, clipSet: string): void;

/**
 * ped cannot be headshot if this is set to false
 */
declare function SetPedSuffersCriticalHits(ped: number, toggle: boolean): void;

/**
 * Sweat is set to 100.0 or 0.0 in the decompiled scripts.
 */
declare function SetPedSweat(ped: number, sweat: number): void;

/**
 * Speech related.
 */
declare function SetPedTalk(ped: number): void;
/**
 * Speech related.
 */
declare function N_0x4ada3f19be4a6047(ped: number): void;

/**
 * Only 1 and 2 appear in the scripts. combatbehaviour.meta seems to only have TLR_SearchForTarget for all peds, but we don't know if that's 1 or 2.
 */
declare function SetPedTargetLossResponse(ped: number, responseType: number): void;

/**
 * destroyType is 1 for opens on damage, 2 for breaks on damage.
 */
declare function SetPedTargettableVehicleDestroy(vehicle: number, vehicleComponent: number, destroyType: number): void;

declare function SetPedToInformRespectedFriends(ped: number, radius: number, maxFriends: number): void;

declare function SetPedToLoadCover(ped: number, toggle: boolean): void;

/**
 * time1- Time Ped is in ragdoll mode(ms)
 * time2- Unknown time, in milliseconds
 * ragdollType-
 * 0 : Normal ragdoll
 * 1 : Falls with stiff legs/body
 * 2 : Narrow leg stumble(may not fall)
 * 3 : Wide leg stumble(may not fall)
 * p4, p5, p6- No idea. In R*'s scripts they are usually either "true, true, false" or "false, false, false".
 * EDIT 3/11/16: unclear what 'mircoseconds' mean-- a microsecond is 1000x a ms, so time2 must be 1000x time1?  more testing needed.  -sob
 * Edit Mar 21, 2017: removed part about time2 being the microseconds version of time1. this just isn't correct. time2 is in milliseconds, and time1 and time2 don't seem to be connected in any way.
 */
declare function SetPedToRagdoll(ped: number, time1: number, time2: number, ragdollType: number, p4: boolean, p5: boolean, p6: boolean): number;

/**
 * Return variable is never used in R*'s scripts.
 * Not sure what p2 does. It seems like it would be a time judging by it's usage in R*'s scripts, but didn't seem to affect anything in my testings.
 * x, y, and z are coordinates, most likely to where the ped will fall.
 * p7 is probably the force of the fall, but untested, so I left the variable name the same.
 * p8 to p13 are always 0f in R*'s scripts.
 * (Simplified) Example of the usage of the function from R*'s scripts:
 * ped::set_ped_to_ragdoll_with_fall(ped, 1500, 2000, 1, -entity::get_entity_forward_vector(ped), 1f, 0f, 0f, 0f, 0f, 0f, 0f);
 */
declare function SetPedToRagdollWithFall(ped: number, time: number, p2: number, ragdollType: number, x: number, y: number, z: number, p7: number, p8: number, p9: number, p10: number, p11: number, p12: number, p13: number): number;

/**
 * p2 is usually -1 in the scripts. action is either 0 or "DEFAULT_ACTION".
 */
declare function SetPedUsingActionMode(ped: number, p1: boolean, p2: number, action: string): void;

declare function SetPedVisualFieldCenterAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldMaxAngle(ped: number, value: number): void;

/**
 * This native refers to the field of vision the ped has above them, starting at 0 degrees. 90f would let the ped see enemies directly above of them.
 */
declare function SetPedVisualFieldMaxElevationAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldMinAngle(ped: number, value: number): void;

/**
 * This native refers to the field of vision the ped has below them, starting at 0 degrees. The angle value should be negative.
 */
declare function SetPedVisualFieldMinElevationAngle(ped: number, angle: number): void;

declare function SetPedVisualFieldPeripheralRange(ped: number, range: number): void;

declare function SetPedWaypointRouteOffset(p0: number, p1: number, p2: number, p3: number): number;

declare function SetPedWeaponMovementClipset(ped: number, clipSet: string): void;

/**
 * tintIndex can be the following:
 * 1
 * 2
 * 3
 * 4
 * 5
 * 6
 * 7
 */
declare function SetPedWeaponTintIndex(ped: number, weaponHash: string | number, tintIndex: number): void;

/**
 * combined with PED::SET_PED_WETNESS_HEIGHT(), this native makes the ped drenched in water up to the height specified in the other function
 */
declare function SetPedWetnessEnabledThisFrame(ped: number): void;

/**
 * It adds the wetness level to the player clothing/outfit. As if player just got out from water surface.
 */
declare function SetPedWetnessHeight(ped: number, height: number): void;

/**
 * if the bool "Toggle" is "true" so the phone is lean.
 * if the bool "Toggle" is "false" so the phone is not lean.
 */
declare function SetPhoneLean(Toggle: boolean): void;

declare function SetPickupRegenerationTime(p0: number, p1: number): void;

declare function SetPlaneMinHeightAboveGround(plane: number, height: number): void;
declare function N_0xb893215d8d4c015b(plane: number, height: number): void;

declare function SetPlaybackSpeed(vehicle: number, speed: number): void;

declare function SetPlaybackToUseAi(vehicle: number, flag: number): void;

declare function SetPlaybackToUseAiTryToRevertBackLater(p0: number, p1: number, p2: number, p3: boolean): void;

/**
 * Hash collision! Disables speech.
 */
declare function SetPlayerAngry(playerPed: number, disabled: boolean): void;

/**
 * Sets the position of the arrow icon representing the player on both the minimap and world map.
 * Too bad this wouldn't work over the network (obviously not). Could spoof where we would be.
 */
declare function SetPlayerBlipPositionThisFrame(x: number, y: number): void;

/**
 * Sets whether this player can be hassled by gangs.
 */
declare function SetPlayerCanBeHassledByGangs(player: number, toggle: boolean): void;

/**
 * Set whether this player should be able to do drive-bys.
 * "A drive-by is when a ped is aiming/shooting from vehicle. This includes middle finger taunts. By setting this value to false I confirm the player is unable to do all that. Tested on tick."
 */
declare function SetPlayerCanDoDriveBy(player: number, toggle: boolean): void;

declare function SetPlayerCanLeaveParachuteSmokeTrail(player: number, enabled: boolean): void;

/**
 * Sets whether this player can take cover.
 */
declare function SetPlayerCanUseCover(player: number, toggle: boolean): number;

/**
 * Displays cash change notifications on HUD.
 */
declare function SetPlayerCashChange(cash: number, bank: number): void;
/**
 * Displays cash change notifications on HUD.
 */
declare function SetSingleplayerHudCash(cash: number, bank: number): void;

/**
 * 6 matches across 4 scripts. 5 occurrences were 240. The other was 255.
 */
declare function SetPlayerClothLockCounter(value: number): void;

/**
 * Every occurrence was either 0 or 2.
 */
declare function SetPlayerClothPackageIndex(index: number): void;

/**
 * Every occurrence of p1 I found was true.1.0.335.2, 1.0.350.1/2, 1.0.372.2, 1.0.393.2, 1.0.393.4, 1.0.463.1;
 */
declare function SetPlayerClothPinFrames(player: number, toggle: boolean): void;

/**
 * Flags used in the scripts: 0,4,16,24,32,56,60,64,128,134,256,260,384,512,640,768,896,900,952,1024,1280,2048,2560
 * Note to people who needs this with camera mods, etc.:
 * Flags(0, 4, 16, 24, 32, 56, 60, 64, 128, 134, 512, 640, 1024, 2048, 2560)
 * - Disables camera rotation as well.
 * Flags(256, 260, 384, 768, 896, 900, 952, 1280)
 */
declare function SetPlayerControl(player: number, toggle: boolean, possiblyFlags: number): void;

declare function SetPlayerForceSkipAimIntro(player: number, toggle: boolean): void;

declare function SetPlayerForcedAim(player: number, toggle: boolean): void;

declare function SetPlayerForcedZoom(player: number, toggle: boolean): void;

declare function SetPlayerHasReserveParachute(player: number): void;

declare function SetPlayerHealthRechargeMultiplier(player: number, regenRate: number): void;

/**
 * Hash collision
 */
declare function SetPlayerInvertedUp(): number;

/**
 * Simply sets you as invincible (Health will not deplete).
 * Use 0x733A643B5B0C53C1 instead if you want Ragdoll enabled, which is equal to:
 * *(DWORD *)(playerPedAddress + 0x188) |= (1 &lt;&lt; 9);
 */
declare function SetPlayerInvincible(player: number, toggle: boolean): void;

declare function SetPlayerInvisibleLocally(player: number, toggle: boolean): void;

/**
 * Example from fm_mission_controler.ysc.c4:
 * PLAYER::SET_PLAYER_LOCKON(PLAYER::PLAYER_ID(), 1);
 * All other decompiled scripts using this seem to be using the player id as the first parameter, so I feel the need to confirm it as so.
 * No need to confirm it says PLAYER_ID() so it uses PLAYER_ID() lol.
 */
declare function SetPlayerLockon(player: number, toggle: boolean): void;

/**
 * Affects the range of auto aim target.
 */
declare function SetPlayerLockonRangeOverride(player: number, range: number): void;

/**
 * Default is 100. Use player id and not ped id. For instance: PLAYER::SET_PLAYER_MAX_ARMOUR(PLAYER::PLAYER_ID(), 100); // main_persistent.ct4
 */
declare function SetPlayerMaxArmour(player: number, value: number): void;

declare function SetPlayerMayNotEnterAnyVehicle(player: number): void;

declare function SetPlayerMayOnlyEnterThisVehicle(player: number, vehicle: number): void;

declare function SetPlayerMeleeWeaponDamageModifier(player: number, modifier: number): void;

declare function SetPlayerMeleeWeaponDefenseModifier(player: number, modifier: number): void;

/**
 * Make sure to request the model first and wait until it has loaded.
 */
declare function SetPlayerModel(player: number, model: string | number): void;

declare function SetPlayerNoiseMultiplier(player: number, multiplier: number): void;

/**
 * example:
 * PLAYER::SET_PLAYER_PARACHUTE_MODEL_OVERRIDE(PLAYER::PLAYER_ID(), 0x73268708);
 */
declare function SetPlayerParachuteModelOverride(player: number, model: string | number): void;

declare function SetPlayerParachutePackModelOverride(player: number, model: string | number): void;

/**
 * tints 0
 * 1
 * 2
 * 3
 * 4
 */
declare function SetPlayerParachutePackTintIndex(player: number, tintIndex: number): void;

declare function SetPlayerParachuteSmokeTrailColor(player: number, r: number, g: number, b: number): void;

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 */
declare function SetPlayerParachuteTintIndex(player: number, tintIndex: number): void;

/**
 * p1 was always 5.
 * p4 was always false.
 */
declare function SetPlayerParachuteVariationOverride(player: number, p1: number, p2: number, p3: number, p4: boolean): void;

/**
 * Tints:
 * None = -1,
 * Rainbow = 0,
 * Red = 1,
 * SeasideStripes = 2,
 * WidowMaker = 3,
 * Patriot = 4,
 * Blue = 5,
 * Black = 6,
 * Hornet = 7,
 * AirFocce = 8,
 * Desert = 9,
 * Shadow = 10,
 * HighAltitude = 11,
 * Airbone = 12,
 * Sunrise = 13,
 */
declare function SetPlayerReserveParachuteTintIndex(player: number, index: number): void;

/**
 * example:
 * flags: 0-6
 * PLAYER::SET_PLAYER_RESET_FLAG_PREFER_REAR_SEATS(PLAYER::PLAYER_ID(), 6);
 * wouldnt the flag be the seatIndex?
 */
declare function SetPlayerResetFlagPreferRearSeats(player: number, flags: number): void;

declare function SetPlayerSimulateAiming(player: number, toggle: boolean): void;

/**
 * Values around 1.0f to 2.0f used in game scripts.
 */
declare function SetPlayerSneakingNoiseMultiplier(player: number, multiplier: number): void;

declare function SetPlayerSprint(player: number, toggle: boolean): void;

declare function SetPlayerStealthPerceptionModifier(player: number, value: number): void;

declare function SetPlayerSwitchOutro(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;
declare function N_0xc208b673ce446b61(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

/**
 * Sets your targeting mode.
 * 0 = Traditional GTA
 * 1 = Assisted Aiming
 * 2 = Free Aim
 * Even tho gtaforums nor Alexander B supports this, if you're online in freemode already it's nice to have this since retail or otherwise you have to go to SP to change it.
 */
declare function SetPlayerTargetingMode(targetMode: number): void;

/**
 * Set player team on deathmatch and last team standing..
 */
declare function SetPlayerTeam(player: number, team: number): void;

declare function SetPlayerVehicleDamageModifier(player: number, damageAmount: number): void;

declare function SetPlayerVehicleDefenseModifier(player: number, modifier: number): void;

declare function SetPlayerVisibleLocally(player: number, toggle: boolean): void;

/**
 * # Predominant call signatures
 * PLAYER::SET_PLAYER_WANTED_CENTRE_POSITION(PLAYER::PLAYER_ID(), ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1));
 * # Parameter value ranges
 * P0: PLAYER::PLAYER_ID()
 * P1: ENTITY::GET_ENTITY_COORDS(PLAYER::PLAYER_PED_ID(), 1)
 * P2: Not set by any call
 */
declare function SetPlayerWantedCentrePosition(player: number, p2: boolean, p3: boolean): number[];

/**
 * Call SET_PLAYER_WANTED_LEVEL_NOW for immediate effect
 * wantedLevel is an integer value representing 0 to 5 stars even though the game supports the 6th wanted level but no police will appear since no definitions are present for it in the game files
 * disableNoMission-  Disables When Off Mission- appears to always be false
 */
declare function SetPlayerWantedLevel(player: number, wantedLevel: number, disableNoMission: boolean): void;

/**
 * p2 is always false in R* scripts
 */
declare function SetPlayerWantedLevelNoDrop(player: number, wantedLevel: number, p2: boolean): void;

/**
 * Forces any pending wanted level to be applied to the specified player immediately.
 * Call SET_PLAYER_WANTED_LEVEL with the desired wanted level, followed by SET_PLAYER_WANTED_LEVEL_NOW.
 * Second parameter is unknown (always false).
 */
declare function SetPlayerWantedLevelNow(player: number, p1: boolean): void;

/**
 * This modifies the damage value of your weapon. Whether it is a multiplier or base damage is unknown.
 * Based on tests, it is unlikely to be a multiplier.
 */
declare function SetPlayerWeaponDamageModifier(player: number, damageAmount: number): void;

declare function SetPlayerWeaponDefenseModifier(player: number, modifier: number): void;

declare function SetPlayerpadShakesWhenControllerDisabled(toggle: boolean): void;

declare function SetPlayersLastVehicle(vehicle: number): number;

declare function SetPoliceIgnorePlayer(player: number, toggle: boolean): void;

declare function SetPoliceRadarBlips(toggle: boolean): void;

declare function SetRadarAsExteriorThisFrame(): void;

/**
 * List of interior hashes: pastebin.com/1FUyXNqY
 * Not for every interior zoom &gt; 0 available.
 */
declare function SetRadarAsInteriorThisFrame(interior: string | number, x: number, y: number, z: number, zoom: number): void;

/**
 * Toggles the big minimap state like in GTA:Online.
 */
declare function SetRadarBigmapEnabled(toggleBigMap: boolean, showFullMap: boolean): void;

/**
 * zoomLevel ranges from 0 to 200
 */
declare function SetRadarZoom(zoomLevel: number): void;

declare function SetRadarZoomLevelThisFrame(zoomLevel: number): void;

declare function SetRadioAutoUnfreeze(toggle: boolean): void;

/**
 * Sets radio station by index.
 */
declare function SetRadioToStationIndex(radioStation: number): void;

/**
 * For a full list, see here: pastebin.com/Kj9t38KF
 */
declare function SetRadioToStationName(stationName: string): void;

/**
 * Only found this one in the decompiled scripts:
 * AUDIO::SET_RADIO_TRACK("RADIO_03_HIPHOP_NEW", "ARM1_RADIO_STARTS");
 */
declare function SetRadioTrack(radioStation: string, radioTrack: string): void;

/**
 * puddles, rain fx on ground/buildings/puddles, rain sound
 */
declare function SetRainFxIntensity(intensity: number): void;

declare function SetRandomBoats(toggle: boolean): number;

/**
 * If the parameter is true, sets the random event flag to true, if the parameter is false, the function does nothing at all.
 * Does nothing if the mission flag is set.
 */
declare function SetRandomEventFlag(p0: boolean): void;

declare function SetRandomSeed(time: number): void;

declare function SetRandomTrains(toggle: boolean): void;

declare function SetRandomVehicleDensityMultiplierThisFrame(multiplier: number): void;

declare function SetRandomWeatherType(): void;

declare function SetReducePedModelBudget(toggle: boolean): void;

declare function SetReduceVehicleModelBudget(toggle: boolean): void;

/**
 * Sets the relationship between two groups. This should be called twice (once for each group).
 * Relationship types:
 * 0 = Companion
 * 1 = Respect
 * 2 = Like
 * 3 = Neutral
 * 4 = Dislike
 * 5 = Hate
 * 255 = Pedestrians
 * Example:
 * PED::SET_RELATIONSHIP_BETWEEN_GROUPS(2, l_1017, 0xA49E591C);
 * PED::SET_RELATIONSHIP_BETWEEN_GROUPS(2, 0xA49E591C, l_1017);
 */
declare function SetRelationshipBetweenGroups(relationship: number, group1: string | number, group2: string | number): void;

/**
 * makes the train all jumbled up and derailed as it moves on the tracks (though that wont stop it from its normal operations)
 */
declare function SetRenderTrainAsDerailed(train: number, toggle: boolean): void;

declare function SetResourceKvp(key: string, value: string): void;

declare function SetResourceKvpFloat(key: string, value: number): void;

declare function SetResourceKvpInt(key: string, value: number): void;

/**
 * missing a last parameter int p6
 */
declare function SetRoadsBackToOriginal(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * bool p7 - always 1
 */
declare function SetRoadsBackToOriginalInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p6: number): void;

/**
 *  -- [[ Corrected conflicting parameter names ]] 
 */
declare function SetRoadsInAngledArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, angle: number, unknown1: boolean, unknown2: boolean, unknown3: boolean): void;

/**
 *  -- [[ Corrected conflicting parameter names ]] 
 */
declare function SetRoadsInArea(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, unknown1: boolean, unknown2: boolean): void;

/**
 * Multiplier goes up to 1.49 any value above will be completely overruled by the game and the multiplier will not take effect, this can be edited in memory however.
 * Just call it one time, it is not required to be called once every tick.
 * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and SWIM above. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
 */
declare function SetRunSprintMultiplierForPlayer(player: number, multiplier: number): void;

declare function SetSaveHouse(p0: number, p1: boolean, p2: boolean): void;

/**
 * The bool is not a toggle!!!
 */
declare function SetSaveMenuActive(unk: boolean): void;

declare function SetScaleformMovieAsNoLongerNeeded(scaleformHandle: number): void;

declare function SetScaleformMovieToUseSystemTime(scaleform: number, toggle: boolean): void;

/**
 * Occurrences in the b617d scripts: pastebin.com/Tvg2PRHU
 */
declare function SetScenarioGroupEnabled(scenarioGroup: string, p1: boolean): void;

declare function SetScenarioPedDensityMultiplierThisFrame(p0: number, p1: number): void;

declare function SetScenarioPedsSpawnInSphereArea(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * Sets a value indicating whether scenario peds should be returned by the next call to a command that returns peds. Eg. GET_CLOSEST_PED.
 */
declare function SetScenarioPedsToBeReturnedByNextCommand(value: boolean): void;

/**
 * seems to enable/disable specific scenario-types from happening in the game world.
 * Here are some scenario types from the scripts:
 * "WORLD_MOUNTAIN_LION_REST"
 * "WORLD_MOUNTAIN_LION_WANDER"
 * "DRIVE"
 * "WORLD_VEHICLE_POLICE_BIKE"
 * "WORLD_VEHICLE_POLICE_CAR"
 * "WORLD_VEHICLE_POLICE_NEXT_TO_CAR"
 * "WORLD_VEHICLE_DRIVE_SOLO"
 * "WORLD_VEHICLE_BIKER"
 * "WORLD_VEHICLE_DRIVE_PASSENGERS"
 * "WORLD_VEHICLE_SALTON_DIRT_BIKE"
 * "WORLD_VEHICLE_BICYCLE_MOUNTAIN"
 * "PROP_HUMAN_SEAT_CHAIR"
 * "WORLD_VEHICLE_ATTRACTOR"
 * "WORLD_HUMAN_LEANING"
 * "WORLD_HUMAN_HANG_OUT_STREET"
 * "WORLD_HUMAN_DRINKING"
 * "WORLD_HUMAN_SMOKING"
 * "WORLD_HUMAN_GUARD_STAND"
 * "WORLD_HUMAN_CLIPBOARD"
 * "WORLD_HUMAN_HIKER"
 * "WORLD_VEHICLE_EMPTY"
 * "WORLD_VEHICLE_BIKE_OFF_ROAD_RACE"
 * "WORLD_HUMAN_PAPARAZZI"
 * "WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN"
 * "WORLD_VEHICLE_PARK_PARALLEL"
 * "WORLD_VEHICLE_CONSTRUCTION_SOLO"
 * "WORLD_VEHICLE_CONSTRUCTION_PASSENGERS"
 * "WORLD_VEHICLE_TRUCK_LOGS"
 * -alphazolam
 * scenarioType could be the same as scenarioName, used in for example AI::TASK_START_SCENARIO_AT_POSITION.
 */
declare function SetScenarioTypeEnabled(scenarioType: string, toggle: boolean): void;

/**
 * For a full list, see here: pastebin.com/yLNWicUi
 */
declare function SetScriptAsNoLongerNeeded(scriptName: string): void;

/**
 * Only called once in the decompiled scripts. Presumably activates the specified generator.
 */
declare function SetScriptVehicleGenerator(vehicleGenerator: number, enabled: boolean): void;

declare function SetScriptWithNameHashAsNoLongerNeeded(scriptHash: string | number): void;
declare function SetStreamedScriptAsNoLongerNeeded(scriptHash: string | number): void;

declare function SetScriptedAnimSeatOffset(ped: number, p1: number): void;

declare function SetScriptedConversionCoordThisFrame(x: number, y: number, z: number): void;

/**
 * Toggles Heatvision on/off.
 */
declare function SetSeethrough(toggle: boolean): void;

declare function SetSequenceToRepeat(taskSequence: number, repeat: boolean): void;

declare function SetSirenWithNoDriver(vehicle: number, toggle: boolean): void;

declare function SetSnakeoilForEntry(name: string, path: string, data: string): void;

/**
 * Judging from the effect, this is some sort of vehicle density multiplier.
 */
declare function SetSomeVehicleDensityMultiplierThisFrame(value: number): void;
/**
 * Judging from the effect, this is some sort of vehicle density multiplier.
 */
declare function N_0x90b6da738a9a25da(value: number): void;

declare function SetSpecialAbilityMultiplier(multiplier: number): void;

declare function SetSrlTime(p0: number): void;

/**
 * Hardcoded to not work in multiplayer.
 * Used to lock/unlock doors to interior areas of the game.
 * (Possible) Door Types:
 * pastebin.com/9S2m3qA4
 * Heading is either 1, 0 or -1 in the scripts. Means default closed(0) or opened either into(1) or out(-1) of the interior.
 * Locked means that the heading is locked.
 * p6 is always 0.
 * 225 door types, model names and coords found in stripclub.c4:
 * pastebin.com/gywnbzsH
 * get door info: pastebin.com/i14rbekD
 */
declare function SetStateOfClosestDoorOfType(_type: string | number, x: number, y: number, z: number, locked: boolean, heading: number, p6: boolean): void;

/**
 * Example:
 * AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_01_STAGE", false);	AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_02_MAIN_ROOM", false);	AUDIO::SET_STATIC_EMITTER_ENABLED((Any*)"LOS_SANTOS_VANILLA_UNICORN_03_BACK_ROOM", false);
 * This turns off surrounding sounds not connected directly to peds.
 */
declare function SetStaticEmitterEnabled(emitterName: string, toggle: boolean): void;

/**
 * hash collision...
 */
declare function SetStoreEnabled(toggle: boolean): void;

declare function SetStreamedTextureDictAsNoLongerNeeded(textureDict: string): void;

declare function SetStreaming(toggle: boolean): void;

declare function SetSuperJumpThisFrame(player: number): number;

/**
 * Swim speed multiplier.
 * Multiplier goes up to 1.49
 * Just call it one time, it is not required to be called once every tick. - Note copied from below native.
 * Note: At least the IDA method if you change the max float multiplier from 1.5 it will change it for both this and RUN_SPRINT below. I say 1.5 as the function blrs if what you input is greater than or equal to 1.5 hence why it's 1.49 max default.
 */
declare function SetSwimMultiplierForPlayer(player: number, multiplier: number): void;

/**
 * Sets the position of the audio event to the entity's position for one frame(?)
 * if (l_8C3 == 0) {
 * sub_27fd1(0, -1, 1);
 * if (PED::IS_SYNCHRONIZED_SCENE_RUNNING(l_87D)) {
 * AUDIO::STOP_SYNCHRONIZED_AUDIO_EVENT(l_87D);
 * }
 * if (sub_7dd(l_A00)) {
 * AUDIO::_950A154B8DAB6185("PAP2_IG1_POPPYSEX", l_A00);
 * }
 * sub_91c("TK************ SETTING SYNCH SCENE AUDIO POSITION THIS FRAME ************TK");
 * l_8C3 = 1;
 * }
 * --
 * Found in the b617d scripts, duplicates removed:
 * AUDIO::_950A154B8DAB6185("CAR_5_IG_6", l_7FE[1 -- [[1]] ]);
 * AUDIO::_950A154B8DAB6185("EX03_TRAIN_BIKE_LAND",   PLAYER::PLAYER_PED_ID());
 * AUDIO::_950A154B8DAB6185("FBI_2_MCS_1_LeadIn", l_40[2 -- [[1]] ]);
 * AUDIO::_950A154B8DAB6185("FIN_C2_MCS_1", l_24C[0 -- [[1]] ]);
 * AUDIO::_950A154B8DAB6185("MNT_DNC", l_5F);
 * AUDIO::_950A154B8DAB6185("PAP2_IG1_POPPYSEX", l_A00);
 */
declare function SetSynchronizedAudioEventPositionThisFrame(p0: string, p1: number): void;
/**
 * Sets the position of the audio event to the entity's position for one frame(?)
 * if (l_8C3 == 0) {
 * sub_27fd1(0, -1, 1);
 * if (PED::IS_SYNCHRONIZED_SCENE_RUNNING(l_87D)) {
 * AUDIO::STOP_SYNCHRONIZED_AUDIO_EVENT(l_87D);
 * }
 * if (sub_7dd(l_A00)) {
 * AUDIO::_950A154B8DAB6185("PAP2_IG1_POPPYSEX", l_A00);
 * }
 * sub_91c("TK************ SETTING SYNCH SCENE AUDIO POSITION THIS FRAME ************TK");
 * l_8C3 = 1;
 * }
 * --
 * Found in the b617d scripts, duplicates removed:
 * AUDIO::_950A154B8DAB6185("CAR_5_IG_6", l_7FE[1 -- [[1]] ]);
 * AUDIO::_950A154B8DAB6185("EX03_TRAIN_BIKE_LAND",   PLAYER::PLAYER_PED_ID());
 * AUDIO::_950A154B8DAB6185("FBI_2_MCS_1_LeadIn", l_40[2 -- [[1]] ]);
 * AUDIO::_950A154B8DAB6185("FIN_C2_MCS_1", l_24C[0 -- [[1]] ]);
 * AUDIO::_950A154B8DAB6185("MNT_DNC", l_5F);
 * AUDIO::_950A154B8DAB6185("PAP2_IG1_POPPYSEX", l_A00);
 */
declare function N_0x950a154b8dab6185(p0: string, p1: number): void;

declare function SetSynchronizedSceneLooped(sceneID: number, toggle: boolean): void;

declare function SetSynchronizedSceneOcclusionPortal(sceneID: number, p1: boolean): void;
declare function N_0x394b9cd12435c981(sceneID: number, p1: boolean): void;

declare function SetSynchronizedSceneOrigin(sceneID: number, x: number, y: number, z: number, roll: number, pitch: number, yaw: number, p7: boolean): void;

declare function SetSynchronizedScenePhase(sceneID: number, phase: number): void;

declare function SetSynchronizedSceneRate(sceneID: number, rate: number): void;

declare function SetTaskVehicleChaseBehaviorFlag(ped: number, flag: number, _set: boolean): void;

declare function SetTaskVehicleChaseIdealPursuitDistance(ped: number, distance: number): void;

/**
 * This is not tested - it's just an assumption.
 * Doesn't seem to work.  I'll try with an int instead. --JT
 * Read the scripts, im dumpass.
 * if (!VEHICLE::IS_TAXI_LIGHT_ON(l_115)) {
 * VEHICLE::SET_TAXI_LIGHTS(l_115, 1);
 * }
 */
declare function SetTaxiLights(vehicle: number, state: boolean): void;

declare function SetTeamPickupObject(object: number, p1: number, p2: boolean): void;

declare function SetTextCentre(align: boolean): void;

declare function SetTextChatEnabled(enabled: boolean): number;

/**
 * Sets an unknown boolean value in the text chat.
 */
declare function SetTextChatUnk(p0: boolean): void;

/**
 * colors you input not same as you think?
 * A: for some reason its R B G A
 */
declare function SetTextColour(red: number, green: number, blue: number, alpha: number): void;

declare function SetTextDropShadow(): void;

/**
 * distance - shadow distance in pixels, both horizontal and vertical
 * r, g, b, a
 */
declare function SetTextDropshadow(distance: number, r: number, g: number, b: number, a: number): void;

declare function SetTextEdge(p0: number, r: number, g: number, b: number, a: number): void;

/**
 * fonts that mess up your text where made for number values/misc stuff
 */
declare function SetTextFont(fontType: number): void;

/**
 * Types -
 * 0: Center-Justify
 * 1: Left-Justify
 * 2: Right-Justify
 * Right-Justify requires SET_TEXT_WRAP, otherwise it will draw to the far right of the screen
 */
declare function SetTextJustification(justifyType: number): void;
/**
 * Types -
 * 0: Center-Justify
 * 1: Left-Justify
 * 2: Right-Justify
 * Right-Justify requires SET_TEXT_WRAP, otherwise it will draw to the far right of the screen
 */
declare function N_0x4e096588b13ffeca(justifyType: number): void;

/**
 * from script am_mp_yacht.c int?
 * ui::set_text_leading(2);
 */
declare function SetTextLeading(p0: boolean): void;

declare function SetTextOutline(): void;

declare function SetTextProportional(p0: boolean): void;

declare function SetTextRenderId(renderId: number): void;

declare function SetTextRightJustify(toggle: boolean): void;

/**
 * Size range : 0F to 1.0F
 * p0 is unknown and doesn't seem to have an effect, yet in the game scripts it changes to 1.0F sometimes.
 */
declare function SetTextScale(p0: number, size: number): void;

/**
 * It sets the text in a specified box and wraps the text if it exceeds the boundries. Both values are for X axis. Useful when positioning text set to center or aligned to the right.
 * start - left boundry on screen position (0.0 - 1.0)
 * end - right boundry on screen position (0.0 - 1.0)
 */
declare function SetTextWrap(start: number, end: number): void;

declare function SetThisScriptCanBePaused(toggle: boolean): void;

declare function SetThisScriptCanRemoveBlipsCreatedByAnyScript(toggle: boolean): void;

/**
 * Hash collision. Please change back to _0x_
 */
declare function SetTimeExclusiveDisplayTexture(p0: number, p1: boolean): void;

/**
 * hash collision?
 */
declare function SetTimeIdleDrop(p0: boolean, p1: boolean): void;
/**
 * hash collision?
 */
declare function N_0x9dfe13ecdc1ec196(p0: boolean, p1: boolean): void;

/**
 * Maximum value is 1.
 * At a value of 0 the game will still run at a minimum time scale.
 * Slow Motion 1: 0.6
 * Slow Motion 2: 0.4
 * Slow Motion 3: 0.2
 */
declare function SetTimeScale(time: number): void;

/**
 * Loads the specified timecycle modifier. Modifiers are defined separately in another file (e.g. "timecycle_mods_1.xml")
 * Parameters:
 * modifierName - The modifier to load (e.g. "V_FIB_IT3", "scanline_cam", etc.)
 * For a full list, see here: pastebin.com/kVPwMemE
 */
declare function SetTimecycleModifier(modifierName: string): void;

declare function SetTimecycleModifierStrength(strength: number): void;

/**
 * Sets how much the crane on the tow truck is raised, where 0.0 is fully lowered and 1.0 is fully raised.
 */
declare function SetTowTruckCraneHeight(towTruck: number, height: number): void;
/**
 * Sets how much the crane on the tow truck is raised, where 0.0 is fully lowered and 1.0 is fully raised.
 */
declare function SetTowTruckCraneRaised(towTruck: number, height: number): void;

declare function SetTrackedPointInfo(point: number, x: number, y: number, z: number, radius: number): number;

declare function SetTrainCruiseSpeed(train: number, speed: number): number;

declare function SetTrainSpeed(train: number, speed: number): number;

/**
 * For a full list, see here: pastebin.com/kVPwMemE
 */
declare function SetTransitionTimecycleModifier(modifierName: string, transition: number): void;

/**
 * Might be more appropriate in AUDIO?
 * Rockstar made it like this.
 * Probably changes tvs from being a 3d audio to being "global" audio
 */
declare function SetTvAudioFrontend(toggle: boolean): void;

declare function SetTvChannel(channel: number): void;

declare function SetTvVolume(volume: number): void;

/**
 * Sets an unknown flag used by CScene in determining which entities from CMapData scene nodes to draw, similar to 9BAE5AD2508DF078.
 * Documented by NTAuthority (http://fivem.net/).
 */
declare function SetUnkMapFlag(flag: number): void;

declare function SetUseHiDof(): void;

declare function SetUserRadioControlEnabled(toggle: boolean): void;

/**
 * Hash collision! Please change back to _0xEF4CED81CEBEDC6D
 */
declare function SetUseridsUihidden(p0: number, p1: number): number;

declare function SetVariableOnSound(soundId: number, p2: number): number;

/**
 * From the scripts, p0:
 * "ArmWrestlingIntensity",
 * "INOUT",
 * "Monkey_Stream",
 * "ZoomLevel"
 */
declare function SetVariableOnStream(p0: string, p1: number): void;

/**
 * For a full list, see here: pastebin.com/Kj9t38KF
 */
declare function SetVehRadioStation(vehicle: number, radioStation: string): void;

declare function SetVehicleAlarm(vehicle: number, state: boolean): void;

declare function SetVehicleAlarmTimeLeft(vehicle: number, time: number): void;

/**
 * Makes the vehicle accept no passengers.
 */
declare function SetVehicleAllowNoPassengersLockon(veh: number, toggle: boolean): void;

/**
 * This is an alias of SET_ENTITY_AS_NO_LONGER_NEEDED.
 */
declare function SetVehicleAsNoLongerNeeded(vehicle: number): void;

/**
 * This native sets the audio of the specified vehicle to the audioName (p1).
 * Use the audioNameHash found in vehicles.meta
 * Example:
 * _SET_VEHICLE_AUDIO(veh, "ADDER");
 * The selected vehicle will now have the audio of the Adder.
 * FORCE_VEHICLE_???
 */
declare function SetVehicleAudio(vehicle: number, audioName: string): void;
/**
 * This native sets the audio of the specified vehicle to the audioName (p1).
 * Use the audioNameHash found in vehicles.meta
 * Example:
 * _SET_VEHICLE_AUDIO(veh, "ADDER");
 * The selected vehicle will now have the audio of the Adder.
 * FORCE_VEHICLE_???
 */
declare function N_0x4f0c413926060b38(vehicle: number, audioName: string): void;

/**
 * Please change to void.
 */
declare function SetVehicleAutomaticallyAttaches(vehicle: number, p1: number, p2: number): number;

/**
 * p2 often set to 1000.0 in the decompiled scripts.
 */
declare function SetVehicleBodyHealth(vehicle: number, value: number): void;

/**
 * SET_VEHICLE_BOOST_ACTIVE(vehicle, 1, 0);
 * SET_VEHICLE_BOOST_ACTIVE(vehicle, 0, 0);
 * Will give a boost-soundeffect.
 */
declare function SetVehicleBoostActive(vehicle: number, Toggle: boolean): void;

declare function SetVehicleBrakeLights(vehicle: number, toggle: boolean): void;

/**
 * On accelerating, spins the driven wheels with the others braked, so you don't go anywhere.
 */
declare function SetVehicleBurnout(vehicle: number, toggle: boolean): void;

/**
 * This has not yet been tested - it's just an assumption of what the types could be.
 */
declare function SetVehicleCanBeTargetted(vehicle: number, state: boolean): void;

declare function SetVehicleCanBeUsedByFleeingPeds(vehicle: number, toggle: boolean): void;
declare function N_0x300504b23bd3b711(vehicle: number, toggle: boolean): void;

declare function SetVehicleCanBeVisiblyDamaged(vehicle: number, state: boolean): void;

declare function SetVehicleCanBreak(vehicle: number, toggle: boolean): void;

/**
 * Previously named GET_VEHICLE_DEFORMATION_GET_TREE (hash collision)
 * from Decrypted Scripts I found
 * VEHICLE::SET_VEHICLE_CEILING_HEIGHT(l_BD9[2 -- [[2]] ], 420.0);
 */
declare function SetVehicleCeilingHeight(vehicle: number, p1: number): void;
/**
 * Previously named GET_VEHICLE_DEFORMATION_GET_TREE (hash collision)
 * from Decrypted Scripts I found
 * VEHICLE::SET_VEHICLE_CEILING_HEIGHT(l_BD9[2 -- [[2]] ], 420.0);
 */
declare function GetVehicleDeformationGetTree(vehicle: number, p1: number): void;

declare function SetVehicleClutch(vehicle: number, clutch: number): void;

/**
 * dont be a dick
 */
declare function SetVehicleColourCombination(vehicle: number, colorCombination: number): void;

/**
 * colorPrimary &amp; colorSecondary are the paint index for the vehicle.
 * For a list of valid paint indexes, view: pastebin.com/pwHci0xK
 * -------------------------------------------------------------------------
 * Use this to get the number of color indices: pastebin.com/RQEeqTSM
 * Note: minimum color index is 0, maximum color index is (numColorIndices - 1)
 */
declare function SetVehicleColours(vehicle: number, colorPrimary: number, colorSecondary: number): void;

/**
 * Money pickups are created around cars when they explodes. Only works when the vehicle model is a car. A single pickup is between 1 and 18 dollars in size. All car models seems to give the same amount of money.
 * youtu.be/3arlUxzHl5Y
 * i.imgur.com/WrNpYFs.jpg
 * From the scripts:
 * VEHICLE::_068F64F2470F9656(l_36, 0);
 * Found a "correct" name for this :P
 * _dead_vehicle_pickups_dies_when_set_exploded_destroy_it_drops_on_money
 * SET_VEHICLE_D* or SET_VEHICLE_E*
 */
declare function SetVehicleCreatesMoneyPickupsWhenExploded(vehicle: number, toggle: boolean): void;
/**
 * Money pickups are created around cars when they explodes. Only works when the vehicle model is a car. A single pickup is between 1 and 18 dollars in size. All car models seems to give the same amount of money.
 * youtu.be/3arlUxzHl5Y
 * i.imgur.com/WrNpYFs.jpg
 * From the scripts:
 * VEHICLE::_068F64F2470F9656(l_36, 0);
 * Found a "correct" name for this :P
 * _dead_vehicle_pickups_dies_when_set_exploded_destroy_it_drops_on_money
 * SET_VEHICLE_D* or SET_VEHICLE_E*
 */
declare function N_0x068f64f2470f9656(vehicle: number, toggle: boolean): void;

declare function SetVehicleCurrentRpm(vehicle: number, rpm: number): void;

/**
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 */
declare function SetVehicleCustomPrimaryColour(vehicle: number, r: number, g: number, b: number): void;

/**
 * p1, p2, p3 are RGB values for color (255,0,0 for Red, ect)
 */
declare function SetVehicleCustomSecondaryColour(vehicle: number, r: number, g: number, b: number): void;

/**
 * Apply damage to vehicle at a location. Location is relative to vehicle model (not world).
 * Radius of effect damage applied in a sphere at impact location
 */
declare function SetVehicleDamage(vehicle: number, xOffset: number, yOffset: number, zOffset: number, damage: number, radius: number, p6: boolean): void;

declare function SetVehicleDeformationFixed(vehicle: number): void;

/**
 * ??? Usage
 * ??? Use this native inside a looped function.
 * ??? Values:
 * ??? 0.0 = no vehicles on streets
 * ??? 1.0 = normal vehicles on streets
 */
declare function SetVehicleDensityMultiplierThisFrame(multiplier: number): void;

/**
 * You can't use values greater than 15.0
 * You can see why here: pastebin.com/Wbn34fGD
 * Also, R* does (float)(rand() % 15) to get a random dirt level when generating a vehicle.
 */
declare function SetVehicleDirtLevel(vehicle: number, dirtLevel: number): void;

/**
 * doorIndex:
 * 0 = Front Right Door
 * 1 = Front Left Door
 * 2 = Back Right Door
 * 3 = Back Left Door
 * 4 = Hood
 * 5 = Trunk
 * Changed last paramater from CreateDoorObject To NoDoorOnTheFloor because when on false, the door object is created,and not created when on true...the former parameter name was counter intuitive...(by Calderon)
 */
declare function SetVehicleDoorBroken(vehicle: number, doorIndex: number, deleteDoor: boolean): void;

/**
 * Keeps Vehicle Doors/Hood/Trunk from breaking off
 */
declare function SetVehicleDoorCanBreak(vehicle: number, doorIndex: number, isBreakable: boolean): void;
/**
 * Keeps Vehicle Doors/Hood/Trunk from breaking off
 */
declare function SetVehicleDoorBreakable(vehicle: number, doorIndex: number, isBreakable: boolean): void;

/**
 * doorIndex:
 * 0 = Front Left Door (driver door)
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Trunk2
 * p2:
 * mostly use 0 and 1, very rare using 3 and 5
 * p3:
 * It seems it is an angle
 * Example in VB:
 * Public Shared Sub Set_Vehicle_Door_Angle(Vehicle As Vehicle, Door As VehicleDoor, Angle As Single)
 * Native.Function.Call(Hash.SET_VEHICLE_DOOR_CONTROL, Vehicle.Handle, Door, 1, Angle)
 * End Sub
 * I'm Not MentaL
 * sfink: p2 is speed, 5 is fast, 1 is slow 3 is medium
 */
declare function SetVehicleDoorControl(vehicle: number, doorIndex: number, speed: number, angle: number): void;

declare function SetVehicleDoorLatched(vehicle: number, doorIndex: number, p2: boolean, p3: boolean, p4: boolean): void;

/**
 * doorIndex:
 * 0 = Front Left Door
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Back
 * 7 = Back2
 */
declare function SetVehicleDoorOpen(vehicle: number, doorIndex: number, loose: boolean, openInstantly: boolean): void;

/**
 * doorIndex:
 * 0 = Front Left Door
 * 1 = Front Right Door
 * 2 = Back Left Door
 * 3 = Back Right Door
 * 4 = Hood
 * 5 = Trunk
 * 6 = Trunk2
 */
declare function SetVehicleDoorShut(vehicle: number, doorIndex: number, closeInstantly: boolean): void;

/**
 * 1
 * 2 - CARLOCK_LOCKED (locked)
 * 3
 * 4 - CARLOCK_LOCKED_PLAYER_INSIDE (can get in, can't leave)
 * (maybe, these are leftovers from GTA:VC)
 * 5
 * 6
 * 7
 * (source: GTA VC miss2 leak, matching constants for 0/2/4, testing)
 * They use 10 in am_mp_property_int, don't know what it does atm.
 */
declare function SetVehicleDoorsLocked(vehicle: number, doorLockStatus: number): void;

/**
 * After some analysis, I've decided that these are what the parameters are.
 * We can see this being used in R* scripts such as "am_mp_property_int.ysc.c4":
 * l_11A1 = PED::GET_VEHICLE_PED_IS_IN(PLAYER::PLAYER_PED_ID(), 1);
 * ...
 * VEHICLE::SET_VEHICLE_DOORS_LOCKED_FOR_ALL_PLAYERS(l_11A1, 1);
 */
declare function SetVehicleDoorsLockedForAllPlayers(vehicle: number, toggle: boolean): void;

declare function SetVehicleDoorsLockedForPlayer(vehicle: number, player: number, toggle: boolean): void;

declare function SetVehicleDoorsLockedForTeam(vehicle: number, team: number, toggle: boolean): void;

/**
 * Closes all doors of a vehicle:
 */
declare function SetVehicleDoorsShut(vehicle: number, closeInstantly: boolean): void;

declare function SetVehicleEngineCanDegrade(vehicle: number, toggle: boolean): void;

/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 */
declare function SetVehicleEngineHealth(vehicle: number, health: number): void;

/**
 * Starts or stops the engine on the specified vehicle.
 * vehicle: The vehicle to start or stop the engine on.
 * value: true to turn the vehicle on; false to turn it off.
 * instantly: if true, the vehicle will be set to the state immediately; otherwise, the current driver will physically turn on or off the engine.
 * --------------------------------------
 * And what's with BOOL otherwise, what does it do???
 * --------------------------------------
 * I have no clue what 'otherwise' is either. Xbox360 of course ends at TU27 so that's our latest scripts and every script still only has the first 3 parameters.
 * Side Note: It would of been nice though if it was to handle jet engines instead of having that separate native for it.
 */
declare function SetVehicleEngineOn(vehicle: number, value: boolean, instantly: boolean, otherwise: boolean): void;

/**
 * Vehicle power multiplier.
 * Does not have to be looped each frame. Can be set once.
 * Values lower than 1f don't work.
 * Note: If the value is set with GET_RANDOM_FLOAT_IN_RANGE, the vehicle will have an absurdly high ammount of power, and will become almost undrivable for the player or NPCs. The range doesn't seem to matter.
 * An high value like 10000000000f will visually remove the wheels that apply the power (front wheels for FWD, rear wheels for RWD), but the power multiplier will still apply, and the wheels still work.
 */
declare function SetVehicleEnginePowerMultiplier(vehicle: number, value: number): void;

declare function SetVehicleEngineTemperature(vehicle: number, temperature: number): void;

/**
 * &lt;1.0 - Decreased torque
 * =1.0 - Default torque
 * &gt;1.0 - Increased torque
 * Negative values will cause the vehicle to go backwards instead of forwards while accelerating.
 * value - is between 0.2 and 1.8 in the decompiled scripts.
 * This needs to be called every frame to take effect.
 */
declare function SetVehicleEngineTorqueMultiplier(vehicle: number, value: number): void;

/**
 * formerly known as _SET_VEHICLE_PAINT_FADE
 * The parameter fade is a value from 0-1, where 0 is fresh paint.
 * ------------------------------------------------------------------------------------
 * The actual value isn't stored as a float but as an unsigned char (BYTE). More info here: pastebin.com/r0h6EM5s
 */
declare function SetVehicleEnveffScale(vehicle: number, fade: number): void;
/**
 * formerly known as _SET_VEHICLE_PAINT_FADE
 * The parameter fade is a value from 0-1, where 0 is fresh paint.
 * ------------------------------------------------------------------------------------
 * The actual value isn't stored as a float but as an unsigned char (BYTE). More info here: pastebin.com/r0h6EM5s
 */
declare function SetVehiclePaintFade(vehicle: number, fade: number): void;

declare function SetVehicleExclusiveDriver(vehicle: number, p1: boolean): void;
declare function N_0x41062318f23ed854(vehicle: number, p1: boolean): void;

declare function SetVehicleExclusiveDriver_2(vehicle: number, ped: number, p2: number): void;
declare function N_0xb5c51b5502e85e83(vehicle: number, ped: number, p2: number): void;

/**
 * Sets a vehicle to be strongly resistant to explosions. p0 is the vehicle; set p1 to false to toggle the effect on/off.
 */
declare function SetVehicleExplodesOnHighExplosionDamage(vehicle: number, toggle: boolean): void;

/**
 * Note: only some vehicle have extras
 * extra ids are from 1 - 9 depending on the vehicle
 * -------------------------------------------------
 * ^ not sure if outdated or simply wrong. Max extra ID for b944 is 14
 * -------------------------------------------------
 * p2 is not a on/off toggle. mostly 0 means on and 1 means off.
 * not sure if it really should be a BOOL.
 */
declare function SetVehicleExtra(vehicle: number, extraId: number, toggle: boolean): void;

/**
 * They use the same color indexs as SET_VEHICLE_COLOURS.
 */
declare function SetVehicleExtraColours(vehicle: number, pearlescentColor: number, wheelColor: number): void;

declare function SetVehicleFixed(vehicle: number): void;

/**
 * SCALE: Setting the speed to 30 would result in a speed of roughly 60mph, according to speedometer.
 * Speed is in meters per second
 * You can convert meters/s to mph here:
 * http://www.calculateme.com/Speed/MetersperSecond/ToMilesperHour.htm
 */
declare function SetVehicleForwardSpeed(vehicle: number, speed: number): void;

/**
 * Seems to be related to the metal parts, not tyres (like i was expecting lol)
 */
declare function SetVehicleFrictionOverride(vehicle: number, friction: number): void;

declare function SetVehicleFuelLevel(vehicle: number, level: number): void;

/**
 * It switch to highbeam when p1 is set to true.
 */
declare function SetVehicleFullbeam(vehicle: number, toggle: boolean): void;

declare function SetVehicleGravity(vehicle: number, toggle: boolean): void;

declare function SetVehicleGravityAmount(vehicle: number, gravity: number): void;

/**
 * This native makes the vehicle stop immediately, as happens when we enter a MP garage.
 * . distance defines how far it will travel until stopping. Garage doors use 3.0.
 * . If killEngine is set to 1, you cannot resume driving the vehicle once it stops. This looks like is a bitmapped integer.
 */
declare function SetVehicleHalt(vehicle: number, distance: number, killEngine: number, unknown: boolean): void;
/**
 * This native makes the vehicle stop immediately, as happens when we enter a MP garage.
 * . distance defines how far it will travel until stopping. Garage doors use 3.0.
 * . If killEngine is set to 1, you cannot resume driving the vehicle once it stops. This looks like is a bitmapped integer.
 */
declare function N_0x260be8f09e326a20(vehicle: number, distance: number, killEngine: number, unknown: boolean): void;

/**
 * does this work while in air?
 */
declare function SetVehicleHandbrake(vehicle: number, toggle: boolean): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FIELD`, this might require some experimentation.
 * Example: `SetVehicleHandlingField(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The value to set.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingField(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_FLOAT`, this might require some experimentation.
 * Example: `SetVehicleHandlingFloat(vehicle, 'CHandlingData', 'fSteeringLock', 360.0)`
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The floating-point value to set.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingFloat(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_INT`, this might require some experimentation.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The integer value to set.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingInt(vehicle: number, _class: string, fieldName: string, value: number): void;

/**
 * Sets a handling override for a specific vehicle. Certain handling flags can only be set globally using `SET_HANDLING_VECTOR`, this might require some experimentation.
 * @param class The handling class to set. Only "CHandlingData" is supported at this time.
 * @param fieldName The field name to set. These match the keys in `handling.meta`.
 * @param value The Vector3 value to set.
 * @param vehicle The vehicle to set data for.
 */
declare function SetVehicleHandlingVector(vehicle: number, _class: string, fieldName: string): void;

declare function SetVehicleHasBeenOwnedByPlayer(vehicle: number, owned: boolean): void;

/**
 * if true, axles won't bend.
 */
declare function SetVehicleHasStrongAxles(vehicle: number, toggle: boolean): void;

declare function SetVehicleHighGear(vehicle: number, gear: number): void;

/**
 * console hash: 0x71CDD52F
 */
declare function SetVehicleHudSpecialAbilityBarActive(vehicle: number, active: boolean): void;
/**
 * console hash: 0x71CDD52F
 */
declare function N_0x99c82f8a139f3e4e(vehicle: number, active: boolean): void;

/**
 * Sets the turn signal enabled for a vehicle.
 * Set turnSignal to 1 for left light, 0 for right light.
 */
declare function SetVehicleIndicatorLights(vehicle: number, turnSignal: number, toggle: boolean): void;

declare function SetVehicleInteriorlight(vehicle: number, toggle: boolean): void;

/**
 * Setting this to false, makes the specified vehicle to where if you press Y your character doesn't even attempt the animation to enter the vehicle. Hence it's not considered aka ignored.
 */
declare function SetVehicleIsConsideredByPlayer(vehicle: number, toggle: boolean): void;

declare function SetVehicleIsStolen(vehicle: number, isStolen: boolean): number;

/**
 * Sets the wanted state of this vehicle.
 */
declare function SetVehicleIsWanted(vehicle: number, state: boolean): void;

/**
 * VEHICLE::SET_VEHICLE_ENGINE_ON is not enough to start jet engines when not inside the vehicle. But with this native set to true it works: youtu.be/OK0ps2fDpxs
 * i.imgur.com/7XA14pX.png
 * Certain planes got jet engines.
 */
declare function SetVehicleJetEngineOn(vehicle: number, toggle: boolean): void;
/**
 * VEHICLE::SET_VEHICLE_ENGINE_ON is not enough to start jet engines when not inside the vehicle. But with this native set to true it works: youtu.be/OK0ps2fDpxs
 * i.imgur.com/7XA14pX.png
 * Certain planes got jet engines.
 */
declare function N_0xb8fbc8b1330ca9b4(vehicle: number, toggle: boolean): void;

/**
 * multiplier = brightness of head lights.
 * this value isn't capped afaik.
 * multiplier = 0.0 no lights
 * multiplier = 1.0 default game value
 */
declare function SetVehicleLightMultiplier(vehicle: number, multiplier: number): void;

/**
 * set's if the vehicle has lights or not.
 * not an on off toggle.
 * p1 = 0 ;vehicle normal lights, off then lowbeams, then highbeams
 * p1 = 1 ;vehicle doesn't have lights, always off
 * p1 = 2 ;vehicle has always on lights
 * p1 = 3 ;or even larger like 4,5,... normal lights like =1
 * note1: when using =2 on day it's lowbeam,highbeam
 * but at night it's lowbeam,lowbeam,highbeam
 * note2: when using =0 it's affected by day or night for highbeams don't exist in daytime.
 */
declare function SetVehicleLights(vehicle: number, state: number): void;

/**
 * p1 can be either 0, 1 or 2.
 * Determines how vehicle lights behave when toggled.
 * 0 = Default (Lights can be toggled between off, normal and high beams)
 * 1 = Lights Disabled (Lights are fully disabled, cannot be toggled)
 * 2 = Always On (Lights can be toggled between normal and high beams)
 */
declare function SetVehicleLightsMode(vehicle: number, p1: number): void;
/**
 * p1 can be either 0, 1 or 2.
 * Determines how vehicle lights behave when toggled.
 * 0 = Default (Lights can be toggled between off, normal and high beams)
 * 1 = Lights Disabled (Lights are fully disabled, cannot be toggled)
 * 2 = Always On (Lights can be toggled between normal and high beams)
 */
declare function N_0x1fd09e7390a74d54(vehicle: number, p1: number): void;

/**
 * Note: Only seems to work on Emergency Vehicles
 */
declare function SetVehicleLivery(vehicle: number, livery: number): void;

declare function SetVehicleLodMultiplier(vehicle: number, multiplier: number): void;

/**
 * In b944, there are 50 (0 - 49) mod types.
 * Sets the vehicle mod.
 * The vehicle must have a mod kit first.
 * Any out of range ModIndex is stock.
 * #Mod Type
 * Spoilers
 * Front Bumper
 * Rear Bumper
 * Side Skirt
 * Exhaust
 * Frame
 * Grille
 * Hood
 * Fender
 * Right Fender
 * Roof
 * Engine
 * Brakes
 * Transmission
 * Horns - 14 (modIndex from 0 to 51)
 * Suspension
 * Armor
 * Front Wheels
 * Back Wheels - 24 //only for motocycles
 * Plate holders
 * Trim Design
 * Ornaments
 * Dial Design
 * Steering Wheel
 * Shifter Leavers
 * Plaques
 * Hydraulics
 * Livery
 * ENUMS: pastebin.com/QzEAn02v
 */
declare function SetVehicleMod(vehicle: number, modType: number, modIndex: number, customTires: boolean): void;

/**
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * color: number of the color.
 * p3 seems to always be 0.
 */
declare function SetVehicleModColor_1(vehicle: number, paintType: number, color: number, p3: number): void;

/**
 * Changes the secondary paint type and color
 * paintType:
 * 0: Normal
 * 1: Metallic
 * 2: Pearl
 * 3: Matte
 * 4: Metal
 * 5: Chrome
 * color: number of the color
 */
declare function SetVehicleModColor_2(vehicle: number, paintType: number, color: number): void;

/**
 * Set modKit to 0 if you plan to call SET_VEHICLE_MOD. That's what the game does. Most body modifications through SET_VEHICLE_MOD will not take effect until this is set to 0.
 */
declare function SetVehicleModKit(vehicle: number, modKit: number): void;

/**
 * seems to make the vehicle stop spawning naturally in traffic. Here's an essential example:
 * VEHICLE::SET_VEHICLE_MODEL_IS_SUPPRESSED(GAMEPLAY::GET_HASH_KEY("taco"), true);
 * god I hate taco vans
 * Confirmed to work? Needs to be looped? Can not get it to work.
 */
declare function SetVehicleModelIsSuppressed(model: string | number, suppressed: boolean): void;

/**
 * NOTE: Debugging functions are not present in the retail version of the game.
 */
declare function SetVehicleNameDebug(vehicle: number, name: string): void;

declare function SetVehicleNeedsToBeHotwired(vehicle: number, toggle: boolean): void;

/**
 * Sets the neon lights of the specified vehicle on/off.
 * Indices:
 * 0 = Left
 * 1 = Right
 * 2 = Front
 * 3 = Back
 */
declare function SetVehicleNeonLightEnabled(vehicle: number, index: number, toggle: boolean): void;

/**
 * Sets the color of the neon lights of the specified vehicle.
 * More info: pastebin.com/G49gqy8b
 */
declare function SetVehicleNeonLightsColour(vehicle: number, r: number, g: number, b: number): void;

/**
 * Sets a vehicle's license plate text.  8 chars maximum.
 * Example:
 * Ped playerPed = PLAYER::PLAYER_PED_ID();
 * Vehicle veh = PED::GET_VEHICLE_PED_IS_USING(playerPed);
 * char *plateText = "KING";
 * VEHICLE::SET_VEHICLE_NUMBER_PLATE_TEXT(veh, plateText);
 */
declare function SetVehicleNumberPlateText(vehicle: number, plateText: string): void;

/**
 * Plates:
 * Blue/White
 * Yellow/black
 * Yellow/Blue
 * Blue/White2
 * Blue/White3
 * Yankton
 */
declare function SetVehicleNumberPlateTextIndex(vehicle: number, plateIndex: number): void;

declare function SetVehicleOilLevel(vehicle: number, level: number): void;

/**
 * Sets a vehicle on the ground on all wheels.  Returns whether or not the operation was successful.
 * sfink: This has an additional param(Vehicle vehicle, float p1) which is always set to 5.0f in the b944 scripts.
 */
declare function SetVehicleOnGroundProperly(vehicle: number): number;

/**
 * Tested on the player's current vehicle. Unless you kill the driver, the vehicle doesn't loose control, however, if enabled, explodeOnImpact is still active. The moment you crash, boom.
 */
declare function SetVehicleOutOfControl(vehicle: number, killDriver: boolean, explodeOnImpact: boolean): void;

/**
 * 1000 is max health
 * Begins leaking gas at around 650 health
 */
declare function SetVehiclePetrolTankHealth(vehicle: number, health: number): void;

declare function SetVehiclePopulationBudget(p0: number): void;

declare function SetVehicleProvidesCover(vehicle: number, toggle: boolean): void;

/**
 * can't seem to enable radio on cop cars etc
 */
declare function SetVehicleRadioEnabled(vehicle: number, toggle: boolean): void;

declare function SetVehicleRadioLoud(vehicle: number, toggle: boolean): void;

/**
 * Reduces grip significantly so it's hard to go anywhere.
 */
declare function SetVehicleReduceGrip(vehicle: number, toggle: boolean): void;

declare function SetVehicleRudderBroken(vehicle: number, p1: boolean): void;

/**
 * Only works during nighttime.
 */
declare function SetVehicleSearchlight(heli: number, toggle: boolean, canBeUsedByAI: boolean): void;

/**
 * Commands the driver of an armed vehicle (p0) to shoot its weapon at a target (p1). p3, p4 and p5 are the coordinates of the target. Example:
 * WEAPON::SET_CURRENT_PED_VEHICLE_WEAPON(pilot,GAMEPLAY::GET_HASH_KEY("VEHICLE_WEAPON_PLANE_ROCKET"));						VEHICLE::SET_VEHICLE_SHOOT_AT_TARGET(pilot, target, targPos.x, targPos.y, targPos.z);
 */
declare function SetVehicleShootAtTarget(driver: number, entity: number, xTarget: number, yTarget: number, zTarget: number): void;

/**
 * If set to TRUE, it seems to suppress door noises and doesn't allow the horn to be continuous.
 */
declare function SetVehicleSilent(vehicle: number, toggle: boolean): void;
/**
 * If set to TRUE, it seems to suppress door noises and doesn't allow the horn to be continuous.
 */
declare function N_0x9d44fcce98450843(vehicle: number, toggle: boolean): void;

/**
 * Activate siren on vehicle (Only works if the vehicle has a siren).
 */
declare function SetVehicleSiren(vehicle: number, toggle: boolean): void;

/**
 * Locks the vehicle's steering to the desired angle, explained below.
 * Requires to be called onTick. Steering is unlocked the moment the function stops being called on the vehicle.
 * Steer bias:
 * -1.0 = full right
 * 0.0 = centered steering
 * 1.0 = full left
 */
declare function SetVehicleSteerBias(vehicle: number, value: number): void;

declare function SetVehicleSteeringAngle(vehicle: number, angle: number): void;

declare function SetVehicleSteeringScale(vehicle: number, scale: number): void;

/**
 * If set to true, vehicle will not take crash damage, but is still susceptible to damage from bullets and explosives
 */
declare function SetVehicleStrong(vehicle: number, toggle: boolean): void;

/**
 * VEHICLE::SET_VEHICLE_TIMED_EXPLOSION(v_3, PLAYER::GET_PLAYER_PED(v_5), 1);
 */
declare function SetVehicleTimedExplosion(vehicle: number, ped: number, toggle: boolean): void;

declare function SetVehicleTurboPressure(vehicle: number, pressure: number): void;

/**
 * "To burst tyres VEHICLE::SET_VEHICLE_TYRE_BURST(vehicle, 0, true, 1000.0)
 * to burst all tyres type it 8 times where p1 = 0 to 7.
 * p3 seems to be how much damage it has taken. 0 doesn't deflate them, 1000 completely deflates them.
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 */
declare function SetVehicleTyreBurst(vehicle: number, index: number, onRim: boolean, p3: number): void;

/**
 * tyreIndex = 0 to 4 on normal vehicles
 * '0 = wheel_lf / bike, plane or jet front
 * '1 = wheel_rf
 * '2 = wheel_lm / in 6 wheels trailer, plane or jet is first one on left
 * '3 = wheel_rm / in 6 wheels trailer, plane or jet is first one on right
 * '4 = wheel_lr / bike rear / in 6 wheels trailer, plane or jet is last one on left
 * '5 = wheel_rr / in 6 wheels trailer, plane or jet is last one on right
 * '45 = 6 wheels trailer mid wheel left
 * '47 = 6 wheels trailer mid wheel right
 */
declare function SetVehicleTyreFixed(vehicle: number, tyreIndex: number): void;

/**
 * Sets the tire smoke's color of this vehicle.
 * vehicle: The vehicle that is the target of this method.
 * r: The red level in the RGB color code.
 * g: The green level in the RGB color code.
 * b: The blue level in the RGB color code.
 * Note:
 * setting r,g,b to 0 will give the car independance day tyre smoke
 */
declare function SetVehicleTyreSmokeColor(vehicle: number, r: number, g: number, b: number): void;

/**
 * Allows you to toggle bulletproof tires.
 */
declare function SetVehicleTyresCanBurst(vehicle: number, toggle: boolean): void;

declare function SetVehicleUndriveable(vehicle: number, toggle: boolean): void;

declare function SetVehicleWheelHealth(vehicle: number, wheelIndex: number, health: number): void;

/**
 * 0: Sport
 * 1: Muscle
 * 2: Lowrider
 * 3: SUV
 * 4: Offroad
 * 5: Tuner
 * 6: Bike Wheels
 * 7: High End
 */
declare function SetVehicleWheelType(vehicle: number, WheelType: number): void;

/**
 * Adjusts the offset of the specified wheel relative to the wheel's axle center.
 * Needs to be called every frame in order to function properly, as GTA will reset the offset otherwise.
 * This function can be especially useful to set the track width of a vehicle, for example:
 * ```
 * function SetVehicleFrontTrackWidth(vehicle, width)
 * SetVehicleWheelXOffset(vehicle, 0, -width/2)
 * SetVehicleWheelXOffset(vehicle, 1, width/2)
 * end
 * ```
 */
declare function SetVehicleWheelXOffset(vehicle: number, wheelIndex: number, offset: number): void;

declare function SetVehicleWheelXrot(vehicle: number, wheelIndex: number, value: number): void;

declare function SetVehicleWheelsCanBreak(vehicle: number, enabled: boolean): number;

declare function SetVehicleWheelsCanBreakOffWhenBlowUp(vehicle: number, toggle: boolean): void;
declare function SetVehicleMaxStrTrap(vehicle: number, toggle: boolean): void;

/**
 * enum WindowTints
 * {
 * WINDOWTINT_NONE,
 * WINDOWTINT_PURE_BLACK,
 * WINDOWTINT_DARKSMOKE,
 * WINDOWTINT_LIGHTSMOKE,
 * WINDOWTINT_STOCK,
 * WINDOWTINT_LIMO,
 * WINDOWTINT_GREEN
 * };
 */
declare function SetVehicleWindowTint(vehicle: number, tint: number): void;

/**
 * Max value is 1.0
 */
declare function SetWantedLevelDifficulty(player: number, difficulty: number): void;

declare function SetWantedLevelMultiplier(multiplier: number): void;

/**
 * You can only use text entries. No custom text.
 * Example: SET_WARNING_MESSAGE("t20", 3, "adder", false, -1, 0, 0, true);
 */
declare function SetWarningMessage(entryLine1: string, instructionalKey: number, entryLine2: string, p3: boolean, p4: number, background: boolean): [number, number];

/**
 * You can only use text entries. No custom text.
 * [24/03/2017] by ins1de :
 * C# Example :
 * Function.Call(Hash._SET_WARNING_MESSAGE_2, "HUD_QUIT", "HUD_CGIGNORE", 2, "HUD_CGINVITE", 0, -1, 0, 0, 1);
 * @unknown, you can recreate this easily with scaleforms
 */
declare function SetWarningMessage_2(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: number, background: boolean): [number, number];

/**
 * You can only use text entries. No custom text.
 */
declare function SetWarningMessage_3(entryHeader: string, entryLine1: string, instructionalKey: number, entryLine2: string, p4: boolean, p5: number, p6: number, p9: boolean): [number, number];

/**
 * Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.
 * Works only ~200 meters around the player.
 * console hash: 0x53B694B1
 * Most likely SET_CURRENT_*
 */
declare function SetWavesIntensity(intensity: number): void;
/**
 * Sets a value that determines how aggressive the ocean waves will be. Values of 2.0 or more make for very aggressive waves like you see during a thunderstorm.
 * Works only ~200 meters around the player.
 * console hash: 0x53B694B1
 * Most likely SET_CURRENT_*
 */
declare function N_0xb96b00e976be977f(intensity: number): void;

/**
 * This native removes the current waypoint from the map.
 * Example:
 * C#:
 * Function.Call(Hash.SET_WAYPOINT_OFF);
 * C++:
 * UI::SET_WAYPOINT_OFF();
 */
declare function SetWaypointOff(): void;

/**
 * Changes the selected ped aiming animation style.
 * Note : You must use GET_HASH_KEY!
 * Strings to use with GET_HASH_KEY :
 * "Ballistic",
 * "Default",
 * "Fat",
 * "Female",
 * "FirstPerson",
 * "FirstPersonAiming",
 * "FirstPersonFranklin",
 * "FirstPersonFranklinAiming",
 * "FirstPersonFranklinRNG",
 * "FirstPersonFranklinScope",
 * "FirstPersonMPFemale",
 * "FirstPersonMichael",
 * "FirstPersonMichaelAiming",
 * "FirstPersonMichaelRNG",
 * "FirstPersonMichaelScope",
 * "FirstPersonRNG",
 * "FirstPersonScope",
 * "FirstPersonTrevor",
 * "FirstPersonTrevorAiming",
 * "FirstPersonTrevorRNG",
 * "FirstPersonTrevorScope",
 * "Franklin",
 * "Gang",
 * "Gang1H",
 * "GangFemale",
 * "Hillbilly",
 * "MP_F_Freemode",
 * "Michael",
 * "SuperFat",
 * "Trevor"
 */
declare function SetWeaponAnimationOverride(ped: number, animStyle: string | number): void;

declare function SetWeaponObjectTintIndex(weapon: number, tintIndex: number): void;

/**
 * Hash collision real name is: IS_FLASH_LIGHT_ON
 */
declare function SetWeaponSmokegrenadeAssigned(ped: number): number;

/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOWLIGHT"
 * "BLIZZARD"
 */
declare function SetWeatherTypeNow(weatherType: string): void;

/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOWLIGHT"
 * "BLIZZARD"
 */
declare function SetWeatherTypeNowPersist(weatherType: string): void;

declare function SetWeatherTypeOverTime(weatherType: string, time: number): void;

/**
 * The following weatherTypes are used in the scripts:
 * "CLEAR"
 * "EXTRASUNNY"
 * "CLOUDS"
 * "OVERCAST"
 * "RAIN"
 * "CLEARING"
 * "THUNDER"
 * "SMOG"
 * "FOGGY"
 * "XMAS"
 * "SNOWLIGHT"
 * "BLIZZARD"
 */
declare function SetWeatherTypePersist(weatherType: string): void;

/**
 * Mixes two weather types. If percentWeather2 is set to 0.0f, then the weather will be entirely of weatherType1, if it is set to 1.0f it will be entirely of weatherType2. If it's set somewhere in between, there will be a mixture of weather behaviors. To test, try this in the RPH console, and change the float to different values between 0 and 1:
 * execute "NativeFunction.Natives.x578C752848ECFA0C(Game.GetHashKey(""RAIN""), Game.GetHashKey(""SMOG""), 0.50f);
 * Note that unlike most of the other weather natives, this native takes the hash of the weather name, not the plain string. These are the weather names and their hashes:
 * CLEAR	0x36A83D84
 * EXTRASUNNY	0x97AA0A79
 * CLOUDS	0x30FDAF5C
 * OVERCAST	0xBB898D2D
 * RAIN	0x54A69840
 * CLEARING	0x6DB1A50D
 * THUNDER	0xB677829F
 * SMOG	0x10DCF4B5
 * FOGGY	0xAE737644
 * XMAS	0xAAC9C895
 * SNOWLIGHT	0x23FB812B
 * BLIZZARD	0x27EA2814
 *  -- [[ OLD INVALID INFO BELOW ]] 
 * Not tested. Based purely on disassembly. Instantly sets the weather to sourceWeather, then transitions to targetWeather over the specified transitionTime in seconds.
 * If an invalid hash is specified for sourceWeather, the current weather type will be used.
 * If an invalid hash is specified for targetWeather, the next weather type will be used.
 * If an invalid hash is specified for both sourceWeather and targetWeather, the function just changes the transition time of the current transition.
 */
declare function SetWeatherTypeTransition(weatherType1: string | number, weatherType2: string | number, percentWeather2: number): void;

declare function SetWidescreenBorders(p0: boolean, p1: number): number;

declare function SetWidescreenFormat(p0: number): void;

/**
 * Sets the the raw wind speed value.
 */
declare function SetWind(speed: number): void;

declare function SetWindDirection(direction: number): void;

/**
 * Using this native will clamp the wind speed value to a range of 0.0- 12.0. Using SET_WIND sets the same value but without the restriction.
 */
declare function SetWindSpeed(speed: number): void;

declare function SetZoneEnabled(zoneId: number, toggle: boolean): void;

/**
 * Called before drawing stuff.
 * Examples:
 * GRAPHICS::_61BB1D9B3A95D802(7);
 * GRAPHICS::DRAW_RECT(0.5, 0.5, 3.0, 3.0, v_4, v_5, v_6, a_0._f172, 0);
 * GRAPHICS::_61BB1D9B3A95D802(1);
 * GRAPHICS::DRAW_RECT(0.5, 0.5, 1.5, 1.5, 0, 0, 0, 255, 0);
 * Appears to be the layer it's drawn on
 */
declare function Set_2dLayer(layer: number): void;
/**
 * Called before drawing stuff.
 * Examples:
 * GRAPHICS::_61BB1D9B3A95D802(7);
 * GRAPHICS::DRAW_RECT(0.5, 0.5, 3.0, 3.0, v_4, v_5, v_6, a_0._f172, 0);
 * GRAPHICS::_61BB1D9B3A95D802(1);
 * GRAPHICS::DRAW_RECT(0.5, 0.5, 1.5, 1.5, 0, 0, 0, 255, 0);
 * Appears to be the layer it's drawn on
 */
declare function N_0x61bb1d9b3a95d802(layer: number): void;

declare function Settimera(value: number): void;

declare function Settimerb(value: number): void;

/**
 * Possible shake types (updated b617d):
 * DEATH_FAIL_IN_EFFECT_SHAKE
 * DRUNK_SHAKE
 * FAMILY5_DRUG_TRIP_SHAKE
 * HAND_SHAKE
 * JOLT_SHAKE
 * LARGE_EXPLOSION_SHAKE
 * MEDIUM_EXPLOSION_SHAKE
 * SMALL_EXPLOSION_SHAKE
 * ROAD_VIBRATION_SHAKE
 * SKY_DIVING_SHAKE
 * VIBRATE_SHAKE
 */
declare function ShakeCam(cam: number, _type: string, amplitude: number): void;

/**
 * p0 argument found in the b617d scripts: "DRUNK_SHAKE"
 */
declare function ShakeCinematicCam(p0: string, p1: number): void;

/**
 * Possible shake types (updated b617d):
 * DEATH_FAIL_IN_EFFECT_SHAKE
 * DRUNK_SHAKE
 * FAMILY5_DRUG_TRIP_SHAKE
 * HAND_SHAKE
 * JOLT_SHAKE
 * LARGE_EXPLOSION_SHAKE
 * MEDIUM_EXPLOSION_SHAKE
 * SMALL_EXPLOSION_SHAKE
 * ROAD_VIBRATION_SHAKE
 * SKY_DIVING_SHAKE
 * VIBRATE_SHAKE
 */
declare function ShakeGameplayCam(shakeName: string, intensity: number): void;

declare function ShiftLeft(value: number, bitShift: number): number;

declare function ShiftRight(value: number, bitShift: number): number;

declare function ShootSingleBulletBetweenCoords(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, damage: number, p7: boolean, weaponHash: string | number, ownerPed: number, isAudible: boolean, isInvisible: boolean, speed: number): void;

/**
 * Shows the cursor on screen for the frame its called.
 */
declare function ShowCursorThisFrame(): void;

/**
 * Adds the GTA: Online player heading indicator to a blip.
 */
declare function ShowHeadingIndicatorOnBlip(blip: number, toggle: boolean): void;
/**
 * Adds the GTA: Online player heading indicator to a blip.
 */
declare function N_0x5fbca48327b914df(blip: number, toggle: boolean): void;

declare function ShowHudComponentThisFrame(id: number): void;

/**
 * This does NOT get called per frame. Call it once to show, then use UI::_REMOVE_LOADING_PROMPT to remove it
 * Changes the the above native's (UI::_SET_LOADING_PROMPT_TEXT_ENTRY) spinning circle type.
 * Types:
 * enum LoadingPromptTypes
 * {
 * LOADING_PROMPT_LEFT,
 * LOADING_PROMPT_LEFT_2,
 * LOADING_PROMPT_LEFT_3,
 * SAVE_PROMPT_LEFT,
 * LOADING_PROMPT_RIGHT,
 * };
 */
declare function ShowLoadingPrompt(busySpinnerType: number): void;
/**
 * This does NOT get called per frame. Call it once to show, then use UI::_REMOVE_LOADING_PROMPT to remove it
 * Changes the the above native's (UI::_SET_LOADING_PROMPT_TEXT_ENTRY) spinning circle type.
 * Types:
 * enum LoadingPromptTypes
 * {
 * LOADING_PROMPT_LEFT,
 * LOADING_PROMPT_LEFT_2,
 * LOADING_PROMPT_LEFT_3,
 * SAVE_PROMPT_LEFT,
 * LOADING_PROMPT_RIGHT,
 * };
 */
declare function N_0xbd12f8228410d9b4(busySpinnerType: number): void;

declare function ShowNumberOnBlip(blip: number, _number: number): void;

/**
 * If toggle is true, the ped's head is shown in the pause menu
 * If toggle is false, the ped's head is not shown in the pause menu
 */
declare function ShowPedInPauseMenu(toggle: boolean): void;
/**
 * If toggle is true, the ped's head is shown in the pause menu
 * If toggle is false, the ped's head is not shown in the pause menu
 */
declare function N_0x4ebb7e87aa0dbed4(toggle: boolean): void;

/**
 * probs one frame
 */
declare function ShowSocialClubLegalScreen(): void;

/**
 * Forces the weapon wheel to appear on screen.
 */
declare function ShowWeaponWheel(forcedShow: boolean): void;
/**
 * Forces the weapon wheel to appear on screen.
 */
declare function N_0xeb354e5376bc81a7(forcedShow: boolean): void;

/**
 * Starts a new singleplayer game (at the prologue).
 */
declare function ShutdownAndLaunchSinglePlayerGame(): void;

declare function ShutdownCreatorBudget(): void;
declare function N_0xcce26000e9a6fad7(): void;

declare function ShutdownLoadingScreen(): void;

/**
 * Shuts down the `loadingScreen` NUI frame, similarly to `SHUTDOWN_LOADING_SCREEN`.
 */
declare function ShutdownLoadingScreenNui(): void;

/**
 * This is to make the player walk without accepting input from INPUT.
 * gaitType is in increments of 100s. 2000, 500, 300, 200, etc.
 * p4 is always 1 and p5 is always 0.
 * C# Example :
 * Function.Call(Hash.SIMULATE_PLAYER_INPUT_GAIT, Game.Player, 1.0f, 100, 1.0f, 1, 0); //Player will go forward for 100ms
 */
declare function SimulatePlayerInputGait(player: number, amount: number, gaitType: number, speed: number, p4: boolean, p5: boolean): void;

declare function Sin(value: number): number;

/**
 * Unsurprisingly, this native is incorrectly named. Instead, this returns the name of the scaleform movie.
 * HASH COLLISION. PLEASE REMOVE NATIVE NAME.
 */
declare function SittingTv(scaleform: number): string;

declare function SkipRadioForward(): void;

declare function SkipTimeInPlaybackRecordedVehicle(p0: number, p1: number): void;

declare function SkipToEndAndStopPlaybackRecordedVehicle(p0: number): void;

declare function SkipToNextScriptedConversationLine(): void;

/**
 * Returns true if the object has finished moving.
 * If false, moves the object towards the specified X, Y and Z coordinates with the specified X, Y and Z speed.
 * See also: gtag.gtagaming.com/opcode-database/opcode/034E/
 */
declare function SlideObject(object: number, toX: number, toY: number, toZ: number, speedX: number, speedY: number, speedZ: number, collision: boolean): number;

declare function SmashVehicleWindow(vehicle: number, index: number): number;

declare function SoundVehicleHornThisFrame(vehicle: number): void;
declare function N_0x9c11908013ea4715(vehicle: number): void;

/**
 * p1 appears as 5, 10, 15, 25, or 30. p2 is always true.
 */
declare function SpecialAbilityChargeAbsolute(player: number, p1: number, p2: boolean): void;

/**
 * p1 appears to always be 1 (only comes up twice)
 */
declare function SpecialAbilityChargeContinuous(player: number, p2: number): void;

/**
 * 2 matches. p1 was always true.
 */
declare function SpecialAbilityChargeLarge(player: number, p1: boolean, p2: boolean): void;

/**
 * Only 1 match. Both p1 &amp; p2 were true.
 */
declare function SpecialAbilityChargeMedium(player: number, p1: boolean, p2: boolean): void;

/**
 * normalizedValue is from 0.0 - 1.0
 * p2 is always 1
 */
declare function SpecialAbilityChargeNormalized(player: number, normalizedValue: number, p2: boolean): void;
/**
 * normalizedValue is from 0.0 - 1.0
 * p2 is always 1
 */
declare function ResetSpecialAbilityControlsCinematic(player: number, normalizedValue: number, p2: boolean): void;

/**
 * Every occurrence of p1 &amp; p2 were both true.
 */
declare function SpecialAbilityChargeSmall(player: number, p1: boolean, p2: boolean): void;

declare function SpecialAbilityDeactivate(player: number): void;

declare function SpecialAbilityDeactivateFast(player: number): void;

/**
 * p1 was always true.
 */
declare function SpecialAbilityDepleteMeter(player: number, p1: boolean): void;

/**
 * Also known as _RECHARGE_SPECIAL_ABILITY
 */
declare function SpecialAbilityFillMeter(player: number, p1: boolean): void;

declare function SpecialAbilityLock(playerModel: string | number): void;

declare function SpecialAbilityReset(player: number): void;

declare function SpecialAbilityUnlock(playerModel: string | number): void;

/**
 * Hash collision!!! PLAY_STREAM_FROM_POSITION is the correct name!
 */
declare function SpecialFrontendEqual(x: number, y: number, z: number): void;

declare function Sqrt(value: number): number;

/**
 * Example:
 * This will start the alarm at Fort Zancudo.
 * AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
 * First parameter (char) is the name of the alarm.
 * Second parameter (bool) is unknown, it does not seem to make a difference if this one is 0 or 1.
 * ----------
 * It DOES make a difference but it has to do with the duration or something I dunno yet
 * ----------
 * Found in the b617d scripts:
 * AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS", 0);
 * AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER", 1);
 * AUDIO::START_ALARM("AGENCY_HEIST_FIB_TOWER_ALARMS_UPPER_B", 0);
 * AUDIO::START_ALARM("BIG_SCORE_HEIST_VAULT_ALARMS", a_0);
 * AUDIO::START_ALARM("FBI_01_MORGUE_ALARMS", 1);
 * AUDIO::START_ALARM("FIB_05_BIOTECH_LAB_ALARMS", 0);
 * AUDIO::START_ALARM("JEWEL_STORE_HEIST_ALARMS", 0);
 * AUDIO::START_ALARM("PALETO_BAY_SCORE_ALARM", 1);
 * AUDIO::START_ALARM("PALETO_BAY_SCORE_CHICKEN_FACTORY_ALARM", 0);
 * AUDIO::START_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
 * AUDIO::START_ALARM("PORT_OF_LS_HEIST_SHIP_ALARMS", 0);
 * AUDIO::START_ALARM("PRISON_ALARMS", 0);
 * AUDIO::START_ALARM("PROLOGUE_VAULT_ALARMS", 0);
 */
declare function StartAlarm(alarmName: string, p2: boolean): void;

/**
 * Used to prepare a scene where the surrounding sound is muted or a bit changed. This does not play any sound.
 * List of all usable scene names found in b617d. Sorted alphabetically and identical names removed: pastebin.com/MtM9N9CC
 */
declare function StartAudioScene(scene: string): number;

/**
 * some kind of flag. Usually 0.
 */
declare function StartCutscene(p0: number): void;

/**
 * p3: some kind of flag. Usually 0.
 */
declare function StartCutsceneAtCoords(x: number, y: number, z: number, p3: number): void;

declare function StartEntityFire(entity: number): number;

declare function StartFindKvp(prefix: string): number;

declare function StartFiringAmnesty(duration: number): void;

/**
 * Examples:
 * g_384A = SYSTEM::START_NEW_SCRIPT("cellphone_flashhand", 1424);
 * l_10D = SYSTEM::START_NEW_SCRIPT("taxiService", 1828);
 * SYSTEM::START_NEW_SCRIPT("AM_MP_YACHT", 5000);
 * SYSTEM::START_NEW_SCRIPT("emergencycall", 512);
 * SYSTEM::START_NEW_SCRIPT("emergencycall", 512);
 * SYSTEM::START_NEW_SCRIPT("FM_maintain_cloud_header_data", 1424);
 * SYSTEM::START_NEW_SCRIPT("FM_Mission_Controller", 31000);
 * SYSTEM::START_NEW_SCRIPT("tennis_family", 3650);
 * SYSTEM::START_NEW_SCRIPT("Celebrations", 3650);
 * Decompiled examples of usage when starting a script:
 * SCRIPT::REQUEST_SCRIPT(a_0);
 * if (SCRIPT::HAS_SCRIPT_LOADED(a_0)) {
 * SYSTEM::START_NEW_SCRIPT(a_0, v_3);
 * SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED(a_0);
 * return 1;
 * }
 * or:
 * v_2 = "MrsPhilips2";
 * SCRIPT::REQUEST_SCRIPT(v_2);
 * while (!SCRIPT::HAS_SCRIPT_LOADED(v_2)) {
 * SCRIPT::REQUEST_SCRIPT(v_2);
 * SYSTEM::WAIT(0);
 * }
 * sub_8792(36);
 * SYSTEM::START_NEW_SCRIPT(v_2, 17000);
 * SCRIPT::SET_SCRIPT_AS_NO_LONGER_NEEDED(v_2);
 * All native script names: pastebin.com/K9adDsu4 and pastebin.com/yLNWicUi
 */
declare function StartNewScript(scriptName: string, stackSize: number): number;

/**
 * return : script thread id, 0 if failed
 * Pass pointer to struct of args in p1, size of struct goes into p2
 */
declare function StartNewScriptWithArgs(scriptName: string, argCount: number, stackSize: number): [number, number];

declare function StartNewScriptWithNameHash(scriptHash: string | number, stackSize: number): number;
declare function StartNewStreamedScript(scriptHash: string | number, stackSize: number): number;

declare function StartNewScriptWithNameHashAndArgs(scriptHash: string | number, argCount: number, stackSize: number): [number, number];
declare function StartNewStreamedScriptWithArgs(scriptHash: string | number, argCount: number, stackSize: number): [number, number];

/**
 * GRAPHICS::START_PARTICLE_FX_LOOPED_AT_COORD("scr_fbi_falling_debris", 93.7743f, -749.4572f, 70.86904f, 0f, 0f, 0f, 0x3F800000, 0, 0, 0, 0)
 */
declare function StartParticleFxLoopedAtCoord(effectName: string, x: number, y: number, z: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean, p11: boolean): number;

/**
 * list: pastebin.com/N9unUFWY
 */
declare function StartParticleFxLoopedOnEntity(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

/**
 * Console Hash: 0x23BF0F9B
 */
declare function StartParticleFxLoopedOnEntityBone(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

/**
 * Console Hash: 0xF478EFCF
 * network fx
 */
declare function StartParticleFxLoopedOnEntityBone_2(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * Console Hash: 0xF478EFCF
 * network fx
 */
declare function N_0xdde23f30cc5a0f03(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

/**
 * network fx
 */
declare function StartParticleFxLoopedOnEntity_2(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;
/**
 * network fx
 */
declare function N_0x6f60e89a7b64ee1d(effectName: string, entity: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

declare function StartParticleFxLoopedOnPedBone(effectName: string, ped: number, xOffset: number, yOffset: number, zOffset: number, xRot: number, yRot: number, zRot: number, boneIndex: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

/**
 * GRAPHICS::START_PARTICLE_FX_NON_LOOPED_AT_COORD("scr_paleto_roof_impact", -140.8576f, 6420.789f, 41.1391f, 0f, 0f, 267.3957f, 0x3F800000, 0, 0, 0);
 * Axis - Invert Axis Flags
 * list: pastebin.com/N9unUFWY
 * -------------------------------------------------------------------
 * C#
 * Function.Call&lt;int&gt;(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, = you are calling this function.
 * char *effectname = This is an in-game effect name, for e.g. "scr_fbi4_trucks_crash" is used to give the effects when truck crashes etc
 * float x, y, z pos = this one is Simple, you just have to declare, where do you want this effect to take place at, so declare the ordinates
 * float xrot, yrot, zrot = Again simple? just mention the value in case if you want the effect to rotate.
 * float scale = is declare the scale of the effect, this may vary as per the effects for e.g 1.0f
 * bool xaxis, yaxis, zaxis = To bool the axis values.
 * example:
 * Function.Call&lt;int&gt;(Hash.START_PARTICLE_FX_NON_LOOPED_AT_COORD, "scr_fbi4_trucks_crash", GTA.Game.Player.Character.Position.X, GTA.Game.Player.Character.Position.Y, GTA.Game.Player.Character.Position.Z + 4f, 0, 0, 0, 5.5f, 0, 0, 0);
 */
declare function StartParticleFxNonLoopedAtCoord(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

/**
 * network fx
 */
declare function StartParticleFxNonLoopedAtCoord_2(effectName: string, xPos: number, yPos: number, zPos: number, xRot: number, yRot: number, zRot: number, scale: number, xAxis: boolean, yAxis: boolean, zAxis: boolean): number;

/**
 * Starts a particle effect on an entity for example your player.
 * List: pastebin.com/N9unUFWY
 * Example:
 * C#:
 * Function.Call(Hash.REQUEST_NAMED_PTFX_ASSET, "scr_rcbarry2");                     Function.Call(Hash._SET_PTFX_ASSET_NEXT_CALL, "scr_rcbarry2");                             Function.Call(Hash.START_PARTICLE_FX_NON_LOOPED_ON_ENTITY, "scr_clown_appears", Game.Player.Character, 0.0, 0.0, -0.5, 0.0, 0.0, 0.0, 1.0, false, false, false);
 * Internally this calls the same function as GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE
 * however it uses -1 for the specified bone index, so it should be possible to start a non looped fx on an entity bone using that native
 */
declare function StartParticleFxNonLoopedOnEntity(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

/**
 * Console hash: 0x469A2B4A
 * network fx
 */
declare function StartParticleFxNonLoopedOnEntity_2(effectName: string, entity: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

/**
 * GRAPHICS::START_PARTICLE_FX_NON_LOOPED_ON_PED_BONE("scr_sh_bong_smoke", PLAYER::PLAYER_PED_ID(), -0.025f, 0.13f, 0f, 0f, 0f, 0f, 31086, 0x3F800000, 0, 0, 0);
 * Axis - Invert Axis Flags
 * list: pastebin.com/N9unUFWY
 */
declare function StartParticleFxNonLoopedOnPedBone(effectName: string, ped: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

/**
 * network fx
 */
declare function StartParticleFxNonLoopedOnPedBone_2(effectName: string, ped: number, offsetX: number, offsetY: number, offsetZ: number, rotX: number, rotY: number, rotZ: number, boneIndex: number, scale: number, axisX: boolean, axisY: boolean, axisZ: boolean): number;

declare function StartPlaybackRecordedVehicle(vehicle: number, p1: number, playback: string, p3: boolean): void;

declare function StartPlaybackRecordedVehicleUsingAi(p0: number, p1: number, p3: number, p4: number): number;

declare function StartPlaybackRecordedVehicleWithFlags(vehicle: number, p1: number, playback: string, p3: number, p4: number, p5: number): void;

/**
 * // this enum comes directly from R* so don't edit this
 * enum ePlayerSwitchTypes
 * {
 * SWITCH_TYPE_AUTO,
 * SWITCH_TYPE_LONG,
 * SWITCH_TYPE_MEDIUM,
 * SWITCH_TYPE_SHORT
 * };
 * Use GET_IDEAL_PLAYER_SWITCH_TYPE for the best switch type.
 * ----------------------------------------------------
 * Examples from the decompiled scripts:
 * STREAMING::START_PLAYER_SWITCH(l_832._f3, PLAYER::PLAYER_PED_ID(), 0, 3);
 * STREAMING::START_PLAYER_SWITCH(l_832._f3, PLAYER::PLAYER_PED_ID(), 2050, 3);
 * STREAMING::START_PLAYER_SWITCH(PLAYER::PLAYER_PED_ID(), l_832._f3, 1024, 3);
 * STREAMING::START_PLAYER_SWITCH(g_141F27, PLAYER::PLAYER_PED_ID(), 513, v_14);
 * Note: DO NOT, use SWITCH_TYPE_LONG with flag 513. It leaves you stuck in the clouds. You'll have to call STOP_PLAYER_SWITCH() to return to your ped.
 * Flag 8 w/ SWITCH_TYPE_LONG will zoom out 3 steps, then zoom in 2/3 steps and stop on the 3rd and just hang there.
 * Flag 8 w/ SWITCH_TYPE_MEDIUM will zoom out 1 step, and just hang there.
 */
declare function StartPlayerSwitch(_from: number, to: number, flags: number, switchType: number): void;

declare function StartPlayerTeleport(player: number, x: number, y: number, z: number, heading: number, p5: boolean, p6: boolean, p7: boolean): void;

declare function StartPreloadedConversation(): void;

/**
 * Starts recording a replay.
 * If mode is 0, turns on action replay.
 * If mode is 1, starts recording.
 * If already recording a replay, does nothing.
 */
declare function StartRecording(mode: number): void;
/**
 * Starts recording a replay.
 * If mode is 0, turns on action replay.
 * If mode is 1, starts recording.
 * If already recording a replay, does nothing.
 */
declare function N_0xc3ac2fff9612ac81(mode: number): void;

declare function StartRopeUnwindingFront(rope: number): void;

declare function StartRopeWinding(rope: number): void;

/**
 * Second parameter might be length.
 */
declare function StartSaveArray(p1: number, arrayName: string): number;

declare function StartSaveData(p1: number, p2: boolean): number;

/**
 * Second parameter might be length.
 */
declare function StartSaveStruct(p1: number, structName: string): number;

/**
 * playLength - is how long to play the effect for in milliseconds. If 0, it plays the default length
 * if loop is true, the effect wont stop until you call _STOP_SCREEN_EFFECT on it. (only loopable effects)
 * Example and list of screen FX: www.pastebin.com/dafBAjs0
 */
declare function StartScreenEffect(effectName: string, duration: number, looped: boolean): void;

declare function StartScriptConversation(p0: boolean, p1: boolean, p2: boolean, p3: boolean): void;

/**
 * Starts a fire:
 * xyz: Location of fire
 * maxChildren: The max amount of times a fire can spread to other objects. Must be 25 or less, or the function will do nothing.
 * isGasFire: Whether or not the fire is powered by gasoline.
 */
declare function StartScriptFire(X: number, Y: number, Z: number, maxChildren: number, isGasFire: boolean): number;

declare function StartScriptPhoneConversation(p0: boolean, p1: boolean): void;

declare function StartShapeTestBound(entity: number, flags1: number, flags2: number): number;
declare function N_0x37181417ce7c8900(entity: number, flags1: number, flags2: number): number;

declare function StartShapeTestBoundingBox(entity: number, flags1: number, flags2: number): number;
declare function N_0x052837721a854ec7(entity: number, flags1: number, flags2: number): number;

declare function StartShapeTestBox(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: number, p10: number, entity: number, p12: number): number;
declare function N_0xfe466162c4401d18(x: number, y: number, z: number, x1: number, y2: number, z2: number, rotX: number, rotY: number, rotZ: number, p9: number, p10: number, entity: number, p12: number): number;

/**
 * Raycast from point to point, where the ray has a radius.
 * flags:
 * vehicles=10
 * peds =12
 * Iterating through flags yields many ped / vehicle/ object combinations
 * p9 = 7, but no idea what it does
 * Entity is an entity to ignore
 */
declare function StartShapeTestCapsule(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: number): number;
/**
 * Raycast from point to point, where the ray has a radius.
 * flags:
 * vehicles=10
 * peds =12
 * Iterating through flags yields many ped / vehicle/ object combinations
 * p9 = 7, but no idea what it does
 * Entity is an entity to ignore
 */
declare function Cast_3dRayPointToPoint(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, radius: number, flags: number, entity: number, p9: number): number;

/**
 * Returns a ray (?) going from x1, y1, z1 to x2, y2, z2.
 * entity = 0 most of the time.
 * p8 = 7 most of the time.
 * Result of this function is passed to WORLDPROBE::_GET_RAYCAST_RESULT as a first argument.
 */
declare function StartShapeTestLosProbe(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;
/**
 * Returns a ray (?) going from x1, y1, z1 to x2, y2, z2.
 * entity = 0 most of the time.
 * p8 = 7 most of the time.
 * Result of this function is passed to WORLDPROBE::_GET_RAYCAST_RESULT as a first argument.
 */
declare function N_0x7ee9f5d83dd4f90e(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;

/**
 * Not sure how or why this differs from 0x7EE9F5D83DD4F90E, but it does.
 * This function casts a ray from Point1 to Point2 and returns it's ray handle.  A simple ray cast will 'shoot' a line from point A to point B, and return whether or not the ray reached it's destination or if it hit anything and if it did hit anything, will return the handle of what it hit (entity handle) and coordinates of where the ray reached.
 * You can use _GET_RAYCAST_RESULT to get the result of the raycast
 * Entity is an entity to ignore, such as the player.
 * Flags are intersection bit flags.  They tell the ray what to care about and what not to care about when casting. Passing -1 will intersect with everything, presumably.
 * Flags:
 * 1: Intersect with map
 * 2: Intersect with vehicles (used to be mission entities?) (includes train)
 * 4: Intersect with peds? (same as 8)
 * 8: Intersect with peds? (same as 4)
 * 16: Intersect with objects
 * 32: Unknown
 * 64: Unknown
 * 128: Unknown
 * 256: Intersect with vegetation (plants, coral. trees not included)
 * NOTE: Raycasts that intersect with mission_entites (flag = 2) has limited range and will not register for far away entites. The range seems to be about 30 metres.
 */
declare function StartShapeTestRay(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;
/**
 * Not sure how or why this differs from 0x7EE9F5D83DD4F90E, but it does.
 * This function casts a ray from Point1 to Point2 and returns it's ray handle.  A simple ray cast will 'shoot' a line from point A to point B, and return whether or not the ray reached it's destination or if it hit anything and if it did hit anything, will return the handle of what it hit (entity handle) and coordinates of where the ray reached.
 * You can use _GET_RAYCAST_RESULT to get the result of the raycast
 * Entity is an entity to ignore, such as the player.
 * Flags are intersection bit flags.  They tell the ray what to care about and what not to care about when casting. Passing -1 will intersect with everything, presumably.
 * Flags:
 * 1: Intersect with map
 * 2: Intersect with vehicles (used to be mission entities?) (includes train)
 * 4: Intersect with peds? (same as 8)
 * 8: Intersect with peds? (same as 4)
 * 16: Intersect with objects
 * 32: Unknown
 * 64: Unknown
 * 128: Unknown
 * 256: Intersect with vegetation (plants, coral. trees not included)
 * NOTE: Raycasts that intersect with mission_entites (flag = 2) has limited range and will not register for far away entites. The range seems to be about 30 metres.
 */
declare function CastRayPointToPoint(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, flags: number, entity: number, p8: number): number;

declare function StartVehicleAlarm(vehicle: number): number;

/**
 * Sounds the horn for the specified vehicle.
 * vehicle: The vehicle to activate the horn for.
 * mode: The hash of "NORMAL" or "HELDDOWN". Can be 0.
 * duration: The duration to sound the horn, in milliseconds.
 * Note: If a player is in the vehicle, it will only sound briefly.
 */
declare function StartVehicleHorn(vehicle: number, duration: number, mode: string | number, forever: boolean): void;

/**
 * Please change to "void"!
 * ---------------------------------
 * Example:
 * for (v_2 = 0; v_2 &lt;= 4; v_2 += 1) {
 * STATS::STAT_CLEAR_SLOT_FOR_RELOAD(v_2);
 * }
 */
declare function StatClearSlotForReload(statSlot: number): number;

declare function StatDeleteSlot(p0: number): number;

declare function StatGetBool(statHash: string | number, p2: number): [number, any /* actually bool */];

/**
 * p2 - Default value? Seems to be -1 most of the time.
 */
declare function StatGetBoolMasked(statName: string | number, mask: number, p2: number): number;

declare function StatGetDate(statHash: string | number, p2: number, p3: number): [number, number];

declare function StatGetFloat(statHash: string | number, p2: number): [number, number];

/**
 * p2 appears to always be -1
 */
declare function StatGetInt(statHash: string | number, p2: number): [number, number];

declare function StatGetLicensePlate(statName: string | number): string;

declare function StatGetMaskedInt(p0: number, p2: number, p3: number, p4: number): [number, number];

declare function StatGetNumberOfDays(statName: string | number): number;
declare function N_0xe0e854f5280fb769(statName: string | number): number;

declare function StatGetNumberOfHours(statName: string | number): number;
declare function N_0xf2d4b2fe415aafc3(statName: string | number): number;

declare function StatGetNumberOfMinutes(statName: string | number): number;
declare function N_0x7583b4be4c5a41b5(statName: string | number): number;

declare function StatGetNumberOfSeconds(statName: string | number): number;
declare function N_0x2ce056ff3723f00b(statName: string | number): number;

declare function StatGetPos(p0: number, p4: number): [number, number, number, number];

/**
 * p1 is always -1 in the script files
 */
declare function StatGetString(statHash: string | number, p1: number): string;

/**
 * Needs more research. Seems to return "STAT_UNKNOWN" if no such user id exists.
 */
declare function StatGetUserId(p0: number): string;

declare function StatIncrement(statName: string | number, value: number): void;

declare function StatLoad(p0: number): number;

declare function StatLoadPending(p0: number): number;

declare function StatSave(p0: number, p1: boolean, p2: number): number;

declare function StatSavePending(): number;

declare function StatSavePendingOrRequested(): number;

declare function StatSetBool(statName: string | number, value: boolean, save: boolean): number;

declare function StatSetBoolMasked(statName: string | number, value: boolean, mask: number, save: boolean): number;

/**
 * p1 always true.
 */
declare function StatSetCurrentPosixTime(statName: string | number, p1: boolean): number;

/**
 * 'value' is a structure to a structure, 'numFields' is how many fields there are in said structure (usually 7).
 * The structure looks like this:
 * int year
 * int month
 * int day
 * int hour
 * int minute
 * int second
 * int millisecond
 * The decompiled scripts use TIME::GET_POSIX_TIME to fill this structure.
 */
declare function StatSetDate(statName: string | number, numFields: number, save: boolean): [number, number];

declare function StatSetFloat(statName: string | number, value: number, save: boolean): number;

/**
 * The following values have been found in the decompiled scripts:
 * "RC_ABI1"
 * "RC_ABI2"
 * "RC_BA1"
 * "RC_BA2"
 * "RC_BA3"
 * "RC_BA3A"
 * "RC_BA3C"
 * "RC_BA4"
 * "RC_DRE1"
 * "RC_EPS1"
 * "RC_EPS2"
 * "RC_EPS3"
 * "RC_EPS4"
 * "RC_EPS5"
 * "RC_EPS6"
 * "RC_EPS7"
 * "RC_EPS8"
 * "RC_EXT1"
 * "RC_EXT2"
 * "RC_EXT3"
 * "RC_EXT4"
 * "RC_FAN1"
 * "RC_FAN2"
 * "RC_FAN3"
 * "RC_HAO1"
 * "RC_HUN1"
 * "RC_HUN2"
 * "RC_JOS1"
 * "RC_JOS2"
 * "RC_JOS3"
 * "RC_JOS4"
 * "RC_MAU1"
 * "RC_MIN1"
 * "RC_MIN2"
 * "RC_MIN3"
 * "RC_MRS1"
 * "RC_MRS2"
 * "RC_NI1"
 * "RC_NI1A"
 * "RC_NI1B"
 * "RC_NI1C"
 * "RC_NI1D"
 * "RC_NI2"
 * "RC_NI3"
 * "RC_OME1"
 * "RC_OME2"
 * "RC_PA1"
 * "RC_PA2"
 * "RC_PA3"
 * "RC_PA3A"
 * "RC_PA3B"
 * "RC_PA4"
 * "RC_RAM1"
 * "RC_RAM2"
 * "RC_RAM3"
 * "RC_RAM4"
 * "RC_RAM5"
 * "RC_SAS1"
 * "RC_TON1"
 * "RC_TON2"
 * "RC_TON3"
 * "RC_TON4"
 * "RC_TON5"
 */
declare function StatSetGxtLabel(statName: string | number, value: string, save: boolean): number;

/**
 * Add Cash example:
 * for (int i = 0; i &lt; 3; i++)
 * {
 * char statNameFull[32];
 * sprintf_s(statNameFull, "SP%d_TOTAL_CASH", i);
 * Hash hash = GAMEPLAY::GET_HASH_KEY(statNameFull);
 * int val;
 * STATS::STAT_GET_INT(hash, &amp;val, -1);
 * val += 1000000;
 * STATS::STAT_SET_INT(hash, val, 1);
 * }
 */
declare function StatSetInt(statName: string | number, value: number, save: boolean): number;

declare function StatSetLicensePlate(statName: string | number, str: string): number;

declare function StatSetMaskedInt(statName: string | number, p1: number, p2: number, p3: number, save: boolean): number;

declare function StatSetPos(statName: string | number, x: number, y: number, z: number, save: boolean): number;

/**
 * Does not take effect immediately, unfortunately.
 * profileSetting seems to only be 936, 937 and 938 in scripts
 */
declare function StatSetProfileSetting(profileSetting: number, value: number): void;
/**
 * Does not take effect immediately, unfortunately.
 * profileSetting seems to only be 936, 937 and 938 in scripts
 */
declare function N_0x68f01422be1d838f(profileSetting: number, value: number): void;

declare function StatSetString(statName: string | number, value: string, save: boolean): number;

declare function StatSetUserId(statName: string | number, value: string, save: boolean): number;

declare function StatSlotIsLoaded(p0: number): number;

/**
 * This seems like a hash collision?
 * p1 (toggle) was always 1 (true) except in one case in the b678 scripts.
 */
declare function SteerUnlockBias(vehicle: number, toggle: boolean): void;

/**
 * Example:
 * This will stop the alarm at Fort Zancudo.
 * AUDIO::STOP_ALARM("PORT_OF_LS_HEIST_FORT_ZANCUDO_ALARMS", 1);
 * First parameter (char) is the name of the alarm.
 * Second parameter (bool) has to be true (1) to have any effect.
 */
declare function StopAlarm(alarmName: string, toggle: boolean): void;

declare function StopAllAlarms(stop: boolean): void;

declare function StopAllGarageActivity(): void;

declare function StopAllScreenEffects(): void;

declare function StopAnimPlayback(ped: number, p1: number, p2: boolean): void;

declare function StopAnimTask(ped: number, animDictionary: string, animationName: string, p3: number): void;

declare function StopAnyPedModelBeingSuppressed(): void;

declare function StopAudioScene(scene: string): void;

/**
 * ??
 */
declare function StopAudioScenes(): void;

declare function StopCamPointing(cam: number): void;

declare function StopCamShaking(cam: number, p1: boolean): void;

declare function StopCinematicCamShaking(p0: boolean): void;

declare function StopCinematicShot(p0: number): void;

/**
 * Needs to be called every frame.
 */
declare function StopCurrentPlayingAmbientSpeech(ped: number): void;

declare function StopCutscene(p0: boolean): void;

declare function StopCutsceneCamShaking(): void;

declare function StopCutsceneImmediately(): void;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 * RAGEPluginHook list: docs.ragepluginhook.net/html/62951c37-a440-478c-b389-c471230ddfc5.htm
 */
declare function StopEntityAnim(entity: number, animation: string, animGroup: string, p3: number): number;

declare function StopEntityFire(entity: number): void;

declare function StopFireInRange(x: number, y: number, z: number, radius: number): void;

declare function StopGameplayCamShaking(p0: boolean): void;

declare function StopGameplayHint(p0: boolean): void;

declare function StopPadShake(p0: number): void;

/**
 * p1 is always 0 in the native scripts
 */
declare function StopParticleFxLooped(ptfxHandle: number, p1: boolean): void;

declare function StopPedRingtone(ped: number): void;

declare function StopPedSpeaking(ped: number, shaking: boolean): void;

declare function StopPedWeaponFiringWhenDropped(ped: number): void;

declare function StopPlaybackRecordedVehicle(p0: number): void;

declare function StopPlayerSwitch(): void;

/**
 * Disables the player's teleportation
 */
declare function StopPlayerTeleport(): void;

/**
 * Stops recording and discards the recorded clip.
 */
declare function StopRecordingAndDiscardClip(): void;
/**
 * Stops recording and discards the recorded clip.
 */
declare function N_0x88bb3507ed41a240(): void;

/**
 * Stops recording and saves the recorded clip.
 */
declare function StopRecordingAndSaveClip(): void;
/**
 * Stops recording and saves the recorded clip.
 */
declare function StopRecording(): void;

declare function StopRopeUnwindingFront(rope: number): void;

declare function StopRopeWinding(rope: number): void;

declare function StopSaveArray(): void;

declare function StopSaveData(): void;

declare function StopSaveStruct(): void;

declare function StopScreenEffect(effectName: string): void;

/**
 * In drunk_controller.c4, sub_309
 * if (CAM::_C912AF078AF19212()) {
 * CAM::_1C9D7949FA533490(0);
 * }
 */
declare function StopScriptGlobalShaking(p0: boolean): void;
/**
 * In drunk_controller.c4, sub_309
 * if (CAM::_C912AF078AF19212()) {
 * CAM::_1C9D7949FA533490(0);
 * }
 */
declare function N_0x1c9d7949fa533490(p0: boolean): void;

declare function StopScriptedConversation(p0: boolean): number;

declare function StopSound(soundId: number): void;

declare function StopStream(): void;

declare function StopSynchronizedAudioEvent(p0: number): number;

/**
 * p1 sync task id?
 */
declare function StopSynchronizedEntityAnim(entity: number, p1: number, p2: boolean): number;

declare function StopSynchronizedMapEntityAnim(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): number;

/**
 * Returns false if it's a null or empty string or if the string is too long. outInteger will be set to -999 in that case.
 * If all checks have passed successfully, the return value will be set to whatever strtol(string, 0i64, 10); returns.
 */
declare function StringToInt(_string: string, outInteger: number): number;

declare function SuppressAgitationEventsNextFrame(): void;

declare function SuppressShockingEventTypeNextFrame(_type: number): void;

declare function SuppressShockingEventsNextFrame(): void;

/**
 * This was previously named as "RESERVE_ENTITY_EXPLODES_ON_HIGH_EXPLOSION_COMBO"
 * which is obviously incorrect.
 * Seems to only appear in scripts used in Singleplayer. p1 ranges from 2 - 46.
 * I assume this switches the crime type
 */
declare function SwitchCrimeType(player: number, p1: number): void;
/**
 * This was previously named as "RESERVE_ENTITY_EXPLODES_ON_HIGH_EXPLOSION_COMBO"
 * which is obviously incorrect.
 * Seems to only appear in scripts used in Singleplayer. p1 ranges from 2 - 46.
 * I assume this switches the crime type
 */
declare function N_0x9a987297ed8bd838(player: number, p1: number): void;

/**
 * fucks up on mount chilliad
 */
declare function SwitchOutPlayer(ped: number, flags: number, unknown: number): void;
/**
 * fucks up on mount chilliad
 */
declare function N_0xaab3200ed59016bc(ped: number, flags: number, unknown: number): void;

declare function SwitchTrainTrack(intersectionId: number, state: boolean): number;

declare function Tan(p0: number): number;

/**
 * Makes the specified ped achieve the specified heading.
 * pedHandle: The handle of the ped to assign the task to.
 * heading: The desired heading.
 * timeout: The time, in milliseconds, to allow the task to complete. If the task times out, it is cancelled, and the ped will stay at the heading it managed to reach in the time.
 */
declare function TaskAchieveHeading(ped: number, heading: number, timeout: number): void;

declare function TaskAimGunAtCoord(ped: number, x: number, y: number, z: number, time: number, p5: boolean, p6: boolean): void;

/**
 * duration: the amount of time in milliseconds to do the task.  -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 */
declare function TaskAimGunAtEntity(ped: number, entity: number, duration: number, p3: boolean): void;

declare function TaskAimGunScripted(ped: number, scriptTask: string | number, p2: boolean, p3: boolean): void;

declare function TaskAimGunScriptedWithTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: boolean): void;

/**
 * Example from "me_amanda1.ysc.c4":
 * AI::TASK_ARREST_PED(l_19F  -- [[ This is a Ped ]]  , PLAYER::PLAYER_PED_ID());
 * Example from "armenian1.ysc.c4":
 * if (!PED::IS_PED_INJURED(l_B18[0 -- [[1]] ])) {
 * AI::TASK_ARREST_PED(l_B18[0 -- [[1]] ], PLAYER::PLAYER_PED_ID());
 * }
 * I would love to have time to experiment to see if a player Ped can arrest another Ped. Might make for a good cop mod.
 * Looks like only the player can be arrested this way. Peds react and try to arrest you if you task them, but the player charater doesn't do anything if tasked to arrest another ped.
 */
declare function TaskArrestPed(ped: number, target: number): void;

/**
 * You need to call PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS after TASK_BOAT_MISSION in order for the task to execute.
 * Working example
 * float vehicleMaxSpeed = VEHICLE::_GET_VEHICLE_MAX_SPEED(ENTITY::GET_ENTITY_MODEL(pedVehicle));
 * AI::TASK_BOAT_MISSION(pedDriver, pedVehicle, 0, 0, waypointCoord.x, waypointCoord.y, waypointCoord.z, 4, vehicleMaxSpeed, 786469, -1.0, 7);
 * PED::SET_BLOCKING_OF_NON_TEMPORARY_EVENTS(pedDriver, 1);
 * P8 appears to be driving style flag - see gtaforums.com/topic/822314-guide-driving-styles/ for documentation
 */
declare function TaskBoatMission(pedDriver: number, boat: number, p2: number, p3: number, x: number, y: number, z: number, p7: number, maxSpeed: number, drivingStyle: number, p10: number, p11: number): void;

/**
 * p2 tend to be 16, 17 or 1
 * p3 to p7 tend to be 0.0
 */
declare function TaskChatToPed(ped: number, target: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function TaskClearDefensiveArea(p0: number): void;

/**
 * Not clear what it actually does, but here's how script uses it -
 * if (OBJECT::HAS_PICKUP_BEEN_COLLECTED(...)
 * {
 * if(ENTITY::DOES_ENTITY_EXIST(PLAYER::PLAYER_PED_ID()))
 * {
 * AI::TASK_CLEAR_LOOK_AT(PLAYER::PLAYER_PED_ID());
 * }
 * ...
 * }
 * Another one where it doesn't "look" at current player -
 * AI::TASK_PLAY_ANIM(l_3ED, "missheist_agency2aig_2", "look_at_phone_a", 1000.0, -2.0, -1, 48, v_2, 0, 0, 0);
 * PED::_2208438012482A1A(l_3ED, 0, 0);
 * AI::TASK_CLEAR_LOOK_AT(l_3ED);
 */
declare function TaskClearLookAt(ped: number): void;

/**
 * Climbs or vaults the nearest thing.
 */
declare function TaskClimb(ped: number, unused: boolean): void;

declare function TaskClimbLadder(ped: number, p1: number): void;

/**
 * Despite its name, it only attacks ONE hated target. The one closest hated target.
 * p2 seems to be always 0
 */
declare function TaskCombatHatedTargetsAroundPed(ped: number, radius: number, p2: number): void;

declare function TaskCombatHatedTargetsAroundPedTimed(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Despite its name, it only attacks ONE hated target. The one closest to the specified position.
 */
declare function TaskCombatHatedTargetsInArea(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;

/**
 * Makes the specified ped attack the target ped.
 * p2 should be 0
 * p3 should be 16
 */
declare function TaskCombatPed(ped: number, targetPed: number, p2: number, p3: number): void;

declare function TaskCombatPedTimed(p0: number, ped: number, p2: number, p3: number): void;

declare function TaskCower(ped: number, duration: number): void;

/**
 * Example:
 * AI::TASK_DRIVE_BY(l_467[1 -- [[22]] ], PLAYER::PLAYER_PED_ID(), 0, 0.0, 0.0, 2.0, 300.0, 100, 0, ${firing_pattern_burst_fire_driveby});
 * Needs working example. Doesn't seem to do anything.
 * I marked p2 as targetVehicle as all these shooting related tasks seem to have that in common.
 * I marked p6 as distanceToShoot as if you think of GTA's Logic with the native SET_VEHICLE_SHOOT natives, it won't shoot till it gets within a certain distance of the target.
 * I marked p7 as pedAccuracy as it seems it's mostly 100 (Completely Accurate), 75, 90, etc. Although this could be the ammo count within the gun, but I highly doubt it. I will change this comment once I find out if it's ammo count or not.
 */
declare function TaskDriveBy(driverPed: number, targetPed: number, targetVehicle: number, targetX: number, targetY: number, targetZ: number, distanceToShoot: number, pedAccuracy: number, p8: boolean, firingPattern: string | number): void;

/**
 * speed 1.0 = walk, 2.0 = run
 * p5 1 = normal, 3 = teleport to vehicle, 16 = teleport directly into vehicle
 * p6 is always 0
 * Usage of seat
 * -1 = driver
 * 0 = passenger
 * 1 = left back seat
 * 2 = right back seat
 * 3 = outside left
 * 4 = outside right
 */
declare function TaskEnterVehicle(ped: number, vehicle: number, timeout: number, seat: number, speed: number, p5: number, p6: number): void;

declare function TaskEveryoneLeaveVehicle(vehicle: number): void;

declare function TaskExitCover(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * MulleKD19: Adds a new point to the current point route. Call TASK_FLUSH_ROUTE before the first call to this. Call TASK_FOLLOW_POINT_ROUTE to make the Ped go the route.
 * A maximum of 8 points can be added.
 */
declare function TaskExtendRoute(x: number, y: number, z: number): void;

/**
 * MulleKD19: Clears the current point route. Call this before TASK_EXTEND_ROUTE and TASK_FOLLOW_POINT_ROUTE.
 */
declare function TaskFlushRoute(): void;

/**
 * If no timeout, set timeout to -1.
 */
declare function TaskFollowNavMeshToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, stoppingRange: number, persistFollowing: boolean, unk: number): void;

declare function TaskFollowNavMeshToCoordAdvanced(ped: number, x: number, y: number, z: number, speed: number, timeout: number, unkFloat: number, unkInt: number, unkX: number, unkY: number, unkZ: number, unk_40000f: number): void;

/**
 * MulleKD19: Makes the ped go on the created point route.
 * ped: The ped to give the task to.
 * speed: The speed to move at in m/s.
 * int: Unknown. Can be 0, 1, 2 or 3.
 * Example:
 * TASK_FLUSH_ROUTE();
 * TASK_EXTEND_ROUTE(0f, 0f, 70f);
 * TASK_EXTEND_ROUTE(10f, 0f, 70f);
 * TASK_EXTEND_ROUTE(10f, 10f, 70f);
 * TASK_FOLLOW_POINT_ROUTE(GET_PLAYER_PED(), 1f, 0);
 */
declare function TaskFollowPointRoute(ped: number, speed: number, unknown: number): void;

/**
 * p6 always -1
 * p7 always 10.0
 * p8 always 1
 */
declare function TaskFollowToOffsetOfEntity(ped: number, entity: number, offsetX: number, offsetY: number, offsetZ: number, movementSpeed: number, timeout: number, stoppingRange: number, persistFollowing: boolean): void;

declare function TaskFollowWaypointRecording(p0: number, p1: number, p2: number, p3: number, p4: number): void;

/**
 * p2 always false
 * [30/03/2017] ins1de :
 * See dev-c.com/nativedb/func/info/f28965d04f570dca
 */
declare function TaskForceMotionState(ped: number, state: string | number, p2: boolean): void;

/**
 * Jenkins of this native is 0x4293601F. This is the actual name.
 */
declare function TaskGetOffBoat(ped: number, boat: number): void;

declare function TaskGoStraightToCoord(ped: number, x: number, y: number, z: number, speed: number, timeout: number, targetHeading: number, distanceToSlide: number): void;

declare function TaskGoStraightToCoordRelativeToEntity(entity1: number, entity2: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

/**
 * The ped will walk or run towards goToLocation, aiming towards goToLocation or focusLocation (depending on the aimingFlag) and shooting if shootAtEnemies = true to any enemy in his path.
 * If the ped is closer than noRoadsDistance, the ped will ignore pathing/navmesh and go towards goToLocation directly. This could cause the ped to get stuck behind tall walls if the goToLocation is on the other side. To avoid this, use 0.0f and the ped will always use pathing/navmesh to reach his destination.
 * If the speed is set to 0.0f, the ped will just stand there while aiming, if set to 1.0f he will walk while aiming, 2.0f will run while aiming.
 * The ped will stop aiming when he is closer than distanceToStopAt to goToLocation.
 * I still can't figure out what unkTrue is used for. I don't notice any difference if I set it to false but in the decompiled scripts is always true.
 * I think that unkFlag, like the driving styles, could be a flag that "work as a list of 32 bits converted to a decimal integer. Each bit acts as a flag, and enables or disables a function". What leads me to this conclusion is the fact that in the decompiled scripts, unkFlag takes values like: 0, 1, 5 (101 in binary) and 4097 (4096 + 1 or 1000000000001 in binary). For now, I don't know what behavior enable or disable this possible flag so I leave it at 0.
 * Note: After some testing, using unkFlag = 16 (0x10) enables the use of sidewalks while moving towards goToLocation.
 * The aimingFlag takes 2 values: 0 to aim at the focusLocation, 1 to aim at where the ped is heading (goToLocation).
 * Example:
 * enum AimFlag
 * {
 * AimAtFocusLocation,
 * AimAtGoToLocation
 * };
 * Vector3 goToLocation1 = { 996.2867f, 0, -2143.044f, 0, 28.4763f, 0 }; // remember the padding.
 * Vector3 goToLocation2 = { 990.2867f, 0, -2140.044f, 0, 28.4763f, 0 }; // remember the padding.
 * Vector3 focusLocation = { 994.3478f, 0, -2136.118f, 0, 29.2463f, 0 }; // the coord z should be a little higher, around +1.0f to avoid aiming at the ground
 * // 1st example
 * AI::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD(pedHandle, goToLocation1.x, goToLocation1.y, goToLocation1.z, focusLocation.x, focusLocation.y, focusLocation.z, 2.0f  -- [[run]] , true  -- [[shoot]] , 3.0f  -- [[stop at]] , 0.0f  -- [[noRoadsDistance]] , true  -- [[always true]] , 0  -- [[possible flag]] , AimFlag::AimAtGoToLocation, -957453492  -- [[FullAuto pattern]] );
 * // 2nd example
 * AI::TASK_GO_TO_COORD_AND_AIM_AT_HATED_ENTITIES_NEAR_COORD(pedHandle, goToLocation2.x, goToLocation2.y, goToLocation2.z, focusLocation.x, focusLocation.y, focusLocation.z, 1.0f  -- [[walk]] , false  -- [[don't shoot]] , 3.0f  -- [[stop at]] , 0.0f  -- [[noRoadsDistance]] , true  -- [[always true]] , 0  -- [[possible flag]] , AimFlag::AimAtFocusLocation, -957453492  -- [[FullAuto pattern]] );
 * 1st example: The ped (pedhandle) will run towards goToLocation1. While running and aiming towards goToLocation1, the ped will shoot on sight to any enemy in his path, using "FullAuto" firing pattern. The ped will stop once he is closer than distanceToStopAt to goToLocation1.
 * 2nd example: The ped will walk towards goToLocation2. This time, while walking towards goToLocation2 and aiming at focusLocation, the ped will point his weapon on sight to any enemy in his path without shooting. The ped will stop once he is closer than distanceToStopAt to goToLocation2.
 */
declare function TaskGoToCoordAndAimAtHatedEntitiesNearCoord(pedHandle: number, goToLocationX: number, goToLocationY: number, goToLocationZ: number, focusLocationX: number, focusLocationY: number, focusLocationZ: number, speed: number, shootAtEnemies: boolean, distanceToStopAt: number, noRoadsDistance: number, unkTrue: boolean, unkFlag: number, aimingFlag: number, firingPattern: string | number): void;

/**
 * example from fm_mission_controller
 * AI::TASK_GO_TO_COORD_ANY_MEANS(l_649, sub_f7e86(-1, 0), 1.0, 0, 0, 786603, 0xbf800000);
 */
declare function TaskGoToCoordAnyMeans(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number): void;

declare function TaskGoToCoordAnyMeansExtraParams(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number, p9: number, p10: number, p11: number): void;

declare function TaskGoToCoordAnyMeansExtraParamsWithCruiseSpeed(ped: number, x: number, y: number, z: number, speed: number, p5: number, p6: boolean, walkingStyle: number, p8: number, p9: number, p10: number, p11: number, p12: number): void;

/**
 * movement_speed: mostly 2f, but also 1/1.2f, etc.
 * p8: always false
 * p9: 2f
 * p10: 0.5f
 * p11: true
 * p12: 0 / 512 / 513, etc.
 * p13: 0
 * firing_pattern: ${firing_pattern_full_auto}, 0xC6EE6B4C
 */
declare function TaskGoToCoordWhileAimingAtCoord(ped: number, x: number, y: number, z: number, aimAtX: number, aimAtY: number, aimAtZ: number, moveSpeed: number, p8: boolean, p9: number, p10: number, p11: boolean, flags: number, p13: boolean, firingPattern: string | number): void;

declare function TaskGoToCoordWhileAimingAtEntity(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: number, p11: boolean, p12: number, p13: number): void;

/**
 * The entity will move towards the target until time is over (duration) or get in target's range (distance). p5 and p6 are unknown, but you could leave p5 = 1073741824 or 100 or even 0 (didn't see any difference but on the decompiled scripts, they use 1073741824 mostly) and p6 = 0
 * Note: I've only tested it on entity -&gt; ped and target -&gt; vehicle. It could work differently on other entities, didn't try it yet.
 * Example: AI::TASK_GO_TO_ENTITY(pedHandle, vehicleHandle, 5000, 4.0, 100, 1073741824, 0)
 * Ped will run towards the vehicle for 5 seconds and stop when time is over or when he gets 4 meters(?) around the vehicle (with duration = -1, the task duration will be ignored).
 */
declare function TaskGoToEntity(entity: number, target: number, duration: number, distance: number, speed: number, p5: number, p6: number): void;

declare function TaskGoToEntityWhileAimingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean, p7: number, p8: number, p9: boolean, p10: boolean, p11: number): void;

/**
 * shootatEntity:
 * If true, peds will shoot at Entity till it is dead.
 * If false, peds will just walk till they reach the entity and will cease shooting.
 */
declare function TaskGoToEntityWhileAimingAtEntity(ped: number, entityToWalkTo: number, entityToAimAt: number, speed: number, shootatEntity: boolean, p5: number, p6: number, p7: boolean, p8: boolean, firingPattern: string | number): void;

/**
 * eg
 * AI::TASK_GOTO_ENTITY_AIMING(v_2, PLAYER::PLAYER_PED_ID(), 5.0, 25.0);
 * ped = Ped you want to perform this task.
 * target = the Entity they should aim at.
 * distanceToStopAt = distance from the target, where the ped should stop to aim.
 * StartAimingDist = distance where the ped should start to aim.
 */
declare function TaskGotoEntityAiming(ped: number, target: number, distanceToStopAt: number, StartAimingDist: number): void;

declare function TaskGotoEntityOffset(ped: number, p1: number, p2: number, x: number, y: number, z: number, duration: number): void;

declare function TaskGotoEntityOffsetXy(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): void;

declare function TaskGuardAssignedDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): void;

/**
 * From re_prisonvanbreak:
 * AI::TASK_GUARD_CURRENT_POSITION(l_DD, 35.0, 35.0, 1);
 */
declare function TaskGuardCurrentPosition(p0: number, p1: number, p2: number, p3: boolean): void;

/**
 * p0 - Guessing PedID
 * p1, p2, p3 - XYZ?
 * p4 - ???
 * p5 - Maybe the size of sphere from XYZ?
 * p6 - ???
 * p7, p8, p9 - XYZ again?
 * p10 - Maybe the size of sphere from second XYZ?
 */
declare function TaskGuardSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): void;

/**
 * In the scripts, p3 was always -1.
 * p3 seems to be duration or timeout of turn animation.
 * Also facingPed can be 0 or -1 so ped will just raise hands up.
 */
declare function TaskHandsUp(ped: number, duration: number, facingPed: number, p3: number, p4: boolean): void;

/**
 * Ped pilot should be in a heli.
 * EntityToFollow can be a vehicle or Ped.
 * x,y,z appear to be how close to the EntityToFollow the heli should be. Scripts use 0.0, 0.0, 80.0. Then the heli tries to position itself 80 units above the EntityToFollow. If you reduce it to -5.0, it tries to go below (if the EntityToFollow is a heli or plane)
 * NOTE: If the pilot finds enemies, it will engage them, then remain there idle, not continuing to chase the Entity given.
 */
declare function TaskHeliChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;

/**
 * Needs more research.
 * Default value of p13 is -1.0 or 0xBF800000.
 * Default value of p14 is 0.
 * Modified examples from "fm_mission_controller.ysc", line ~203551:
 * AI::TASK_HELI_MISSION(ped, vehicle, 0, 0, posX, posY, posZ, 4, 1.0, -1.0, -1.0, 10, 10, 5.0, 0);
 * AI::TASK_HELI_MISSION(ped, vehicle, 0, 0, posX, posY, posZ, 4, 1.0, -1.0, -1.0, 0, ?, 5.0, 4096);
 * int mode seams to set mission type 4 = coords target, 23 = ped target.
 * int 14 set to 32 = ped will land at destination.
 * My findings:
 * mode 4 or 7 forces heli to snap to the heading set
 * 8 makes the heli flee from the ped.
 * 9 circles around ped with angle set
 * 10, 11 normal + imitate ped heading
 * 20 makes the heli land when he's near the ped. It won't resume chasing.
 * 21 emulates an helicopter crash
 * 23 makes the heli circle erratically around ped
 * I change p2 to 'vehicleToFollow' as it seems to work like the task natives to set targets. In the heli_taxi script where as the merryweather heli takes you to your waypoint it has no need to follow a vehicle or a ped, so of course both have 0 set.
 */
declare function TaskHeliMission(pilot: number, vehicle: number, vehicleToFollow: number, pedToFollow: number, posX: number, posY: number, posZ: number, mode: number, speed: number, radius: number, angle: number, p11: number, height: number, p13: number, p14: number): void;

/**
 * Definition is wrong. This has 4 parameters (Not sure when they were added. v350 has 2, v678 has 4).
 * v350: Ped ped, bool unused
 * v678: Ped ped, bool unused, bool flag1, bool flag2
 * flag1 = super jump, flag2 = do nothing if flag1 is false and doubles super jump height if flag1 is true.
 */
declare function TaskJump(ped: number, unused: boolean): void;

declare function TaskLeaveAnyVehicle(ped: number, p1: number, p2: number): void;

/**
 * Flags from decompiled scripts:
 * 0 = normal exit and closes door.
 * 1 = normal exit and closes door.
 * 16 = teleports outside, door kept closed.
 * 64 = normal exit and closes door, maybe a bit slower animation than 0.
 * 256 = normal exit but does not close the door.
 * 4160 = ped is throwing himself out, even when the vehicle is still.
 * 262144 = ped moves to passenger seat first, then exits normally
 * Others to be tried out: 320, 512, 131072.
 */
declare function TaskLeaveVehicle(ped: number, vehicle: number, flags: number): void;

/**
 * p5 = 0, p6 = 2
 */
declare function TaskLookAtCoord(entity: number, x: number, y: number, z: number, duration: number, p5: number, p6: number): void;

/**
 * param3: duration in ms, use -1 to look forever
 * param4: using 2048 is fine
 * param5: using 3 is fine
 */
declare function TaskLookAtEntity(ped: number, lookAt: number, duration: number, unknown1: number, unknown2: number): void;

/**
 * Example:
 * AI::_2D537BA194896636(PLAYER::PLAYER_PED_ID(), "arm_wrestling_sweep_paired_a_rev3", 0.0, 1, "mini@arm_wrestling", 0);
 */
declare function TaskMoveNetwork(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;
/**
 * Example:
 * AI::_2D537BA194896636(PLAYER::PLAYER_PED_ID(), "arm_wrestling_sweep_paired_a_rev3", 0.0, 1, "mini@arm_wrestling", 0);
 */
declare function N_0x2d537ba194896636(ped: number, task: string, multiplier: number, p3: boolean, animDict: string, flags: number): void;

/**
 * Example:
 * AI::_D5B35BEA41919ACB(PLAYER::PLAYER_PED_ID(), "minigame_tattoo_michael_parts", 324.13, 181.29, 102.6, 0.0, 0.0, 22.32, 2, 0, 0, 0, 0);
 */
declare function TaskMoveNetworkAdvanced(ped: number, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, animDict: string, flags: number): void;
/**
 * Example:
 * AI::_D5B35BEA41919ACB(PLAYER::PLAYER_PED_ID(), "minigame_tattoo_michael_parts", 324.13, 181.29, 102.6, 0.0, 0.0, 22.32, 2, 0, 0, 0, 0);
 */
declare function N_0xd5b35bea41919acb(ped: number, p1: string, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean, animDict: string, flags: number): void;

declare function TaskOpenVehicleDoor(ped: number, vehicle: number, timeOut: number, doorIndex: number, speed: number): void;

/**
 * This function has a third parameter as well (bool).
 * Second parameter is unused.
 * seconds parameter was for jetpack in the early stages of gta and the hard coded code is now removed
 */
declare function TaskParachute(ped: number, p1: boolean): void;

/**
 * makes ped parachute to coords x y z. Works well with PATHFIND::GET_SAFE_COORD_FOR_PED
 */
declare function TaskParachuteToTarget(ped: number, x: number, y: number, z: number): void;

/**
 * After looking at some scripts the second parameter seems to be an id of some kind. Here are some I found from some R* scripts:
 * "miss_Tower_01" (this went from 01 - 10)
 * "miss_Ass0" (0, 4, 6, 3)
 * "MISS_PATROL_8"
 * I think they're patrol routes, but I'm not sure. And I believe the 3rd parameter is a BOOL, but I can't confirm other than only seeing 0 and 1 being passed.
 * As far as I can see the patrol routes names such as "miss_Ass0" have been defined earlier in the scripts. This leads me to believe we can defined our own new patrol routes by following the same approach.
 * From the scripts
 * AI::OPEN_PATROL_ROUTE("miss_Ass0");
 * AI::ADD_PATROL_ROUTE_NODE(0, "WORLD_HUMAN_GUARD_STAND", l_738[0 -- [[3]] ], -139.4076690673828, -993.4732055664062, 26.2754, GAMEPLAY::GET_RANDOM_INT_IN_RANGE(5000, 10000));
 * AI::ADD_PATROL_ROUTE_NODE(1, "WORLD_HUMAN_GUARD_STAND", l_738[1 -- [[3]] ], -116.1391830444336, -987.4984130859375, 26.38541030883789, GAMEPLAY::GET_RANDOM_INT_IN_RANGE(5000, 10000));
 * AI::ADD_PATROL_ROUTE_NODE(2, "WORLD_HUMAN_GUARD_STAND", l_738[2 -- [[3]] ], -128.46847534179688, -979.0340576171875, 26.2754, GAMEPLAY::GET_RANDOM_INT_IN_RANGE(5000, 10000));
 * AI::ADD_PATROL_ROUTE_LINK(0, 1);
 * AI::ADD_PATROL_ROUTE_LINK(1, 2);
 * AI::ADD_PATROL_ROUTE_LINK(2, 0);
 * AI::CLOSE_PATROL_ROUTE();
 * AI::CREATE_PATROL_ROUTE();
 */
declare function TaskPatrol(ped: number, p1: string, p2: number, p3: boolean, p4: boolean): void;

/**
 * Stand still (?)
 */
declare function TaskPause(ped: number, ms: number): void;

declare function TaskPedSlideToCoord(ped: number, x: number, y: number, z: number, heading: number, p5: number): void;

declare function TaskPedSlideToCoordHdgRate(ped: number, x: number, y: number, z: number, heading: number, p5: number, p6: number): void;

declare function TaskPerformSequence(ped: number, taskSequence: number): number;

declare function TaskPerformSequenceFromProgress(p0: number, p1: number, p2: number, p3: number): void;

declare function TaskPlaneChase(pilot: number, entityToFollow: number, x: number, y: number, z: number): void;

/**
 * Function.Call(Hash.TASK_PLANE_LAND, pilot, selectedAirplane, runwayStartPoint.X, runwayStartPoint.Y, runwayStartPoint.Z, runwayEndPoint.X, runwayEndPoint.Y, runwayEndPoint.Z);
 */
declare function TaskPlaneLand(pilot: number, plane: number, runwayStartX: number, runwayStartY: number, runwayStartZ: number, runwayEndX: number, runwayEndY: number, runwayEndZ: number): void;

/**
 * EXAMPLE USAGE:
 * Fly around target (Precautiously, keeps high altitude):
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, 200f);
 * Fly around target (Dangerously, keeps VERY low altitude):
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -500f);
 * Fly directly into target:
 * Function.Call(Hash.TASK_PLANE_MISSION, pilot, selectedAirplane, 0, 0, Target.X, Target.Y, Target.Z, 4, 100f, 0f, 90f, 0, -5000f);
 * EXPANDED INFORMATION FOR ADVANCED USAGE (custom pilot)
 * 'physicsSpeed': (THIS IS NOT YOUR ORDINARY SPEED PARAMETER: READ!!)
 * Think of this -first- as a radius value, not a true speed value.  The ACTUAL effective speed of the plane will be that of the maximum speed permissible to successfully fly in a -circle- with a radius of 'physicsSpeed'.  This also means that the plane must complete a circle before it can begin its "bombing run", its straight line pass towards the target.  p9 appears to influence the angle at which a "bombing run" begins, although I can't confirm yet.
 * VERY IMPORTANT: A "bombing run" will only occur if a plane can successfully determine a possible navigable route (the slower the value of 'physicsSpeed', the more precise the pilot can be due to less influence of physics on flightpath).  Otherwise, the pilot will continue to patrol around Destination (be it a dynamic Entity position vector or a fixed world coordinate vector.)
 * 0 = Plane's physics are almost entirely frozen, plane appears to "orbit" around precise destination point
 * 1-299 = Blend of "frozen, small radius" vs. normal vs. "accelerated, hyperfast, large radius"
 * 300+ =  Vehicle behaves entirely like a normal gameplay plane.
 * 'patrolBlend' (The lower the value, the more the Destination is treated as a "fly AT" rather than a "fly AROUND point".)
 * Scenario: Destination is an Entity on ground level, wide open field
 * -5000 = Pilot kamikazes directly into Entity
 * -1000 = Pilot flies extremely low -around- Entity, very prone to crashing
 * -200 = Pilot flies lower than average around Entity.
 * 0 = Pilot flies around Entity, normal altitude
 * 200 = Pilot flies an extra eighty units or so higher than 0 while flying around Destination (this doesn't seem to correlate directly into distance units.)
 * -- Valid mission types found in the exe: --
 * 0 = None
 * 1 = Unk
 * 2 = CTaskVehicleRam
 * 3 = CTaskVehicleBlock
 * 4 = CTaskVehicleGoToPlane
 * 5 = CTaskVehicleStop
 * 6 = CTaskVehicleAttack
 * 7 = CTaskVehicleFollow
 * 8 = CTaskVehicleFleeAirborne
 * 9= CTaskVehicleCircle
 * 10 = CTaskVehicleEscort
 * 15 = CTaskVehicleFollowRecording
 * 16 = CTaskVehiclePoliceBehaviour
 * 17 = CTaskVehicleCrash
 */
declare function TaskPlaneMission(pilot: number, plane: number, targetVehicle: number, targetPed: number, destinationX: number, destinationY: number, destinationZ: number, missionType: number, vehicleSpeed: number, p9: number, heading: number, maxAltitude: number, minAltitude: number): void;

declare function TaskPlantBomb(ped: number, x: number, y: number, z: number, heading: number): void;

/**
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 * float speed &gt; normal speed is 8.0f
 * ----------------------
 * float speedMultiplier &gt; multiply the playback speed
 * ----------------------
 * int duration: time in millisecond
 * ----------------------
 * -1 _ _ _ _ _ _ _&gt; Default (see flag)
 * 0 _ _ _ _ _ _ _ &gt; Not play at all
 * Small value _ _ &gt; Slow down animation speed
 * Other _ _ _ _ _ &gt; freeze player control until specific time (ms) has
 * _ _ _ _ _ _ _ _ _ passed. (No effect if flag is set to be
 * _ _ _ _ _ _ _ _ _ controllable.)
 * int flag:
 * ----------------------
 * enum eAnimationFlags
 * {
 * ANIM_FLAG_NORMAL = 0,
 * ANIM_FLAG_REPEAT = 1,
 * ANIM_FLAG_STOP_LAST_FRAME = 2,
 * ANIM_FLAG_UPPERBODY = 16,
 * ANIM_FLAG_ENABLE_PLAYER_CONTROL = 32,
 * ANIM_FLAG_CANCELABLE = 120,
 * };
 * Odd number : loop infinitely
 * Even number : Freeze at last frame
 * Multiple of 4: Freeze at last frame but controllable
 * 01 to 15 &gt; Full body
 * 10 to 31 &gt; Upper body
 * 32 to 47 &gt; Full body &gt; Controllable
 * 48 to 63 &gt; Upper body &gt; Controllable
 * ...
 * 001 to 255 &gt; Normal
 * 256 to 511 &gt; Garbled
 * ...
 * playbackRate:
 * values are between 0.0 and 1.0
 * lockX:
 * 0 in most cases 1 for rcmepsilonism8 and rcmpaparazzo_3
 * &gt; 1 for mini@sprunk
 * lockY:
 * 0 in most cases
 * 1 for missfam5_yoga, missfra1mcs_2_crew_react
 * lockZ:
 * 0 for single player
 * Can be 1 but only for MP
 */
declare function TaskPlayAnim(ped: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, lockX: boolean, lockY: boolean, lockZ: boolean): void;

/**
 * It's similar to the one above, except the first 6 floats let you specify the initial position and rotation of the task. (Ped gets teleported to the position). animTime is a float from 0.0 -&gt; 1.0, lets you start an animation from given point. The rest as in AI::TASK_PLAY_ANIM.
 * Rotation information : rotX and rotY don't seem to have any effect, only rotZ works.
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function TaskPlayAnimAdvanced(ped: number, animDict: string, animName: string, posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, speed: number, speedMultiplier: number, duration: number, flag: number, animTime: number, p14: number, p15: number): void;

/**
 * Example from the scripts:
 * AI::TASK_PLAY_PHONE_GESTURE_ANIMATION(PLAYER::PLAYER_PED_ID(), v_3, v_2, v_4, 0.25, 0.25, 0, 0);
 * =========================================================
 * ^^ No offense, but Idk how that would really help anyone.
 * As for the animDict &amp; animation, they're both store in a global in all 5 scripts. So if anyone would be so kind as to read that global and comment what strings they use. Thanks.
 * Known boneMaskTypes'
 * "BONEMASK_HEADONLY"
 * "BONEMASK_HEAD_NECK_AND_ARMS"
 * "BONEMASK_HEAD_NECK_AND_L_ARM"
 * "BONEMASK_HEAD_NECK_AND_R_ARM"
 * p4 known args - 0.0f, 0.5f, 0.25f
 * p5 known args - 0.0f, 0.25f
 * p6 known args - 1 if a global if check is passed.
 * p7 known args - 1 if a global if check is passed.
 * The values found above, I found within the 5 scripts this is ever called in. (fmmc_launcher, fm_deathmatch_controller, fm_impromptu_dm_controller, fm_mission_controller, and freemode).
 * =========================================================
 */
declare function TaskPlayPhoneGestureAnimation(ped: number, animDict: string, animation: string, boneMaskType: string, p4: number, p5: number, p6: boolean, p7: boolean): void;

declare function TaskPutPedDirectlyIntoCover(ped: number, x: number, y: number, z: number, timeout: number, p5: boolean, p6: number, p7: boolean, p8: boolean, p9: number, p10: boolean): void;

/**
 * from armenian3.c4
 * AI::TASK_PUT_PED_DIRECTLY_INTO_MELEE(PlayerPed, armenianPed, 0.0, -1.0, 0.0, 0);
 */
declare function TaskPutPedDirectlyIntoMelee(ped: number, meleeTarget: number, p2: number, p3: number, p4: number, p5: boolean): void;

/**
 * Only appears twice in the scripts.
 * AI::TASK_RAPPEL_FROM_HELI(PLAYER::PLAYER_PED_ID(), 0x41200000);
 * AI::TASK_RAPPEL_FROM_HELI(a_0, 0x41200000);
 * Fixed, definitely not a float and since it's such a big number obviously not a bool. All though note when I thought it was a bool and set it to 1 it seemed to work that same as int 0x41200000.
 */
declare function TaskRappelFromHeli(ped: number, unused: number): void;

declare function TaskReactAndFleePed(ped: number, fleeTarget: number): void;

/**
 * The 2nd param (unused) is not implemented.
 * -----------------------------------------------------------------------
 * The only occurrence I found in a R* script ("assassin_construction.ysc.c4"):
 * if (((v_3 &lt; v_4) &amp;&amp; (AI::GET_SCRIPT_TASK_STATUS(PLAYER::PLAYER_PED_ID(), 0x6a67a5cc) != 1)) &amp;&amp; (v_5 &gt; v_3)) {
 * AI::TASK_RELOAD_WEAPON(PLAYER::PLAYER_PED_ID(), 1);
 * }
 */
declare function TaskReloadWeapon(ped: number, unused: boolean): void;

/**
 * From fm_mission_controller.c:
 * reserve_network_mission_objects(get_num_reserved_mission_objects(0) + 1);
 * vVar28 = {0.094f, 0.02f, -0.005f};
 * vVar29 = {-92.24f, 63.64f, 150.24f};
 * func_253(&amp;uVar30, joaat("prop_ld_case_01"), Global_1592429.imm_34757[iParam1 &lt;268&gt;], 1, 1, 0, 1);
 * set_entity_lod_dist(net_to_ent(uVar30), 500);
 * attach_entity_to_entity(net_to_ent(uVar30), iParam0, get_ped_bone_index(iParam0, 28422), vVar28, vVar29, 1, 0, 0, 0, 2, 1);
 * Var31.imm_4 = 1065353216;
 * Var31.imm_5 = 1065353216;
 * Var31.imm_9 = 1065353216;
 * Var31.imm_10 = 1065353216;
 * Var31.imm_14 = 1065353216;
 * Var31.imm_15 = 1065353216;
 * Var31.imm_17 = 1040187392;
 * Var31.imm_18 = 1040187392;
 * Var31.imm_19 = -1;
 * Var32.imm_4 = 1065353216;
 * Var32.imm_5 = 1065353216;
 * Var32.imm_9 = 1065353216;
 * Var32.imm_10 = 1065353216;
 * Var32.imm_14 = 1065353216;
 * Var32.imm_15 = 1065353216;
 * Var32.imm_17 = 1040187392;
 * Var32.imm_18 = 1040187392;
 * Var32.imm_19 = -1;
 * Var31 = 1;
 * Var31.imm_1 = "weapons@misc@jerrycan@mp_male";
 * Var31.imm_2 = "idle";
 * Var31.imm_20 = 1048633;
 * Var31.imm_4 = 0.5f;
 * Var31.imm_16 = get_hash_key("BONEMASK_ARMONLY_R");
 * task_scripted_animation(iParam0, &amp;Var31, &amp;Var32, &amp;Var32, 0f, 0.25f);
 * set_model_as_no_longer_needed(joaat("prop_ld_case_01"));
 * remove_anim_dict("anim@heists@biolab@");
 */
declare function TaskScriptedAnimation(ped: number, p4: number, p5: number): [number, number, number];

declare function TaskSeekCoverFromPed(ped: number, target: number, duration: number, p3: boolean): void;

declare function TaskSeekCoverFromPos(ped: number, x: number, y: number, z: number, duration: number, p5: boolean): void;

/**
 * from michael2:
 * AI::TASK_SEEK_COVER_TO_COORDS(ped, 967.5164794921875, -2121.603515625, 30.479299545288086, 978.94677734375, -2125.84130859375, 29.4752, -1, 1);
 * appears to be shorter variation
 * from michael3:
 * AI::TASK_SEEK_COVER_TO_COORDS(ped, -2231.011474609375, 263.6326599121094, 173.60195922851562, -1, 0);
 */
declare function TaskSeekCoverToCoords(ped: number, x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, p7: number, p8: boolean): void;

declare function TaskSeekCoverToCoverPoint(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: boolean): void;

/**
 * I cant believe I have to define this, this is one of the best natives.
 * It makes the ped ignore basically all shocking events around it. Occasionally the ped may comment or gesture, but other than that they just continue their daily activities. This includes shooting and wounding the ped. And - most importantly - they do not flee.
 * Since it is a task, every time the native is called the ped will stop for a moment.
 */
declare function TaskSetBlockingOfNonTemporaryEvents(ped: number, toggle: boolean): void;

/**
 * p1 is always GET_HASH_KEY("empty") in scripts, for the rare times this is used
 */
declare function TaskSetDecisionMaker(p0: number, p1: string | number): void;

declare function TaskSetSphereDefensiveArea(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function TaskShockingEventReact(ped: number, eventHandle: number): void;

declare function TaskShootAtCoord(ped: number, x: number, y: number, z: number, duration: number, firingPattern: string | number): void;

/**
 * //this part of the code is to determine at which entity the player is aiming, for example if you want to create a mod where you give orders to peds
 * Entity aimedentity;
 * Player player = PLAYER::PLAYER_ID();
 * PLAYER::_GET_AIMED_ENTITY(player, &amp;aimedentity);
 * //bg is an array of peds
 * AI::TASK_SHOOT_AT_ENTITY(bg[i], aimedentity, 5000, GAMEPLAY::GET_HASH_KEY("FIRING_PATTERN_FULL_AUTO"));
 * in practical usage, getting the entity the player is aiming at and then task the peds to shoot at the entity, at a button press event would be better.
 */
declare function TaskShootAtEntity(entity: number, target: number, duration: number, firingPattern: string | number): void;

/**
 * Makes the specified ped shuffle to the next vehicle seat.
 * The ped MUST be in a vehicle and the vehicle parameter MUST be the ped's current vehicle.
 */
declare function TaskShuffleToNextVehicleSeat(ped: number, vehicle: number): void;

declare function TaskSkyDive(ped: number): void;

/**
 * Makes the specified ped flee the specified distance from the specified position.
 */
declare function TaskSmartFleeCoord(ped: number, x: number, y: number, z: number, distance: number, time: number, p6: boolean, p7: boolean): void;

/**
 * Makes a ped run away from another ped (fleeTarget).
 * distance = ped will flee this distance.
 * fleeTime = ped will flee for this amount of time, set to "-1" to flee forever
 */
declare function TaskSmartFleePed(ped: number, fleeTarget: number, distance: number, fleeTime: number, p4: boolean, p5: boolean): void;

/**
 * scenarioName example: "WORLD_HUMAN_GUARD_STAND"
 */
declare function TaskStandGuard(ped: number, x: number, y: number, z: number, heading: number, scenarioName: string): void;

/**
 * Makes the specified ped stand still for (time) milliseconds.
 */
declare function TaskStandStill(ped: number, time: number): void;

/**
 * List of scenarioNames: pastebin.com/6mrYTdQv
 * Also a few more listed at AI::TASK_START_SCENARIO_IN_PLACE just above.
 * ---------------
 * The first parameter in every scenario has always been a Ped of some sort. The second like TASK_START_SCENARIO_IN_PLACE is the name of the scenario.
 * The next 4 parameters were harder to decipher. After viewing "hairdo_shop_mp.ysc.c4", and being confused from seeing the case in other scripts, they passed the first three of the arguments as one array from a function, and it looked like it was obviously x, y, and z.
 * I haven't seen the sixth parameter go to or over 360, making me believe that it is rotation, but I really can't confirm anything.
 * I have no idea what the last 3 parameters are, but I'll try to find out.
 * -going on the last 3 parameters, they appear to always be "0, 0, 1"
 * p6 -1 also used in scrips
 * p7 used for sitting scenarios
 * p8 teleports ped to position
 */
declare function TaskStartScenarioAtPosition(ped: number, scenarioName: string, x: number, y: number, z: number, heading: number, duration: number, sittingScenario: boolean, teleport: boolean): void;

/**
 * Plays a scenario on a Ped at their current location.
 * unkDelay - Usually 0 or -1, doesn't seem to have any effect. Might be a delay between sequences.
 * playEnterAnim - Plays the "Enter" anim if true, otherwise plays the "Exit" anim. Scenarios that don't have any "Enter" anims won't play if this is set to true.
 * ----
 * From "am_hold_up.ysc.c4" at line 339:
 * AI::TASK_START_SCENARIO_IN_PLACE(NETWORK::NET_TO_PED(l_8D._f4), sub_adf(), 0, 1);
 * I'm unsure of what the last two parameters are, however sub_adf() randomly returns 1 of 3 scenarios, those being:
 * WORLD_HUMAN_SMOKING
 * WORLD_HUMAN_HANG_OUT_STREET
 * WORLD_HUMAN_STAND_MOBILE
 * This makes sense, as these are what I commonly see when going by a liquor store.
 * -------------------------
 * List of scenarioNames: pastebin.com/6mrYTdQv
 * (^ Thank you so fucking much for this)
 * Also these:
 * WORLD_FISH_FLEE
 * DRIVE
 * WORLD_HUMAN_HIKER
 * WORLD_VEHICLE_ATTRACTOR
 * WORLD_VEHICLE_BICYCLE_MOUNTAIN
 * WORLD_VEHICLE_BIKE_OFF_ROAD_RACE
 * WORLD_VEHICLE_BIKER
 * WORLD_VEHICLE_CONSTRUCTION_PASSENGERS
 * WORLD_VEHICLE_CONSTRUCTION_SOLO
 * WORLD_VEHICLE_DRIVE_PASSENGERS
 * WORLD_VEHICLE_DRIVE_SOLO
 * WORLD_VEHICLE_EMPTY
 * WORLD_VEHICLE_PARK_PARALLEL
 * WORLD_VEHICLE_PARK_PERPENDICULAR_NOSE_IN
 * WORLD_VEHICLE_POLICE_BIKE
 * WORLD_VEHICLE_POLICE_CAR
 * WORLD_VEHICLE_POLICE_NEXT_TO_CAR
 * WORLD_VEHICLE_SALTON_DIRT_BIKE
 * WORLD_VEHICLE_TRUCK_LOGS
 */
declare function TaskStartScenarioInPlace(ped: number, scenarioName: string, unkDelay: number, playEnterAnim: boolean): void;

/**
 * Makes the ped run to take cover
 */
declare function TaskStayInCover(ped: number): void;

/**
 * known "killTypes" are: "AR_stealth_kill_knife" and "AR_stealth_kill_a".
 */
declare function TaskStealthKill(killer: number, target: number, killType: string | number, p3: number, p4: boolean): number;

/**
 * TODO: add hash from x360
 * ^^^
 * I got you, x360 Hash: 0x5A32D4B4.
 * Note: Whoever named this I just compared it and the hash matches, it was the correct name thanks.
 * Note: Alexander Blade, needs to fix this site or his code one, as when we do find the right name the server throws an error saying the name is already in use. AB is a legend coder, so I'm sure this is a simple fix for him.
 */
declare function TaskStopPhoneGestureAnimation(ped: number): void;

declare function TaskSwapWeapon(ped: number, p1: boolean): void;

/**
 * This function is called on peds in vehicles.
 * anim: animation name
 * p2, p3, p4: "sweep_low", "sweep_med" or "sweep_high"
 * p5: no idea what it does but is usually -1
 */
declare function TaskSweepAimEntity(ped: number, anim: string, p2: string, p3: string, p4: string, p5: number, vehicle: number, p7: number, p8: number): void;

declare function TaskSweepAimPosition(p0: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: number): [number, number, number, number];

/**
 * AI::TASK_SYNCHRONIZED_SCENE(ped, scene, "creatures@rottweiler@in_vehicle@std_car", "get_in", 1000.0, -8.0, 4, 0, 0x447a0000, 0);
 * Animations List : www.ls-multiplayer.com/dev/index.php?section=3
 */
declare function TaskSynchronizedScene(ped: number, scene: number, animDictionary: string, animationName: string, speed: number, speedMultiplier: number, duration: number, flag: number, playbackRate: number, p9: number): void;

/**
 * In every case of this native, I've only seen the first parameter passed as 0, although I believe it's a Ped after seeing tasks around it using 0. That's because it's used in a Sequence Task.
 * The last 3 parameters are definitely coordinates after seeing them passed in other scripts, and even being used straight from the player's coordinates.
 * ---
 * It seems that - in the decompiled scripts - this native was used on a ped who was in a vehicle to throw a projectile out the window at the player. This is something any ped will naturally do if they have a throwable and they are doing driveby-combat (although not very accurately).
 * It is possible, however, that this is how SWAT throws smoke grenades at the player when in cover.
 * ----------------------------------------------------
 * The first comment is right it definately is the ped as if you look in script finale_heist2b.c line 59628 in Xbox Scripts atleast you will see task_throw_projectile and the first param is Local_559[2 &lt;14&gt;] if you look above it a little bit line 59622 give_weapon_to_ped uses the same exact param Local_559[2 &lt;14&gt;] and we all know the first param of that native is ped. So it guaranteed has to be ped. 0 just may mean to use your ped by default for some reason.
 */
declare function TaskThrowProjectile(ped: number, x: number, y: number, z: number): void;

/**
 * used in sequence task
 * both parameters seems to be always 0
 */
declare function TaskToggleDuck(p0: boolean, p1: boolean): void;

/**
 * duration in milliseconds
 */
declare function TaskTurnPedToFaceCoord(ped: number, x: number, y: number, z: number, duration: number): void;

/**
 * duration: the amount of time in milliseconds to do the task. -1 will keep the task going until either another task is applied, or CLEAR_ALL_TASKS() is called with the ped
 */
declare function TaskTurnPedToFaceEntity(ped: number, entity: number, duration: number): void;

/**
 * Actually has 3 params, not 2.
 * p0: Ped
 * p1: int (or bool?)
 * p2: int
 */
declare function TaskUseMobilePhone(ped: number, p1: number): void;

declare function TaskUseMobilePhoneTimed(ped: number, duration: number): void;

declare function TaskUseNearestScenarioChainToCoord(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

declare function TaskUseNearestScenarioChainToCoordWarp(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): void;

/**
 * Updated variables
 * An alternative to AI::TASK_USE_NEAREST_SCENARIO_TO_COORD_WARP. Makes the ped walk to the scenario instead.
 */
declare function TaskUseNearestScenarioToCoord(ped: number, x: number, y: number, z: number, distance: number, duration: number): void;

declare function TaskUseNearestScenarioToCoordWarp(ped: number, x: number, y: number, z: number, radius: number, p5: number): void;

declare function TaskVehicleAimAtCoord(ped: number, x: number, y: number, z: number): void;

declare function TaskVehicleAimAtPed(ped: number, target: number): void;

/**
 * chases targetEnt fast and aggressively
 * --
 * Makes ped (needs to be in vehicle) chase targetEnt.
 */
declare function TaskVehicleChase(driver: number, targetEnt: number): void;

/**
 * info about driving modes: HTTP://gtaforums.com/topic/822314-guide-driving-styles/
 * ---------------------------------------------------------------
 * Passing P6 value as floating value didn't throw any errors, though unsure what is it exactly, looks like radius or something.
 * P10 though, it is mentioned as float, however, I used bool and set it to true, that too worked.
 * Here the e.g. code I used
 * Function.Call(Hash.TASK_VEHICLE_DRIVE_TO_COORD, Ped, Vehicle, Cor X, Cor Y, Cor Z, 30f, 1f, Vehicle.GetHashCode(), 16777216, 1f, true);
 */
declare function TaskVehicleDriveToCoord(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, p6: number, vehicleModel: string | number, drivingMode: number, stopRange: number, p10: number): void;

declare function TaskVehicleDriveToCoordLongrange(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, driveMode: number, stopRange: number): void;

declare function TaskVehicleDriveWander(ped: number, vehicle: number, speed: number, drivingStyle: number): void;

/**
 * Makes a ped follow the targetVehicle with &lt;minDistance&gt; in between.
 * note: minDistance is ignored if drivingstyle is avoiding traffic, but Rushed is fine.
 * Mode: The mode defines the relative position to the targetVehicle. The ped will try to position its vehicle there.
 * -1 = behind
 * 0 = ahead
 * 1 = left
 * 2 = right
 * 3 = back left
 * 4 = back right
 * if the target is closer than noRoadsDistance, the driver will ignore pathing/roads and follow you directly.
 * Driving Styles guide: gtaforums.com/topic/822314-guide-driving-styles/
 */
declare function TaskVehicleEscort(ped: number, vehicle: number, targetVehicle: number, mode: number, speed: number, drivingStyle: number, minDistance: number, p7: number, noRoadsDistance: number): void;

/**
 * Makes a ped in a vehicle follow an entity (ped, vehicle, etc.)
 * drivingStyle:
 * 0 = Rushed
 * 1 = Ignore Traffic Lights
 * 2 = Fast
 * 3 = Normal (Stop in Traffic)
 * 4 = Fast avoid traffic
 * 5 = Fast, stops in traffic but overtakes sometimes
 * 6 = Fast avoids traffic extremely
 * Console Hash: 0xA8B917D7
 * AI::_TASK_VEHICLE_FOLLOW(l_244[3 -- [[1]] ], l_268[3 -- [[1]] ], l_278, 40.0, 262144, 10);
 * What is this known as in the decompiled scripts ffs. I need more examples. I've searched in all scripts for keywords suchas,
 * TASK_VEHICLE_FOLLOW, FC545A9F0626E3B6, 0xFC545A9F0626E3B6, all the parameters in the above example even just search the last few params '40.0, 262144, 10' and couldnt find where this native is used in scripts at all unless whoever decompiled the scripts gave it a whack a.. name.
 */
declare function TaskVehicleFollow(driver: number, vehicle: number, targetEntity: number, drivingStyle: number, speed: number, minDistance: number): void;

/**
 * task_vehicle_follow_waypoint_recording(Ped p0, Vehicle p1, string p2, int p3, int p4, int p5, int p6, float.x p7, float.Y p8, float.Z p9, bool p10, int p11)
 * p2 = Waypoint recording string (found in update\update.rpf\x64\levels\gta5\waypointrec.rpf
 * p3 = 786468
 * p4 = 0
 * p5 = 16
 * p6 = -1 (angle?)
 * p7/8/9 = usually v3.zero
 * p10 = bool (repeat?)
 * p11 = 1073741824
 */
declare function TaskVehicleFollowWaypointRecording(ped: number, vehicle: number, WPRecording: string, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean, p9: number): void;

/**
 * Differs from TASK_VEHICLE_DRIVE_TO_COORDS in that it will pick the shortest possible road route without taking one-way streets and other "road laws" into consideration.
 * WARNING:
 * A behaviorFlag value of 0 will result in a clunky, stupid driver!
 * Recommended settings:
 * speed = 30.0f,
 * behaviorFlag = 156,
 * stoppingRange = 5.0f;
 * If you simply want to have your driver move to a fixed location, call it only once, or, when necessary in the event of interruption.
 * If using this to continually follow a Ped who is on foot:  You will need to run this in a tick loop.  Call it in with the Ped's updated coordinates every 20 ticks or so and you will have one hell of a smart, fast-reacting NPC driver -- provided he doesn't get stuck.  If your update frequency is too fast, the Ped may not have enough time to figure his way out of being stuck, and thus, remain stuck.  One way around this would be to implement an "anti-stuck" mechanism, which allows the driver to realize he's stuck, temporarily pause the tick, unstuck, then resume the tick.
 * EDIT:  This is being discussed in more detail at http://gtaforums.com/topic/818504-any-idea-on-how-to-make-peds-clever-and-insanely-fast-c/
 */
declare function TaskVehicleGotoNavmesh(ped: number, vehicle: number, x: number, y: number, z: number, speed: number, behaviorFlag: number, stoppingRange: number): void;

/**
 * pilot, vehicle and altitude are rather self-explanatory.
 * p4: is unused variable in the function.
 * entityToFollow: you can provide a Vehicle entity or a Ped entity, the heli will protect them.
 * 'targetSpeed':  The pilot will dip the nose AS MUCH AS POSSIBLE so as to reach this value AS FAST AS POSSIBLE.  As such, you'll want to modulate it as opposed to calling it via a hard-wired, constant #.
 * 'radius' isn't just "stop within radius of X of target" like with ground vehicles.  In this case, the pilot will fly an entire circle around 'radius' and continue to do so.
 * NOT CONFIRMED:  p7 appears to be a FlyingStyle enum.  Still investigating it as of this writing, but playing around with values here appears to result in different -behavior- as opposed to offsetting coordinates, altitude, target speed, etc.
 * NOTE: If the pilot finds enemies, it will engage them until it kills them, but will return to protect the ped/vehicle given shortly thereafter.
 */
declare function TaskVehicleHeliProtect(pilot: number, vehicle: number, entityToFollow: number, targetSpeed: number, p4: number, radius: number, altitude: number, p7: number): void;

declare function TaskVehicleMission(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: boolean): void;

/**
 * Example from fm_mission_controller.c4:
 * AI::TASK_VEHICLE_MISSION_COORS_TARGET(l_65E1, l_65E2, 324.84588623046875, 325.09619140625, 104.3525, 4, 15.0, 802987, 5.0, 5.0, 0);
 */
declare function TaskVehicleMissionCoorsTarget(ped: number, vehicle: number, x: number, y: number, z: number, p5: number, p6: number, p7: number, p8: number, p9: number, p10: boolean): void;

/**
 * Modes:
 * 8= flees
 * 1=drives around the ped
 * 4=drives and stops near
 * 7=follows
 * 10=follows to the left
 * 11=follows to the  right
 * 12 = follows behind
 * 13=follows ahead
 * 14=follows, stop when near
 */
declare function TaskVehicleMissionPedTarget(ped: number, vehicle: number, pedTarget: number, mode: number, maxSpeed: number, drivingStyle: number, minDistance: number, p7: number, p8: boolean): void;

/**
 * Modes:
 * 0 - ignore heading
 * 1 - park forward
 * 2 - park backwards
 * Depending on the angle of approach, the vehicle can park at the specified heading or at its exact opposite (-180) angle.
 * Radius seems to define how close the vehicle has to be -after parking- to the position for this task considered completed. If the value is too small, the vehicle will try to park again until it's exactly where it should be. 20.0 Works well but lower values don't, like the radius is measured in centimeters or something.
 */
declare function TaskVehiclePark(ped: number, vehicle: number, x: number, y: number, z: number, heading: number, mode: number, radius: number, keepEngineOn: boolean): void;

/**
 * Most probably plays a specific animation on vehicle. For example getting chop out of van etc...
 * Here's how its used -
 * AI::TASK_VEHICLE_PLAY_ANIM(l_325, "rcmnigel1b", "idle_speedo");
 * AI::TASK_VEHICLE_PLAY_ANIM(l_556[0 -- [[1]] ], "missfra0_chop_drhome", "InCar_GetOutofBack_Speedo");
 * FYI : Speedo is the name of van in which chop was put in the mission.
 */
declare function TaskVehiclePlayAnim(vehicle: number, animation_set: string, animation_name: string): void;

declare function TaskVehicleShootAtCoord(ped: number, x: number, y: number, z: number, p4: number): void;

declare function TaskVehicleShootAtPed(ped: number, target: number, p2: number): void;

/**
 * '1
 * '3 - brake + reverse
 * '4 - turn left 90 + braking
 * '5 - turn right 90 + braking
 * '6 - brake strong (handbrake?) until time ends
 * '7 - turn left + accelerate
 * '7 - turn right + accelerate
 * '9 - weak acceleration
 * '10 - turn left + restore wheel pos to center in the end
 * '11 - turn right + restore wheel pos to center in the end
 * '13 - turn left + go reverse
 * '14 - turn left + go reverse
 * '16 - crash the game after like 2 seconds :)
 * '17 - keep actual state, game crashed after few tries
 * '18 - game crash
 * '19 - strong brake + turn left/right
 * '20 - weak brake + turn left then turn right
 * '21 - weak brake + turn right then turn left
 * '22 - brake + reverse
 * '23 - accelerate fast
 * '24
 * '25 - brake turning left then when almost stopping it turns left more
 * '26 - brake turning right then when almost stopping it turns right more
 * '27 - brake until car stop or until time ends
 * '28 - brake + strong reverse acceleration
 * '30 - performs a burnout (brake until stop + brake and accelerate)
 * '31 - accelerate + handbrake
 * '32 - accelerate very strong
 * Seems to be this:
 * Works on NPCs, but overrides their current task. If inside a task sequence (and not being the last task), "time" will work, otherwise the task will be performed forever until tasked with something else
 */
declare function TaskVehicleTempAction(driver: number, vehicle: number, action: number, time: number): void;

declare function TaskWanderInArea(ped: number, x: number, y: number, z: number, radius: number, minimalLength: number, timeBetweenWalks: number): void;

/**
 * Makes ped walk around the area.
 * set p1 to 10.0f and p2 to 10 if you want the ped to walk anywhere without a duration.
 */
declare function TaskWanderStandard(ped: number, p1: number, p2: number): void;

/**
 * Seat Numbers
 * -------------------------------
 * Driver = -1
 * Any = -2
 * Left-Rear = 1
 * Right-Front = 0
 * Right-Rear = 2
 * Extra seats = 3-14(This may differ from vehicle type e.g. Firetruck Rear Stand, Ambulance Rear)
 */
declare function TaskWarpPedIntoVehicle(ped: number, vehicle: number, seat: number): void;

/**
 * EX: Function.Call(Ped1, Ped2, Time, 0);
 * The last parameter is always 0 for some reason I do not know. The first parameter is the pedestrian who will writhe to the pedestrian in the other parameter. The third paremeter is how long until the Writhe task ends. When the task ends, the ped will die. If set to -1, he will not die automatically, and the task will continue until something causes it to end. This can be being touched by an entity, being shot, explosion, going into ragdoll, having task cleared. Anything that ends the current task will kill the ped at this point.
 * MulleDK19: Third parameter does not appear to be time. The last parameter is not implemented (It's not used, regardless of value).
 */
declare function TaskWrithe(ped: number, target: number, time: number, p3: number): void;

/**
 * For a full list, see here: pastebin.com/yLNWicUi
 */
declare function TerminateAllScriptsWithThisName(scriptName: string): void;

declare function TerminateThisThread(): void;

declare function TerminateThread(threadId: number): void;

declare function TestProbeAgainstAllWater(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number): number;

declare function TestProbeAgainstWater(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): [number, number[]];

declare function TestVerticalProbeAgainstAllWater(x: number, y: number, z: number, p3: number, p4: number): number;

declare function TextureDownloadGetName(p0: number): string;

declare function TextureDownloadHasFailed(p0: number): number;
declare function N_0x5776ed562c134687(p0: number): number;

declare function TextureDownloadRelease(p0: number): void;

declare function TextureDownloadRequest(FilePath: string, Name: string, p3: boolean): [number, number];

/**
 * Counts up. Every 1000 is 1 real-time second. Use SETTIMERA(int value) to set the timer (e.g.: SETTIMERA(0)).
 */
declare function Timera(): number;

declare function Timerb(): number;

/**
 * Gets the current frame time.
 */
declare function Timestep(): number;

declare function ToFloat(value: number): number;

declare function ToggleStealthRadar(toggle: boolean): void;

/**
 * Toggles:
 * UNK17
 * Turbo
 * UNK19
 * Tire Smoke
 * UNK21
 * Xenon Headlights
 */
declare function ToggleVehicleMod(vehicle: number, modType: number, toggle: boolean): void;

declare function TrackObjectVisibility(p0: number): void;

/**
 * in script hook .net
 * Vehicle v = ...;
 * Function.Call(Hash.TRACK_VEHICLE_VISIBILITY, v.Handle);
 */
declare function TrackVehicleVisibility(vehicle: number): void;

/**
 * time in ms to transition from fully blurred to normal
 */
declare function TransitionFromBlurred(transitionTime: number): number;

/**
 * time in ms to transition to fully blurred screen
 */
declare function TransitionToBlurred(transitionTime: number): number;

/**
 * The backing function for TriggerEvent.
 */
declare function TriggerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

/**
 * List of all usable event names found in b617d used with this native. Sorted alphabetically and identical names removed: pastebin.com/RzDFmB1W
 * All music event names found in the b617d scripts: pastebin.com/GnYt0R3P
 */
declare function TriggerMusicEvent(eventName: string): number;

/**
 * from scripts:
 * int bitFlag = 0;
 * int vVar0[3];
 * vVar0[0] = 2; //p0
 * vVar0[1] = PLAYER_ID(); //p1 0 player
 * vVar0[2] = 53; //p2
 * SET_BIT(&amp;bitFlag, selectedPlayer);
 * TRIGGER_SCRIPT_EVENT(1, vVar0, 3, bitFlag);
 */
declare function TriggerScriptEvent(p0: boolean, argCount: number, bitset: number): number;

/**
 * The backing function for TriggerServerEvent.
 */
declare function TriggerServerEventInternal(eventName: string, eventPayload: string, payloadLength: number): void;

declare function UnblockDecisionMakerEvent(name: string | number, _type: number): void;

declare function UncuffPed(ped: number): void;

declare function UnfreezeRadioStation(radioStation: string): void;

/**
 * Returns the interior ID at the given coords, but only if the unknown variable is set to 0, otherwise it will return 0.
 */
declare function UnkGetInteriorAtCoords(x: number, y: number, z: number, unk: number): number;
/**
 * Returns the interior ID at the given coords, but only if the unknown variable is set to 0, otherwise it will return 0.
 */
declare function N_0xf0f77adb9f67e79d(x: number, y: number, z: number, unk: number): number;

declare function UnlockMinimapAngle(): void;

declare function UnlockMinimapPosition(): void;

/**
 * I see this as a native that would of been used back in GTA III when you finally unlocked the bridge to the next island and such.
 */
declare function UnlockMissionNewsStory(newsStory: number): void;

declare function UnpausePlaybackRecordedVehicle(p0: number): void;

/**
 * Does something similar to INTERIOR::DISABLE_INTERIOR.
 * You don't fall through the floor but everything is invisible inside and looks the same as when INTERIOR::DISABLE_INTERIOR is used. Peds behaves normally inside.
 */
declare function UnpinInterior(interiorID: number): void;

declare function UnpinRopeVertex(rope: number, vertex: number): number;

/**
 * gtaforums.com/topic/885580-ped-headshotmugshot-txd/
 */
declare function UnregisterPedheadshot(handle: number): void;

declare function UnregisterScriptWithAudio(): void;

declare function UpdateNavmeshBlockingObject(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number, p7: number, p8: number): void;

/**
 * Returns the current status of the onscreen keyboard, and updates the output.
 * Status Codes:
 * 0 - User still editing
 * 1 - User has finished editing
 * 2 - User has canceled editing
 * 3 - Keyboard isn't active
 */
declare function UpdateOnscreenKeyboard(): number;

/**
 * See SET_PED_HEAD_BLEND_DATA().
 */
declare function UpdatePedHeadBlendData(ped: number, shapeMix: number, skinMix: number, thirdMix: number): void;

declare function UpdateTaskAimGunScriptedTarget(p0: number, p1: number, p2: number, p3: number, p4: number, p5: boolean): void;

declare function UpdateTaskHandsUpDuration(ped: number, duration: number): void;

declare function UpdateTaskSweepAimEntity(ped: number, entity: number): void;

declare function UpdateTaskSweepAimPosition(p0: number, p1: number, p2: number, p3: number): void;

/**
 * Formerly known as _LOWER_MAP_PROP_DENSITY and wrongly due to idiots as _ENABLE_MP_DLC_MAPS.
 * Sets the maximum prop density and changes a loading screen flag from 'loading story mode' to 'loading GTA Online'. Does not touch DLC map data at all.
 * In fact, I doubt this changes the flag whatsoever, that's the OTHER native idiots use together with this that does so, this one only causes a loading screen to show as it reloads map data.
 */
declare function UseFreemodeMapBehavior(toggle: boolean): void;
/**
 * Formerly known as _LOWER_MAP_PROP_DENSITY and wrongly due to idiots as _ENABLE_MP_DLC_MAPS.
 * Sets the maximum prop density and changes a loading screen flag from 'loading story mode' to 'loading GTA Online'. Does not touch DLC map data at all.
 * In fact, I doubt this changes the flag whatsoever, that's the OTHER native idiots use together with this that does so, this one only causes a loading screen to show as it reloads map data.
 */
declare function EnableMpDlcMaps(toggle: boolean): void;

/**
 * From the b678d decompiled scripts:
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("FM_Mission_Controler");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_apartment_mp");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_indep_fireworks");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_cig_plane");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_creator");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_ornate_heist");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_prison_break_heist_station");
 */
declare function UseParticleFxAssetNextCall(name: string): void;
/**
 * From the b678d decompiled scripts:
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("FM_Mission_Controler");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_apartment_mp");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_indep_fireworks");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_cig_plane");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_mp_creator");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_ornate_heist");
 * GRAPHICS::_SET_PTFX_ASSET_NEXT_CALL("scr_prison_break_heist_station");
 */
declare function SetPtfxAssetNextCall(name: string): void;

/**
 * hash collision?
 */
declare function UsePlayerColourInsteadOfTeamColour(toggle: boolean): void;

declare function UseSirenAsHorn(vehicle: number, toggle: boolean): void;

declare function UseWaypointRecordingAsAssistedMovementRoute(p1: boolean, p2: number, p3: number): number;

/**
 * Hash collision
 */
declare function UsingMissionCreator(toggle: boolean): void;

/**
 * hash collision?
 */
declare function UsingNetworkWeapontype(p0: number): number;

/**
 * Calculates distance between vectors.
 */
declare function Vdist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * Calculates distance between vectors but does not perform Sqrt operations. (Its way faster)
 */
declare function Vdist2(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;

/**
 * calls from vehicle to net.
 */
declare function VehToNet(vehicle: number): number;

/**
 * Vehicle has landing gear?
 */
declare function VehicleHasLandingGear(vehicle: number): number;
/**
 * Vehicle has landing gear?
 */
declare function N_0x4198ab0022b15f87(vehicle: number): number;

declare function VehicleWaypointPlaybackOverrideSpeed(p0: number, p1: number): void;

declare function VehicleWaypointPlaybackPause(p0: number): void;

declare function VehicleWaypointPlaybackResume(p0: number): void;

declare function VehicleWaypointPlaybackUseDefaultSpeed(p0: number): void;

/**
 * Calculates the magnitude of a vector.
 */
declare function Vmag(x: number, y: number, z: number): number;

/**
 * Calculates the magnitude of a vector but does not perform Sqrt operations. (Its way faster)
 */
declare function Vmag2(x: number, y: number, z: number): number;

/**
 * Pauses execution of the current script, please note this behavior is only seen when called from one of the game script files(ysc). In order to wait an asi script use
 * static void WAIT(DWORD time);
 * found in main.h
 * --------------------------------------------------------------------
 * It does not actually seem to wait the amount of milliseconds stated like the normal WAIT() command does, but it does seem to make task sequences work more smoothly
 * System native hashes do not change on gameupdate
 */
declare function Wait(ms: number): void;

/**
 * Hash collision
 */
declare function WasCounterActivated(vehicle: number, p1: number): number;

declare function WasCutsceneSkipped(): number;

/**
 * Returns whether or not the currently executing event was canceled. See https://wiki.fivem.net/wiki/WasEventCanceled
 * @return A boolean.
 */
declare function WasEventCanceled(): number;

declare function WasPedKilledByStealth(ped: number): number;

declare function WasPedKilledByTakedown(ped: number): number;

/**
 * Despite this function's name, it simply returns whether the specified handle is a Ped.
 */
declare function WasPedSkeletonUpdated(ped: number): number;

declare function WashDecalsFromVehicle(vehicle: number, p1: number): void;

declare function WashDecalsInRange(p0: number, p1: number, p2: number, p3: number, p4: number): void;

declare function WaypointPlaybackGetIsPaused(p0: number): number;

declare function WaypointPlaybackOverrideSpeed(p0: number, p1: number, p2: boolean): void;

declare function WaypointPlaybackPause(p0: number, p1: boolean, p2: boolean): void;

declare function WaypointPlaybackResume(p0: number, p1: boolean, p2: number, p3: number): void;

declare function WaypointPlaybackStartAimingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean): void;

declare function WaypointPlaybackStartAimingAtPed(p0: number, p1: number, p2: boolean): void;

declare function WaypointPlaybackStartShootingAtCoord(p0: number, p1: number, p2: number, p3: number, p4: boolean, p5: number): void;

declare function WaypointPlaybackStopAimingOrShooting(p0: number): void;

declare function WaypointPlaybackUseDefaultSpeed(p0: number): void;

/**
 * For a full list, see here: pastebin.com/Tp0XpBMN
 * For a full list of the points, see here: goo.gl/wIH0vn
 */
declare function WaypointRecordingGetClosestWaypoint(name: string, x: number, y: number, z: number, point: number): number;

/**
 * For a full list, see here: pastebin.com/Tp0XpBMN
 * For a full list of the points, see here: goo.gl/wIH0vn
 */
declare function WaypointRecordingGetCoord(name: string, point: number): [number, number[]];

/**
 * For a full list, see here: pastebin.com/Tp0XpBMN
 * For a full list of the points, see here: goo.gl/wIH0vn
 */
declare function WaypointRecordingGetNumPoints(name: string, points: number): number;

declare function WaypointRecordingGetSpeedAtPoint(name: string, point: number): number;

/**
 * First parameter was previously an Entity but after further research it is definitely a hash.
 */
declare function WouldEntityBeOccluded(entityModelHash: string | number, x: number, y: number, z: number, p4: boolean): number;

