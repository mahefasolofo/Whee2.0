package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;


import whee.demo.entity.Event;
import whee.demo.repository.EventRepository;

import java.util.List;

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

    @GetMapping("/events/{id}")
    public ResponseEntity<Event> getEventByID(@PathVariable Long id) {
        Event event = eventRepository.findById(id)
                .orElseThrow(() -> new ResourceAccessException("Event not exist with id :" + id));

        return ResponseEntity.ok(event);
    }

//    @PutMapping("/events/{id}")
//    public ResponseEntity<Event> updateEvent(@PathVariable Long id, @RequestBody Event eventD) {
//        Event event = eventRepository.findById(id)
//                .orElseThrow(() -> new ResourceAccessException("Event not exist with id :" + id));
//
////        event.setCategories(eventD.getCategories());
////        event.setDateEvent(eventD.getDateEvent());
////        event.setDescription(eventD.getDescription());
////        event.setHeureEvent(eventD.getHeureEvent());
////        event.setImage(eventD.getImage());
////        event.setLieuEvent(eventD.getLieuEvent());
////        event.setNote(eventD.getNote());
////        event.setTitre(eventD.getTitre());
//
//        Event updateEvent = eventRepository.save(event);
//        return ResponseEntity.ok(updateEvent);
//
//    }


    @GetMapping("/findEventByIdCovoit/{userid}")
    public List<Event> findEventByUserId(@PathVariable Long userid){return eventRepository.findEventByUserId(userid);}




}
