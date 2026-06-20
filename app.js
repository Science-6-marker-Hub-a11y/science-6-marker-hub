// ==========================================
// 1. COMPREHENSIVE QUESTION DATA BANK
// ==========================================
const questionsData = [
  // --- PHYSICS (43 Questions) ---
  { 
    id: "p1", 
    subject: "physics", 
    topic: "sp5: Light and the electromagnetic spectrum", 
    text: "Herschel discovered invisible rays beyond one end of the visible spectrum. Ritter discovered invisible rays beyond the other end of the visible spectrum. Compare and contrast the two experiments leading to these discoveries. You may draw labelled diagrams to help with your answer.", 
    markingScheme: `similarities:
-used white light from the sun
-glass prism
-produced visable spectrum

herschel infrared experiment:
-used a thermometer to measure the temperature of different colours of the visable spectrum
-temperature increased towards the red end of the spectrum and temperature increased more past the red end of the spectrum
-the rise was due to invisable ray named infrared

Ritter ultraviolet experiment:
-used silver chloride on paper which slowly turns black in visable light
-silver chloride turns black faster as the paper was put at the violet end of the spectrum
-beyond the violet the silver chloride turned black even faster
- this was due to presence of invisable rays called ultaviolet rays` 
  },
  { 
    id: "p2", 
    subject: "physics", 
    topic: "sp2:motion and forces", 
    text: "Explain how momentum is conserved in the collision. Use Newton's third law and Newton's second law in your answer.",
    image: "physics2.JPG", 
    markingScheme: `-momentum= mass x velocity
-action and reaction forces are equal and opposite
-force of R and Q = -force of R on Q
-(change in momentum of Q)/t  =  -(change in momentum of R)/t
-time of collision same for both
-no overall change in momentum
-R accelerates because of force from Q ` 
  },
  { 
    id: "p3", 
    subject: "physics", 
    topic: "sp2:motion and forces",
    image: "physics3.JPG", 
    text: "After a trolley is released, it accelerates down a slope and bounces off a rigid wall. The speed of a trolley can be measured just before a collision with the wall and just after a collision with the wall. The silver foils are connected to a millisecond timer. The silver foils make contact with each other during the collision, so the time they are in contact can be read from the millisecond timer. Explain how the student could investigate the effect of a crumple zone on the average force exerted during the collision. Your explanation should include: • how to determine the force (you may wish to refer to an equation from the list of equations at the end of this paper) • how the effect of crumple zones may be shown in the investigation • precautions that may be necessary to achieve accurate results. ", 
    markingScheme: [`"determine the forces:
-use of f=ma  or  use of f=(mv-mu)/t
-find the mass of trolley and times during impact

show effect of crumple zone:
-repeat experiment with and without crumple zone
-there is a difference in contact times
-use a spring as the crumple zone
-the time for contact is greater with the spring so less force

precautions and controls:
-repeat measurments for the time and take average
-same starting position for the trolley
-same angle of the slope
-release trolley without pushing`] 
  },
  { 
    id: "p4", 
    subject: "physics", 
    topic: "sp3: conservation of energy", 
    image: "physics4.JPG",
    text: "Describe an investigation to find out how the nature of a surface affects the amount of thermal energy absorbed by the surface. You should use the apparatus in Figure 7 and any additional items you choose. Each can in Figure 7 has a bung in the top with a hole in it..", 
    markingScheme: [`"-use thermometer which is inserted into the can
-use stopwatch and use measuring cyllinder
-set up apparatus with lamp a fixed distance away from each can
-volume of water in each can is the same
-measure starting temperature and make sure that each can has same initial temperature
-heat each can for same time using the stopwatch
-read the final temperature for the liquid in each can after 10 minutes of heating
-plot graph of temperature against time
-the can with greatest final temperature is the best absorber"`
    ] 
  },
  { 
    id: "p5", 
    subject: "physics", 
    topic: "sp4: waves", 
    text: "Use Figure 11a and Figure 11b to explain refraction and total internal reflection",
    image: "physics5.JPG",
    markingScheme: [`"Refraction:
-mark angle of incidence and angle of refraction on digram
-angles are measured from normal and angle of refraction is greater than angle of incidence
-rays of light travel in straight lines
-Refraction occurs at the boundary between 2 materials of different density
-refraction is the change in direction of a light ray
-refracted rays bend away from the normal when light passes into a less dense medium (glass into air)
-the ray in more dense medium travels more slowly

Total internal reflection:
-mark critical angle on digram
-light stays inside the glass
-only occurs if the incident light ray is in the more dense medium
-only occurs when the incident angle is greater than or equal to the critical angle
-critical angle for glass is 42
-angle of incidence is equal to the angle of reflection"`
    ] 
  },
  { 
    id: "p6", 
    subject: "physics", 
    topic: "sp5: Light and the electromagnetic spectrum", 
    text: "Radio waves and gamma radiation are at opposite ends of the electromagnetic spectrum. Compare how these two electromagnetic radiations are produced", 
    markingScheme: [`"-radio waves are produced intentionaly while gamma rays can be produced randomly
-radio waves are produced by occilating free electrons through in an ariel
-gamma rays are produced by radiactive decay in the nucleus to stabalise the nucleus
-gamma rays are produced  in PET scans during annihilations
-gamma rays are produced as a result of fission or fusion"`
    ] 
  },
  { 
    id: "p7", 
    subject: "physics", 
    topic: "sp6: radioactivity", 
    text: "Compare the processes of alpha decay and beta decay.", 
    markingScheme: [`"Alpha:
-a particle made up of 4 particles
-it is a helium nucleus
-has a positive charge
-when emitted, atomic number goes down by 2 and mass number goes down by 4

beta:
-a particle made up of a single particle
-it is one electron
-has a negative charge
-when emitted, atomic number goes up by 1 and mass number dosent change"`
    ] 
  },
  { 
    id: "p8", 
    subject: "physics", 
    topic: "sp6: radioactivity", 
    text: "Describe the dangers of exposure to radioactive sources and what can be done to protect hospital staff when they are working with radioactive sources.", 
    markingScheme: [
      `"Dangers:
-ionising so may cause cancer by mutating DNA
-may destroy cells
-can burn skin

Protection:
-use tongs to carry radioactive substances
-use lead containers to store
-stay at distance from them
-wear lead lined clothing
-wear radiation badge
stand behind a shield"`
    ] 
  },
  { 
    id: "p9", 
    subject: "physics", 
    topic: "sp6: radioactivity", 
    text: "Explain how the graphite core and the movable rods are used to maintain and control the chain reaction. ", 
    image: "physics9.JPG",
    markingScheme: [
      `"-neutrons are released in a chain reaction
-slow neutrons are needed for fission
-neutrons are too fast
-control rods can be moved in and out
-control rods control the speed of the reaction
-graphite core is the moderator
-graphite core slows down the neutrons
-moveable rods absorb neutrons
-moveable rods make more or fewer neutrons available for fission"`
    ] 
  },
  { 
    id: "p10", 
    subject: "physics", 
    topic: "sp7: astronomy", 
    text: "Discuss how evidence has changed our views of the universe.", 
    image: "physics10.JPG",
    markingScheme: [
      `"-Telescopic evidence supported the heliocentric model like observing jupiters moons
-the moons rotate around jupiter so not everything rotates about the earth
-other observations by telescope like neptune, uranus and the asteroid belt
-photographic evidence
-satellite observations
-heliocentric model verified by voyager missions"`
    ] 
  },
  { 
    id: "p11", 
    subject: "physics", 
    topic: "sp7: astronomy", 
    text: `Explain how evidence supports the ideas that 
• the Universe is expanding 
• the Universe began at a single point`, 
    markingScheme: [`"expansion:
-red shift
-light from distant galaxies shifted to red end of E.M spectrum
-wavelength of light is longer so source is moving away from us
-reference to doppler effect

beginning at a single point:
-CMBR is microwave radiation left over from the beginning
-the increase of recessional velocities with distance
-its in microwaves due to cooling
-it is detected from all over the sky`
    ] 
  },
  { 
    id: "p12", 
    subject: "physics", 
    topic: "sp7: astronomy", 
    text: "Explain what red shift is and how it provides evidence that the universe is expanding", 
    markingScheme: [
      `"-light shifted to red end of spectrum
-light waves are stretched so wavelength increases
-reference to black or spectral lines moving to red end of absorption spectrum
-frequency of wave from a moving source changes
-decrease in frequency means the source moves away from us while increase means the source moves closer
-red shift shows galaxies move away from us
-greater red shift means galazy moves faster away from us and are further away from us
- nearly all galaxies show red shift
-therefore galaxies are moving apart "`
    ] 
  },
  { 
    id: "p13", 
    subject: "physics", 
    topic: "sp4: waves", 
    text: "Explain what the diagram in Figure 15 shows about the density of the Earth and the nature of the Earth's core.", 
    image: "physics13.JPG",
    markingScheme: [
      `"at A:
-longitudinal and transverse waves detected
-p waves arrive before s waves
-must be travelling in a solid because S waves only travel through solids
-the region under the crust is a solid
-the waves refract so the mantle must be getting denser as it goes deeper

at B:
-no p or s waves detected
-S waves do not pass through liquid so do not reach B
-P waves pass through liquid but are refracted at a solid/liquid boundary so dont arrive at B
the core is liquid to stop both P and S waves arriving at B

at C:
-no S waves arrive at C
-P waves arrive at C at different times due to waves travelling at different speeds
-therefore the centre of the earth is solid since P waves that go through the solid would travel faster and arrive before those that just travelled through the liquid"`
    ] 
  },
    { 
    id: "p14", 
    subject: "physics", 
    topic: "sp3: conservation of energy", 
    text: "A student stands on the ground with an egg in his hand. He throws the egg vertically upwards. The egg rises to a height of 10 m. Then the egg falls and lands on the ground. Describe the energy changes of the egg during this sequence of events.", 
    markingScheme: [`"-chemical converted to kinetic while in his hand
-kinetic to potential while raising the egg
-eventually all kinetic converted to potential at 10m with little thermal energy
-energy is conserved
-potential converted to kinetic as the egg falls
-at 0m kinetic converted to sound and thermal"`
    ] 
  },

   { 
    id: "p15", 
    subject: "physics", 
    topic: "sp3: conservation of energy", 
    text: "A spring keeps a pendulum swinging without stopping. Describe the energy changes that happen as the pendulum continues to swing from side to side.", 
    markingScheme: [`"forms of energy:
-gravitational potential energy
-kinetic energy
-heat and sound

location of energy:
-GPE of mass on pendulum as it rises
-KE of mass on pendulum as it moves
-Heat and sound dissapated to surroundings

Linked ideas:
-as pendulum falls, the GPE changes to KE
-the KE from pendulum ends up as heat, warming the surroundings"`
    ] 
  },

  { 
    id: "p16", 
    subject: "physics", 
    topic: "sp4: waves", 
    text:"Compare and contrast the advantages of using ultrasound and X-rays for medical Scans.", 
    markingScheme: [`"-Ultrasound dosent cause damage to cells since it uses non-ionising radiation
-Ultrasound gives real time images and 3D images
-Ultrasound is safer for the consultant 
Ultrasound is portable
-Ultrasound can be used to measure blood flow rates and gives detail of soft tissue
-X-rays are more suitable for bony structures and parts of body containing gas like lunngs
-X-rays produce higher resolution images"`
    ] 
  },

  { 
    id: "p17", 
    subject: "physics", 
    topic: "sp7: astronomy", 
    text:"Describe the evidence both for the geocentric model and against the geocentric model.", 
    markingScheme: [`"evidence for:
-Idea of sun , moon , stars and planets moving across the sky in the same direction
-The pattern is repeated every day
-They appear to be moving around the Earth

evidence against:
-Moons of Jupiter appear to orbit Jupiter
-Movement of Sun is not the same each day
-Planets dont move in a simple path"`
    ] 
  },

  { 
    id: "p18", 
    subject: "physics", 
    topic: "sp6: radioactivity", 
    text:"Neutrons are also released during nuclear fission. Describe how the neutrons released in nuclear fission are used to produce a controlled chain reaction in a nuclear reactor.", 
    markingScheme: [`"Stages involved for the chain reaction:
-neutrons collide with nuclei
-Nuclei become unstable and split
-releases more neutrons and energy

Action of moderator:
-neutrons need to be slowed down to increase chance of collision
- this is achieved with the moderator made up of carbon/graphite/heavy water

Action of control rods:
-number of neutrons available for collision needs to be controlled so reaction proceeds at a steady rate
-the control rods absorb neutrons 
-they are made up of boron/ silver/ indium"`
    ] 
  },
{ 
    id: "p19", 
    subject: "physics", 
    topic: "sp7: astronomy", 
    text:"By observing stars in distant galaxies, astronomers have been able to identify the different stages in the life of a star. Describe the life cycle, from birth to death, of a star that is similar in mass to our Sun. You may draw labelled diagrams to help with your answer.", 
    markingScheme: [`"Nebula:
-clouds of dust and gas pulled together  or collapsed by gravitational forces

Main sequence:
-stable state
-hydrogen converted to helium through fusion for millions of years
-huge amounts of heat and light produced

Red giant:
-hydrogen runs out so the star expands and gets colder
-fusion of helium until helium runs out and the outward forces increase

white dwarf:
-collapses due to gravity
-much smaller and denser"`
    ] 
  },

  { 
    id: "p20", 
    subject: "physics", 
    topic: "sp7: astronomy", 
    text:`A car travels along a road and passes by a person who stands on the side of the road. Before passing by, the car horn makes a loud sound of constant frequency. 
discuss the differences in the frequencies of the sound heard by:
the driver of the car
the person on the side of the road`, 
    markingScheme: [`"Driver:
-frequency dosent change
-distance between car horn and driver is constant

Person on the road:
-Frequency of sound is higher as the person approaches
-because wavefronts become closer
-frequency is lower as car moves away
-becuase the wavefronts become further apart
-speed is constant 
- mention speed = frequency x wavelength linked to a previous marking point "`
    ] 
  },

  { 
    id: "p21", 
    subject: "physics", 
    topic: "sp3: conservation of energy", 
    text:`Compare how cat X(has no fur and light-coloured skin.) and cat Y( thick, black fur.)  transfer energy to their surroundings. Refer to conduction, convection and radiation in your answer.`, 
    markingScheme: [`"-cat x looses more energy by conduction
-cat y looses more energy than cat x
-fur traps air 
-larger surface area increases conduction
-air is a poor insulatoe
-fur is a good insulator
-trapped air cannot be moved around
-black surfaces are better emitters"`
    ] 
  },

    { 
    id: "p22", 
    subject: "physics", 
    topic: "sp11: static electricity", 
    text:`Explain why transferring fuel can be dangerous and how the use of metal wires makes the process much safer.`, 
    markingScheme: [`"Dangers:
-friction as the feul flows through the pipe which builds up an electrostatic charge
-potential difference between nozzle and vehicle which cause a spark
-causes explosion or fire

use of metal wire:
-potential is same on nozzle and vehicle
-no electric field 
-the excess charge is earthed so safe discharge
-no imbalance of electrons"`
    ] 
  },

  { 
    id: "p23", 
    subject: "physics", 
    topic: "sp10: electricity and circuits", 
    text:`Explain, with the aid of a circuit diagram, the method a student could use to investigate how the resistance of a single lamp changes with the potential difference across the lamp.`, 
    markingScheme: [`"Circuit digram including:
-power supply
-ammeter
-voltmeter
-filament lamp
-a way to vary the voltage

Method:
-measure current with ammeter
-measure voltage with voltmeter
-vary the voltage
-find resistance
-repeat and compare"`
    ] 
  },

  { 
    id: "p24", 
    subject: "physics", 
    topic: "sp10: electricity and circuits", 
    text:`The traffic sign uses many small lights all powered by a rechargeable battery. These lights need to be very bright during the day so that they can be seen clearly. They do not need to be as bright at night. Explain how using a light-dependent resistor can make the energy stored in the battery last longer.`, 
    markingScheme: [`"-less current used at night time since there is less ambient light and the resistance would increase  and higher resistance will allow less current to flow
-less current n circuit means less energy used from battery
-less power required in the dark
-total energy transferred is less in night time "`
    ] 
  },

  { 
    id: "p25", 
    subject: "physics", 
    topic: "sp10: electricity and circuits", 
    text:`Explain how changes in the filament of the lamp account for this graph`,
    image: "physics25.JPG", 
    markingScheme: [`"Change in resistance:
-calculate 2 different resistances
-resistance of lamp is constant to 3V and the resistance increases with increasing voltage
-compare the  resistance values at different voltages
-relationship between voltage and current is linear at low values but non-linear at higher values

Change in temperature:
-higher current produces higher temperature 
-This is due to collisions between electrons and ions in lattice
-lattice vibrates which is linked to temperature increase
-higher current results in greater energy transfer"`
    ] 
  },

  { 
    id: "p26", 
    subject: "physics", 
    topic: "sp10: electricity and circuits", 
    text:`Explain, in terms of the movement of charged particles, how energy is transferred from the battery, through the lamp, to the surroundings.`,
    image: "physics26.JPG", 
    markingScheme: [`" -the batteries store energy as chemical energy 
-he energy is transferred to electrons to make them flow/move
-the current is a flow of electrons
-he electrons flow through the metal filament
-he electrons collide with the ions in the lattice
-he collisions make the ions vibrate more
-he increased vibrations makes the lattice/filament hotter
-the heat energy is dissipated to the surroundings
-the ions give out/emit light "`
    ] 
  },

  { 
    id: "p27", 
    subject: "physics", 
    topic: "sp8: Energy-forces doing work", 
    text:`A cyclist is riding a bicycle at a steady velocity of 12 m/s. The cyclist and bicycle have a total mass of 68 kg. * A class of students investigate the power output of each student in the class. The class must decide whether they use a method using steps or a method using weights. The whole class must use the same method. Plan what measurements the students should take and how these can be used to calculate and compare the power output of each student. You may draw a diagram to help with your plan`,
    markingScheme: [`"- Description of an experiment which will allow  work done over a given time to be measured.E.g. running upstairs, step-ups, lifting weights
-Apparatus to be used, weighing scales, known weights ruler, stop clock
-Measurements to be made E.g. weight of person/weights lifted, vertical distance moved, time taken.
-alculation of work done for each student using work done =force x distance moved in direction of force
-Calculation of power for each student using power=work done/time taken "`
    ] 
  },

  {   
    id: "p28", 
    subject: "physics", 
    topic: "sp9:Forces and their effects", 
    text:`Explain how the forces keep the wooden block moving across the table at a constant horizontal velocity.`,
    image:"physics28.JPG",
    markingScheme: [`"Horizontal forces:
-tension in the string/pull of the string
-ension is one of the horizontal forces acting on
the wooden block
-riction between the table and the wooden block
-riction acts in the opposite direction to the
tension
-riction opposes motion
-he force due to friction is equal to the force
provided by the tension
-he forces are balanced /equal and opposite
- no resultant force, so the block moves at a constant (horizontal) velocity

Vertical forces:
- (normal) reaction (force) upwards between the  table and the wooden block
-ontact force
«weight of block downwards
-the welght (force of gravity) and the (normal) reaction are equal and opposite / balanced
-the block does not move up or down
-tension caused by the force due to gravity on the weight
-vertical forces on the block do not affect horizontal velocity."`
    ] 
  },

  {   
    id: "p29",
    subject: "physics", 
    topic: "sp14:Particle model", 
    text:`"Describe how a student could use this apparatus, and any additional items needed, to determine the specific heat capacity of aluminium. Your answer should include:
. how the student would obtain the necessary measurements 
• use the measurements to calculate the specific heat capacity of aluminium."`,
    image:"physics29.JPG",
    markingScheme: [`"
- Measure the temperature of the boiling water
- Allow sufficient time for block to reach temperature of boiling water
- Measure temperature of cold water in beaker Using a thermometer
- Transfer (hot) aluminium block to cold water in the beaker
- Work quickly to avoid thermal energy loss during transfer
- Measure temperature of water
- Stir to ensure even distribution
- Measure maximum temperature reached by water
- Calculate temp rise of water by subtracting initial from final temperature.
- Calculate temp drop of aluminium by subtracting final temperature from 100.
- Find mass of beaker and water and aluminium
- Use a balance
- Empty water from beaker and dry beaker and block
- Weigh beaker and block alone
- Find mass of water by subtraction.
- Allow plausible method of finding mass of water before putting block in"`
   ] 
  },

   { 
    id: "sp30", 
    subject: "physics", 
    topic: "sp14:Particle model", 
    text:`Explain, in terms of the movement of particles, why there is a pressure on the container and why the pressure changes as shown in Figure 18.`,
    image:" physics30.JPG",
    markingScheme: [`"-gas particles are in (random) motion
Particles hit sides of container / each other
-This produces (net) force on (sides of) container
-This causes a pressure (on the container)
-As volume Increases the particles have more space to move
-This means that particles hit sides less frequently
-Smaller (net) force on sides of container
-Pressure decreases.
-Change in pressure (with increase in volume) is not linear
-Pressure never becomes zero "`
    ] 
  },

  { 
    id: "sp31", 
    subject: "physics", 
    topic: "sp15: Forces and Matter", 
    text:`The boat floats lower in the water when there is a load inside the boat. Explain why the boat floats in water and why the boat floats lower in the water when there is a load inside the boat.`,
    image:" physics31.JPG",
    markingScheme: [`"Pressure:
-Difference in pressure between top and bottom of boat
-top pressure is atmospheric
-pressure on bottom of boat atmospheric plus that due to depth of water. 

Unloaded boat:
-Density of boat less than density of water 
-floating objects are partially immersed
-floating objects displace fluid / water
-upthrust is due to the difference In pressure
-upthrust is equal to the weight of the boat
-upthrust is equal to the weight of fluid / water displaced

Boat with load:
-The weight/density of the boat increases because of the load added
-more upthrust is needed to balance the extra weight of the boat
-more water has to be displaced to provide the upthrust
-when the boat floats lower in the water it
displaces more water
-the weight of water displaced is the upthrust and is equal to the weight of the boat "`
    ] 
  },

  { 
    id: "sp32", 
    subject: "physics", 
    topic: "sp15: Forces and Matter", 
    text:`Explain why the tip of the drawing pin goes into the wood but the head dosent go into the thumb`,
    image:"physics32.JPG",
    markingScheme: [`"—same force at tip and head of the thumb tack 
-flat end has a large surface area
-pointed end has a very small surface area
-using pressure =force /area
-at pointed end the pressure is large
-large pressure , tip goes into wood
-at flat end the pressure is much less
-the flat end does not damage the thumb "`
    ] 
  },

  { 
    id: "sp33", 
    subject: "physics", 
    topic: "sp15: Forces and Matter", 
    text:`"A crane lifts a block out of water until it is high enough to be loaded onto a lorry.
Explain why the lifting force changes as shown on the graph in Figure 18. Include calculation(s) in your answer."`,
    image:"physics33.JPG",
    markingScheme: [`"Between 0 and 120 seconds:
-The (apparent) weight of the block is less than in air 
-force in the cable is less (than weight of block) 
-force remains constant because upthrust is constant 
-upthrust is constant because submerged volume of block is constant 
-upthrust = (17.0 - 10.2) = 6.8 kN 
-lifting speed = (distance for top to reach surface / time to start to emerge) =6.6/120 = 0.055 m/s .

Between 120 and 140 seconds:
-block is emerging from water 
-less volume of the block remaining submerged 
-upthrust is reducing 
-force in the cable is increasing 
-it takes 20 seconds to fully emerge from water 
-height of block = lifting speed x time for top emerge = 0.055 x
20=1.1m

140 seconds onwards:
-block is clear of the water 
-no upthrust (from water) on the block 
-force in cable is equal to weight of block 
-force is constant because weight is constant 
-mass of block = weight in air / 10=17000/ 10 = 1700 kg 
-height of lorry = lifting speed x time to reach end of lift = =
0.055x305 = 1.7m 
"`
    ] 
  },
{ 
    id: "sp34", 
    subject: "physics", 
    topic: "sp8: Energy-forces doing work", 
    text:`Devise an experiment to investigate how the efficiency of the pulley system varies with the weight of metal being lifted. Your answer should include how you will use your measurements.`,
    image:"physics34.JPG",
    markingScheme: [`"Use of equipment:
-Provide a measurable load; for example hang a cube on one end of the system / on spring (balance)
-Provide a measurable effort; for example hang spring balance on other end of system
-Method to measure distances moved; for example use metre rule

Obtaining relevant data:
-Measure weight of cube with spring balance
-Take reading of spring balance when being pulled
-Measure height by which the cube is raised
-Measure distance moved by (end of) spring balance.

Processing results:
-calculate work done on cube = obtained weight x obtained distance
-calculate work done by student = obtained force x obtained distance
-calculate efficiency as (calculable) work done on cube / (calculable) work done by student
-inspect results to look for relationship between weight of cube and efficiency
-plot graph of efficiency against weight"`
    ] 
  },

  { 
    id: "sp35", 
    subject: "physics", 
    topic: "sp13:Electromagnetic induction", 
    text:`Describe changes that can be made to produce different currents and the effect of each change.`,
    image:"physics35.JPG",
    markingScheme: [`"- speed of movement 
-stronger / more powerful magnet
- more turns / coils (ORA)
- iron core
- reversing movement
- turning the magnet round
- effect of each change
- more conducting / less resistant wire "`
    ] 
  },

  { 
    id: "sp36", 
    subject: "physics", 
    topic: "sp13:Electromagnetic induction", 
    text:`Transformers R and S are not 100% efficient. By using transformers, energy losses in the transmission lines are reduced. Explain how this reduction is achieved, even though some energy is wasted in the transformers themselves`,
    image:"physics36.JPG",
    markingScheme: [`"
-transmission lines have resistance
-the current warms the transmission wires
-energy is wasted as heat
-transformers change voltage and/or current
-Rincrease the voltage / RA for S
-R decrease the current / RA for S
-the long transmission lines have high resistance
-power depends on both current and voltage
-power = current x voltage (P= Ix V)
-at high voltage, the same power needs less current
-correct mention of turns ratio related to voltage change
-a smaller current in a wire produces less heat
-high voltage transmission saves more energy than is lost in the transformers"`
    ] 
  },

  { 
    id: "sp37", 
    subject: "physics", 
    topic: "sp3: conservation of energy", 
    text:`Compare the use of a non-renewable energy source with the use of a renewable energy source to produce electricity for the National Grid.`,
    markingScheme: [`"non- renewable sources :
- coal, oil, gas and nuclear
- coal, oil, gas are fossil fuels
- fossil fuels will run out
- fossil fuels burn and produce CO;
-fossil fuels burn to produce atmospheric pollution
- CO2, contributes to global warming
- are a more expensive source.
- Nuclear power stations do not produce CO;
-Nuclear power produces radioactive waste
- Radioactive waste is dangerous and difficult to store safely

Renewable resources:
- Wind, waves, solar, biofuels, geothermal and hydroelectric
-are a free/cheaper source
-The energy source is unreliable
- No (net) CO, produced
- No atmospheric pollution (except biofuels)
- Waves and hydroelectric cause environmental changes
- Wind farms and solar panels give visual pollution
- Wind farms can be built offshore

Comparison:
- Fossil fuel power stations are cheaper to build than wind farms for the same power output
- Coal, oil, gas and nuclear fuel wil run out, wind, waves and sun will always be available
-Fossil fuel power stations produce CO; which may increase
-global warming, renewable energy generators (wind farms) do not
- Renewable energy generators have a free/cheaper source of fuel
- fossil fuels have to be taken out of the ground
- Nuclear power stations produce radioactive waste, which is dangerous, none of the other energy generators do this.
- Wind, waves and sun are unreliable sources of energy but fossil and nuclear fuels are always available "`
    ] 
  },

    { 
    id: "sp38", 
    subject: "physics", 
    topic: "sp12:Magnetism and the motor effect", 
    text:`Explain why the current changes in the way shown by the graph in Figure 20. Your answer should include details of the position of the coil relative to the magnet at each of the times labelled P, Q, R, S and T.`,
    image:"physics38.JPG",
    markingScheme: [`"
-Coil experiences changing magnetic field
- induces a voltage/current in the coil
- size of voltage/current depends on rate of change of magnetic field
- rate of change depends on angle between direction of movement and direction of field.
- greatest (rate of) change when coil moving perpendicular to field.
- maximum current at Q and S
- Coil is horizontal at Q and 5
- coil moving vertically up at Q and down at S
-direction of current at Q opposite to S.
- no change when coil moving parallel to field
-zero current at P, Rand T
"`
    ] 
  },

  { 
    id: "sp39", 
    subject: "physics", 
    topic: "sp13:Electromagnetic induction", 
    text:`explain how using high voltage transmission cables and transformers allows the distribution of electrical power around the United Kingdom to be as efficient as possible. Use equations in your answer`,
    markingScheme: [`"- (long) transmission wires have resistance 
-reduced p.d. at the destination
-(thermal) energy is dissipated in the transmission wires 
-this creates a power loss (refers to P=Isquare x R)
-transformers are used to step up to a high voltage for transmission
-this means a low current (refers to Vp x lp=Vs x ls)
-so power loss is small(er)
-transformers used to step down to a safer voltage for consumers
-consumer wires are shorter and so power loss is less of an issue "`
    ] 
  },

  { 
    id: "sp40", 
    subject: "physics", 
    topic: "sp13:Electromagnetic induction", 
    text:`Compare how the device operates when used as a loudspeaker with how the device operates when used as a microphone.`,
    image:"physics40.JPG",
    markingScheme: [`"
" Basic facts :
-Sound is vibrations (of air)
- Loudspeaker emits / gives out sound
-Loudspeaker is an output device
-Microphone accepts / takes in sound
-Microphone is an input device

Principles of operation:
-Alternating current or (electrical) signal sent into a loudspeaker
-Loudspeaker cone / coil vibrates (air)
-Motor effect in loudspeaker
-Microphone cone / coil is vibrated by air/sound
-Alternating current / (electrical) signal is produced by microphone
-Electromagnetic induction in microphone

Details of operation of loudspeaker:
-Alternating current or (electrical) signal in coil produces changing magnetic field
- (changing) Force between magnetic field of coil and magnet.
-Frequency / amplitude of sound depends on frequency / amplitude of alternating current

Details of operation of microphone:
-Coll oscillates in a magnetic field
-Generates an alternating p.d. (across the wires) / alternating current /signal
-Frequency / amplitude of alternating p.d. / current depends on amplitude / frequency of the sound"
"`
    ] 
  },
  { 
    id: "sp41", 
    subject: "physics", 
    topic: "sp13:Electromagnetic induction", 
    text:`"Using Figure 22, explain the stages in the process of delivering electricity efficiently from P to T. Your answer should include details of the effects that Q, R and S have on efficiency. "`,
    image:"physics41.JPG ",
    markingScheme: [`"- q is a step-up transformer 
- step up Voltage causes current to be lower
-voltage increases (25 kV to 400 kV)
- R is a transmission line / (national) grid /cable
-smaller currents in transmission lines means less energy lost though heating those wires
- V= I x R
-smaller voltage drop across the transmission line
- S is a step-down transformer reducing voltage to 230v
-ready for use in homes at T
-detail of transformers - iron core + coils
-transformers are not 100% efficient
-idea of power as  p=V x l or P= F x R
"`
    ] 
  },

  { 
    id: "sp42", 
    subject: "physics", 
    topic: "sp9:Forces and their effects", 
    text:`" The size of the effort force needed to lift the load is determined by the sizes of the
parts of the device.
 Explain why this is the case.
 Your answer should refer to
• the sizes of the different parts of the device
• how these sizes are used in relevant calculations`,
    image:"physics42.JPG ",
    markingScheme: [`"Relevant sizes of components :
- Length of bar
-Number of teeth on gear(s)
-Size / circumference / radius / diameter of gear(s)
- Size / circumference radius / diameter of drum

Equations:
- Work done = force x distance moved
- Moment of force = force x (perpendicular) distance (normal to the direction of the force)
- Efficiency = useful energy transferred / total energy supplied
- Speed = distance travelled / time taken
- Gear ratio determines relative rotational speed of gears
- Power = work done + time taken

Links between equations and sizes of components:
- Work done by effort = force x distance moved by (end of) handle around rotations
- Work done on load = force x distance moved/raised
- Moment of effort = effort x length of handle
-Moment of force of gear Y on gear X = force x radius of Y
- Moment of load on drum = load x radius of drum
"`
    ] 
  },
{ 
    id: "sp43", 
    subject: "physics", 
    topic: "sp10: electricity and circuits", 
    text:`Describe how a student can use ammeters and voltmeters to investigate the 
information given in Figure 23.
Your answer should include
-circuit diagrams showing how the currents and voltages can be measured
-a comparison of the resuits that would be expected`,
    image:"physics43.JPG ",
    markingScheme: [`"Description (may be inferred from circuit diagram(s)):
-Connect ammeter in series with resistor(s)
-Connect voltmeter across / in parallel with resistor(s)
-Move meters to new positions.

Circuit diagram(s) (accept any recognisable symbol):
-Two resistors in series with a battery
-Two resistors in parallel with a battery
-An ammeter in series with the resistor(s) and battery
-A voltmeter in parallel with the resistor(s)

Expected results (allow reverse arguments):
-Current (from battery) greater in parallel circuit than in series circuit
-Pd across resistor(s) less in series circuit than in parallel circuit
-Pd across resistor(s) in parallel circuit same as pd across battery
-Pd across battery shared between resistors in series
-Current (from battery) shared between resistors in parallel
-Current same throughout whole of series circuit"`
] 
  },



  // --- CHEMISTRY (11 Questions) ---
  { 
    id: "c1", 
    subject: "chemistry", 
    topic: "sc3:Atomic structure", 
    text: "Use this information to explain why, in this sample, magnesium has a relative atomic mass of 24.3",
    image:"chemistry1.JPG",
    markingScheme: [`"relative atomic mass of magnesium is 24.3 (and not 24) due to:
- the existence of more than one isotope.
-accurate relative mass Is calculated using weighted mean
- magnesium-25 and magnesium-26 are both heavier isotopes than magnesium-24
- magnesium-24 has highest percentage
- (therefore) the relative atomic mass Is closer to 24 than 25 or 26

calculation of relative atomic mass:
- consider 100 atom sample
- in the given sample 79 atoms have a mass of 24
- in the given sample 10 atoms have a mass of 25
-in the given sample 11 atoms have a mass of 26
- calculate total mass of 100 atoms.
-divide by 100 to find relative atomic mass
OR:
- fraction of magnesium-24 = 79/100
- fraction of magnesium-25 = 10/100
- fraction of magnesium-26 = 11/100
- relative atomic mass.
- (79/100 x 24) + (10/100 x 25) + (11/100 x 26)
-18.96 + 2.5 + 2.86 =24.3 "`
    ] 
  },
  { 
    id: "c2", 
    subject: "chemistry", 
    topic: "sc7:Types of substance", 
    text: "Describe what information can be obtained from each representation including the limitations of these representations of methane. ", 
    image:"chemistry2.JPG",
    markingScheme: [`"- they show methane contains carbon and hydrogen
- structure A only shows the ratio of C:H (as 1:4)
- structure A gives no information about bonding in molecule
- structure A gives no information about shape of molecule
- dot & cross diagram, B, shows the covalent bonding between the C and H atoms
- single bonds, show in structures B, C and D
- inner shell not involved in bonding
-structure B does not show the 3-D positions of atoms
- single lines used to show single covalent bonds in structure C
- only a 2-D representation and not positions in space
- ball & stick model, D, shows position in space / 3-D arrangement
- atoms not actually connected by the sticks
- space-filling, structure E, model shows 3-D arrangement of atoms
-E shows approximate relative sizes occupied by separate atoms
- no information about type of bond between atoms in structure E
"`
    ] 
  },
  { 
    id: "c3", 
    subject: "chemistry", 
    topic: "sc7:Types of substance", 
    text: "Deduce, using the information in Figure 6, the structure and bonding of substances A, B and C, explaining their properties in terms of their structure and bonding", 
    image:"chemistry3.JPG",
    markingScheme: [`"Substance A :
- giant ionic structure
-(high melting point) strong electrostatic attractions between ions
-due to a lot of energy required to overcome strong forces
- (electrical conductivity) in solid ions strongly attracted in lattice ions cannot move, so poor conductor when solid
-when molten, ions free to move, so good conductor when molten

Substance B:
- metallic structure
-(high melting point) strong attraction between metal ions and delocalised electrons
- due to a lot of energy required to overcome strong forces between particles in solid
-(electrical conductivity) in solid delocalised electrons
- free to move throughout metallic lattice, so good conductor when solid
- delocalised electrons and ions free to move when molten, so good conductor when molten

Substance C:
- covalent simple molecular
-(low melting point) weak intermolecular forces/ attractions between molecules
-little energy needed to separate molecules, so low melting point.
- (electrical conductivity) in solid and when molten no delocalised electrons or ions to carry charge, so poor conductor
"`
    ]
  },
  { 
    id: "c4", 
    subject: "chemistry", 
    topic: "sc6:Ionic bonding", 
    text: "Explain, in terms of bonding and structure, why the properties of the product, calcium chloride, are different from the properties of the reactants, calcium and chlorine.", 
    image:"chemistry4.JPG",
    markingScheme: [`"STRUCTURE:
- calcium chloride is an ionic compound with lattice of postive and negative ions
- calcium is a metal and so has a metallic structure of delocalized electrons and (calcium/Ca2+ ions).
-chlorine is a simple molecular covalent compound

MELTING POINT:
- there are strong electrostatic forces of attraction/ionic bonds between the ions in calcium chloride
- a large amount of heat energy is required to break the electrostatic forces between ions and delocalised electrons in calcium
-strong electrostatic forces between ions and delocalised electrons in calcium
-a large amount of heat energy is required to break the electrostatic forces (so calcium has a high melting point)
-chlorine has weak forces of attraction between its molecules and these weak forces only take a small amount of energy to break down (so chlorine has a low melting point)

CONDUCTIVITY WHEN SOLID:
-ions are fixed in a latice and so cannot move (therefore calcium chloride cannot conduct a current)
-delocalised electrons in metallic structure can move to carry a current (so calcium can conduct a current)
-there are no delocalised electrons/ions/charged particles/overall charges in chlorine molecules and (so chlorine cannot conduct a current)

CONDUCTIVITY WHEN MOLTEN:
-however, when molten ions are free to move (and therefore molten calcium chloride can conduct a current)
-delocalised electrons in metallic structure can move to carry a current (so calcium can conduct a current)
-there are no delocalised electrons/ions/ charged particles/overall charges in chlorine molecules and (so chlorine cannot conduct a current)"`
    ] 
  },
  { 
    id: "c5", 
    subject: "chemistry", 
    topic: "sc7:Types of substance", 
    text: "Explain, in terms of their structures and bonding, their relative melting points, strengths and abilities to conduct electricity.", 
    image:"chemistry5.JPG",
    markingScheme: [`"-in all structures the carbon atoms bonded by single covalent bonds
 -shared pair of electrons so strong bonds
 -In diamond each carbon atom joined to four others
- Graphene and diamond has a giant covalent (structure/lattice)
-fullerene has a simple molecular structure
-in graphene and fullerene each carbon atom joined to three others.
-in diamond and graphene many bonds need to be broken for it to melt and needs lots of energy
-therefore very high melting / sublimation points.
-in fullerene weak forces between molecules so less energy needed to separate molecules
-fullerene has the lowest melting point
-diamond and graphene have lots of strong covalent bonds so both are very strong materials
- Because weak forces between fullerene molecules so its strength is very low
- in dimond there are no free electrons so  diamond does not conduct
- in graphene and fullerene each carbon atom has one free atom
-hence delocalised electrons.
-graphene conducts electricity
-fullerene only conducts electricity across the surface of the molecule so it is a semi-conductor"`
    ] 
  },
  { 
    id: "c6", 
    subject: "chemistry", 
    topic: "sc2:Methods of separating and purifying substances", 
    text: "Devise a plan to separate pure water from a mixture containing a dissolved solid, including a test to show that the water obtained is neutral.", 
    image:"chemistry6.JPG",
    markingScheme: [`"Seperation:
-distilation
-solution in flask
-heat
-water evaporates
-water vapour into condenser
-cooling water jacket
-water vapour condensed back to liquid
- water collected in beaker
-solid remains in flask
-boiling point = 100°C

TEST:
-take distilled water in a test tube
-add a few drops of neutral litmus/Universal Indicator
-correct neutral colour
or
-pH probe
-pH=7
"`
    ] 
  },
  { 
    id: "c7", 
    subject: "chemistry", 
    topic: "sc8:Acids and Alkalis", 
    text: "Describe how you would obtain a solution of copper sulfate from the mixture and how you would obtain pure, dry copper sulfate crystals from this solution. Your description should include the apparatus you would use. You may wish to use diagrams in your answer", 
    markingScheme: [`"-filter mixture
-using filter funnel and paper
-collect fitrate / copper sulfate solution
-in conical flask / suitable (named) container
-pour into an evaporating basin
-heat on water bath / on tripod over Bunsen
-until half volume / concentrated / partially evaporated / crystals start to appear around the edge
-remove from heat and cover with filter paper
-allow to cool
- and crystalise
-separate crystals using a suitable method
- put/place crystals onto absorbent/filter paper
-dry in a warm place"`
    ] 
  },
  { 
    id: "c8", 
    subject: "chemistry", 
    topic: "sc8:Acids and Alkalis", 
    text: "Magnesium carbonate has the formula MgCO3. * A student has two separate test tubes containing sulfuric acid. The student adds a spatula measure of magnesium carbonate, MgCO3, to the first test tube and a piece of magnesium to the second test tube. Explain what the student would see in each test tube and the tests that they should carry out to identify the gases produced. Your answer should include word equations for the reactions that would take place", 
    markingScheme: [`"magnesium carbonate:
- bubbles / fizzing / effervescence
- magnesium carbonate gets smaller / disappears (allow ‘dissolves”)
- metal carbonate + acid = metal salt + carbon dioxide + water
- magnesium carbonate + sulfuric acid = magnesium sulfate + carbon dioxide + water
- therefore, gas is carbon dioxide
- test using limewater
- limewater will tum cloudy

magnesium:
- bubbles / fizzing / effervescence
- metal gets smaller / disappears (allow ‘dissolves’)
- gas is  hydrogen
- metal + acid = salt + hydrogen
- test gas with a lit splint
- (lit splint) burns with a squeaky pop
- magnesium + sulfuric acid = magnesium sulfate + hydrogen"`
      
    ] 
  },
  { 
    id: "c9", 
    subject: "chemistry", 
    topic: "sc10:Electrolytic processes", 
    text: `During the electrolysis three observations are made:
-the sizes of both the anode and the cathode change
-a solid appears directly beneath the anode
-the colour of the copper sulfate solution does not change.
Explain all three observations`, 
    image:"chemistry9.JPG",
    markingScheme: [`"-copper atoms form copper ions at anode 
-(copper atoms are oxidised / lose electrons)
- Cu = cu2+ +2e
- copper lons pass into solution
- copper ions move to/ are attracted by the cathode
- cathode Increases in size / gains mass.
- pink/ brown colour on the surface of the cathode
-solid copper deposited on the cathode
-(copper ions are reduced/gain electrons)
- copper lons form copper atoms
-cu2+ + 2e- = Cu
- copper sulfate solution is blue colour
- colour remains same since for every copper lon entering the solution at the anode, one is removed from the solution at the cathode
- concentration of copper sulfate (solution) remains the same
-solidsis  the insoluble impurities faling from the anode"`
      
    ] 
  },
  { 
    id: "c10", 
    subject: "chemistry", 
    topic: "sc13:Transition metals , alloys and corrosion", 
    text: "Explain how alloying changes these pure metals to make the alloys more suitable for the given uses", 
    image:"chemistry10.JPG",
    markingScheme: [`"-an alloy is a mixture of metals
-because larger/different sized atoms introduced in alloying,
-stop layers moving easily over one another
-therefore individual alloy is stronger/harder
-an aluminium alloy is magnalium
-pure aluminium is not suitable for making aircraft as it bends too easily / too weak
-aluminium alloy stronger
- magnesium atoms lighter than aluminium atoms,
-therefore alloy still low density / lower density than aluminum alone
-an iron alloy is stainless steel
-pure iron is not suitable for cutlery as it bends too easily / too weak
-iron corrodes,
-corrosion would contaminate food
-stainless steel does not corrode
-gold alloy harder
-therefore more hard wearing
-gold alloys less likely to change shape when worn"`
    ] 
  },
  { 
    id: "c11", 
    subject: "chemistry", 
    topic: "sc10:Electrolytic processes", 
    text: "Electrolysis of hydrochloric acid can produce hydrogen and chlorine. The apparatus for the electrolysis is: hydrochloric acid, two carbon rods, a suitable container for the electrolysis reaction ,a suitable source of electricity test tubes. Describe how the apparatus can be used to electrolyse hydrochloric acid and how the gases produced can be tested to show that they are hydrogen and chlorine", 
    markingScheme: [`"experiment set up :
-hydrochloric acid in container
-carbon rods in acid
-attach rods to electrical supply
- d.c. supply(or reference to positive and negative)
-test tubes to collect gases

test hydrogen:
-lighted splint
-squeaky pop (with air)/burns

test chlorine:
-(damp blue) litmus paper
-(turns red then) bleaches/white"`
      
    ] 
  },

  { 
    id: "c12", 
    subject: "chemistry", 
    topic: "sc7:Types of substance", 
    text: "Explain the difference in the ability of solid sodium chloride and molten sodium chloride to conduct electricity in terms of their structures.", 
    markingScheme: [`"solid :
-{regular arrangement/ lattice} (of ions)
-sodium/Na+ ions
-chloride /CI-ions
-(held together by)
-strong (ionic) bonds
-strong (electrostatic) forces of attraction
-between oppositely charged ions / positive and negatively charged ions
-closely packed together
-(when solid) does not conduct because ions cannot move

molten:
-heat energy {overcomes/breaks} (strong ionic) bonds
-strong (electrostatic) forces of attraction
-between oppositely charged ions / positive and negatively charged ions
-ions can move
-(therefore) conducts when molten-"`
      
    ] 
  },

  { 
    id: "c13", 
    subject: "chemistry", 
    topic: "sc15 and sc12: Dynamic Equilibrium", 
    text: "Explain, by considering the effect of changing the conditions on the rate of attainment of equilibrium and on the equilibrium yield of sulfur trioxide, why the manufacturer chooses the set of conditions B rather than the set of conditions A. ", 
    image:"chemistry13.JPG",
    markingScheme: [`"-equillrium reached faster because of higher temperature in set A/ equilbrium reached slower because of lower temperature in set B
- higher temperature means more frequent collisions because molecules have more energy / ORA for lower temperature in set B
-decrease in temperature increases equilibrium yield but system takes longer to reach equilibrium
-temperature chosen for optimum conditions
-yield lower as forward reaction is exothermic
-high temperature favours back reaction which is endothermic
-equilibrium reached faster because of higher pressure in set B / equilibrium reached slower because of lower pressure in set A
-higher pressure causes molecules to be closer together so more frequent collisions / ORA for lower pressure in set A
-yield higher because products occupy smaller volume than reactants for set B
- catalyst in set B causes equilibrium to be reached faster
-catalyst increases rate of both forward and back reactions
-equilibrium position not affected so catalyst does not affect yield"`
      
    ] 
  },

  { 
    id: "c14", 
    subject: "chemistry", 
    topic: "sc14:Quantitative analysis", 
    text: "Ammonia solution and dilute sulfuric acid are used to prepare pure, dry ammonium sulfate crystals. In an experiment a titration is carried out to determine the volumes of ammonia solution and dilute sulfuric acid that react together. Then an ammonium sulfate solution is prepared from which the pure, dry crystals are obtained. Describe in detail, using suitable apparatus, how this experiment should be carried out. ", 
    markingScheme: [`"- pipette to measure cut the ammonia solution 25 cm3
-into a suitable container, eg, conical flask
-add few drops of methyl orange Indicator
-put flask on a white tile
-fill burette with sulfuric acid solution
-read level of liquid in burette
-add acid from the burette
-swirl flask gently / mix
-add dropwise near end-point
-until {indicator just changes colour}
- read level on burette
-repeat experiment until concordant resuls 
-mix the same volumes of sulfuric acid and ammonia solution (determined from the titration experiment)
-but leaving out the inndicator/methyl orange
-pour solution into an evaporating dish
-heat the solution to point of crystalisation
-leave to cool
-fiter off crystals
-leave to dry"`
      
    ] 
  },
   { 
    id: "c15", 
    subject: "chemistry", 
    topic: "sc15 and sc12: Dynamic Equilibrium", 
    text: `The forward reaction takes in heat energy and is endothermic. A manufacturer produces
large quantities of propene using this equilibrium reaction.
Suggest, with explanations, suitable conditions that the manufacturer could use to
maximise the yield and rate of production of propene from propane.`, 
    image:"chemistry15.JPG",
    markingScheme: [`"-use of suitable catalyst (any suitable metal)
-helps increase rate of forward reaction
-and helps increase rate of back reaction
-so increases rate of attainment of equitbrium
-but has no effect on equilibrium yield
-increase temperature would increase rate of reaction
- shifts equilibrium to right hand side
-so increases equilibrium yield
-so use a high temperature (range 200-600 °C anything would be reasonable)
- use of very high temperatures increases energy use
-so makes product more expensive as fewer molecules on left hand side than right
-So use low pressures
- moves equifbrium to right hand side
-so increases equilibrium yield
- high pressure increases rate but decreases yield OR low pressure increases yield but decreases rate
- pressure used is a compromise between rate and yield "`
      
    ] 
  },

  { 
    id: "c16", 
    subject: "chemistry", 
    topic: "sc15 and sc12: Dynamic Equilibrium", 
    text: `The reaction between nitrogen and hydrogen is exothermic. If nitrogen and hydrogen were reacted at 150 atm pressure and 300 °C, without a catalyst, some ammonia would be formed. In the Haber process a pressure of 150 atm and a temperature of 450 °C are used, in the presence of an iron catalyst. Explain why the conditions used in the Haber process are better than the first set of conditions for the manufacture of ammonia.`, 
    markingScheme: [`"The effect of the temperature rise on the rate of attainment of equilibrium and on the equilibrium yield are considered by:
-higher temperature reaches equilibrium faster because molecules move faster
- therefore there are more frequent collisions because molecules have more energy
- therefore more collisions have required energy but yield will be lower
- because higher temperature favours endothermic reaction and so equilibrium shifts to left hand side
- which is decomposition of ammonia / ammonia reforms elements
- catalyst causes reaction to reach equilibrium faster / catalyst increases rates (of both forward and back reactions)
- lowers the activation energy (of both forward and back reactions) but does not affect yield
-equilibrium position not affected"`
      
    ] 
  },

  { 
    id: "c17", 
    subject: "chemistry", 
    topic: "sc15 and sc12: Dynamic Equilibrium", 
    text: `"The conditions chosen for the reaction are :
-excess air, rather than just the right amount
- a pressure of 10 atm, rather than atmospheric pressure
- a temperature of 900 °C, rather than room temperature.
Explain the effect of the conditions chosen on the equilibrium yield of nitrogen oxide and on the rate of attainment of equilibrium."`, 
    image:"chemistry17.JPG",
    markingScheme: [`"excess air:
-Increases oxygen concentration
-so excess air favours right hand side
-and gives higher yield
- excess air increases concentration of oxygen
-equilbrium reached faster

PRESSURE:
-9 molecules on left and 10 on right
-so higher pressure favours left hand side
-and gives lower yield
-higher pressure increases concentration of gases.
-more frequent collisions
- equilbrium reached faster

TEMPERATURE:
-heat energy given out in forward reaction
-higher temperature favours reaction that takes in heat energy
-so higher temperature favours left hand side
-hence lower yield
- molecules move faster at higher temperature
-more frequent collisions
-therefore more reactions in given time.
- equilibrium reached faster"`   
    ] 
  },

  { 
    id: "c18", 
    subject: "chemistry", 
    topic: "sc15 and sc12: Dynamic Equilibria", 
    text: `"In this reaction the forward reaction is endothermic and heat energy is taken in from the 
surroundings.The conditions used for this reaction are:
- a nickel catalyst
- a temperature of 220 °C
Explain, in terms of their effects on the rate of attainment of equilibrium and the equilibrium yield of hydrogen, why the reaction is carried out using a catalyst at 220 °C rather than without a catalyst at a lower temperature."`, 
    image:"chemistry18.JPG",
    markingScheme: [`"effect of using a catalyst:
-increases rate of attainment of equilibrium
- increasing rate of both forward and back reaction
-lowers activation energy
-provides an alternative reaction pathway
-no effect on equilibrium yield

effects of using a temperature of 220°C rather than lower temperatures:
-equilibrium attained in a shorter period of time / faster rate of attainment of equilibrium
-because particles move faster/ have higher (kinetic) energy
-increased collision frequency and more energetic collisions
-equilibrium yield of hydrogen increases with higher temperatures
-because heat energy is taken in the forward reaction (endothermic)
-increasing the temperature shifts equilibrium further to the right-hand side ."`   
    ] 
  },

  { 
    id: "c19", 
    subject: "chemistry", 
    topic: "sc10:Electrolytic processes", 
    text: `"sodium chloride is an ionic compound. 
It contains sodium ions, Na+, and chloride ions, CI-.
When molten sodium chloride is electrolysed, sodium metal and chlorine gas are formed.
Describe how the sodium ions and chloride ions in solid sodium chloride are
converted into sodium and chlorine by electrolysis."`,
    markingScheme: [`"-sodium chloride is melted and ions are free to move 

At cathode:
- {sodium / positive} ions move to cathode
- (sodium) metal forms at cathode
-sodium ions gain electrons to form atoms
- this is reduction
- Na+ +  e- =Na

At anode:
- {chloride / negative} ions move to anode
- (chlorine) gas forms at anode
- chloride ions lose electrons ...
-to form atoms
-this is oxidation
-two chlorine atoms combine to form a chlorine molecule / share electrons
-2Cl⁻ → Cl₂ + 2e⁻  "`   
    ] 
  },
{ 
    id: "c20", 
    subject: "chemistry", 
    topic: "sc13:Transition metals , alloys and corrosion", 
    text: `Pure metal can be converted into alloys. In many cases alloys are more useful than pure metals, for example they are stronger. Gold alloys, stainless steel and nitinol are examples of useful alloys. Describe how alloying improves the usefulness of metals and how strength is increased in terms of structure. You may use diagrams to help your answer.`,
    markingScheme: [`"Property change (other than increased strength) or use of alloy:
- increased hardness
- decreased malleability
-increased corrosion resistance
- shape-memory
- gold alloy for jewellery
-stainless steel used for cutlery
- steel used for construction
- nitinol (shape-memory alloy) used for spectacle frames / stents
- idea of any use of metal after alloying

Structural change
-pure metal - atoms are all the same size / suitable diagram of pure metal structure
- atoms arranged in a regular way / lattice
- alloy - atoms are of different sizes / suitable diagram of alloy structure
- disrupts arrangement of atoms
- atoms in pure metal structure can slide over each (when bent)
- alloy - sliding prevented by different sized atoms"`     ] 
  },
  { 
    id: "c21", 
    subject: "chemistry", 
    topic: "sc16:Hydrogen and oxygen fuel cells", 
    text: `Hydrogen-oxygen fuel cells can be used to provide electrical energy in a spacecraft. The reaction that takes place in the fuel cell is hydrogen + oxygen → water Evaluate the advantages and disadvantages of providing electrical energy in a spacecraft using hydrogen-oxygen fuel cells rather than chemical cells. `,
     markingScheme: [`"advantages:
-once set up, fuel cells require no maintenance
-chemical cells will need to be replaced / chemical cells have a limited lifetime
-fuel cells operate as long as reactants are supplied
-voltage drops in chemical cells as reactants are used up
- once used chemical cells cannot be used again or need re-charging
- used chemical cells take up valuable space on spacecraft
-new chemical cells need to be transported to spacecraft
-used chemical cells need to be transported back to earth
-water produced in the fuel cell is the only product
-water can be used on the spacecraft as drinking water

disadvantages:
-hydrogen and oxygen must be supplied
-gas tanks need to transported by spacecraft
-storage of hydrogen is dificult because it is a gas
-hydrogen is flammable
-fuel cells are expensive to manufacture
"`     ] 
  },
  { 
    id: "c22", 
    subject: "chemistry", 
    topic: "sc14:Quantitative analysis", 
    text: `Describe the method the student should use to find the accurate volume of sodium hydrogensulfate solution needed to neutralise the 25.0cm3  of sodium hydroxide solution `,
     markingScheme: [`"- fill a burette (with sodium hydrogensulfate) 
- add sodium hydrogensulfate until the indicator changes colour 
- swirl (the conical flask)
-add sodium hydrogensulfate dropwise near to the endpoint/end 
- repeat until concordant results`     ] 
  },
  { 
    id: "c23", 
    subject: "chemistry", 
    topic: "sc18:Rates of reaction", 
    text: `" use the results of these experiments to explain, in terms of the behaviour of 
particles, the effect of changing temperature and the effect of changing the
concentration of A in solution on the rate of this reaction. "`,
    image:"chemistry23.JPG",
    markingScheme: [`"-reactions occur when particle collisions have sufficient energy (activation energy) 
-reaction rates are increased when the energy collisions is increased
- and / or the frequency of collisions is increased
- two factors in the reaction have been changed (temperature and concentration of one of the reactants)
- experiment 2 was carried out at a higher temperature than experiment 1
- concentrations of reactant are the same in experiment 1 and 2
- particles have more (kinetic energy), so move faster
- so there are more frequent collisions between particles in solution A solution and solution B
- collisions will also occur with greater energy
- so more collisions will have the minimum activation energy to react when they collide
- so greater frequency of successful collisions (so decreased reaction time/increased rate in experiment 2 compared to experiment 1)
- experiment 3 was carried out at a higher concentration than experiment 2/ a fourfold increase
-temperatures of the reactants are the same in experiment 2 and 3
- there are more reacting particles in the same volume of reaction mixture
- so there are more frequent collisions between particles in solution A and solution B
-so greater frequency of successful collisions (so decreased reaction time/increased rate in experiment 3 compared to experiment 2)
- reaction rate in experiment 3 is greatest due to combined effects of increased temperature and increased concentration "`     ] 
  },

  { 
    id: "c24", 
    subject: "chemistry", 
    topic: "sc20:Fuels", 
    text: `Discuss and compare the impact on the environment of the emissions from these three cars using the information from Figure 9. `,
    image:"chemistry24.JPG",
    markingScheme: [`"pollutants:
-carbon monoxide combines with haemoglobin so is toxic
- nitrogen oxides are acidic / toxic
-nitrogen oxides lead to acid rain
- references to effects of acid rain e.g. damages buildings/kills plants etc
-carbon dioxide is a greenhouse gas
- greenhouse gases cause global warming
- references to effects of global warming - e.g sea levels rising etc
- particulates cause breathing difficulties/ make buildings dirty

Petrol/diesel comparison:
- compared to diesel, petrol:
    -releases less nitrogen oxides
    -releases less particulates
- compared to diesel, petrol:
    -releases more carbon monoxide
    -releases more carbon dioxide

Catalytic converter:
- reduces carbon monoxide
- reduces nitrogen oxides

Overall comparison:
-Petrol car improved with catalytic converter as two pollutants reduced
- Diesel better than petrol for carbon oxides
- Diesel is worse for particulates and nitrogen oxides
"`     ] 
  },
  { 
    id: "c25", 
    subject: "chemistry", 
    topic: "sc20:Fuels", 
    text: `Diesel oil can contain impurities of sulfur. Burning diesel oil containing impurities of sulfur can result in acid rain. Acid rain is harmful to the environment. Explain how acid rain is formed and the harm it can do. `,
    markingScheme: [`"- sulfur burns at the same time as the hydrocarbon 
-sulfur reacts with oxygen
-sulfur dioxide gas is formed
-sulfur dioxide is an acidic gas
-sulfur dioxide dissolves in clouds
-to form sulfurous acid
-which is then oxidised to form sulfuric acid
-rain water becomes acidic
-acid rain damages buildings / statues
-damages plants/trees
-runs into rivers / waterways
-makes rivers/waterways acidic
-Kills fish/insects/ waterlife
-increases corrosion of metals "
"`     ] 
  },

  { 
    id: "c26", 
    subject: "chemistry", 
    topic: "sc18:Rates of reaction", 
    text: `Devise a plan, including the apparatus you would use, to test the student's prediction. You are provided with pieces of zinc and two bottles of dilute hydrochloric acid. One bottle of hydrochloric acid is double the concentration of the other. `,
    image:"chemistry26.JPG",
    markingScheme: [`"- measure equal masses of zinc using balance
- measure equal volumes of acid using measuring cylinder /pipette suitable named piece of apparatus
- pour acid in suitable container
- record initial temperature
-use of thermometer
-add zinc to acid
- place bung vith delivery tube in container / reaction vessel immediately after the zinc is added
-use of timer
-start timer on addition of zinc
-measure volume of gas evolved using a delivery tube and inverted measuring cylinder /burette over vater OR delivery tube and (gas) syringe
-record time to collect fixed volume of gas
-record final/highest temperature
-calculate the temperature increase
-repeat for procedure.
-same initial temperature
-same size pieces of zinc
- same volume of acid"`     ] 
  },
   { 
    id: "c27", 
    subject: "chemistry", 
    topic: "sc22:Hydrocarbons", 
    text: `Discuss the complete and incomplete combustion of these alkanes and the trend in the energy changes they produced. You should give word equations in your answer.`,
    image:"chemistry27.JPG",
    markingScheme: [`"Reactions:
- combustion is reaction with oxygen
- complete combustion produces carbon dioxide
- complete combustion produces water
- incomplete combustion with lack of oxygen
- incomplete combustion produces carbon/ soot
- incomplete combustion produces carbon monoxide

Equations:
- word equation shows reactants and products for complete combustion
- word equation shows reactants and products for incomplete combustion
- credit any symbol equations even if incorrectly balanced

Energy released:
- as you go down table molecules get larger
- temperature rise increases as alkane molecule size increases
- temperature rise means energy released exothermic
- least to most is methane, ethane, propane, butane
- bigger molecules release more energy pn"`     ] 
  },
  { 
    id: "c28", 
    subject: "chemistry", 
    topic: "sc23:Alcohols and carboxylic acids", 
    text: `" Describe an experiment, using the equipment in Figure 16, that could be used to obtain results that show the energy content of a variety of Alcohols"`,
    image:"chemistry28.JPG",
    markingScheme: [`"-measure 100 cm3 of water into a beaker. 
-place the beaker above the burner
-place draft shields around the equipment
-weigh the (alcohol) burner containing the alcohol
-record this mass and the name of the alcohol.
-place a thermometer in the water
-record the initial temperature of the water
- place a iid on beaker
-light the wick.
-heat the water so the temperature rises by 20°C.
-extinguish the flame.
- re-weigh the (aicohol) burner
-subtract final mass from initial mass of burner and alcohol/ calculate the mass of alcohol used.
- repeat with the next aicohol
- using same volume of water
- Keep the height of the beaker the same."`     ] 
  },

  { 
    id: "c29", 
    subject: "chemistry", 
    topic: "sc22:Hydrocarbons", 
    text: `Explain, using the data in Figure 12, why these compounds belong together in the same homologous series`,
    image:"chemistry29.JPG",
    markingScheme: [`"Formula :
- same general formula
- CₙH₂ₙ₊₁COOH
- same functional group
- Functional group is ~COOH
- members differ by CH₂
- formula mass increases by 14
- they are carboxylic acids

Physical properties:
-trend in physical properties
- density falls
-boiling point increases

Chemical properties:
- similar chemical {properties reactions}
- all react with alcohols
- form esters
- all react with sodium hydroxide solution
- form sodium salts
-they are all acids"`     ] 
  },
   { 
    id: "c30", 
    subject: "chemistry", 
    topic: "sc25:Qualitative analysis - test for ions", 
    text: `A student was given a container of ammonium iron(II) sulfate, (NH₄)₂Fe(SO₄)₂. The student was also given a dilute solution of sodium hydroxide and access to other laboratory reagents. Describe the tests the student should carry out to identify the ions in the ammonium iron(II) sulfate, including appropriate equations for the reactions involved.`,
    markingScheme: [`"-ions present - NH₄⁺, Fe²⁺, SO₄²⁻
-dissolve solid in (distilled / deionised) water
-add drops of sodium hydroxide solution
-green / grey-green / dirty green
-precipitate shows Fe²⁺ ion
-precipitate is iron(II) hydroxide
- Fe²⁺ + 2OH⁻ → Fe(OH)₂
-warm mixture of salt solution and sodium hydroxide solution
-hold damp (red litmus / universal / pH indicator) paper above mixture
- indicator paper turns (blue / purple)
- test shows ammonia gas formed
-ammonia gas comes from NHa ions present
-NH₄⁺ + OH⁻ → NH₃ + H₂O
- to second portion of salt solution add drops of dilute hydrochloric acid
-add drops of barium chloride solution (or lead nitrate solution)
-white precipitate forms
-precipitate is barium sulfate (or lead sulfate)
- Ba²⁺ + SO₄²⁻ → BaSO"`     ] 
  },
  { 
    id: "c31", 
    subject: "chemistry", 
    topic: "sc25:Qualitative analysis - test for ions", 
    text: `A white solid is known to be a chloride in which the metal ion is sodium, potassium, calcium or aluminium. A chemist was told to carry out a test for each metal ion that could be present in this white solid. Describe tests to show the presence of each of these metal ions`,
    markingScheme: [`"-sodium, potassium and calckum ions detected by flame test 
-clean flame test wire with hydrochloric acid
-dip wire into solid
-hold wire in flame
-if flame is yelow — sodium
-if flame is lilac — potassium
-if flame is orange-red - calcium
-if no flame colour ~ could be aluminum
- calcium and aluminium ions detected using sodium hydroxide solution
-dissolve white solid in water
-add drops of sodium hydroxide solution
-white ppt shows calcium or aluminum ions
-no ppt shows sodium or potassium ons
-add more drops of sodium hydroxide solution
-if white ppt dissolves to form colourless solution
-is aluminium ions.
-if white ppt does not dissolve
-is calcuium ions"`     ] 
  },
  { 
    id: "c32", 
    subject: "chemistry", 
    topic: "sc18:Rates of reaction", 
    text: `Using some examples of catalysts you have met in chemistry, discuss what catalysts do and their effect on the activation energy of a reaction.`,
    markingScheme: [`"
DESCRIPTION:
-increases the rate of reaction
- does not alter products of reaction
-is chemically unchanged by reaction
-does not get used up
-so catalyst mass does not change

FUNCTION:
-particles must have minimum energy for reactions to occur
-this is called activation energy
-reaction proceeds by an alternative route
-which reduces activation energy
-so a greater proportion of collisions are successful

DIAGRAM:
-reaction profile with catalyst has start and end energies the same
-because reactants and products the same (label or in text)
-new profile has lower peak
- this represents lower activation energy (label or in text)

EXAMPLES:
-Haber process to make ammonia uses iron catalyst
-cracking to make smaller alkanes uses catalyst
- (fermentation) to make alcoholic drinks uses (yeast which contains) an enzyme
-hydrogen peroxide decomposition uses catalysts
-used in catalytic converters
-use of enzymes as biological catalysts
"`     ] 
  },
  { 
    id: "c33", 
    subject: "chemistry", 
    topic: "sc23:Alcohols and carboxylic acids", 
    text: `Glucose, C₆H₁₂O₆, is a carbohydrate. A dilute solution of ethanol can be produced from glucose by fermentation. The dilute solution of ethanol can then be processed to form a concentrated solution of ethanol. Describe how the fermentation of glucose is carried out and how the dilute solution of ethanol produced can then be processed to form a concentrated solution of ethanol. You may include diagrams in your answer`,
    markingScheme: [`"fermentation:
-dissolve glucose in water to form a solution
-place glucose solution in a suitable flask
- add yeast to glucose solution
-place fermentation mixture in warm room/water bath / 25-40°C
-fit air lock or equivalent in neck of flask
- reaction stops when bubbles stop
- decant ethanol solution from yeast/ethanol mixture or filter out yeast

CONCENTRATION:
-fractional distillation
-place the dilute ethanol in round bottom flask /suitable vessel
-add a fractionating column onto the round bottom flask /suitable vessel
-and a thermometer on top of the of fractionating column
- add condenser to top of fractionating column
-run water into bottom of condenser
-heat round bottom flask/vessel
- to above boiling point of ethanol / below the boiling point of water
-collect concentrated ethanol from end of condenser"`     ] 
  },
  { 
    id: "c34", 
    subject: "chemistry", 
    topic: "sc11: Obtaining and using metals", 
    text: `"Describe, in detail, how the teacher would demonstrate this experiment safely,
showing how the results give the order of reactivity of the metals."`,
    markingScheme: [`"method:
- trough/large container of water
- equal volumes of water for each experiment
- remove metal from container with tongs
-remove oil
- cut small piece
- add metal with tongs/tweezers etc. to water
-teacher wears safety glasses.
- gloves
- use of safety screen
- class well back
- class wear goggles
ignore general safety ideas ~ hair tied back, lab coat etc.
ignore equal sized pieces of metal

Analysis:
- most vigorous effervescence of hydrogen with potassium and least with lithium
- fastest movement with potassium and slowest with lithium
-potassium is most reactive, then sodium, then lithium
ignore copying of results from table
e.g potassium bubbles very fast
more writing up of results/ put in table etc "`     ] 
  },
  { 
    id: "c35", 
    subject: "chemistry", 
    topic: "sc17:Groups in the periodic table", 
    text: `"explain, in terms of their electronic configurations and the relative reactivity of these  elements, which of the reactions shown in Figure 10 would be the most violent."`,
    image:"chemistry35.JPG",
    markingScheme: [`"- group 1 metals form positive ions 
-outer electron lost
-further down the group outer electron more easily lost
-due to electron shell further from nucleus OR greater electron shielding
-so lower nuclear attraction
-group 1 metal becomes more reactive
-order of reactivity Li < K < Rb
-group 7 elements form negative ions
-gains electron to complete outer shell
-further down the group electron is less easily gained
-due to outer electron shell further from nucleus OR greater electron shielding
-so lower nuclear attraction
-group 7 element becomes less reactive
-order of reactivity F > Br > I
-most reactive pair likely to be potassium + fluorine 
-allow rubidium + iodine with justification"`     ] 
  },
  { 
    id: "c36", 
    subject: "chemistry", 
    topic: "sc24:Polymers", 
    text: `"Discuss the reasons for using these polymers in the ways shown in Figure 13 and the problems in disposing of these polymers."`,
    image:"chemistry36.JPG",
    markingScheme: [`"poly(ethene) :
-plastic bags / plastic bottles 
-flexible bendable, inert/unreactive, waterproof/weatherproof, light

poly(chloroethene) :
- window frames / gutters / waterpipes - tough/hard, long-lasting, durable /good insulator, waterproof /weatherproof, inert/ unreactive
-insulation for electrical wires - flexible/bendable, good insulator, waterproof /weather proof, inert/uneactive

poly(tetraflucroethene):
-coating for frying pans - slippery, non-stick, tough, high melting point /heat resistant, inert/ unreactive
-stain-proofing clothing and carpets - slippery

landfill:
-non-blodegradable
-persist in landifill/ very long time to degrade
-fill up land/new landfill sites needed harmful to animal habitats

recycling:
-plastics need to be sorted!/time consuming
-transport to collection area/ recycling point uses fuel
-collection point may cause litter problem/eyesore etc

burning:
-toxic substances released
-hydrogen chlorideacid gas produced from burning PVC
-carbon dioxide released contributing to global warming
-carbon monoxide released
-toxic ash/solids formed"`     ] 
  },
  { 
    id: "c37", 
    subject: "chemistry", 
    topic: "sc24:Polymers", 
    text: `"Large amounts of poly(ethene) are manufactured from ethene produced by cracking 
fractions obtained from crude oil.
Poly(ethene) is used to make many objects.
After use it is necessary to dispose of the large amounts of poly(ethene) in these objects.
Explain some of the problems associated with the manufacture and disposal of poly(ethene)."`,
    markingScheme: [`"MANUFACTURE 
-crude oil is a raw material
-crude oil is finite
-cracking requires a lot of energy
-generation of energy for fractional distillation and cracking may cause release of carbon dioxide
-carbon dioxide is a greenhouse gas and may lead to global warming

DISPOSAL:
-some polymers disposed of in landill sites
-non-biodegradable
-persists in landfill
-landfill space runs out
-some plastic ends up as litter/ in oceans
-this may be hazardous to wildiife
-some polymers are recycled
-polymers must be sorted into different types.
-public must make effort to sort/ recycle
-some polymers are but
-produces carbon dioxide
-carbon dioxide is a greenhouse gas
-greenhouse gases may cause global warming
-toxic gases may be produced "`     ] 
  },
  { 
    id: "c38", 
    subject: "chemistry", 
    topic: "sc17:Groups in the periodic table", 
    text: `Sodium and potassium react with cold water to give similar products. The electronic configuration of sodium is 2.8.1. The electronic configuration of potassium is 2.8.8.1. Explain the similarities and differences in the way sodium and potassium react with cold water by considering their reactions and their electronic configurations.`,
    markingScheme: [`"similarities:
-both in the same group/group 1/alkali metal
- react in a similar way
- same number of outer electrons/one outer electron
-both produce hydrogen/fizz (when reacted with water)
-both produce hydroxide/alkaline solution (when reacted with water)

differences:
- potassium more reactive
- potassium catches on fire/lilac flame
- potassium outer electron further from nucleus
- potassium has more shells
- potassium has more shielding
- potassium has less attraction of outer electron by nucleus
- potassium outer electron more easily lost
"`     ] 
  },
  { 
    id: "c39", 
    subject: "chemistry", 
    topic: "sc17:Groups in the periodic table", 
    text: `Group 1 of the periodic table contains the alkali metals lithium, sodium and potassium. The alkali metals show a pattern in their reactivity with water. This pattern is shown when small pieces of lithium, sodium and potassium are added separately to water. Describe the reactions and what would be seen and explain the pattern in reactivity. You may include equations as part of your answer. `,
    markingScheme: [`"description:
- effervescence / fizzing / bubbles
- float /on surface
- move
- produce hydrogen (may be shown in word or balanced equation)
- {an alkaiine/metal hydroxide} solution (may be shown in word or balanced equation)
- gets smaller / disappears / dissolves
-reactivity increases with {increasing atomic number/ down the group} / potassium effervesces more than sodium and lithium
- potassium moves faster than sodium or lithium
- sodium and potassium melt/form a (silver-coloured) ball
- hydrogen burns when potassium/ sodium react
- potassium gives a lilac flame/sodium gives a yellow flame
-Universal Indicator added to water turns blue/purple

Explanation:
-(group 1 metals) react by losing one electron
-electron is more easily lost with (increasing atomic number/down the group)
- {electron/ outer shell} is further away from nucleus/ atomic radius increases/ there are more electron shells with {increasing atomic number/ down the group}
- {more shielding (of outer electron)/ less attraction between nucleus and outer electron/ more shells between outer electron and nucleus} with {increasing atomic number/down the group}"`     ] 
  },
  { 
    id: "c40", 
    subject: "chemistry", 
    topic: "sc20:Feuls", 
    text: `Discuss the advantages and disadvantages of the two methods`,
    image:"chemistry40.JPG",
    markingScheme: [`"- sugar cane can be re-grown/is renewable
- crude oil is finite/ cannot be replaced/is non-renewable
- fermentation uses lower temperatures so energy costs are lower/ hydration uses higher temperatures, so energy costs are higher
- fermentation uses lower pressure so energy costs are lower/ hydration uses higher pressure, so energy costs are higher
- yeast is a natural substance and not harmful/ phosphoric acid is corrosive
- hydration is a faster process/ fermentation is a slower process
- hydration gives pure ethanol/ fermentation gives impure ethanol
- growing sugar cane takes up land which could be used for growing food! rearing livestock
- hydration is a continuous process/ fermentation is a batch process"`]
  },

  // --- BIOLOGY (11 Questions) ---
  { 
    id: "b1", 
    subject: "biology", 
    topic: "sb1:Key concept of biology", 
    text: "Devise a method to compare the energy content of two foods using this equipment. Include details of how to control the variables.", 
    image:"biology1.JPG",
    markingScheme: [
      `using the equipment :
-add water to the boiling tube
- place food/named food on mounted needle
-take the starting temperature of the water
-ignite / burn the food
-take the temperature of the water when the food stops. burning /record the highest temperature of the water
-repeat the test using the other food

Controlling variables:
-mass of food measured with a balance
-volume of water measured with a measuring cylinder
-starting temperature of water measured with a
-thermometer
-distance of food from boiling tube measured with a ruler
-burning time measured with a stopwatch
-external temperature/draughts prevented by placing a screen around the apparatus `
    ] 
  },
  { 
    id: "b2", 
    subject: "biology", 
    topic: "sb2:Cells and control", 
    text: "Describe how the stages of mitosis result in the formation of two diploid cells.", 
    markingScheme: [
     `"Prophase:
-the nuclear membrane disappears
-the DNA unwinds and condenses into chromosomes / chromatids
-spindle fibres become visible

Metaphase:
-the chromosomes line up along the centre / equator of the cell
-spindle fibres attach to chromosomes at the centromere

Anaphase:
-chromatids are pulled to the edges of the cell
-by the spindle fibres

Telophase:
-a nuclear membrane forms around each of the sets of chromosomes
-separating them from one another

Cytokinesis :
-Spitting the cytoplasm to create two separate diploid cells each with identical chromosomes "`
    ] 
  },
  { 
    id: "b3", 
    subject: "biology", 
    topic: "sb2:Cells and control", 
    text: "Describe the causes of short-sightedness and long-sightedness.", 
    image:"biology3.JPG",
    markingScheme: [
      `"sort-sightedness 
-eyeball too long
-cornea too curved
-lens too curved / too convex
-light refracted too much by cornea / lens
-light rays not brought to a focus on retina
-light rays focused in front of retina

Long-sightedness:
-eyeball too short
-cornea not curved enough
-lens too thin /not convex enough
-light refracted too little by cornea / lens.
-light rays not brought to a focus on retina
-light rays focused behind retina "`
    ] 
  },
  { 
    id: "b4", 
    subject: "biology", 
    topic: "sb2:Cells and control", 
    text: "Some painkillers prevent neurotransmitters binding to receptors in a synapse. Explain how a signal is transmitted at a synapse and how the painkillers reduce the pain felt by the person. ", 
    markingScheme: [
      `"Synapse transmission:
-neurones transmit electrical impulses
-the synapse is a gap between 2 neurones
-triggering the release of neurotransmitters
-which diffuse across the synapse
-as a chemical signal
-neurotransmitters bind to receptors on the next neurone
-triggering an electrical impulse in the next neurone

painkillers:
-prevent neurotransmitters binding to receptors in the next neurone
-electrical impulse Is not triggered
-signal is not received by the central nervous system
-person does not feel pain"`
    ] 
  },
  { 
    id: "b5", 
    subject: "biology", 
    topic: "sb3:Genetics", 
    text: `A child is blood group O. 
The child's mother is blood group A and the child's father is blood group B.
Explain how this child is blood group O.
Use the Punnett square and probabilty in your answer.`, 
    markingScheme: [`"
-Iᴼ is recessive to Iᴮ or Iᴬ
-mothers genotype must be IᴮIᴼ
-fathers genotype must be IᴬIᴼ 
-child must inherit two Iᴼ alleles
-child genotype is IᴼIᴼ
-child has 25% chance of being blood group O"`
    ] 
  },
  { 
    id: "b6", 
    subject: "biology", 
    topic: "sb3:Genetics", 
    text: "Discuss the advantages and disadvantages of sexual reproduction and asexual reproduction.", 
    markingScheme: [
      `"sexual reproduction :
Advantages:
-creates variations in a species
-some organisms in a species can survive
-election pressure
-allows for evolution

Disadvantages:
-requires a mate to be found
-time for fertilisation / pollination means the process takes longer
-offspring can have features that are less advantageous than the parents.

Asexual reproduction:
Advantages:
-no requirement to find a mate
-rapid productive cycle
-organisms with beneficial characteristics of the parent can be produced

Disadvantages:
-there is no variation
-aselection pressure could affect all organisms"`
    ] 
  },
  { 
    id: "b7", 
    subject: "biology", 
    topic: "sb3:Genetics", 
    text: "Describe the structure of DNA and how it can be extracted from plant cells.", 
    markingScheme: [
      `"structure of DNA :
-polymer
-four bases (A, T, C, G)
-(complementary) base pairs
-A-Tand C-G
-(weak) hydrogen bonds join bases
-two strands
-double helix
-nucleotides

DNA extraction:
-crush up / grind / squash cells
-add detergent / salt solution / protease
-heat in a water bath / heat to 60°C
-add to (ice cold) ethanol
-DNA forms as a precipitate /white strands"`
    ] 
  },
  { 
    id: "b8", 
    subject: "biology", 
    topic: "sb3:Genetics", 
    text: "In 2003, the first complete human genome was sequenced. The genomes of different people have small changes in the sequence of the DNA bases. Describe how these changes in DNA sequence can affect the individuals and how sequencing a person's genome could influence their medical treatments.  ", 
    markingScheme: [
      `"DNA sequences:
-DNA has 4 different bases
-changes in the DNA are mutations
-results in different alleles for these genes
-affects the phenotype / produces variation

Outcome of DNA sequencing for the individual:
-identify genetic diseases
-identify the risk of developing diseases
-impact of knowing that a disease could develop
-allow the individual to modify their lifestyle to reduce risk

Impact on medical treatment:
-HGP has determined the location of genes/determined the function of proteins.
-we have a better understanding of some diseases
-take preventative medicine
-provide tailor-made medical treatments/personalised"`
    ] 
  },
  { 
    id: "b9", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: "Explain how information from Figure 15 provides evidence for human evolution.", 
    image:"biology9.JPG",
    markingScheme: [
      `"Age of tools:
-Younger rock layers towards top / older rock layers lower down
-C is older than B which is older than A
-Tools can be compared with other fossils from known time period
-Rocks can be dated, e.g. radiometric dating 

Quality of tools:
-A is the most sophisticated / most finely worked / more specialised / more refined / more symmetrical
-B shows some evidence of being worked / is rough
-C most basic / most simple / less sophisticated / unworked

skills and intelligence:
-tools show evidence of greater human
manipulation / greater skill (between C and A)
-higher intelligence in more recent (species of) humans
"`
    ] 
  },
  { 
    id: "b10", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: "MRSA is a bacterium that has evolved to become resistant to antibiotics. With reference to Darwin's theory of evolution by natural selection, explain how MRSA bacteria have evolved to become resistant to antibiotics.", 
    markingScheme: [
      `"-bacteria reproduce rapidly generating a large population
-there is variation among a bacterial population
-some bacteria develop a resistance to antibiotics through mutation
-antibiotic treatment exerts a selection pressure
-bacteria resistant to antibiotics survive
-antibiotic resistance inherited
-non-resistant bacteria do not survive
-levels of antibiotic resistance in a population of bacteria Increase "`
    ] 
  },
  { 
    id: "b11", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: "Explain how bacteria can be genetically engineered to produce human insulin", 
    markingScheme: [
      `"-the gene that codes for human insulin is identified
-In the human DNA
-this is removed using a restriction enzyme
-the plasmid of a bacterial cell is removed
-using lysosomes/lysozyme
-the plasmids cut open
-using (the same) restriction enzyme
-leaving complementary sticky ends
-the human gene is inserted into the bacterial plasmid
-using the enzyme ligase
-the plasmid is returned to the bacterial cell
-the bacterial cell multiplies "`
    ] 
  },
  { 
    id: "b12", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: `Explain how selective breeding of the two varieties of potato plants can produce new potato plants that are all faster growing and produce many, large potatoes. `, 
    image:"biology12.JPG",
    markingScheme: [
      `"- Select variety A because it has large potatoes 
-Select variety B because is faster growing and produces many potatoes 
-Crossbreed variety A with variety B
-Transfer pollen from flower of variety A to flower of variety B / ORA
-Grow the new plants
-Select the offspring with the desired characteristics
-Repeat the process over many generations until all offspring show desired characteristics" `
    ] 
  },
  { 
    id: "b13", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: `Explain the advantages and disadvantages of producing genetically modified crop plants.`, 
    markingScheme: [
      `"advantages:
-less crop damage/spoilage
-higher yield
-more food for people
-crop plants are less likely to have diseases that are spread by insects
-so less pesticides used
-more profit so more income for developing countries

disadvantages:
-concerns about long term effects of genetically modified organsims
-ethical concerns
-GM crops could contribute to the developmet of medical conditions in humans or trigger allergies
-genes transferred to other species

" `
    ] 
  },
  { 
    id: "b14", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `A student wanted to investigate how effective three different antiseptics were at killing bacteria. The student was provided with: • an inoculated Petri dish prepared using the method in Figure 10 • three different antiseptics • filter paper discs • sticky tape. Devise a plan for the student to complete this investigation. Include a control and any variables that the student would need to consider.`, 
    markingScheme: [
      `"plan:
-soak one filter disc in antiseptic 1 /
-repeat for with fresh filter disc for antiseptic 2 
-repeat with fresh disc for antiseptic 3
-soak fresh filter disc In distilled water
-place one disc in each quarter and / space the discs out
-label the Petri dish
-Incubate the petri dish

Results:
-measure radius/diameter
-calculate the zone of inhibition around each disc
-using art
-antiseptic which killed the most bacteria will have largest zone

safety/aseptic:
-use aseptic techniques/description of techniques
-work near a Bunsen
-only lft the lid slightly/keep covered most of the time
-use sticky tape to seal the lid to the base of the Petri dish on each side
-wash hands

Controlled variables:
-Incubation time stated
-appropriate temperature stated
-same size filter disc
-same volume of antiseptic / soaked for same time

control:
-soak a fresh filter disc in water or left to dry
-use a known substance that kills bacteria"`
    ] 
  },
  { 
    id: "b15", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Describe how a monoclonal antibody can be developed and used to detect an STI using a urine sample`, 
    markingScheme: [
      `"-isolate an antigen from the pathogén which causes the STI
-Inject the antigen into a mouse/rodent
-collect lymphocytes producing an antibody to the STI antigen
-fuse the B-lymphocyte with a myeloma cell
-production of a hybridoma
-hybridoma produces a monoclonal antibody against the antigen of the STI
-attach the monoclonal antibody to coloured bead/indicator
-incorporate onto a test strip" `
    ] 
  },
  { 
    id: "b16", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Describe how the physical barriers and chemical defences of the human body provide protection from diseases. `, 
    markingScheme: [
      `"physical defenses:
-cilia are found on epithelial / lining cells
-ciliated cells line the inside of the respiratory system
-cilia move mucus across the surface of cells
-cilia move pathogens out of the body / into the throat
-skin is a thick covering over the body
-skin has dead cells on its surface
-skin is waterproof
-pathogens are unable to enter the body through the skin
-tears wash pathogens away
-ear wax traps pathogens
-nasal hairs trap pathogens
-blood clots / scabs cover wounds to prevent the entry of pathogens 

chemical defenses:
-skin has glands that secrete lysozymes 
-lysozymes are enzymes found in tears, saliva and mucus
-lysozymes kill some bacteria
-hydrochloric acid is in the stomach
-hydrochloric acid has a low pH which kills many pathogens
-antibodies are present on mucus linings" `
    ] 
  },
  { 
    id: "b17", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Explain how plants protect themselves from being eaten by pests and against diseases caused by pathogens`, 
    markingScheme: [
      `"-Plants have physical and chemical defences

physical defences:
-Plant leaves have waxy cuticles
-Waxy cuticles are impermeable
-Plant cells have cell walls
-Cell walls are made of cellulose and are difficult for pests or pathogens to penetrate
-Leaf cuticle and cell walls are physical defences.
-Some plants have spines or hairs which deter pests

Chemical defences:
-Chemicals can deter pests
-Production of chemicals which are toxic to pests. and pathogens
-Chemicals have anti-microbial properties
-Unpleasant taste which deters pests
-Unpleasant smell which deters pests" `
    ] 
  },
  { 
    id: "b18", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Explain how the immune system will respond to an infection caused by bacteria`, 
    markingScheme: [
      `"-antigens are on the bacteria
0which are detected by WBCs / phagocytes
-white blood / phagocytes engulf bacteria (phagocytosis)
-swelling / inflammation of tissues / fever
-number of white blood cells increases.
-antibodies are produced
-by lymphocytes / white blood cells
«antibodies surround / cover / inactivate the antigens / pathogens
-memory lymphocytes / cells are produced
-which remain in the blood
-then if a secondary infection occurs
-memory lymphocytes produce antibodies faster / in greater numbers
-so the bacteria / pathogens are destroyed faster
"`
    ] 
  },
  { 
    id: "b19", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: `Explain Darwin’s theory of evolution by natural selection.`, 
    markingScheme: [
      `"variation and competition:
-most organisms produce more young than can survive to adulthood
-populations have organisms with individuals that differ (slightly) from one another
-the struggle for existence means that these organisms compete with each other to survive
-they compete for resources e.g. food, shelter, mates

Survival of the fittest and inheritance:
-those organisms with the most advantageous characteristics survive
-those organisms less well adapted die
-those organisms that survive will reproduce
-the advantageous characteristics will be passed onto their offspring

Gradual change
-over time more organisms will express the advantageous characteristics / alleles
-non-advantageous characteristics / alleles will be lost
-species will evolve over time " `
    ] 
  },
  { 
    id: "b20", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: `Describe how Agrobacterium tumefaciens can be used to create transgenic plants.`, 
    markingScheme: [
      `"genetic modification :
-transferring a gene from one organism to another
-restriction enzymes to cut the gene out
-plasmids used to carry gene
-sticky ends to join complementary bases
-ligase to join the DNA

use of Agrobacterium:
-Agrobacterium is a vector (for the gene)
-the Agrobacterium has a suitable gene added to it
-example of a suitable gene eg drought resistance / insect resistance / larger yield / for flavonoids
-Agrobacterium naturally invades plant cells
-its DNA is incorporated into the plant's DNA

production of plants:
-plant sprayed with Agrobacterium
-crown gall (formed)
-crown gall is cut into small pieces
-leaf discs are incubated with Agrobacterium
-(crown gall tissue / leaf discs) grown in tissue culture
-explants
-grown into crops "`
    ] 
  },
  { 
    id: "b21", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `"infections can also be caused by viruses. 
Describe the lytic pathway of a virus and how this causes the spread of infection through a population."`, 
    markingScheme: [
      `"lytic lifecycle:
-viruses cannot replicate outside a host
-virus binds to host cells
-inserts genetic material into the host cell
-use the cells machinery to produce viral proteins
-use the cells machinery to produce nucleic acids
-components assemble into new viral particles
-viruses exit the cell through the host cell membrane
-or causes lysis of the host cell
-allows production of many virus particles

Spread of infaction:
-virus particles leave the host
-virus released into body fluids
-spread through airborne droplets/contact
-allowing spread to another host "`
    ] 
  },
  { 
    id: "b22", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Discuss how the cause of the lesions and their spread through the crops could be investigated. You should refer to distribution analysis in your answer`, 
    markingScheme: [
      `"fieldwork:
-check other plants in the field or other fields / find the distribution of affected plants
-examine the area around the affected plants
-examine the lesions on the leaf
-take a sample the soil / take a sample of the plant
-eliminate an environmental factor that could be causing the symptoms e.g. pollution / contamination / pests / mineral ion deficiency / pH
-use of a pesticide / fertiliser to see if this clears the lesions
-compare with known plant diseases
-use books / internet / apps
-use drones / mapping
-to determine how the disease could be spread e.g. wind,animal or water spread
-clustering indicating contact or soil spread
-downwind indicating airborne

testing:
-test the soil e.g. for pH / nutrient levels / mineral ion deficiency
-test {swabs/samples} from the lesions / plant / cuttings
-culture the pathogen
-identify the {pathogen/bacteria/fungus/virus}" `
    ] 
  },
  { 
    id: "b23", 
    subject: "biology", 
    topic: "sb1:Key concept of biology", 
    text: `Describe how named factors affect the rate of enzyme-catalysed reactions`, 
    markingScheme: [
      `"temperature:
-(temperature) too low ~ not enough energy to make reactions occur (fast enough)
-reference to optimum temperature
-optimum for most (humans) - 37°C
-over 37°C changes enzyme shape / changes active site shape of enzyme
-therefore rate of reaction decreases / stops
-enzymes denatured (if temperature too high)

pH:
-optimum pH - around 7.3 / 6 to 8 for most enzymes
-specific optimum quoted eg pepsin - pH 2 to 3
-pH either side of optimum - changes the shape of the enzyme / shape of the active site
-therefore rate of reaction decreases / stops
-enzymes denatured (if pH too high / too low)

substrate / enzyme concentration:
-higher concentrations faster reactions
-due to more collisions
-until maximum rate reached / all enzymes being used" `
    ] 
  },
  { 
    id: "b24", 
    subject: "biology", 
    topic: "sb2:Cells and control", 
    text: `Explain how impulses are transmitted in a reflex arc to prevent a person from injuring themselves`, 
    markingScheme: [
      `"-a reflex response is an involuntary response 
-reflex responses do not involve the brain
-reflex responses involve sensory neurones
-reflex responses involve relay neurones
-reflex responses involve motor neurones
-relay neurones are in the spinal cord
-impulses travel along neurones as electrical signals
-the axon is insulated by the myelin sheath
-which ensures the electrical signal does not lose energy
-at the junction between two neurones there is a synapse
-the message is carried across the synapse by neurotransmitters
-the message travels from the stimulus along the axon and dendron of the sensory neurone to the spinal cord
-the reflex arc is important to keep the body safe
" `
    ] 
  },
  { 
    id: "b25", 
    subject: "biology", 
    topic: "sb2:Cells and control", 
    text: `Using the diagram and your own knowledge, describe the processes that take place in the formation of the fetus from a sperm cell and an egg cell.`, 
    image:"biology25.JPG",
    markingScheme: [
      `"-fertilisation of egg by sperm 
-ref to fusion of nuclei
-forming diploid cell
-ref to zygote
-(zygote) divides by mitosis
-to form identical cells
-several mitotic divisions
-growth of foetus
-examples of how fetus grows eg in height, mass
-stem cells in embryo
-specialisation / differentiation of (stem) cells into different cell types
-examples of different cell types eg neurones, skin cells
-development of fetus -"`
    ] 
  },
  { 
    id: "b26", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: `Describe the stages used in the laboratory to clone and produce a GM animal from the genetically engineered cell.(tegon the beagle)`, 
    markingScheme: [
      `" -diploid nucleus is removed from the genetically engineered cell
-making a lone nucleus
-a donor egg is enucleated/its nucleus is removed
-the diploid nucleus from the GE cell is inserted into the enucleated egg cell
-division of the nucleus is stimulated
-by electric shock/chemicals
-cell divides by mitosis
-cells put into surrogate mother
-cells divide further and differentiates to form an embryo
-Tegon is born and is a glow in the dark beagle " `
    ] 
  },
  { 
    id: "b27", 
    subject: "biology", 
    topic: "sb4:Natural selection and Genetic modification", 
    text: ` Explain how the study of the limbs of different species of vertebrates provides evidence for evolution.`, 
    markingScheme: [
      `"All have:
-similar bone structure
-humerus / femur / has one upper limb bone
-radius and ulna / tibia and fibula / two lower limb bones
-carpels / wrist bones
-pentadactyl limb
-have 5 digits

specific examples:
-some (eg horse) have digits reduced / missing
-different shapes reflect different uses
-suitable example, eg bat has extended first digit to support wing
-different features caused by mutations
-different environments have selected different features / mutations
-idea of different features being beneficial / survival of the fittest
-idea of adaptive radiation / selection of features / genes
-suggests similar ancestors for all mammals /birds / reptiles / and (many) amphibians
-can show how one species is related to another " `
    ] 
  },
  { 
    id: "b28", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Smoking causes harmful effects on the lungs. Describe the consequences of smoking cigarettes for the functioning of the lungs.`, 
    markingScheme: [
      `"-destroys cilia in trachea / cilia no longer function  
-mucus builds up / cannot be removed 
-leads to (bacterial) infection (of alveoli) /pneumonia 
-loss of surface area / loss of / damage to alveoli /emphysema
-airways inflamed or narrowed / bronchitis
-can lead to COPD 
-(lung) cancer  `
    ] 
  },
  { 
    id: "b29", 
    subject: "biology", 
    topic: "sb5:Health, disease and the development of medicines", 
    text: `Describe the different types of pathogen. Refer to a disease that each type of pathogen causes in your answer.`, 
    markingScheme: [
      `"- virus non-living organisms / small particles / protein coat / capsid / relies on other organisms for reproduction
-AIDS/eq 

-bacteria microscopic single-celled / prokaryotic / no nucleus / have nucleoid ,plasmids 
-pneumonia / eq 

-fungus not able to carry out photosynthesis / saprotrophic / single- celled / hyphae / cell wall chitin/eq 
-athlete's foot / eq

-protoctist / protozoa Plasmodium / microscopic single-celled 
-malaria / eq 
" `
    ] 
  },
  { 
    id: "b30", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functons", 
    text: `describe how water and sucrose move through a plant`, 
    markingScheme: [
      `"Xylem:
-made of dead cells
-cells with lignin
-forming narrow/hollow tubes
-carries water / mineral ions / named mineral ion
-from roots up to leaves / shoots / buds
-driven by transpiration
-where water evaporates from the leaves.
-cell to cell/into/out of xylem by osmosis.

Phloem:
-made from living cells
-have sieve tubes
-this carries sugars / sucrose (in water)
-from the leaves
-down to roots.
-up to buds / flowers
-movement by translocation
-cell to cell/into out of active"`
    ] 
  },
  { 
    id: "b31", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functons", 
    text: `Explain how substances are moved through a plant by transpiration and translocation`, 
    markingScheme: [
      `"transpiration:
-the movement of water
-from the root through the plant
-through the lignified cells/dead cells
-of the xylem
-driven by evaporation of water from the leaves
-through the stomata
-flow is only in one direction
-by capillary action
-according to the cohesion-tension theory

Translocation:
-the movement of sugars from the leaves
-through the plant
-as sucrose
-through the living sieve cells of the phloem
-flow is bidirectional
-to the sinks in the plant where the sucrose is needed"`
    ] 
  },
  { 
    id: "b32", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functions", 
    text: `Devise a plan to investigate the effect of light intensity on the rate of photosynthesis. Include variables you would need to control. `, 
    image:"biology32.JPG",
    markingScheme: [
      `"plan for the investigation:
-put a light (source) at a distance away from the pondweed
-measure the volume of oxygen / count the number of bubbles.
-in a set time
-repeat with the light at different distances.

Variables and how to control them:
ambient light:
-use darkened room / close curtains / tum lights off
-use a light meter to measure light intensity
-use the same light source at each distance

temperature (of water):
-use a heat shield
-use a thermometer and add cold water as necessary

carbon dioxide concentration (in water):
-add sodium hydrogen carbonate to the water

bubbles contain different volumes of gas:
-measure volume of oxygen in the test tube
-replace the test tube with a measuring cylinder

acclimatisation period:
-wait for the rate to settle down before you count the bubbles

amount of pondweed:
-use the same pondweed each time. " `
    ] 
  },
  { 
    id: "b33", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functions", 
    text: `Explain how water, glucose and mineral salts are transported through a plant.`, 
    markingScheme: [
      `"water:
-through the xylem
-capillary action
-osmosis into cells in the leaf
-evaporation from leaves
-transpiration stream
-diffusion into the atmosphere
-through stomata

glucose:
-converted to sucrose
-dissolved in water
-through the phloem
-bidirectional

mineral salts
-dissolved in water
-through the xylem
-from root to tip
" `
    ] 
  },
  { 
    id: "b34", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functions", 
    text: `Explain how active transport and diffusion provide a plant with named substances it needs for growth.`, 
    markingScheme: [
      `"- active transport requires energy 
-(active transport moves mineral ions) from the soil
-into root (hair cells)
-reference to pumps (in the cell membranes)
-from a low concentration to a high concentration/against their concentration gradient
-reference to mineral ions / mineral salts accept named minerals eg nitrates
-diffusion is a passive process
-gases diffuse from high to low concentration/down their concentration gradient
-gas exchange in the leaf occurs by diffusion
-carbon dioxide diffuses in
-to air spaces in leaves / into cells
-for photosynthesis / produces glucose
-oxygen diffuses in
-for respiration
" `
    ] 
  },
  { 
    id: "b35", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functions", 
    text: `Explain how water enters a plant and is moved to the leaf`, 
    markingScheme: [
      `"Water enters root:
-osmosis
-through root hair cells
-root hairs increase surface area
-from a high water concentration to a low water concentration
-as more solutes in cytoplasm of root cells (than in soil)
-through a partially permeable membrane

Water moves across root to xylem:
-cell to cell
-by osmosis
-as next cell in sequence has lower water concentration

Water moves up stem (to leaves)
-up the xylem
-xylem is a tube
-transpiration stream
-capillary action
-water moving from xylem into leaf cells draws more water up xylem
-transpiration / evaporation of water maintains gradient
-water moves from xylem to leaf cells by osmosis " `
    ] 
  },
  { 
    id: "b36", 
    subject: "biology", 
    topic: " sb6:Plant structures and their functions", 
    text: `Explain how hormones in the roots and shoots of plants caused this directional growth.`, 
    image:"biology36.JPG",
    markingScheme: [
      `"root growth:
-auxins
-moved to the shaded part of the plant shoot
-causing cells to elongate
-making the plant bend towards the light
-this is an example of positive phototropism

root growth:
-auxin
-collect in large amounts on the underside of the root
-inhibiting cell elongation
-causing the cells above to elongate faster
-causing the root to grow downwards
-in the direction of gravity
-this is an example of positive gravitropism" `
    ] 
  },
  { 
    id: "b37", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functions", 
    text: `Explain why the growth of the plant has changed`, 
    image:"biology37.JPG",
    markingScheme: [
      `"observations :
-the plant stem bends
-the stems longer/taller
-the plant is now growing upwards / towards light
-plant has more leaves

explanations:
-plant hormone / auxin
-more hormone / auxin on shaded side
-cell elongation (on shaded side)
-(positive) phototropism
-(negative) gravitropism
-more cells / cell division
-growing towards light
-(other leaves) are not in shade (e.g. of other plants)
-to absorb more light
-for photosynthesis "`
    ] 
  },
  { 
    id: "b39", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Describe how dialysis removes unwanted substances from the blood. Include examples of unwanted substances in your answer`, 
    image:"biology39.JPG",
    markingScheme: [
      `"Blood to machine:
-kidney dialysis is used when a person's kidneys are damaged / don't remove urea from blood
-blood taken from arm / passes into the dialysis machine
-blood is separated from the dialysis solution by a (partially permeable) membrane
-blood returned to body

Unwanted substances:
-toxic substances
-for example urea / alcohol
-excess ions / named ions e.g. sodium and chloride

How substances are removed from blood:
-(unwanted substances) move into the dialysis fluid
-by diffusion across the membrane
-down a concentration gradient
-fresh dialysis fluid is pumped through to maintain the concentration" `
    ] 
  },
  { 
    id: "b38", 
    subject: "biology", 
    topic: "sb6:Plant structures and their functions", 
    text: `Explain the uses of auxins, gibberellins and ethene in the commercial production of plants and fruits.`, 
    markingScheme: [
      `"Auxins:
-used in selective weed killers
-targets broad leaf plants
-kills the weeds and not narrow leaf crops
-rooting powder
-added to the end of cuttings to stimulate the growth of roots.

Gibberellins:
-to stimulate germination in dormant seeds
-initiate breakdown of starch
-stimulate flower formation
-promotes fruits formation
-sprayed onto plants before pollination
-stimulate development of seedless fruits

Ethene:
-fruit ripening
-unripe fruitis harvested
-ethene is added so the fruits ripens for selling " `
    ] 
  },
  { 
    id: "b40", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Explain how structures in the skin help to reduce body temperature during hot weather`, 
    image:"biology40.JPG",
    markingScheme: [
      `" How skin structures respond during hot weather:
Gland:
-sweat glands
-produce sweat

Hair / muscle:
-(erector) muscle will relax
-hairs will ‘lie down""

Capillary:
-capillary (loop) allows more blood to flow through it

Nerve (endings):
-detect heat
-send nerve impulses to the brain / CNS / hypothalamus.

How responses help to reduce body temperature :
sweat:
-sweat will spread out onto the surface of the skin
-sweat / water will evaporate
-using heat from the body

Hair:
-less air will be trapped
-air is an insulator
-so less insulation
-so more heat lost from skin
-through convection

Capillary:
-more blood flows closer to surface of the skin
-so heat has less distance to travel until it leaves the body
-so less insulation for heat to travel though
-so more heat Is lost through convection / radiation"`
    ] 
  },
  { 
    id: "b41", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Explain how hormones control the menstrual cycle`, 
    markingScheme: [
      `"- There are four hormones involved in the menstrual cycle; oestrogen, progesterone, LH and FSH
-At the start of the cycle FSH causes the egg to develop in the follicle
-FSH Is released from the pituitary gland
-As progesterone and oestrogen levels are low
-Oestrogen levels start to rise
-Oestrogen Is released from the ovaries
-This causes the lining of the uterus to build up
-High levels cause a surge of LH
-Released from the pituitary gland
-Causing ovulation
-An egg Is released from the ovary
-Progesterone is produced
-From the corpus luteum
-This caused the lining of the uterus to be maintained
-If an egg is fertilised oestrogen and progesterone levels remain high
-To maintain the lining of the uterus" `
    ] 
  },
  { 
    id: "b42", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Explain, using Fick’s law, the factors that affect the diffusion rate of molecules into and out of cells.`, 
    markingScheme: [
      `"Ficks law:
-rate of diffusion is proportional to surface area and concentration difference
-and inversely proportional to the thickness of the membrane

Surface area:
-as surface area increases the rate of diffusion also increases
-as there are more places for diffusion to happen faster

Concentration difference:
-the larger the difference in concentration inside the cell to outside the cell
-the faster the rate of diffusion

Thickness of the membrane:
-the thicker the membrane
-the slower the rate of diffusion
-as the diffusion distance is greater" `
    ] 
  },
  { 
    id: "b43", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Hormones can be used as part of assisted reproductive technology. Explain how assisted reproductive technology (ART) can be used to increase the chances of a woman becoming pregnant.`, 
    markingScheme: [
      `"Clomifene therapy:
-Clomifene is a fertility drug
-that causes the pituitary gland
-to release more FSH and LH
-so more eggs are matured in the follicle
-more chance of the egg being released

VF (in vitro fertilisation):
-eggs are removed from the mother’s ovary
-sperm are taken from the father
-sperm and the eggs are mixed / the sperm is injected into the egg
-in a Petri dish
-the fertilised egg is allowed to divide
-the {fertilised egg / ball of cells / zygote / embryo} is placed into the uterus" `
    ] 
  },
  { 
    id: "b44", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Explain how a nephron ensures that there is no protein and no glucose in the urine of person A.`, 
    markingScheme: [
      `"protein:
-protein cannot pass into the nephron during ultrafiltration
-the glomerulus puts pressure on the blood
-and the liquid part of the blood passes into the Bowman's capsule
-protein molecules are too large to pass through

glucose:
-glucose is selectively reabsorbed
-back into the blood
-in the PCT / proximal convoluted tubule / first convoluted tubule
-by active transport
-against the concentration gradient
"`
    ] 
  },
  { 
    id: "b45", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Blood from the body enters the heart through the vena cava. Describe how this blood flows through the heart and lungs to leave the heart through the aorta. Include references to the chambers of the heart and the relevant valves in your answer`, 
    markingScheme: [
      `"-Blood flows from vena cava into the right atrium 
-Into the right ventricle
-Through valve
-And is pumped into the pulmonary artery
-Through valve to the lungs
-From the lungs back to the heart through the pulmonary vein
-Into the left atrium
-into the left ventricle
-Through valve
-And is pumped into the aorta
-Through valve
-valves prevent backflow" `
    ] 
  },
  { 
    id: "b46", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Carbon dioxide is carried in blood plasma. Human blood also contains red blood cells and white blood cells. Explain how the structure of red blood cells and white blood cells is related to their function`, 
    markingScheme: [
      `"RBC:
- Contains haemoglobin to carry oxygen since the oxygens joined to haemoglobin.
-Biconcave shape to to increase surface area to absorb / to release oxygen quicker
-Small to fit through capillaries
-No nucleas to pack more haemoglobin

WBC:
-Receptors on the membrane to recognize pathogens
-Large cells to engulf pathogens
-Has a nucleas to make antigens and remember pathogens
" `
    ] 
  },
  { 
    id: "b47", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Explain how the structure of the heart is related to its function.`, 
    image:"biology47.JPG",
    markingScheme: [
      `"Functions linked to structures:
-walls contract / the heart pumps blood
-atria push blood down into the ventricles
-ventricles pumps blood out of heart
-left ventricle / side pumps (blood to the body / oxygenated blood)
-right ventricle/ side pumps (blood to the lungs / deoxygenated blood)
-left ventricle wall thicker (than right ventricle wall) / produces more pressure to pump blood
-right ventricle is thinner / produces less pressure to pump blood
-valves prevent backflow /named valves
-prevent backflow between specific parts of the heart
-the muscles can contract faster / harder so that blood is pushed around the body faster
«the septum stops (oxygenated blood mixing with deoxygenated blood)" `
    ] 
  },
  { 
    id: "b48", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Explain the changes in blood flow, shown in Figure 13, that are caused by exercise`, 
    image:"biology48.JPG",
    markingScheme: [
      `"increased blood flow: 
-pump more blood
-increased blood flow to the heart muscle
-increased blood flow to the other muscles
-to deliver more oxygen and glucose
-for increased respiration
-releasing more energy for exercise
-to remove more carbon dioxide
-to remove more lactic acid
-increased blood flow to the skin
-to help cool the body

decreased blood flow:
-decreased blood flow to the kidney
-decreased blood flow to the stomach
-to allow more blood to flow to the working muscles

same blood flow:
-blood flow to the brain remains the same
-as the brain needs a constant amount of oxygen and glucose to function
" `
    ] 
  },
  { 
    id: "b49", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Explain how alveoli in human lungs are adapted for gas exchange. Include the names of the gases that are being exchanged`, 
    markingScheme: [
      `"general points about gas exchange:
«air is breathed in and out of the lungs
-oxygen is absorbed (into blood)
-carbon dioxide is released (from blood)
«by diffusion

Adaptations of alveoli for gas exchange:
-breathing maintains high concentration of oxygen in alveoli / lungs.
-breathing maintains low concentration of carbon dioxide in alveoli / lungs.
-many alveoli
-large surface area
-so that more oxygen is absorbed / more carbon dioxide is released
-are moist
-so oxygen /carbon dioxide can dissolve / is able to move across into the blood
-surrounded by (network of) capillaries blood vessels
-has a (good) blood supply / (many) red blood cells
-keeps oxygen concentration low in blood
-keeps carbon dioxide concentration high in blood
-to absorb oxygen (quickly)
-to remove carbon dioxide (quickly)
-membranes / alveolar walls / cells are thin L
-membranes / alveolar walls / cells are permeable
-allows oxygen / carbon dioxide to move through

" `
    ] 
  },
  { 
    id: "b50", 
    subject: "biology", 
    topic: "sb8:Exchange and transport in Animals", 
    text: `Explain how the human body responds to an external temperature of 40 °C`, 
    markingScheme: [
      `" -homeostasis / regulation of the body's internal environment
-controlled by the hypothalamus / thermoregulatory
-hypothalamus / thermoregulatory centre monitors blood temperature
-negative feedback mechanism
-sweat rate increases
-sweat glands will release sweat on to skin surface
-evaporation of this sweat / water will remove heat energy from skin
-hairs on skin's surface lay flat
-no trapping of insulating air layer so body loses heat
-vasodilation occurs
-widening of the arterioles / blood vessels eq, near the skin delivers warm blood to skin surface
-body loses heat by radiation
" `
    ] 
  },
  { 
    id: "b51", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Describe how the water content of the blood is controlled in the nephron.`, 
    markingScheme: [
      `"Water content too low:
-hypothalamus detects there is too little water in the blood
-ADH released
-from the pituitary gland
-into the blood
-As the collecting duct becomes more permeable
-more water is reabsorbed into the blood
-by osmosis
-more concentrated urine
-smaller volume urine produced

water content too high:
-hypothalamus detects there is too much water in the blood
-ADH lowered / not released
-from the pituitary gland
-collecting duct is less permeable
-less water reabsorbed into the blood
-more dilute urine
-larger volume urine produced" `
    ] 
  },
  { 
    id: "b52", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Reforestation has a beneficial effect on air composition and biodiversity. Animal conservation projects can also have a beneficial effect on biodiversity. Explain the beneficial effects of reforestation and animal conservation projects.`, 
    markingScheme: [
      `"reforestation :
-reforestation is planting of trees.
-trees take up water from the soil
-prevents erosion and reduces flooding
-trees can be used for renewable resources
-provides habitats
-increases the rate of photosynthesis
-removes carbon dioxide and releases oxygen
-reduces greenhouse gases / global warming
-provides a source of medicines / food for consumers

Animal conservation:
-increase numbers of endangered species / prevent extinction
-through controlled breeding programmes /reduction in poaching /maintaining habitats
-generating income to fund conservation projects through 200s / animal parks / ecotourism
-improves the number of animals / range of species
-maintains the food web
-maintains genetic diversity
-allows re-introduction of animals into the wild" `
    ] 
  },
  { 
    id: "b53", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Explain, using three examples, how some organisms benefit from mutualism.`, 
    markingScheme: [
      `"-mutualism involves organisms living closely with each other
-both organisms benefit

oxpeckers:
-relationship with large herbivores in Africa
-oxpecker feeds off of the parasitic insects that live on the herbivore
-disease reduced in herbivores from parasitic insect removal

cleaner fish:
-relationship with ocean species such as sharks and large fish
-cleaner fish eats the dead skin and parasites on the large fish or sharks
-large fish / sharks have disease reduced by removal of parasites

nitrogen fixing bacteria:
-relationship with leguminous plants such as beans
-bacteria live inside root nodules
-bacteria fix nitrogen for the plant to use
-bacteria obtain nutrition from the plant and are protected from the environment
" `
    ] 
  },
  { 
    id: "b54", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Scientists observe living organisms in an environment to assess the level of pollution. Describe how the level of water pollution and air pollution can be assessed using living organisms.`, 
    markingScheme: [
      `
Water pollution - polluted:
-bloodworms / sludgeworms /other named species
-their presence signify high water pollution
-they can survive in low oxygenated waters

Water pollution - clean:
-freshwater shrimp / stonefly (larvae) / other named species
-their presence signify low water pollution
-they can only survive in areas of high oxygen (thus low pollution)

Air pollution:
-blackspot fungus found on roses
-blackspot fungus grows on roses in unpolluted areas because it is killed by the presence of sulfur dioxide that would be found in polluted air.
-lichen - certain types of lichen can survive in polluted areas - so depending on the type of lichen found will be used to assess the pollution level of air " `
    ] 
  },
  { 
    id: "b55", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Explain how an increase in the production of pollutants can be due to an increase in human population. Include both air and water pollution in your answer.`, 
    markingScheme: [
      `"Air pollution:
-Humans burn more fossil fuels coal/oil/gas
-nitrogen oxides in car exhausts
-Releasing sulfur dioxide
-Which causes acid rain
-carbon dioxide gas
-causes climate change
-deforestation causing increase in carbon dioxide
-increased population - increased respiration more carbon dioxide

Water pollution:
-Humans produce sewage
-Sewage contains phosphates
-Phosphates are water pollutants
-Nitrate pollution can be caused by the overuse of fertilisers
-Nitrate pollution causes eutrophication " `
    ] 
  },
  { 
    id: "b56", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Describe how carbon is cycled in the environment.`, 
    markingScheme: [
      `"-photosynthetic material/plants will remove CO2 from the atmosphere
-these plants will use the CO2 to make glucose
-plant respiration will release CO2 into the atmosphere
-animals will eat the plants- which contain carbon
-animals and plants will eventually die and decay due to microbial/bacterial action releasing CO2
-the combustion/burning of fossil fuels will release CO2 into the atmosphere
-the burning of carbon based products made from trees will release CO2 into the atmosphere" `
    ] 
  },
  { 
    id: "b57", 
    subject: "biology", 
    topic: "sb7:Animal coordination, control and Homeostasis", 
    text: `Explain why an underactive thyroid could cause this patient to have an increased body mass.`, 
    markingScheme: [
      `"-the thyroid gland produces thyroxine 
-thyroxine helps to regulate metabolic rate
-low levels of thyroxine should stimulate the production of TRH
-TSH being produced and more thyroxine being released
-an underactive thyroid would cause less thyroxine to be produced
-metabolic rate to drops
-less energy (calories) are available for tasks
-more fat storage so the person gains body mass "`
    ] 
  },
  { 
    id: "b58", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Explain the biological consequences of sewage pollution on a river ecosystem.`, 
    markingScheme: [
      `"-pathogenic bacteria / cause disease 
-urea / urine / nitrogenous waste / nitrate / phosphate 
-decomposition / decomposed / decomposers 
-eutrophication / plant growth / algae growth 
-(plants) block light / prevents photosynthesis 
-respiration 
-(less) oxygen 
-death of organisms  / reduce biodiversity 
"`
    ] 
  },
  { 
    id: "b59", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Farming large numbers of fish can cause problems for fish farmers. Discuss how fish farmers solve these problems. `, 
    markingScheme: [
      `"-selective breeding / GM 
-separate sizes / ages / sex 
-use nets / cages / cover 
-control amounts of food / frequency of feeding / protein rich 
-remove uneaten food / waste / filter / change water/remove faeces 
-antibiotics / fungicide / vaccination / remove dead fish / biological control / wrasse / pesticide 
-oxygen / aerate / use paddies / flowing water 
-growth hormone / oestrogen(s) " `
    ] 
  },
  { 
    id: "b60", 
    subject: "biology", 
    topic: "sb9:Ecosystems and Material cycles", 
    text: `Explain the methods a fish farmer can use to maximise production of fish.`, 
    markingScheme: [
      `"- separate different species to prevent predation / use nets to prevent predation /
-separate different sizes / ages to prevent predation 
-feed protein rich food / feed (frequently) in small quantities (to prevent accumulation of waste) 
-use antibiotics / fungicides to reduce disease
-(filter water to) remove faeces / waste / algae / remove dead fish 
-aerate water / use pumps to maintain oxygen levels 
-use selective breeding / GM (to maximise yield) "`
    ] 
  }
];
// ==========================================
// 2. STATE APP TRACKERS
// ==========================================
let currentSubject = 'physics'; // Default fallback
let currentTopic = 'All';
let filteredIndicesList = []; 
let activeModalIndex = 0;     

// 🔍 AUTO-DETECT SUBJECT FROM FILE NAME
const pageName = window.location.pathname.split("/").pop();
if (pageName.includes("chemistry")) {
  currentSubject = 'chemistry';
} else if (pageName.includes("biology")) {
  currentSubject = 'biology';
} else if (pageName.includes("physics")) {
  currentSubject = 'physics';
}  

// ==========================================
// 3. DROPDOWN POPULATOR
// ==========================================
function updateTopicDropdown() {
  const dropdown = document.getElementById('topic-filter');
  if (!dropdown || typeof questionsData === 'undefined') return;

  const subjectQuestions = questionsData.filter(q => q.subject === currentSubject);
  
  // 1. Map, clean colons/spaces, and filter out duplicates
  const cleanedTopics = subjectQuestions.map(q => {
    let topic = q.topic.trim();
    if (topic.startsWith("sp") && !topic.includes(":")) {
      const spaceIndex = topic.indexOf(" ");
      if (spaceIndex !== -1) {
        topic = topic.slice(0, spaceIndex) + ":" + topic.slice(spaceIndex);
      }
    }
    return topic;
  });

  const uniqueTopics = [...new Set(cleanedTopics)];
  
  // 2. Sort naturally (sp1, sp2, sp3, sp4...)
  uniqueTopics.sort((a, b) => {
    return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
  });
  
  let html = `<option value="All">All Physics Topics</option>`;
  uniqueTopics.forEach(topic => {
      html += `<option value="${topic}">${topic}</option>`;
  });
  
  dropdown.innerHTML = html;
  dropdown.value = currentTopic;
}

// ==========================================
// 4. FEED RENDERER
// ==========================================
function renderQuestions() {
  const container = document.getElementById('questions-container');
  const heading = document.getElementById('feed-heading');
  if (!container || typeof questionsData === 'undefined') return;
  
  filteredIndicesList = [];
  questionsData.forEach((q, index) => {
    if (q.subject === currentSubject && (currentTopic === 'All' || q.topic === currentTopic)) {
      filteredIndicesList.push(index);
    }
  });

  heading.innerText = `Showing ${filteredIndicesList.length} ${currentSubject.charAt(0).toUpperCase() + currentSubject.slice(1)} Questions`;

  if (filteredIndicesList.length === 0) {
    container.innerHTML = `<p class="no-questions">No 6-markers match this configuration.</p>`;
    return;
  }

  container.innerHTML = filteredIndicesList.map((dataIndex, listPosition) => {
    const q = questionsData[dataIndex];
    return `
      <div class="card" onclick="openModal(${listPosition})">
        <div class="card-header">
          <span class="question-number" style="font-weight: bold; color: var(--primary); margin-right: 8px;">Q${listPosition + 1}.</span>
          <span class="badge topic-badge" style="color: var(--text-muted); font-size: 0.9rem;">${q.topic}</span>
          <span class="click-hint" style="color: var(--primary); font-size: 0.9rem;">Click to expand 🔍</span>
        </div>
        <div class="card-body">
          <p class="question-text" style="margin-top: 10px;">${q.text}</p>
          ${q.image ? `<img src="${q.image}" class="question-diagram">` : ''}
        </div>
      </div>
    `;
  }).join('');
}

// ==========================================
// 5. MODAL INTERACTORS (SLIDER SYSTEM)
// ==========================================
function openModal(listPosition) {
  activeModalIndex = listPosition;
  document.getElementById('fullscreen-modal').style.display = 'flex';
  loadModalQuestion();
}

function closeModal() {
  document.getElementById('fullscreen-modal').style.display = 'none';
}

function loadModalQuestion() {
  document.getElementById('modal-scheme-box').style.display = 'none';
  document.getElementById('modal-scheme-btn').innerText = '👁️ Reveal Mark Scheme';

  const dataIndex = filteredIndicesList[activeModalIndex];
  const q = questionsData[dataIndex];

  document.getElementById('modal-topic').innerText = q.topic;
  document.getElementById('modal-counter').innerText = `${activeModalIndex + 1} of ${filteredIndicesList.length}`;
  document.getElementById('modal-text').innerText = q.text;

  const imgBox = document.getElementById('modal-image-container');
  if (imgBox) {
    if (q.image) {
      imgBox.innerHTML = `<img src="${q.image}" class="question-diagram" onclick="toggleImageFullscreen(this)">`;
    } else {
      imgBox.innerHTML = '';
    }
  }

  // --- DYNAMIC MARKING SCHEME SUBTITLE PARSER ---
  const listEl = document.getElementById('modal-scheme-list');
  if (!listEl) return;
  listEl.innerHTML = ""; // Wipe cleanly before rebuild

  let rawContent = "";
  if (Array.isArray(q.markingScheme)) {
    rawContent = q.markingScheme[0] || "";
  } else {
    rawContent = q.markingScheme || "";
  }

  const schemeLines = rawContent.split('\n');

  schemeLines.forEach(line => {
    const trimmedLine = line.trim();
    if (trimmedLine === "") return; 

    const li = document.createElement("li");

    if (trimmedLine.endsWith(":")) {
      li.innerHTML = `<strong>${trimmedLine}</strong>`;
      li.style.marginTop = "1.2rem";     
      li.style.listStyleType = "none";    
      li.style.marginLeft = "0px";
    } else {
      li.textContent = trimmedLine;
      li.style.listStyleType = "disc";    
      li.style.marginLeft = "20px";       
    }

    listEl.appendChild(li);
  });
}

function navigateModal(direction) {
  activeModalIndex += direction;
  
  if (activeModalIndex < 0) {
    activeModalIndex = filteredIndicesList.length - 1; 
  } else if (activeModalIndex >= filteredIndicesList.length) {
    activeModalIndex = 0; 
  }

  loadModalQuestion();
}

function toggleModalScheme() {
  const box = document.getElementById('modal-scheme-box');
  const btn = document.getElementById('modal-scheme-btn');

  if (box.style.display === 'none') {
    box.style.display = 'block';
    btn.innerText = '⚠️ Hide Mark Scheme';
  } else {
    box.style.display = 'none';
    btn.innerText = '👁️ Reveal Mark Scheme';
  }
}

// ==========================================
// 6. GLOBAL CHANGERS
// ==========================================
function switchSubject(subject) {
  currentSubject = subject;
  currentTopic = 'All';
  
  updateTopicDropdown();
  renderQuestions();
}

function filterByTopic() {
  currentTopic = document.getElementById('topic-filter').value;
  renderQuestions();
}

function toggleImageFullscreen(imgElement) {
  imgElement.classList.toggle('fullscreen');
}

// ==========================================
// BACK TO TOP BUTTON LOGIC
// ==========================================
window.onscroll = function() {
  handleScrollBehavior();
};

function handleScrollBehavior() {
  const topBtn = document.getElementById("backToTopBtn");
  if (!topBtn) return;
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Safely boot app execution engine after everything has loaded cleanly
window.onload = function() {
  updateTopicDropdown();
  renderQuestions();
};