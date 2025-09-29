import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../core/services/contact.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-manage-contacts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ManageContactsComponent implements OnInit {
  contactMessages: any[] = [];
  loading = false;
  error = '';

  constructor(
    private contactService: ContactService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loadContactMessages();
  }

  loadContactMessages() {
    this.loading = true;
    this.contactService.getContacts().subscribe({
      next: (messages) => {
        this.contactMessages = messages;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load contact messages';
        this.loading = false;
      }
    });
  }

  deleteContactMessage(id: number) {
    if (confirm('Are you sure you want to delete this message?')) {
      this.contactService.deleteContact(id).subscribe({
        next: () => {
          this.contactMessages = this.contactMessages.filter(msg => msg.id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete message';
        }
      });
    }
  }

  markAsRead(id: number) {
    const message = this.contactMessages.find(msg => msg.id === id);
    if (message && !message.is_read) {
      this.contactService.updateContact(id, { ...message, is_read: true }).subscribe({
        next: () => {
          message.is_read = true;
        },
        error: (err:any) => {
          this.error = 'Failed to update message status';
        }
      });
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  get unreadMessagesCount(): number {
    return this.contactMessages.filter(m => !m.is_read).length;
  }
}
