package whee.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import whee.demo.entity.Event;
import whee.demo.repository.EventRepository;

import java.util.List;

@CrossOrigin(origins ="http://localhost:3000/" )
@RestController
@RequestMapping("/api/whee/")
public class EventController {
@Autowired
private EventRepository eventRepository;

    @GetMapping("/events")
    public List<Event> getAllAnnonce(){
        return eventRepository.findAll();
    }

    @GetMapping("/findEventByIdCovoit/{userid}")
    public List<Event> findEventByUserId(@PathVariable Long userid){return eventRepository.findEventByUserId(userid);}


}
