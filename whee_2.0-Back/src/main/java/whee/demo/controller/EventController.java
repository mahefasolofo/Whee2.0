package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import whee.demo.entity.Event;
import whee.demo.exception.ResourceNotFoundException;
import whee.demo.repository.EventRepository;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/whee/")
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/events")
    public List<Event> getAllAnnonce() {
        return eventRepository.findAll();
    }

    @PostMapping("/events")
    public Event createEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }
    @DeleteMapping("/deleteUser/{idEvent}")
    public void deleteInterests(@PathVariable Long idEvent){
        Event event = eventRepository.findById(idEvent).orElseThrow(()->new ResourceNotFoundException("Cet élement n'existe pas " + idEvent));
    }


    // @GetMapping("/events/{id}")
    // public ResponseEntity<Event> getEventByID(@PathVariable Long id) {
    // Event event = eventRepository.findById(id)
    // .orElseThrow(() -> new ResourceAccessException("Event not exist with id :" +
    // id));

    // return ResponseEntity.ok(event);
    // }

    // @PutMapping("/events/{id}")
    // public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody
    // Event eventD) {
    // Event event = eventRepository.findById(id)
    // .orElseThrow(() -> new ResourceAccessException("Event not exist with id :" +
    // id));
    //
    //// event.setCategories(eventD.getCategories());
    //// event.setDateEvent(eventD.getDateEvent());
    //// event.setDescription(eventD.getDescription());
    //// event.setHeureEvent(eventD.getHeureEvent());
    //// event.setImage(eventD.getImage());
    //// event.setLieuEvent(eventD.getLieuEvent());
    //// event.setNote(eventD.getNote());
    //// event.setTitre(eventD.getTitre());
    //
    // Event updateEvent = eventRepository.save(event);
    // return ResponseEntity.ok(updateEvent);
    //
    // }


    @GetMapping("/findEventByIdCovoit/{userid}")
    public List<Event> findEventByUserId(@PathVariable Long userid) {
        return eventRepository.findEventByUserId(userid);
    }

}
